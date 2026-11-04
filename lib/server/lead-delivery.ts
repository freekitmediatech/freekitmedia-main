import { headers } from "next/headers";

import { site } from "@/content/site";

const RATE_WINDOW_MS = 60_000;
const RATE_MAX_PER_MINUTE = 5;
const RATE_MAX_PER_HOUR = 20;
const RATE_TTL_MS = 3_600_000;

const hits = new Map<string, number[]>();

export function isRateLimited(key: string): boolean {
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

export async function resolveClientKey(): Promise<string> {
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

export type Lead = {
  name: string;
  phone: string;
  businessType: string;
  business?: string;
  service?: string;
  message?: string;
};

export async function appendLeadToSheet(lead: Lead): Promise<void> {
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
      name: lead.name,
      phone: lead.phone,
      businessType: lead.businessType,
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

    if (
      (response.status === 401 || response.status === 404) &&
      contentType.includes("text/html")
    ) {
      throw new Error(
        `GOOGLE_SHEETS_WEBHOOK_URL is not a public web app (HTTP ${response.status} from Google Drive). In Apps Script: Deploy → Manage deployments → Type "Web app", Who has access "Anyone" → Deploy, then copy that exact URL into .env.`,
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

    const reason =
      typeof result === "object" && result !== null && "error" in result
        ? String(result.error)
        : "unknown error";

    if (/unauthorized/i.test(reason)) {
      throw new Error(
        "GOOGLE_SHEETS_WEBHOOK_TOKEN does not match the token stored in the Apps Script. Run FreeKit Leads → Connect webhook in the SAME script this URL was deployed from, paste the exact .env token, then redeploy.",
      );
    }

    if (/not configured/i.test(reason)) {
      throw new Error(
        "The Apps Script has no Script Properties yet. In the script behind this URL, run FreeKit Leads → Connect webhook (or setupLeadWebhook) and paste the exact GOOGLE_SHEETS_WEBHOOK_TOKEN from .env.",
      );
    }

    throw new Error(`The Google Sheets webhook did not confirm the lead: ${reason}`);
  }
}

export async function sendContactEmail(lead: Lead): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL || site.email;

  if (!apiKey || !from) {
    console.error(
      "[contact-email-config-error] RESEND_API_KEY and CONTACT_FROM_EMAIL must be configured.",
    );
    return;
  }

  const details = [
    `Name: ${lead.name}`,
    `Phone: ${lead.phone}`,
    `Business type: ${lead.businessType}`,
    ...(lead.business ? [`Business name: ${lead.business}`] : []),
    ...(lead.service ? [`Interested in: ${lead.service}`] : []),
    ...(lead.message ? [`Message: ${lead.message}`] : []),
    `Received: ${new Date().toISOString()}`,
  ];

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
        text: ["A new contact form enquiry was submitted.", "", ...details].join("\n"),
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      const body = await response.text();
      console.error("[contact-email-error]", {
        status: response.status,
        details: body.slice(0, 500),
      });
    }
  } catch (error) {
    console.error("[contact-email-error]", error);
  }
}
