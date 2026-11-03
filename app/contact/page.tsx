import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { ContactChannels } from "@/components/sections/ContactChannels";
import { ContactForm } from "@/components/sections/ContactForm";
import { FadeUp } from "@/components/sections/CaseStudiesMotion";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact FreeKit Media | Request a Digital Marketing Audit",
  description: `${site.cta.auditNote} Tell us about your business and we’ll be in touch.`,
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    description: `${site.cta.auditNote} Tell us about your business and we’ll be in touch.`,
  },
};

const facts = ["30 minute session", "Online ya aapke office par", "Free audit"];

export default function ContactPage() {
  return (
    <div className="flex min-h-svh flex-col bg-[#F7F6F2] text-[#171717]">
      <header className="border-b border-[#171717]/10 bg-[#F7F6F2]/90 backdrop-blur-md">
        <Container className="flex h-[68px] items-center justify-between sm:h-[76px]">
          <Link
            href="/"
            className="rounded-sm py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8A6C05]"
            aria-label={site.name}
          >
            <Logo />
          </Link>

          <Button
            href="/"
            variant="outline"
            size="sm"
            className="!hidden sm:!inline-flex"
          >
            Return home
          </Button>

          <Link
            href="/"
            className="inline-flex min-h-11 items-center px-3 text-sm font-medium text-[#55524C] transition-colors hover:text-[#8A6C05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8A6C05] sm:hidden"
          >
            ← Home
          </Link>
        </Container>
      </header>

      <main id="main" className="flex-1">
        <section className="relative isolate overflow-clip pb-16 pt-10 sm:pb-24 sm:pt-16 lg:pb-32 lg:pt-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_12%_0%,rgba(247,201,40,0.22),transparent_45%),radial-gradient(ellipse_at_92%_12%,rgba(247,201,40,0.12),transparent_45%)]"
          />

          <Container>
            <FadeUp>
              <div className="flex items-center justify-between gap-4 border-t border-[#171717]/15 pt-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8A6C05] sm:text-xs">
                  Contact
                </p>
                <p className="shrink-0 font-mono text-[10px] text-[#77766D] sm:text-xs">
                  FREE AUDIT
                </p>
              </div>
            </FadeUp>

            <div className="mt-8 grid items-start gap-8 sm:mt-10 lg:mt-14 lg:grid-cols-12 lg:gap-x-14 lg:gap-y-10">
              {/* Intro */}
              <div className="min-w-0 lg:col-span-5 lg:col-start-1 lg:row-start-1">
                <FadeUp delay={0.1}>
                  <h1 className="font-display text-balance text-[clamp(2.2rem,8.5vw,4.75rem)] font-semibold leading-[1] tracking-[-0.05em] lg:leading-[0.95] lg:tracking-[-0.06em]">
                    Request a free{" "}
                    <span className="text-[#8A6C05]">digital marketing</span>{" "}
                    audit.
                  </h1>
                </FadeUp>

                <FadeUp delay={0.2}>
                  <p className="mt-5 max-w-md text-pretty text-[15px] leading-7 text-[#55524C] sm:mt-6 sm:text-lg sm:leading-8">
                    Apne business ke baare mein thoda bata do. Hum aapki online
                    presence dekhkar practical next steps pe baat karenge,
                    relaxed 30 minute ki conversation mein.
                  </p>
                </FadeUp>

                <FadeUp delay={0.3}>
                  <ul className="mt-6 flex flex-wrap gap-2 sm:mt-8">
                    {facts.map((fact) => (
                      <li
                        key={fact}
                        className="flex items-center gap-2 rounded-full border border-[#8A6C05]/15 bg-white/70 py-1.5 pl-2.5 pr-3.5 text-[11px] font-medium text-[#55524C] sm:text-xs"
                      >
                        <span className="size-1.5 shrink-0 rounded-full bg-[#8A6C05]" />
                        {fact}
                      </li>
                    ))}
                  </ul>
                </FadeUp>
              </div>

              {/* Form: mobile pe intro ke turant baad */}
              <FadeUp
                delay={0.25}
                className="min-w-0 lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1"
              >
                <div className="rounded-[1.4rem] border border-[#171717]/10 bg-white p-5 text-ink shadow-[0_40px_90px_-50px_rgba(23,23,23,0.35)] sm:rounded-[1.9rem] sm:p-8 lg:p-10">
                  <ContactForm />
                </div>
              </FadeUp>

              {/* Channels: dark card, taaki existing light text clear dikhe */}
              <FadeUp
                delay={0.35}
                className="min-w-0 lg:col-span-5 lg:col-start-1 lg:row-start-2"
              >
                <div className="rounded-[1.4rem] bg-ink p-5 text-paper sm:p-7">
                  <ContactChannels />
                </div>

                <p className="mt-5 text-xs leading-5 text-[#77766D]">
                  {site.tagline} {site.address.line}
                </p>
              </FadeUp>
            </div>
          </Container>
        </section>
      </main>

      <footer className="border-t border-[#171717]/10">
        <Container className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-5 text-xs text-[#77766D]">
          <p>{`© 2025–2026 ${site.name}`}</p>
          <Link
            href="/"
            className="font-semibold text-[#55524C] transition-colors hover:text-[#8A6C05]"
          >
            Return to the homepage
          </Link>
        </Container>
      </footer>
    </div>
  );
}