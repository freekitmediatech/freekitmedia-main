
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { partners, type Partner } from "@/content/partners";

function PartnerLogo({ partner }: { partner: Partner }) {
  const [imageFailed, setImageFailed] = useState(false);

  if (!partner.logo || imageFailed) {
    return (
      <span className="font-display text-xl font-semibold tracking-tight text-[#171517] sm:text-2xl">
        {partner.name}
      </span>
    );
  }

  return (
    <span className="relative block h-12 w-full max-w-[170px] shrink-0 bg-white">
      <Image
        src={partner.logo}
        alt={`${partner.name} logo`}
        fill
        sizes="170px"
        onError={() => setImageFailed(true)}
        className="object-contain"
      />
    </span>
  );
}

function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <Link
      href={`/partners/${partner.slug}`}
      aria-label={`View ${partner.name} case study`}
      className={[
        "group relative flex h-full min-h-[300px] flex-col",
        "overflow-hidden rounded-2xl border border-[#171517]/10",
        "bg-white p-5 sm:p-6",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1 hover:border-[#8A6C05]/40",
        "hover:shadow-[0_12px_35px_rgba(23,21,23,0.07)]",
        "focus-visible:outline-none focus-visible:ring-2",
        "focus-visible:ring-[#8A6C05] focus-visible:ring-offset-2",
        "motion-reduce:transform-none motion-reduce:transition-none",
      ].join(" ")}
    >
      {/* Simple logo area */}
      <div className="flex min-h-[72px] items-center justify-between gap-4">
        <div className="flex h-16 max-w-[78%] items-center">
          <PartnerLogo partner={partner} />
        </div>

        <span
          aria-hidden="true"
          className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[#171517]/10 text-sm text-[#171517]/55 transition-all duration-300 group-hover:border-[#8A6C05]/30 group-hover:bg-[#8A6C05] group-hover:text-white"
        >
          ↗
        </span>
      </div>

      <div className="mt-7">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#171517]/50 sm:text-[11px]">
          {partner.industry}
          <span className="mx-2 text-[#8A6C05]">/</span>
          {partner.city}
          {partner.franchise && (
            <>
              <span className="mx-2 text-[#8A6C05]">/</span>
              Franchise
            </>
          )}
        </p>

        <h3 className="mt-3 font-display text-xl font-semibold tracking-[-0.035em] text-[#171517] transition-colors duration-300 group-hover:text-[#8A6C05] sm:text-2xl">
          {partner.name}
        </h3>

        <p className="mt-3 text-sm leading-6 text-[#171517]/65">
          {partner.oneLine}
        </p>
      </div>

      <div className="mt-auto flex items-center justify-between gap-3 border-t border-[#171517]/10 pt-5 mt-6">
        <span className="text-sm font-medium text-[#171517]/80 transition-colors duration-300 group-hover:text-[#8A6C05]">
          View case study
        </span>

        <span
          aria-hidden="true"
          className="text-lg text-[#171517]/45 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#8A6C05]"
        >
          →
        </span>
      </div>
    </Link>
  );
}

export default function PartnersSection() {
  return (
    <section
      id="partners"
      aria-labelledby="partners-heading"
      className="overflow-hidden bg-[#F7F6F2] py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-9 flex flex-col gap-5 px-5 sm:mb-12 sm:px-8 md:flex-row md:items-end md:justify-between lg:px-12">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#8A6C05]">
              Selected partnerships
            </p>

            <h2
              id="partners-heading"
              className="font-display text-4xl font-semibold leading-[1.02] tracking-[-0.055em] text-[#171517] sm:text-5xl lg:text-7xl"
            >
              Good work.
              <br />
              <span className="text-[#8A6C05]">Real brands.</span>
            </h2>
          </div>

          <div className="max-w-md md:pb-1">
            <p className="text-sm leading-7 text-[#171517]/65 sm:text-base">
              Har brand ki apni story hai. Explore the work,
              campaigns and creative thinking behind each partnership.
            </p>
          </div>
        </div>

        {/* Mobile: horizontal swipe | Desktop: grid */}
        <div
          className={[
            "flex snap-x snap-mandatory gap-4 overflow-x-auto",
            "px-5 pb-5",
            "sm:px-8 sm:gap-5",
            "lg:grid lg:grid-cols-3 lg:overflow-visible",
            "lg:px-12 lg:pb-0",
            "[-ms-overflow-style:none] [scrollbar-width:none]",
            "[&::-webkit-scrollbar]:hidden",
          ].join(" ")}
          aria-label="Partner case studies"
        >
          {partners.map((partner) => (
            <div
              key={partner.slug}
              className="w-[84%] shrink-0 snap-start sm:w-[58%] lg:w-auto"
            >
              <PartnerCard partner={partner} />
            </div>
          ))}
        </div>

        {/* Mobile swipe hint */}
        <p className="mt-1 px-5 text-xs text-[#171517]/45 sm:px-8 lg:hidden">
          Swipe to explore more
        </p>

        {/* Bottom CTA */}
        <div className="mx-5 mt-10 flex flex-col gap-5 rounded-2xl border border-[#171517]/10 bg-white p-6 sm:mx-8 sm:mt-12 sm:p-8 md:flex-row md:items-center md:justify-between lg:mx-12">
          <div>
            <h3 className="font-display text-xl font-semibold tracking-tight text-[#171517] sm:text-2xl">
              Have a brand we should grow together?
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#171517]/60">
              Let’s find the right story for your business.
            </p>
          </div>

          <Link
            href="/contact"
            className={[
              "inline-flex min-h-12 shrink-0 items-center justify-center",
              "gap-3 self-start rounded-full bg-[#171517] px-6 py-3",
              "text-sm font-semibold text-white",
              "transition-colors duration-300 hover:bg-[#8A6C05]",
              "focus-visible:outline-none focus-visible:ring-2",
              "focus-visible:ring-[#8A6C05] focus-visible:ring-offset-2",
              "motion-reduce:transition-none md:self-auto",
            ].join(" ")}
          >
            Start a conversation
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
