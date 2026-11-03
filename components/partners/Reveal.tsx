"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Reveal({
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
      initial={{ opacity: 0, y: reduce ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reduce ? 0 : 0.65,
        delay: reduce ? 0 : delay,
        ease: EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHead({
  eyebrow,
  count,
  title,
  sub,
  id,
}: {
  eyebrow: string;
  count?: string;
  title: string;
  sub?: string;
  id?: string;
}) {
  return (
    <Reveal>
      <div className="flex items-center justify-between gap-4 border-t border-[#171717]/15 pt-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8A6C05] sm:text-xs">
          {eyebrow}
        </p>
        {count ? (
          <p className="shrink-0 font-mono text-[10px] text-[#77766D] sm:text-xs">
            {count}
          </p>
        ) : null}
      </div>

      <h2
        id={id}
        className="font-display mt-7 max-w-3xl text-balance text-[clamp(2rem,6.5vw,4rem)] font-semibold leading-[1.02] tracking-[-0.045em] sm:mt-9"
      >
        {title}
      </h2>

      {sub ? (
        <p className="mt-4 max-w-xl text-pretty text-[15px] leading-7 text-[#55524C] sm:text-lg sm:leading-8">
          {sub}
        </p>
      ) : null}
    </Reveal>
  );
}