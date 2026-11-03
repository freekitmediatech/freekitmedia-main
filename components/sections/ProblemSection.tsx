
"use client";

import { Container } from "@/components/ui/Container";
import { losses, problem } from "@/content/page-sections";
import { useRef } from "react";
import { useReveal } from "@/lib/use-reveal";

export function ProblemSection() {
  const ref = useRef<HTMLElement>(null);

  useReveal(ref);

  return (
    <section
      ref={ref}
      id="problem"
      className="relative overflow-hidden bg-[#F8F7F4] py-24 text-[#25251F] sm:py-32 lg:py-40"
    >
      <Container>
        {/* Editorial header */}
        <div className="relative">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-brand" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#77766D] sm:text-xs">
                Reality check
              </span>
            </div>

            <span className="text-[10px] uppercase tracking-[0.18em] text-[#929087] sm:text-xs">
              The problem / 01
            </span>
          </div>

          <div
            data-reveal
            className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-[1fr_auto] lg:items-end"
          >
            <h2 className="max-w-5xl font-display text-5xl font-semibold leading-[0.91] tracking-[-0.065em] sm:text-7xl lg:text-[clamp(5rem,10vw,9.5rem)]">
              {problem.headline}
              <span className="text-brand">.</span>
            </h2>

            <div className="flex items-end gap-3 lg:pb-3">
              <span className="h-12 w-px bg-[#DCD8CE]" />
              <p className="max-w-[210px] text-xs leading-6 text-[#77766D] sm:text-sm">
                The gap between doing good work and being recognised for it.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-8 border-t border-[#DFDCD3] pt-7 sm:mt-14 sm:grid-cols-2 sm:gap-12 lg:mt-16 lg:pt-9">
            <p
              data-reveal
              className="max-w-xl text-base leading-8 text-[#77766D] sm:text-lg sm:leading-9"
            >
              {problem.text}
            </p>

            <div data-reveal className="flex items-start gap-4 sm:justify-end">
              <span className="mt-1 text-2xl leading-none text-brand">↳</span>
              <p className="max-w-lg font-display text-xl font-medium leading-snug tracking-[-0.035em] sm:text-2xl lg:text-3xl">
                {problem.line}
              </p>
            </div>
          </div>
        </div>

        {/* Problem list */}
        <div className="mt-20 sm:mt-28 lg:mt-36">
          <div className="mb-6 flex items-end justify-between gap-4 sm:mb-9">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#77766D] sm:text-xs">
                The hidden costs
              </p>

              <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.045em] sm:text-3xl">
                What&apos;s holding you back
              </h3>
            </div>

            <span className="font-display text-sm tabular-nums text-[#929087]">
              {String(losses.length).padStart(2, "0")} issues
            </span>
          </div>

          <ol className="border-t border-[#DCD8CE]">
            {losses.map((loss, i) => (
              <li
                key={loss.title}
                data-reveal
                className="group border-b border-[#DCD8CE]"
              >
                <article className="relative grid gap-4 py-7 transition-colors duration-300 sm:py-9 lg:grid-cols-[100px_1fr_60px] lg:gap-8 lg:py-10">
                  {/* Giant index */}
                  <div className="flex items-center justify-between lg:block">
                    <span className="font-display text-4xl font-medium leading-none tracking-[-0.07em] text-[#C7C3B9] transition-colors duration-300 group-hover:text-brand sm:text-5xl lg:text-6xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <span className="text-[10px] uppercase tracking-[0.16em] text-[#929087] lg:hidden">
                      Issue {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="max-w-3xl">
                    <h4 className="font-display text-2xl font-semibold leading-tight tracking-[-0.04em] transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl lg:text-4xl">
                      {loss.title}
                    </h4>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[#77766D] sm:mt-4 sm:text-base sm:leading-8">
                      {loss.text}
                    </p>
                  </div>

                  {/* Minimal arrow */}
                  <div className="hidden items-start justify-end pt-1 lg:flex">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DFDCD3] text-lg text-[#77766D] transition-all duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                      ↗
                    </span>
                  </div>
                </article>
              </li>
            ))}
          </ol>

          {/* Closing statement */}
          <div
            data-reveal
            className="mt-10 flex flex-col gap-5 sm:mt-14 sm:flex-row sm:items-end sm:justify-between"
          >
            <p className="max-w-2xl font-display text-2xl font-medium leading-tight tracking-[-0.04em] sm:text-3xl lg:text-4xl">
              The first step to growth is understanding what&apos;s in the way.
            </p>

            <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#929087]">
              Awareness comes first ↗
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
