import type { NextRequest } from "next/server";

import {
  appendLeadToSheet,
  isRateLimited,
  resolveClientKey,
  sendContactEmail,
} from "@/lib/server/lead-delivery";

type LeadBody = Record<string, unknown>;

function read(body: LeadBody, key: string): string {
  const value = body[key];
  return typeof value === "string" ? value.trim() : "";
}

function json(payload: Record<string, unknown>, status = 200): Response {
  return Response.json(payload, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

export async function POST(request: NextRequest): Promise<Response> {
  try {
    if (isRateLimited(await resolveClientKey())) {
      return json(
        { ok: false, error: "Bahut saari requests aa gayi hain. Thodi der baad try kijiye." },
        429,
      );
    }

    let body: LeadBody;
    try {
      const parsed: unknown = await request.json();
      body = parsed && typeof parsed === "object" ? (parsed as LeadBody) : {};
    } catch {
      return json({ ok: false, error: "Invalid request body." }, 400);
    }

    if (read(body, "website") !== "") {
      return json({ ok: true });
    }

    const name = read(body, "name").slice(0, 80);
    const phoneDigits = read(body, "phone").replace(/\D/g, "");
    const localPhone =
      phoneDigits.length === 12 && phoneDigits.startsWith("91")
        ? phoneDigits.slice(2)
        : phoneDigits;

    const errors: Record<string, string> = {};
    if (name.length < 2) errors.name = "Naam thoda batao.";
    if (!/^[6-9]\d{9}$/.test(localPhone)) {
      errors.phone = "Sahi 10-digit mobile number daaliye (91/98/...).";
    }

    if (Object.keys(errors).length > 0) {
      return json({ ok: false, error: Object.values(errors)[0], errors }, 400);
    }

    const service = read(body, "service");
    const lead = {
      name,
      phone: `+91 ${localPhone}`,
      businessType: service || "Not sure",
      business: read(body, "business").slice(0, 80),
      service,
      message: read(body, "message").slice(0, 500),
    };

    await appendLeadToSheet(lead);
    await sendContactEmail(lead);

    return json({ ok: true });
  } catch (error) {
    console.error("[lead-api-error]", error);
    return json(
      { ok: false, error: "Submit nahi ho paya. WhatsApp ya call par baat kijiye." },
      500,
    );
  }
}
