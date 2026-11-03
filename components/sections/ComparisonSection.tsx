"use client";

import { Fragment, useRef } from "react";

import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { comparison } from "@/content/page-sections";
import { useReveal } from "@/lib/use-reveal";

export function ComparisonSection() {
  const ref = useRef<HTMLElement>(null);

  useReveal(ref);

  return (
    <section
      id="comparison"
      ref={ref}
      className="relative overflow-hidden bg-[#F7F6F2] py-16 text-[#171717] sm:py-24 lg:py-32"
    >
      <Container>
        {/* Section heading */}
        <div
          data-reveal
          className="grid gap-6 border-t border-[#171717]/15 pt-5 sm:gap-8 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#8A6C05]/20 bg-[#8A6C05]/[0.07] px-3.5 py-2">
              <span className="size-1.5 rounded-full bg-[#8A6C05]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8A6C05] sm:text-xs">
                A better way to grow
              </span>
            </div>

            <h2 className="mt-6 max-w-4xl text-[clamp(2.7rem,7vw,6.5rem)] font-semibold leading-[0.94] tracking-[-0.065em]">
              {comparison.headline}
              <span className="text-[#8A6C05]">.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#55524C] sm:text-base sm:leading-8 lg:col-span-4 lg:justify-self-end lg:pb-1">
            {comparison.sub}
          </p>
        </div>

        {/* Comparison board */}
        <div data-reveal className="mt-10 sm:mt-16 lg:mt-20">
          <div className="overflow-hidden rounded-2xl border border-[#EAE7DF] bg-white shadow-[0_16px_50px_rgba(23,23,23,0.06)] sm:rounded-3xl">
            {/* Column headings */}
            <div className="grid grid-cols-2 border-b border-[#EAE7DF] sm:grid-cols-[0.9fr_1.15fr_1.15fr]">
              <div className="hidden items-end p-6 pb-7 sm:flex lg:p-8">
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#77766D]">
                  What matters
                </span>
              </div>

              {/* FreeKit */}
              <div className="relative flex min-h-[150px] flex-col justify-between overflow-hidden bg-[#171717] p-4 text-white sm:min-h-[190px] sm:p-6 lg:p-8">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-12 -top-12 size-36 rounded-full border border-white/[0.09] sm:size-48"
                />

                <div className="relative flex items-center justify-between gap-2">
                  <span className="rounded-full border border-white/20 bg-white/[0.06] px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-white/80 sm:text-[10px]">
                    Our approach
                  </span>

                  <Icon
                    name="sparkles"
                    className="size-4 shrink-0 text-[#FBE17D] sm:size-5"
                  />
                </div>

                <div className="relative mt-7">
                  <h3 className="text-2xl font-semibold tracking-[-0.06em] sm:text-4xl lg:text-5xl">
                    Freekit<span className="text-[#F7C928]">.</span>
                  </h3>

                  <p className="mt-2 text-[11px] leading-5 text-white/60 sm:text-sm">
                    Built around your growth.
                  </p>
                </div>
              </div>

              {/* Typical agency */}
              <div className="flex min-h-[150px] flex-col justify-between bg-[#FFF9E5] p-4 sm:min-h-[190px] sm:p-6 lg:p-8">
                <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#77766D] sm:text-[10px]">
                  The usual way
                </span>

                <div className="mt-7">
                  <h3 className="text-lg font-semibold leading-tight tracking-[-0.045em] text-[#55524C] sm:text-3xl">
                    Typical agency
                  </h3>

                  <p className="mt-2 text-[11px] leading-5 text-[#77766D] sm:text-sm">
                    The standard playbook.
                  </p>
                </div>
              </div>
            </div>

            {/* Comparison rows */}
            <div>
              {comparison.rows.map((row, index) => (
                <Fragment key={row.label}>
                  <div
                    className={[
                      "grid grid-cols-2 transition-colors duration-200 hover:bg-[#F7F6F2] sm:grid-cols-[0.9fr_1.15fr_1.15fr]",
                      index !== 0 ? "border-t border-[#EAE7DF]" : "",
                    ].join(" ")}
                  >
                    {/* Feature label */}
                    <div className="col-span-2 flex items-center justify-between gap-3 border-b border-[#EAE7DF]/70 px-4 py-4 sm:col-span-1 sm:border-b-0 sm:px-6 sm:py-6 lg:px-8">
                      <span className="text-sm font-semibold tracking-[-0.025em] sm:text-base">
                        {row.label}
                      </span>

                      <span className="font-mono text-[10px] text-[#77766D]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* FreeKit advantage */}
                    <div className="flex items-start gap-2.5 bg-[#8A6C05]/[0.075] px-3.5 py-4 sm:px-5 sm:py-6 lg:px-7">
                      <span
                        aria-hidden="true"
                        className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#8A6C05] text-white"
                      >
                        <Icon name="check" className="size-3" />
                      </span>

                      <div className="min-w-0">
                        <span className="mb-1.5 block text-[9px] font-semibold uppercase tracking-[0.1em] text-[#8A6C05] sm:hidden">
                          FreeKit
                        </span>

                        <p className="break-words text-xs leading-6 text-[#292927] sm:text-sm sm:leading-7">
                          {row.us}
                        </p>
                      </div>
                    </div>

                    {/* Typical agency */}
                    <div className="flex items-start gap-2.5 px-3.5 py-4 sm:px-5 sm:py-6 lg:px-7">
                      <span
                        aria-hidden="true"
                        className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full border border-[#EAE7DF] text-[#77766D]"
                      >
                        <Icon name="minus" className="size-3" />
                      </span>

                      <div className="min-w-0">
                        <span className="mb-1.5 block text-[9px] font-semibold uppercase tracking-[0.1em] text-[#77766D] sm:hidden">
                          Typical agency
                        </span>

                        <p className="break-words text-xs leading-6 text-[#55524C] sm:text-sm sm:leading-7">
                          {row.them}
                        </p>
                      </div>
                    </div>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>

          {/* Table footer */}
          {/* <div className="mt-4 flex flex-col gap-2 px-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <p className="text-[10px] leading-5 text-[#77766D] sm:text-xs">
              Different priorities. Different outcomes.
            </p>

            
          </div> */}
        </div>

        {/* Closing CTA */}
        {/* <div
          data-reveal
          className="mt-16 border-t border-[#171717]/15 pt-7 sm:mt-24 sm:pt-10"
        >
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
            <div className="max-w-3xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8A6C05] sm:text-xs">
                Your business deserves better
              </p>

              <h3 className="mt-4 text-3xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-4xl lg:text-6xl">
                Less guesswork.
                <br />
                <span className="text-[#8A6C05]">
                  More meaningful growth.
                </span>
              </h3>
            </div>

            <a
              href="/contact"
              className="group inline-flex min-h-14 w-full items-center justify-between gap-5 rounded-full bg-[#171717] py-2 pl-6 pr-2 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#8A6C05] sm:w-fit sm:min-w-[220px]"
            >
              <span>Discuss your goals</span>

              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-0.5">
                <Icon name="arrowRight" className="size-4" />
              </span>
            </a>
          </div>
        </div> */}
      </Container>
    </section>
  );
}
