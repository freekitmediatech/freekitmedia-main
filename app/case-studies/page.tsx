import type { Metadata } from "next";

import { Footer } from "@/components/sections/Footer";
import { SubpageHeader } from "@/components/sections/SubpageHeader";
import {
  CaseStudiesList,
  FadeUp,
} from "@/components/sections/CaseStudiesMotion";
import { Container } from "@/components/ui/Container";
import { caseStudies } from "@/content/case-studies";

export const metadata: Metadata = {
  title: "Digital Marketing Case Studies",
  description:
    "Selected FreeKit Media project stories, with outcomes and context from the available case-study data.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
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
                  Selected work
                </p>

                <p className="shrink-0 font-mono text-[10px] text-[#77766D] sm:text-xs">
                  {String(caseStudies.length).padStart(2, "0")} CASE STUDIES
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h1 className="font-display mt-8 max-w-4xl text-balance text-[clamp(2.2rem,7.5vw,5.5rem)] font-semibold leading-[1] tracking-[-0.05em] sm:mt-10 lg:leading-[0.95] lg:tracking-[-0.06em]">
                Digital marketing work,{" "}
                <span className="text-[#8A6C05]">
                  with the context behind it.
                </span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="mt-5 max-w-xl text-pretty text-[15px] leading-7 text-[#55524C] sm:mt-6 sm:text-lg sm:leading-8">
                Strategy, execution aur outcome, bina kisi badhe-chadhe daave
                ke. Jo hua, wahi likha hai.
              </p>
            </FadeUp>
          </Container>
        </section>

        {/* List */}
        <section className="pb-20 sm:pb-28 lg:pb-36">
          <Container>
            {caseStudies.length > 0 ? (
              <CaseStudiesList studies={caseStudies} />
            ) : (
              <p className="rounded-2xl border border-[#171717]/10 bg-white/70 p-8 text-center text-sm text-[#55524C]">
                Case studies jaldi aa rahi hain.
              </p>
            )}
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}