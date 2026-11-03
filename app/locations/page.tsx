import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/sections/Footer";
import { SubpageHeader } from "@/components/sections/SubpageHeader";
import { FadeUp } from "@/components/sections/CaseStudiesMotion";
import { LocationsExplorer } from "@/components/sections/LocationsMotion";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { locationPages } from "@/content/locations";

export const metadata: Metadata = {
  title: "Digital Marketing Locations in Chhattisgarh",
  description:
    "Explore FreeKit Media digital marketing support for businesses in Bilaspur, Ambikapur and Raipur, Chhattisgarh.",
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  return (
    <>
      <SubpageHeader />

      <main id="main" className="flex-1 bg-[#F7F6F2] text-[#171717]">
        {/* Hero */}
        <section className="relative isolate overflow-clip pb-10 pt-14 sm:pb-14 sm:pt-20 lg:pb-16 lg:pt-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_12%_0%,rgba(247,201,40,0.22),transparent_45%),radial-gradient(ellipse_at_90%_10%,rgba(247,201,40,0.12),transparent_45%)]"
          />

          <Container>
            <FadeUp>
              <div className="flex items-center justify-between gap-4 border-t border-[#171717]/15 pt-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8A6C05] sm:text-xs">
                  Locations
                </p>
                <p className="shrink-0 font-mono text-[10px] text-[#77766D] sm:text-xs">
                  {String(locationPages.length).padStart(2, "0")} CITIES
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h1 className="font-display mt-8 max-w-4xl text-balance text-[clamp(2.2rem,7.5vw,5.5rem)] font-semibold leading-[1] tracking-[-0.05em] sm:mt-10 lg:leading-[0.95] lg:tracking-[-0.06em]">
                Marketing jo aapke{" "}
                <span className="text-[#8A6C05]">shehar ko samjhe.</span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="mt-5 max-w-xl text-pretty text-[15px] leading-7 text-[#55524C] sm:mt-6 sm:text-lg sm:leading-8">
                Bilaspur, Ambikapur aur Raipur mein local content, campaigns
                aur customer enquiries ko hum kaise sambhalte hain.
              </p>
            </FadeUp>
          </Container>
        </section>

        {/* Map + cities */}
        <section className="pb-14 sm:pb-20">
          <Container>
            {locationPages.length > 0 ? (
              <FadeUp delay={0.3}>
                <LocationsExplorer items={locationPages} />
              </FadeUp>
            ) : (
              <p className="rounded-2xl border border-[#171717]/10 bg-white/70 p-8 text-center text-sm text-[#55524C]">
                Locations jaldi aa rahi hain.
              </p>
            )}
          </Container>
        </section>

        {/* Bottom CTA */}
        <section className="pb-20 sm:pb-28 lg:pb-36">
          <Container>
            <div className="flex flex-col gap-5 rounded-2xl border border-[#171717]/10 bg-[#FFF9E5] p-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-8 lg:p-10">
              <div className="min-w-0">
                <p className="font-display text-xl font-semibold tracking-[-0.03em] sm:text-2xl lg:text-3xl">
                  Aapka shehar list mein nahi hai?
                </p>
                <p className="mt-2 text-sm leading-6 text-[#55524C] sm:text-base">
                  Free audit mein hum aapke shehar aur customers ke hisaab se
                  strategy batate hain.
                </p>
              </div>

              <Link
                href="/contact"
                className="group inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-3 rounded-full bg-[#171717] px-6 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#8A6C05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8A6C05] focus-visible:ring-offset-2 sm:w-auto"
              >
                Get a free marketing audit
                <Icon
                  name="arrowRight"
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}