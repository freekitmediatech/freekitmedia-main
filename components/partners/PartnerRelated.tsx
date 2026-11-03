"use client";

import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal, SectionHead } from "@/components/partners/Reveal";
import { partners } from "@/content/partners";
import type { Partner } from "@/content/partners";

export function PartnerRelated({ partner }: { partner: Partner }) {
  const relatedSlugs = partner.relatedSlugs ?? [];
  const sameIndustry = partners.filter(
    (item) => item.slug !== partner.slug && item.industry === partner.industry,
  );
  const related = relatedSlugs
    .map((slug) => partners.find((item) => item.slug === slug))
    .filter((item): item is Partner => Boolean(item))
    .concat(sameIndustry)
    .filter(
      (item, index, arr) =>
        arr.findIndex((x) => x.slug === item.slug) === index,
    )
    .slice(0, 3);

  if (related.length === 0) {
    return null;
  }

  return (
    <section
      className="bg-[#F7F6F2] pb-20 pt-14 text-[#171717] sm:pb-28 sm:pt-20 lg:pb-36 lg:pt-28"
      aria-labelledby="related-partners-heading"
    >
      <Container>
        <SectionHead
          id="related-partners-heading"
          eyebrow="Keep exploring"
          count={`${String(related.length).padStart(2, "0")} MORE`}
          title="More from the same desk."
        />

        <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {related.map((item, index) => (
            <Reveal
              key={item.slug}
              delay={Math.min(index, 5) * 0.07}
              className="h-full"
            >
              <Link
                href={`/partners/${item.slug}`}
                className="group flex h-full min-h-44 flex-col justify-between gap-6 rounded-2xl border border-[#171717]/10 bg-white/75 p-5 transition-colors duration-300 hover:border-[#8A6C05]/40 hover:bg-[#FFF9E5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8A6C05] sm:p-6"
              >
                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8A6C05]">
                    {item.industry}
                  </p>

                  <h3 className="font-display mt-3 text-balance text-2xl font-semibold leading-tight tracking-[-0.03em] transition-colors duration-300 group-hover:text-[#8A6C05]">
                    {item.name}
                  </h3>

                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-[#55524C]">
                    {item.oneLine}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8A6C05]">
                    View case study
                  </span>

                  <span
                    aria-hidden="true"
                    className="grid size-10 place-items-center rounded-full border border-[#171717]/15 text-[#55524C] transition-all duration-300 group-hover:border-[#8A6C05] group-hover:bg-[#8A6C05] group-hover:text-white group-active:border-[#8A6C05] group-active:bg-[#8A6C05] group-active:text-white"
                  >
                    <Icon
                      name="arrowRight"
                      className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}