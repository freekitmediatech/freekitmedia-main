"use client";

import { Container } from "@/components/ui/Container";
import { Reveal, SectionHead } from "@/components/partners/Reveal";
import type { Partner } from "@/content/partners";

const intentionLabels: Record<string, string> = {
  attention: "Attention",
  discovery: "Discovery",
  credibility: "Credibility",
  education: "Education",
  conversion: "Conversion",
};

export function PartnerStrategy({ partner }: { partner: Partner }) {
  const phases = partner.strategy;

  if (!phases || phases.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#F7F6F2] py-14 text-[#171717] sm:py-20 lg:py-28">
      <Container>
        <SectionHead
          eyebrow="Strategy"
          count={`${String(phases.length).padStart(2, "0")} PHASES`}
          title="Why we made the content that way."
        />

        <ol className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {phases.map((phase, index) => (
            <Reveal
              key={phase.title}
              delay={Math.min(index, 5) * 0.07}
              className="h-full"
            >
              <li className="flex h-full list-none flex-col rounded-2xl border border-[#171717]/10 bg-white/75 p-5 transition-colors duration-300 hover:border-[#8A6C05]/40 hover:bg-[#FFF9E5] sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-[#8A6C05]">
                    {intentionLabels[phase.intention] ?? phase.intention}
                  </p>

                  <span className="font-mono text-xs text-[#77766D]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="font-display mt-4 text-balance text-xl font-semibold leading-snug tracking-[-0.025em] sm:text-2xl">
                  {phase.title}
                </h3>

                <p className="mt-3 text-pretty text-sm leading-6 text-[#55524C] sm:leading-7">
                  {phase.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}