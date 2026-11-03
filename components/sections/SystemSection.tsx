
"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { systemPillars } from "@/content/page-sections";

const systemImages = [
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85",
    alt: "Business analytics and performance dashboard",
    label: "01 — GET DISCOVERED",
  },
  {
    src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85",
    alt: "Creative team collaborating around a table",
    label: "02 — BUILD CREDIBILITY",
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=85",
    alt: "Team planning a business growth strategy",
    label: "03 — SCALE WITH INTENT",
  },
];

export function SystemSection() {
  return (
    <section
      id="system"
      className="overflow-hidden bg-[#F8F7F4] py-24 text-[#25251F] sm:py-32 lg:py-36"
    >
      <Container>
        {/* Section introduction */}
        <header className="mb-16 sm:mb-20 lg:mb-24">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-brand" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#77766D]">
              Hamara system
            </p>
          </div>

          <div className="mt-7 grid gap-7 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
            <h2 className="max-w-4xl font-display text-4xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-[clamp(4rem,7vw,6.5rem)]">
              Attention se
              <br />
              <span className="text-[#929087]">real growth tak.</span>
            </h2>

            <div className="max-w-lg lg:justify-self-end lg:pb-2">
              <p className="text-sm leading-7 text-[#77766D] sm:text-base sm:leading-8">
                Strong brands happen by design, not by accident. Hum visibility,
                credibility aur growth ko ek clear, repeatable system mein
                convert karte hain.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <span className="h-px w-9 bg-brand" />
                <span className="text-xs font-medium text-[#55544D]">
                  Three steps. One connected system.
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Full-width editorial cards */}
        <div className="space-y-7 sm:space-y-10 lg:space-y-14">
          {systemPillars.map((pillar, index) => {
            const image = systemImages[index % systemImages.length];
            const reverse = index % 2 === 1;
            const number = String(index + 1).padStart(2, "0");

            return (
              <article
                key={pillar.num}
                className="group relative"
              >
                <div
                  className={[
                    "grid overflow-hidden rounded-[24px] border border-[#E5E2DA] bg-white",
                    "shadow-[0_4px_20px_rgba(37,37,31,0.025)]",
                    "transition-[border-color,box-shadow] duration-500",
                    "hover:border-[#D5D0C5] hover:shadow-[0_18px_55px_rgba(37,37,31,0.07)]",
                    "lg:min-h-[470px] lg:grid-cols-2 lg:rounded-[30px]",
                  ].join(" ")}
                >
                  {/* Image panel */}
                  <div
                    className={[
                      "relative min-h-[260px] overflow-hidden bg-[#EAE8E1] sm:min-h-[350px] lg:min-h-[470px]",
                      reverse ? "lg:order-2" : "lg:order-1",
                    ].join(" ")}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={index === 0}
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035] motion-reduce:transition-none"
                    />

                    {/* Restrained image treatment */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/[0.04]" />

                    <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                      <span className="inline-flex rounded-full border border-white/30 bg-white/90 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#33332D] backdrop-blur-md sm:text-[10px]">
                        {image.label}
                      </span>
                    </div>

                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 sm:bottom-7 sm:left-7 sm:right-7">
                      <span className="font-display text-6xl font-semibold leading-none tracking-[-0.07em] text-white/90 sm:text-8xl">
                        {number}
                      </span>

                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-white/10 text-lg text-white backdrop-blur-sm transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-[#25251F] sm:h-12 sm:w-12">
                        ↗
                      </span>
                    </div>
                  </div>

                  {/* Text panel */}
                  <div
                    className={[
                      "flex flex-col justify-between p-6 sm:p-9 lg:p-11 xl:p-14",
                      reverse ? "lg:order-1" : "lg:order-2",
                    ].join(" ")}
                  >
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-display text-xs font-semibold tracking-[0.12em] text-brand">
                          STEP {number}
                        </span>
                        <span className="h-px flex-1 bg-[#EAE7DF]" />
                        <span className="text-[10px] uppercase tracking-[0.14em] text-[#99968C]">
                          Our approach
                        </span>
                      </div>

                      <h3 className="mt-8 max-w-xl font-display text-3xl font-semibold leading-[1.08] tracking-[-0.045em] sm:mt-10 sm:text-4xl lg:mt-12 lg:text-[clamp(2.4rem,3.4vw,3.6rem)]">
                        {pillar.name}
                      </h3>

                      <p className="mt-5 max-w-xl text-sm leading-7 text-[#77766D] sm:mt-6 sm:text-base sm:leading-8">
                        {pillar.desc}
                      </p>
                    </div>

                    <div className="mt-9 border-t border-[#EAE7DF] pt-6 sm:mt-12 sm:pt-7">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand">
                        The outcome
                      </p>

                      <div className="mt-3 flex items-start gap-3">
                        <span className="mt-[3px] text-lg text-brand">↳</span>
                        <p className="max-w-lg font-display text-base font-medium leading-7 tracking-[-0.015em] text-[#33332D] sm:text-lg sm:leading-8">
                          {pillar.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Closing statement */}
        <div className="mt-16 flex flex-col gap-5 border-t border-[#DFDCD3] pt-7 sm:mt-20 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl font-display text-lg font-medium tracking-[-0.025em] text-[#55544D] sm:text-xl">
            Not random activity. A system built to compound.
          </p>

          <a
            href="#contact"
            className="inline-flex w-fit items-center gap-3 text-sm font-semibold text-[#25251F] transition-colors hover:text-brand"
          >
            Explore a plan together
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
}
