
"use client";

import { Container } from "@/components/ui/Container";
import { noShortcuts } from "@/content/page-sections";
import { useRef } from "react";
import { useReveal } from "@/lib/use-reveal";

export function NoShortcuts() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden bg-[#292D22] text-[#F5F1E8]"
    >
      {/* Subtle editorial background detail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-20 -z-10 size-[28rem] rounded-full border border-[#F5F1E8]/[0.07] sm:size-[42rem]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 top-48 -z-10 size-[20rem] rounded-full border border-[#F5F1E8]/[0.07] sm:size-[32rem]"
      />

      <Container className="py-16 sm:py-24 lg:py-32">
        {/* Top metadata */}
        <div
          data-reveal
          className="flex items-center justify-between gap-4 border-t border-[#F5F1E8]/25 pt-4"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F5F1E8]/65 sm:text-xs">
            The manifesto
          </p>
          <p className="text-[10px] uppercase tracking-[0.16em] text-[#F5F1E8]/50 sm:text-xs">
            Principles / 001—003
          </p>
        </div>

        {/* Oversized poster typography */}
        <div className="relative mt-16 sm:mt-24 lg:mt-28">
          <p
            data-reveal
            className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C5C9A7] sm:text-xs"
          >
            Na lalach. Na dhoka.
          </p>

          <h2
            data-reveal
            className="font-display max-w-[1200px] text-[clamp(3.4rem,10.8vw,10rem)] font-black uppercase leading-[0.76] tracking-[-0.085em]"
          >
            {noShortcuts.title}
            <span className="text-[#C5C9A7]">.</span>
          </h2>

          <div className="mt-10 grid gap-8 sm:mt-14 sm:grid-cols-12 sm:items-end">
            <div data-reveal className="sm:col-span-7">
              <p className="max-w-xl font-display text-xl font-semibold leading-tight tracking-tight sm:text-2xl lg:text-3xl">
                &ldquo;{noShortcuts.line}&rdquo;
              </p>
            </div>

            <div data-reveal className="sm:col-span-5 sm:justify-self-end">
              <p className="max-w-xs text-sm leading-relaxed text-[#F5F1E8]/60 sm:text-right">
                No false promises. No shortcuts. Just honest work,
                thoughtful strategy and growth built on trust.
              </p>
            </div>
          </div>
        </div>

        {/* Editorial principles */}
        <div className="mt-16 border-t border-[#F5F1E8]/25 sm:mt-24 lg:mt-32">
          {noShortcuts.items.map((item, index) => (
            <article
              key={item.title}
              data-reveal
              className="group grid grid-cols-[2.5rem_1fr] gap-x-4 gap-y-3 border-b border-[#F5F1E8]/25 py-6 transition-colors duration-300 sm:grid-cols-[4rem_1fr_1fr_auto] sm:items-start sm:gap-6 sm:py-8"
            >
              <span className="pt-1 font-mono text-xs tabular-nums text-[#C5C9A7]">
                0{index + 1}
              </span>

              <h3 className="font-display text-xl font-bold uppercase leading-[0.95] tracking-[-0.04em] transition-transform duration-300 group-hover:translate-x-1 sm:text-2xl lg:text-3xl">
                {item.title}
              </h3>

              <p className="col-start-2 max-w-md text-sm leading-relaxed text-[#F5F1E8]/60 sm:col-start-auto">
                {item.text}
              </p>

              <span
                aria-hidden="true"
                className="hidden text-xl text-[#C5C9A7] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 sm:block"
              >
                ↗
              </span>
            </article>
          ))}
        </div>

        {/* Closing signature */}
        <div
          data-reveal
          className="flex flex-wrap items-end justify-between gap-6 pt-6 sm:pt-8"
        >
          <p className="font-display text-sm font-bold uppercase tracking-tight sm:text-base">
            Trust is the strategy.
          </p>

          <p className="text-[9px] uppercase tracking-[0.18em] text-[#F5F1E8]/45 sm:text-[10px]">
            Built on honesty / Always
          </p>
        </div>
      </Container>
    </section>
  );
}
