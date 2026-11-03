"use server";

import { headers } from "next/headers";

import type { ContactState } from "@/lib/content/contact-state";
import type { ContactFieldErrors } from "@/lib/content/contact-state";
import { contactBusinessTypes, site } from "@/content/site";

export type { ContactState };

const RATE_WINDOW_MS = 60_000;
const RATE_MAX_PER_MINUTE = 5;
const RATE_MAX_PER_HOUR = 20;
const RATE_TTL_MS = 3_600_000;

const hits = new Map<string, number[]>();

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((time) => now - time < RATE_TTL_MS);
  const lastMinute = recent.filter((time) => now - time < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);

  if (hits.size > 1_000) {
    const cutoff = now - RATE_TTL_MS;
    for (const [hitKey, times] of hits) {
      if (times.every((time) => time < cutoff)) hits.delete(hitKey);
    }
  }

  return (
    lastMinute.length >= RATE_MAX_PER_MINUTE || recent.length > RATE_MAX_PER_HOUR
  );
}

async function resolveClientKey(): Promise<string> {
  try {
    const headerList = await headers();
    const forwarded = headerList.get("x-forwarded-for");
    if (forwarded) {
      const firstHop = forwarded.split(",")[0]?.trim();
      if (firstHop) return firstHop;
    }
    return headerList.get("x-real-ip") ?? "unknown";
  } catch {
    return "unknown";
  }
}

async function appendLeadToSheet(lead: {
  name: string;
  phone: string;
  businessType: string;
}): Promise<void> {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  const webhookToken = process.env.GOOGLE_SHEETS_WEBHOOK_TOKEN;

  if (!webhookUrl || !webhookToken) {
    throw new Error(
      "GOOGLE_SHEETS_WEBHOOK_URL and GOOGLE_SHEETS_WEBHOOK_TOKEN must be configured.",
    );
  }

  const parsedWebhookUrl = new URL(webhookUrl);
  if (
    parsedWebhookUrl.protocol !== "https:" ||
    parsedWebhookUrl.hostname !== "script.google.com" ||
    !/^\/macros\/s\/[^/]+\/exec$/.test(parsedWebhookUrl.pathname)
  ) {
    throw new Error("GOOGLE_SHEETS_WEBHOOK_URL must be a deployed Apps Script URL.");
  }

  const response = await fetch(parsedWebhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      token: webhookToken,
      ...lead,
      receivedAt: new Date().toISOString(),
    }),
    cache: "no-store",
    signal: AbortSignal.timeout(10_000),
  });

  const contentType = response.headers.get("content-type") ?? "";
  if (!response.ok || !contentType.includes("application/json")) {
    const responseBody = await response.text();
    const details = contentType.includes("text/html")
      ? responseBody
          .replace(/<script[\s\S]*?<\/script>/gi, " ")
          .replace(/<style[\s\S]*?<\/style>/gi, " ")
          .replace(/<[^>]+>/g, " ")
          .replace(/\s+/g, " ")
          .replace(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi, "[redacted email]")
          .trim()
          .slice(0, 300)
      : responseBody.slice(0, 300);
    console.error("[contact-sheet-error]", {
      status: response.status,
      contentType,
      details,
    });

    if (response.status === 403 && /you need access/i.test(details)) {
      throw new Error(
        "Google blocked anonymous access before the Apps Script webhook ran. Redeploy it with access set to Anyone; if it is already set that way, the deploying Google Workspace account may block public web apps.",
      );
    }

    throw new Error(
      `Google Apps Script returned HTTP ${response.status}; confirm the deployment is public and the executing account can access the spreadsheet.`,
    );
  }

  const result: unknown = await response.json();
  if (
    typeof result !== "object" ||
    result === null ||
    !("ok" in result) ||
    result.ok !== true
  ) {
    console.error("[contact-sheet-error]", {
      status: response.status,
      result,
    });
    throw new Error("The Google Sheets webhook did not confirm the lead.");
  }
}

async function sendContactEmail(lead: {
  name: string;
  phone: string;
  businessType: string;
}): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL || site.email;

  if (!apiKey || !from) {
    console.error(
      "[contact-email-config-error] RESEND_API_KEY and CONTACT_FROM_EMAIL must be configured.",
    );
    return;
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject: `New FreeKit Media enquiry from ${lead.name}`,
        text: [
          "A new contact form enquiry was submitted.",
          "",
          `Name: ${lead.name}`,
          `Phone: ${lead.phone}`,
          `Business type: ${lead.businessType}`,
          `Received: ${new Date().toISOString()}`,
        ].join("\n"),
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      const details = await response.text();
      console.error("[contact-email-error]", {
        status: response.status,
        details: details.slice(0, 500),
      });
    }
  } catch (error) {
    console.error("[contact-email-error]", error);
  }
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  try {
    if (isRateLimited(await resolveClientKey())) {
      return { ok: false, errors: null, failure: true };
    }

    const honeypot = String(formData.get("faxNumber") ?? "");
    if (honeypot !== "") {
      return { ok: true, errors: null, failure: false };
    }

    const name = String(formData.get("name") ?? "")
      .trim()
      .slice(0, 80);
    const rawPhone = String(formData.get("phone") ?? "").trim();
    const businessType = String(formData.get("businessType") ?? "");

    const phoneDigits = rawPhone.replace(/\D/g, "");
    const localPhone =
      phoneDigits.length === 12 && phoneDigits.startsWith("91")
        ? phoneDigits.slice(2)
        : phoneDigits;

    const errors: ContactFieldErrors = {};
    if (name.length < 2) errors.name = "Naam thoda batao.";
    if (!/^[6-9]\d{9}$/.test(localPhone)) {
      errors.phone = "10-digit mobile number daalo (91/98/...).";
    }
    if (!(contactBusinessTypes as readonly string[]).includes(businessType)) {
      errors.businessType = "Business type chuno.";
    }

    if (Object.keys(errors).length > 0) {
      return { ok: false, errors, failure: false };
    }

    const lead = {
      name,
      phone: `+91 ${localPhone}`,
      businessType,
    };

    await appendLeadToSheet(lead);
    await sendContactEmail(lead);

    return { ok: true, errors: null, failure: false };
  } catch (error) {
    console.error("[contact-lead-error]", error);
    return { ok: false, errors: null, failure: true };
  }
}
