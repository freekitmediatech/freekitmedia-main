"use client";

import { useRef, useState, type FormEvent } from "react";

import { Container } from "@/components/ui/Container";
import { services } from "@/content/services";
import { useReveal } from "@/lib/use-reveal";

// TODO: apna asli number daal
const CONTACT = {
  tel: "+919999999999",
  whatsapp: "919999999999",
  display: "+91 99999 99999",
};

const inputClass =
  "h-12 w-full rounded-xl border border-black/15 bg-white px-4 text-[15px] text-[#20201E] outline-none transition placeholder:text-black/35 focus:border-[#D5AC19] focus:ring-4 focus:ring-[#F7C928]/30";

type Status = "idle" | "loading" | "done" | "error";

export function FinalCta() {
  const sectionRef = useRef<HTMLElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  useReveal(sectionRef);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    const digits = String(data.phone ?? "").replace(/\D/g, "");
    if (digits.length < 10) {
      setStatus("error");
      setError("Sahi 10-digit mobile number daaliye.");
      return;
    }

    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (json.ok) {
        setStatus("done");
        form.reset();
      } else {
        setStatus("error");
        setError(json.error ?? "Submit nahi ho paya, dobara try kijiye.");
      }
    } catch {
      setStatus("error");
      setError("Network issue. Kripya call ya WhatsApp kijiye.");
    }
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-clip bg-[#20201E] py-16 text-white sm:py-24 lg:py-28"
    >
      {/* soft yellow glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 size-[420px] rounded-full bg-[#F7C928]/20 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 right-0 size-[380px] rounded-full bg-[#F7C928]/10 blur-[120px]"
      />

      <Container className="relative z-10 grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* LEFT */}
        <div data-reveal className="lg:col-span-6">
          <p className="inline-block rounded-full border border-[#F7C928]/50 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F7C928] sm:text-xs">
            Free business audit
          </p>

          <h2 className="font-display mt-6 text-[clamp(2.6rem,6vw,5.5rem)] font-black uppercase leading-[0.9] tracking-[-0.06em]">
            Ready to grow
            <br />
            your business
            <span className="text-[#F7C928]">?</span>
          </h2>

          <p className="mt-6 max-w-md text-base leading-relaxed text-white/65 sm:text-lg">
            Ek chhota sa form bhariye. Hamari team aapke business ko samajh kar
            ek clear plan ke saath call karegi.
          </p>

          <ul className="mt-8 grid gap-3 text-sm sm:text-base">
            {[
              "Free audit — koi charge nahi",
              "24 ghante ke andar call back",
              "Template nahi, aapke business ke hisaab se plan",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-white/85">
                <span className="grid size-5 shrink-0 place-items-center rounded-full bg-[#F7C928] text-[11px] font-black text-[#20201E]">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={`tel:${CONTACT.tel}`}
              className="flex h-12 items-center gap-2 rounded-xl border border-white/25 px-5 text-sm font-semibold transition hover:border-[#F7C928] hover:text-[#F7C928]"
            >
              <span aria-hidden="true">📞</span>
              {CONTACT.display}
            </a>

            <a
              href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent("Hi, mujhe free audit chahiye.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 items-center gap-2 rounded-xl bg-white/10 px-5 text-sm font-semibold transition hover:bg-white/20"
            >
              WhatsApp par baat karein <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        {/* RIGHT: FORM CARD */}
        <div data-reveal className="lg:col-span-6">
          <div className="rounded-3xl bg-white p-6 text-[#20201E] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] sm:p-9">
            {status === "done" ? (
              <div className="py-10 text-center" role="status" aria-live="polite">
                <span className="mx-auto grid size-16 place-items-center rounded-full bg-[#F7C928] text-3xl">
                  ✓
                </span>
                <h3 className="font-display mt-6 text-2xl font-extrabold tracking-tight sm:text-3xl">
                  Shukriya! Request mil gayi.
                </h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-black/60">
                  Hamari team 24 ghante ke andar aapko call karegi.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm font-semibold underline underline-offset-4"
                >
                  Ek aur request bhejein
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="grid gap-5">
                <div>
                  <h3 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
                    Request a free audit
                  </h3>
                  <p className="mt-1 text-sm text-black/55">
                    1 minute lagega. Spam nahi, promise.
                  </p>
                </div>

                {/* honeypot (bots only) */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-1.5 text-sm font-semibold">
                    Aapka naam
                    <input
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Rahul Sharma"
                      className={inputClass}
                    />
                  </label>

                  <label className="grid gap-1.5 text-sm font-semibold">
                    Mobile number
                    <input
                      name="phone"
                      required
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="98765 43210"
                      className={inputClass}
                    />
                  </label>
                </div>

                <label className="grid gap-1.5 text-sm font-semibold">
                  Business ka naam
                  <input
                    name="business"
                    autoComplete="organization"
                    placeholder="Jaise: Sharma Clinic"
                    className={inputClass}
                  />
                </label>

                <label className="grid gap-1.5 text-sm font-semibold">
                  Aapko kya chahiye?
                  <select
                    name="service"
                    defaultValue=""
                    className={`${inputClass} appearance-none bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10`}
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%2320201E'%3E%3Cpath d='M5 7l5 6 5-6z'/%3E%3C/svg%3E\")",
                    }}
                  >
                    <option value="">Service chuniye (optional)</option>
                    {services.map((service) => (
                      <option key={service.slug} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                    <option value="Not sure">Pata nahi, guide kijiye</option>
                  </select>
                </label>

                <label className="grid gap-1.5 text-sm font-semibold">
                  Kuch aur batana hai?
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Optional"
                    className={`${inputClass} h-auto resize-none py-3`}
                  />
                </label>

                {status === "error" && (
                  <p
                    role="alert"
                    className="rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
                  >
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group flex h-14 items-center justify-center gap-2 rounded-xl bg-[#F7C928] text-base font-bold text-[#20201E] transition hover:bg-[#FFD84D] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F7C928]/50 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "loading" ? (
                    "Bhej rahe hain..."
                  ) : (
                    <>
                      Request a free audit
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1"
                      >
                        ↗
                      </span>
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-black/45">
                  Aapki details sirf hamari team ke paas rahengi.
                </p>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}