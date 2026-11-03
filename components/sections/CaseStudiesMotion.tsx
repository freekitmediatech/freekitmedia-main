"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import type { ReactNode } from "react";

import { Icon } from "@/components/ui/Icon";

const EASE = [0.22, 1, 0.36, 1] as const;

type Study = {
  slug: string;
  industry: string;
  city: string;
  title: string;
  summary: string;
  servicesUsed: readonly string[];
};

/* Generic fade-up wrapper (hero ke liye) */
export function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion() ?? false;

  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: reduce ? 0 : 0.7,
        delay: reduce ? 0 : delay,
        ease: EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function CaseStudiesList({ studies }: { studies: readonly Study[] }) {
  const reduce = useReducedMotion() ?? false;

  return (
    <div className="overflow-hidden rounded-2xl border border-[#171717]/10 bg-white/70">
      {studies.map((study, index) => (
        <motion.article
          key={study.slug}
          initial={{ opacity: 0, y: reduce ? 0 : 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduce ? 0 : 0.65, ease: EASE }}
          className="group relative border-b border-[#171717]/10 transition-colors duration-300 last:border-b-0 hover:bg-[#FFF9E5] focus-within:bg-[#FFF9E5]"
        >
          {/* Hover pe gold bar */}
          <span
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-0.5 origin-top scale-y-0 bg-[#8A6C05] transition-transform duration-500 ease-out group-hover:scale-y-100 group-focus-within:scale-y-100 motion-reduce:transition-none"
          />

          <div className="grid grid-cols-[minmax(0,1fr)_2.25rem] items-start gap-4 p-5 sm:grid-cols-[2.5rem_minmax(0,1fr)_2.75rem] sm:gap-6 sm:p-7 lg:grid-cols-[4rem_minmax(0,1fr)_3rem] lg:p-10">
            {/* Number: sm+ */}
            <span className="hidden pt-1 font-mono text-xs text-[#77766D] transition-colors group-hover:text-[#8A6C05] sm:block">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[#77766D] sm:text-xs">
                <span className="font-semibold text-[#8A6C05]">
                  {study.industry}
                </span>
                <span
                  aria-hidden="true"
                  className="size-1 rounded-full bg-[#8A6C05]/50"
                />
                <span>{study.city}</span>
              </div>

              <h2 className="font-display mt-3 text-balance text-xl font-semibold leading-snug tracking-[-0.03em] transition-colors duration-300 group-hover:text-[#8A6C05] sm:text-2xl lg:text-4xl lg:leading-[1.1]">
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="outline-none after:absolute after:inset-0 after:content-[''] focus-visible:underline focus-visible:decoration-[#8A6C05]/50 focus-visible:underline-offset-4"
                >
                  {study.title}
                </Link>
              </h2>

              <p className="mt-3 line-clamp-3 max-w-2xl text-pretty text-sm leading-6 text-[#55524C] sm:text-base sm:leading-7">
                {study.summary}
              </p>

              {study.servicesUsed.length > 0 && (
                <ul className="mt-5 flex flex-wrap gap-2">
                  {study.servicesUsed.map((service) => (
                    <li
                      key={service}
                      className="rounded-full border border-[#8A6C05]/15 bg-white/70 px-3 py-1 text-[11px] font-medium text-[#55524C] sm:text-xs"
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <span
              aria-hidden="true"
              className="grid size-9 place-items-center justify-self-end rounded-full border border-[#171717]/15 text-[#55524C] transition-all duration-300 group-hover:border-[#8A6C05] group-hover:bg-[#8A6C05] group-hover:text-white sm:size-11"
            >
              <Icon
                name="arrowRight"
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </span>
          </div>
        </motion.article>
      ))}
    </div>
  );
}