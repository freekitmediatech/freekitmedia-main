
"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { Icon } from "@/components/ui/Icon";
import { submitContact, type ContactState } from "@/app/actions/contact";
import { contactBusinessTypes, site } from "@/content/site";
import { cn, whatsappLink } from "@/lib/utils";

const initialState: ContactState = {
  ok: false,
  errors: null,
  failure: false,
};

const inputClasses =
  "h-14 w-full rounded-xl border border-[#171517]/10 bg-white/80 px-4 text-[15px] text-[#171517] outline-none transition-all duration-300 placeholder:text-[#171517]/40 hover:border-[#8A6C05]/30 focus:border-[#8A6C05] focus:bg-white focus:ring-4 focus:ring-[#8A6C05]/10";

const errorText =
  "mt-2 pl-1 text-xs font-medium text-red-600";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="group inline-flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-[#8A6C05] px-7 font-semibold text-white shadow-sm transition-all duration-300 hover:bg-yellow-500 hover:shadow-[0_10px_30px_rgba(247,201,40,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8A6C05] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
    >
      {pending ? "Sending your request..." : site.cta.submitAudit}

      <span className="transition-transform duration-300 group-hover:translate-x-1">
        <Icon name="arrowRight" className="size-4" />
      </span>
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(
    submitContact,
    initialState,
  );

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.ok) {
      formRef.current?.reset();
    }
  }, [state.ok]);

  if (state.ok) {
    return (
      <div
        role="status"
        className="relative isolate overflow-hidden rounded-3xl border border-[#8A6C05]/15 bg-white p-7 shadow-[0_15px_50px_rgba(23,21,23,0.05)] sm:p-9"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 -z-10 size-48 rounded-full bg-[#8A6C05]/10 blur-3xl"
        />

        <div className="flex size-14 items-center justify-center rounded-2xl bg-[#8A6C05]/10 text-[#8A6C05]">
          <Icon name="badgeCheck" className="size-7" />
        </div>

        <p className="mt-5 font-display text-2xl font-bold tracking-tight text-[#171517] sm:text-3xl">
          Thank you — we’ve received your request.
        </p>

        <p className="mt-3 max-w-lg text-sm leading-7 text-[#171517]/65">
          Your request has been sent to our team. We’ll be in touch within
          one business day. If you prefer, you can also message us directly on
          WhatsApp.
        </p>

        <a
          href={whatsappLink(
            site.phone.primary.number,
            site.whatsapp.ctaText,
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#171517]/10 bg-white px-5 py-3 text-sm font-semibold text-[#171517] transition-all duration-300 hover:border-[#8A6C05]/30 hover:bg-[#8A6C05]/5 hover:text-[#8A6C05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8A6C05]"
        >
          <Icon name="whatsapp" className="size-4" />
          {site.cta.whatsapp}
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    );
  }

  return (
    <div className="relative isolate">
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 -z-10 size-40 rounded-full bg-[#8A6C05]/10 blur-3xl"
      />

      <div className="rounded-3xl border border-[#171517]/10 bg-white/85 p-5 shadow-[0_15px_60px_rgba(23,21,23,0.045)] backdrop-blur-xl sm:p-8 lg:p-9">
        <div className="mb-7">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8A6C05]">
            Let’s get started
          </p>

          <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-[#171517] sm:text-3xl">
            Tell us about your business.
          </h3>

          <p className="mt-2 text-sm leading-6 text-[#171517]/60">
            Share a few details and we’ll help you figure out the
            right next step.
          </p>
        </div>

        {state.failure && (
          <div
            role="alert"
            className="mb-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-[#171517]"
          >
            <p className="font-semibold">
              We couldn’t send your request.
            </p>

            <p className="mt-2 text-sm leading-6 text-[#171517]/70">
              Please try again, or contact us directly on WhatsApp.
            </p>

            <a
              href={whatsappLink(
                site.phone.primary.number,
                site.whatsapp.ctaText,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#8A6C05] underline-offset-4 hover:underline"
            >
              <Icon name="whatsapp" className="size-4" />
              {site.cta.whatsapp}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        )}

        <form
          ref={formRef}
          action={formAction}
          className="grid gap-5 sm:grid-cols-2"
        >
          {/* Name */}
          <div className="min-w-0">
            <label
              htmlFor="contact-name"
              className="mb-2 block text-sm font-semibold text-[#171517]"
            >
              Your name
              <span className="ml-1 text-[#8A6C05]">*</span>
            </label>

            <input
              id="contact-name"
              name="name"
              placeholder="e.g. Rahul Sharma"
              autoComplete="name"
              required
              aria-invalid={Boolean(state.errors?.name)}
              aria-describedby={
                state.errors?.name
                  ? "contact-name-error"
                  : undefined
              }
              className={cn(
                inputClasses,
                state.errors?.name &&
                  "border-red-500 focus:border-red-500 focus:ring-red-500/10",
              )}
            />

            {state.errors?.name && (
              <p
                id="contact-name-error"
                className={errorText}
              >
                {state.errors.name}
              </p>
            )}
          </div>

          {/* Phone */}
          <div className="min-w-0">
            <label
              htmlFor="contact-phone"
              className="mb-2 block text-sm font-semibold text-[#171517]"
            >
              Mobile number
              <span className="ml-1 text-[#8A6C05]">*</span>
            </label>

            <input
              id="contact-phone"
              name="phone"
              type="tel"
              inputMode="tel"
              placeholder="Enter your mobile number"
              autoComplete="tel"
              required
              aria-invalid={Boolean(state.errors?.phone)}
              aria-describedby={
                state.errors?.phone
                  ? "contact-phone-error"
                  : undefined
              }
              className={cn(
                inputClasses,
                state.errors?.phone &&
                  "border-red-500 focus:border-red-500 focus:ring-red-500/10",
              )}
            />

            {state.errors?.phone && (
              <p
                id="contact-phone-error"
                className={errorText}
              >
                {state.errors.phone}
              </p>
            )}
          </div>

          {/* Business type */}
          <div className="min-w-0 sm:col-span-2">
            <label
              htmlFor="contact-type"
              className="mb-2 block text-sm font-semibold text-[#171517]"
            >
              What type of business do you run?
              <span className="ml-1 text-[#8A6C05]">*</span>
            </label>


<select
  id="contact-type"
  name="businessType"
  defaultValue=""
  required
  aria-invalid={Boolean(state.errors?.businessType)}
  aria-describedby={
    state.errors?.businessType
      ? "contact-type-error"
      : undefined
  }
  className={cn(
    "h-14 w-full appearance-none rounded-xl",
    "border border-[#171517]/10",
    "bg-white/80 px-4 pr-12",
    "text-[15px] text-[#171517]",
    "outline-none transition-all duration-300",
    "hover:border-[#8A6C05]/40",
    "focus:border-[#8A6C05]",
    "focus:bg-white focus:ring-4",
    "focus:ring-[#8A6C05]/10",
    "[&>option]:bg-white",
    "[&>option]:text-[#171517]",
    !state.errors?.businessType &&
      "text-[#171517]/50",
    state.errors?.businessType &&
      "border-red-500 focus:border-red-500"
  )}
>
  <option value="" disabled>
    Choose your business type
  </option>

  {contactBusinessTypes.map((type) => (
    <option key={type} value={type}>
      {type}
    </option>
  ))}
</select>



            {state.errors?.businessType && (
              <p
                id="contact-type-error"
                className={errorText}
              >
                {state.errors.businessType}
              </p>
            )}
          </div>

          {/* Honeypot: keep hidden to help filter bots */}
          <div
            aria-hidden="true"
            className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden sm:col-span-2"
          >
            <label htmlFor="contact-fax-number">
              Leave this field empty
            </label>

            <input
              id="contact-fax-number"
              type="text"
              name="faxNumber"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="flex flex-col gap-4 pt-1 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
            <SubmitButton />
          </div>

          <div className="flex items-start gap-2 border-t border-[#171517]/[0.07] pt-4 sm:col-span-2">
            <span className="mt-0.5 text-[#8A6C05]">
              <Icon
                name="badgeCheck"
                className="size-4"
              />
            </span>

            <p className="text-xs leading-5 text-[#171517]/55">
              Your details stay private. We’ll only use your number
              to follow up about your request. No spam.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
