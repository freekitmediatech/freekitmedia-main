"use client";

import { Container } from "@/components/ui/Container";
import { Reveal, SectionHead } from "@/components/partners/Reveal";
import type { Partner } from "@/content/partners";

export function PartnerMetrics({ partner }: { partner: Partner }) {
  const metrics = partner.metrics;

  if (!metrics || metrics.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#F7F6F2] py-14 text-[#171717] sm:py-20 lg:py-28">
      <Container>
        <SectionHead
          eyebrow="Results"
          count={`${String(metrics.length).padStart(2, "0")} METRICS`}
          title="Impact, measured honestly."
        />

        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-5 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <Reveal key={metric.label} delay={Math.min(index, 5) * 0.07}>
              <div className="flex h-full min-w-0 flex-col rounded-2xl bg-[#171717] p-4 text-white sm:p-6">
                <p className="font-display break-words text-[clamp(1.6rem,7vw,3rem)] font-semibold leading-none tracking-[-0.04em] text-[#F7C928]">
                  {metric.value}
                </p>

                <span
                  aria-hidden="true"
                  className="mt-4 h-px w-8 bg-[#F7C928]/50 sm:mt-5"
                />

                <p className="mt-3 text-[13px] leading-5 text-white/75 sm:text-sm sm:leading-6">
                  {metric.label}
                </p>

                {metric.hint ? (
                  <p className="mt-2 text-[11px] leading-5 text-white/45 sm:text-xs">
                    {metric.hint}
                  </p>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}