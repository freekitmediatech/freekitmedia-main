"use client";

import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal, SectionHead } from "@/components/partners/Reveal";
import type { Partner } from "@/content/partners";

export function PartnerDeliverables({ partner }: { partner: Partner }) {
  const groups = partner.deliverables;

  if (!groups || groups.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#F7F6F2] py-14 text-[#171717] sm:py-20 lg:py-28">
      <Container>
        <SectionHead
          eyebrow="The work"
          count={`${String(groups.length).padStart(2, "0")} SERVICES`}
          title="What we delivered."
          sub="Sirf wahi services jo is partnership mein hui."
        />

        <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {groups.map((group, index) => (
            <Reveal key={group.group} delay={Math.min(index, 5) * 0.07}>
              <article className="h-full rounded-2xl border border-[#171717]/10 bg-white/75 p-5 transition-colors duration-300 hover:border-[#8A6C05]/40 hover:bg-[#FFF9E5] sm:p-7">
                <span className="inline-flex rounded-full bg-[#171717] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#F7C928] sm:text-[11px]">
                  {group.group}
                </span>

                <ul className="mt-5 space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-6 text-[#292927]"
                    >
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#8A6C05]/10">
                        <Icon
                          name="check"
                          className="size-3 text-[#8A6C05]"
                        />
                      </span>
                      <span className="min-w-0">{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}