"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/components/ui/Icon";
import type { Partner } from "@/content/partners";

const EASE = [0.22, 1, 0.36, 1] as const;

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
}

export function PartnersGrid({ partners }: { partners: readonly Partner[] }) {
  const reduce = useReducedMotion() ?? false;

  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
      {partners.map((partner, index) => {
        const place = [partner.city, partner.franchise ? "Franchise" : ""]
          .filter(Boolean)
          .join(" / ");

        return (
          <motion.article
            key={partner.slug}
            initial={{ opacity: 0, y: reduce ? 0 : 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: reduce ? 0 : 0.65,
              delay: reduce ? 0 : (index % 3) * 0.07,
              ease: EASE,
            }}
            className="group relative flex min-h-[260px] flex-col overflow-hidden rounded-2xl border border-[#171717]/10 bg-white/75 p-5 transition-colors duration-300 focus-within:border-[#8A6C05]/40 hover:border-[#8A6C05]/40 hover:bg-[#FFF9E5] sm:p-6"
          >
            {/* Top row */}
            <div className="flex items-start justify-between gap-3">
              <div className="relative grid size-14 shrink-0 place-items-center overflow-hidden rounded-xl border border-[#171717]/10 bg-[#F7F6F2] sm:size-16">
                {partner.logo ? (
                  <Image
                    src={partner.logo}
                    alt=""
                    fill
                    sizes="64px"
                    className="object-contain p-2"
                  />
                ) : (
                  <span className="font-display text-lg font-semibold text-[#8A6C05]">
                    {initials(partner.name)}
                  </span>
                )}
              </div>

              <span className="font-mono text-[10px] text-[#77766D] sm:text-xs">
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(partners.length).padStart(2, "0")}
              </span>
            </div>

            {/* Meta */}
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[#77766D] sm:text-xs">
              <span className="font-semibold text-[#8A6C05]">
                {partner.industry}
              </span>
              {place ? (
                <>
                  <span
                    aria-hidden="true"
                    className="size-1 rounded-full bg-[#8A6C05]/50"
                  />
                  <span>{place}</span>
                </>
              ) : null}
            </div>

            <h2 className="font-display mt-3 text-balance text-2xl font-semibold leading-tight tracking-[-0.03em] transition-colors duration-300 group-hover:text-[#8A6C05] sm:text-[1.7rem]">
              <Link
                href={`/partners/${partner.slug}`}
                className="outline-none after:absolute after:inset-0 after:z-10 after:content-[''] focus-visible:underline focus-visible:decoration-[#8A6C05]/50 focus-visible:underline-offset-4"
              >
                {partner.name}
              </Link>
            </h2>

            <p className="mt-3 line-clamp-3 text-pretty text-sm leading-6 text-[#55524C] sm:text-[15px] sm:leading-7">
              {partner.oneLine}
            </p>

            <div className="mt-auto flex items-center justify-between gap-3 pt-6">
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8A6C05]">
                Explore partner
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
          </motion.article>
        );
      })}
    </div>
  );
}