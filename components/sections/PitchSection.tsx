"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";

import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { industries } from "@/content/industries";
import { useReveal } from "@/lib/use-reveal";

const industryVisuals = [
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85",
];

const ctaClasses =
  "group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[#171717] px-6 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#8A6C05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8A6C05] focus-visible:ring-offset-2 sm:w-auto";

export function PitchSection() {
  const ref = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useReveal(ref);

  const activeIndustry = industries[activeIndex];

  const getIndustryImage = (index: number) =>
    industryVisuals[index % industryVisuals.length];

  return (
    <section
      id="industries"
      ref={ref}
      className="relative overflow-hidden bg-[#F7F6F2] py-16 text-[#171717] sm:py-24 lg:py-36"
    >
      <Container>
        {/* Section heading */}
        <div
          data-reveal
          className="flex items-center justify-between gap-4 border-t border-[#171717]/15 pt-5"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8A6C05] sm:text-xs">
            Industries we serve
          </p>

          <p className="shrink-0 font-mono text-[10px] text-[#77766D] sm:text-xs">
            {String(industries.length).padStart(2, "0")} CATEGORIES
          </p>
        </div>

        <div className="mt-8 grid gap-8 sm:mt-10 lg:mt-16 lg:grid-cols-12 lg:gap-12">
          {/* Left: heading, image and CTA */}
          <div className="min-w-0 lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <p
                data-reveal
                className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8A6C05] sm:text-xs"
              >
                Industries we work with
              </p>

              <h2
                data-reveal
                className="font-display mt-4 text-[2.35rem] font-extrabold leading-[0.95] tracking-[-0.06em] sm:mt-5 sm:text-6xl lg:text-[clamp(3rem,5.2vw,5.5rem)] lg:leading-[0.9] lg:tracking-[-0.075em]"
              >
                Marketing that
                <br />
                <span className="text-[#8A6C05]">fits your industry.</span>
              </h2>

              <p
                data-reveal
                className="mt-4 max-w-md text-sm leading-7 text-[#55524C] sm:mt-5 sm:text-base"
              >
                From clinics and jewellery showrooms to real estate and
                education, we shape content and campaigns around how your
                customers choose.
              </p>

              {/* Active industry image — desktop only */}
              <div
                data-reveal
                className="group relative mt-10 hidden aspect-[5/4] overflow-hidden rounded-2xl bg-[#EAE7DF] lg:block"
              >
                {activeIndustry && (
                  <>
                    <Image
                      key={activeIndustry.slug}
                      src={getIndustryImage(activeIndex)}
                      alt={`${activeIndustry.name} industry`}
                      fill
                      sizes="42vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/80 via-[#171717]/10 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                      <div className="flex items-end justify-between gap-3">
                        <div className="min-w-0">
                          <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/70">
                            Industry spotlight
                          </p>

                          <h3 className="font-display mt-2 text-3xl font-bold tracking-tight">
                            {activeIndustry.name}
                          </h3>
                        </div>

                        <span className="shrink-0 font-mono text-xs text-white/75">
                          {String(activeIndex + 1).padStart(2, "0")} /{" "}
                          {String(industries.length).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* CTA — desktop only (mobile pe list ke neeche) */}
              <Link
                href="/#contact"
                className={`${ctaClasses} mt-6 hidden lg:inline-flex`}
              >
                Get a free marketing audit
                <Icon
                  name="arrowRight"
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* Right: interactive industry list */}
          <div className="min-w-0 lg:col-span-7">
            <div className="mb-3 flex items-center justify-between gap-3 sm:mb-4">
              <p className="text-xs font-semibold text-[#292927]">
                Choose your industry
              </p>

              <p className="text-[10px] text-[#77766D] sm:text-xs">
                <span className="lg:hidden">Tap to see what matters</span>
                <span className="hidden lg:inline">
                  Select to see what matters to your customers
                </span>
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#171717]/10 bg-white/70">
              {industries.map((industry, index) => {
                const active = activeIndex === index;

                return (
                  <Link
                    key={industry.slug}
                    href={`/industries/${industry.slug}`}
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                    aria-current={active ? "true" : undefined}
                    className={[
                      "group block border-b border-[#171717]/10 p-3 outline-none transition-colors duration-300 last:border-b-0 sm:p-4 lg:p-5",
                      active
                        ? "bg-[#FFF9E5]"
                        : "hover:bg-[#F7F6F2] focus-visible:bg-[#FFF9E5]",
                    ].join(" ")}
                  >
                    <div className="grid grid-cols-[3.5rem_minmax(0,1fr)_2rem] items-center gap-3 sm:grid-cols-[4.5rem_minmax(0,1fr)_2.5rem] sm:gap-4 lg:grid-cols-[2.5rem_minmax(0,1fr)_2.75rem] lg:items-start">
                      {/* Mobile/tablet: thumbnail */}
                      <div className="relative size-14 overflow-hidden rounded-xl bg-[#EAE7DF] sm:size-[4.5rem] lg:hidden">
                        <Image
                          src={getIndustryImage(index)}
                          alt=""
                          fill
                          sizes="72px"
                          className="object-cover"
                        />
                      </div>

                      {/* Desktop: number */}
                      <span
                        className={[
                          "hidden pt-1 font-mono text-xs transition-colors lg:block",
                          active ? "text-[#8A6C05]" : "text-[#77766D]",
                        ].join(" ")}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="min-w-0">
                        <h3
                          className={[
                            "font-display text-base font-bold leading-snug tracking-[-0.03em] transition-colors sm:text-xl lg:text-3xl lg:tracking-[-0.04em]",
                            active ? "text-[#8A6C05]" : "text-[#171717]",
                          ].join(" ")}
                        >
                          {industry.name}
                        </h3>

                        <div
                          className={[
                            "grid grid-rows-[1fr] opacity-100 lg:transition-[grid-template-rows,opacity] lg:duration-300",
                            active
                              ? "lg:grid-rows-[1fr] lg:opacity-100"
                              : "lg:grid-rows-[0fr] lg:opacity-0",
                          ].join(" ")}
                        >
                          <div className="overflow-hidden">
                            <p className="line-clamp-2 max-w-lg pt-1 text-[13px] leading-5 text-[#55524C] sm:text-sm sm:leading-6 lg:line-clamp-none lg:pt-2">
                              {industry.problemLine}
                            </p>

                            <span className="mt-3 hidden items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8A6C05] lg:inline-flex">
                              Explore industry
                              <Icon name="arrowRight" className="size-3.5" />
                            </span>
                          </div>
                        </div>
                      </div>

                      <span
                        className={[
                          "grid size-8 place-items-center justify-self-end rounded-full border transition-all duration-300 sm:size-10 lg:size-11 lg:justify-self-auto",
                          active
                            ? "border-[#8A6C05] bg-[#8A6C05] text-white"
                            : "border-[#171717]/15 text-[#55524C] group-hover:border-[#8A6C05] group-hover:text-[#8A6C05]",
                        ].join(" ")}
                      >
                        <Icon
                          name="arrowRight"
                          className={[
                            "size-4 transition-transform duration-300",
                            active ? "translate-x-0.5" : "",
                          ].join(" ")}
                        />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>

            <p className="mt-5 text-sm leading-6 text-[#55524C]">
              Don’t see your industry listed?{" "}
              <Link
                href="/#contact"
                className="font-semibold text-[#8A6C05] underline decoration-[#8A6C05]/40 underline-offset-4 transition-colors hover:text-[#171717]"
              >
                Tell us about your business.
              </Link>
            </p>

            {/* CTA — mobile/tablet only */}
            <Link
              href="/#contact"
              className={`${ctaClasses} mt-6 lg:hidden`}
            >
              Get a free marketing audit
              <Icon
                name="arrowRight"
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}