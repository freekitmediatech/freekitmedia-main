"use server";

import type { ContactState } from "@/lib/content/contact-state";
import type { ContactFieldErrors } from "@/lib/content/contact-state";
import { contactBusinessTypes } from "@/content/site";
import {
  appendLeadToSheet,
  isRateLimited,
  resolveClientKey,
  sendContactEmail,
} from "@/lib/server/lead-delivery";

export type { ContactState };

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
