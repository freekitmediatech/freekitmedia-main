"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

type Loc = {
  slug: string;
  city: string;
  intro: string;
};

/* Coordinates: city ke naam se match hote hain */
const coords: Record<string, { lat: number; lon: number }> = {
  bilaspur: { lat: 22.0797, lon: 82.1409 },
  ambikapur: { lat: 23.119, lon: 83.1952 },
  raipur: { lat: 21.2514, lon: 81.6296 },
};

const fallback = { lat: 21.2787, lon: 81.8661 }; // Chhattisgarh center

function getCoords(city: string) {
  return coords[city.trim().toLowerCase()] ?? fallback;
}

function embedUrl({ lat, lon }: { lat: number; lon: number }) {
  const d = 0.09;
  const bbox = `${lon - d},${lat - d * 0.75},${lon + d},${lat + d * 0.75}`;
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lon}`;
}

function largeMapUrl({ lat, lon }: { lat: number; lon: number }) {
  return `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=13/${lat}/${lon}`;
}

export function LocationsExplorer({ items }: { items: readonly Loc[] }) {
  const reduce = useReducedMotion() ?? false;
  const [activeIndex, setActiveIndex] = useState(0);

  const active = items[activeIndex];
  if (!active) return null;

  const c = getCoords(active.city);

  return (
    <div>
      {/* City chips: mobile pe horizontal scroll */}
      <div
        role="tablist"
        aria-label="Select city"
        className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={item.slug}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border px-5 text-sm font-medium transition-all duration-300",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8A6C05] focus-visible:ring-offset-2",
                isActive
                  ? "border-[#171717] bg-[#171717] text-white"
                  : "border-[#171717]/15 bg-white/70 text-[#55524C] hover:border-[#8A6C05]/50 hover:text-[#8A6C05]",
              )}
            >
              <span
                className={cn(
                  "size-1.5 rounded-full",
                  isActive ? "bg-[#F7C928]" : "bg-[#8A6C05]/50",
                )}
              />
              {item.city}
            </button>
          );
        })}
      </div>

      <div className="mt-5 grid gap-4 sm:mt-6 sm:gap-5 lg:grid-cols-12 lg:gap-6">
        {/* Map */}
        <div className="min-w-0 lg:col-span-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#171717]/10 bg-[#EAE7DF] sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[460px]">
            <motion.iframe
              key={active.slug}
              title={`${active.city} map`}
              src={embedUrl(c)}
              loading="lazy"
              referrerPolicy="no-referrer"
              initial={{ opacity: reduce ? 1 : 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: reduce ? 0 : 0.6, ease: EASE }}
              className="absolute inset-0 size-full border-0"
            />

            <a
              href={largeMapUrl(c)}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 right-3 inline-flex min-h-9 items-center gap-1.5 rounded-full bg-white/95 px-3.5 text-xs font-semibold text-[#171717] shadow-[0_6px_20px_-10px_rgba(23,23,23,0.5)] backdrop-blur transition-colors hover:text-[#8A6C05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8A6C05]"
            >
              Bada map dekho
              <Icon name="arrowRight" className="size-3.5" />
            </a>
          </div>
        </div>

        {/* Active city card */}
        <motion.div
          key={`card-${active.slug}`}
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0 : 0.55, ease: EASE }}
          className="flex min-w-0 flex-col rounded-2xl border border-[#171717]/10 bg-[#FFF9E5] p-5 sm:p-7 lg:col-span-4"
        >
          <p className="flex items-center justify-between gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8A6C05] sm:text-xs">
            <span>Now viewing</span>
            <span className="font-mono text-[#77766D]">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(items.length).padStart(2, "0")}
            </span>
          </p>

          <h2 className="font-display mt-5 text-balance text-3xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-4xl">
            {active.city}
          </h2>

          <p className="mt-4 text-pretty text-sm leading-6 text-[#55524C] sm:text-base sm:leading-7">
            {active.intro}
          </p>

          <Link
            href={`/locations/${active.slug}`}
            className="group mt-6 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[#171717] px-6 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#8A6C05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8A6C05] focus-visible:ring-offset-2 lg:mt-auto"
          >
            Explore {active.city}
            <Icon
              name="arrowRight"
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>

      {/* All cities */}
      <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
        {items.map((item, index) => (
          <motion.article
            key={item.slug}
            initial={{ opacity: 0, y: reduce ? 0 : 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: reduce ? 0 : 0.65,
              delay: reduce ? 0 : (index % 3) * 0.07,
              ease: EASE,
            }}
            onMouseEnter={() => setActiveIndex(index)}
            className="group relative flex flex-col rounded-2xl border border-[#171717]/10 bg-white/75 p-5 transition-colors duration-300 focus-within:border-[#8A6C05]/40 hover:border-[#8A6C05]/40 hover:bg-[#FFF9E5] sm:p-6"
          >
            <p className="font-mono text-[10px] text-[#77766D] sm:text-xs">
              {String(index + 1).padStart(2, "0")}
            </p>

            <h3 className="font-display mt-4 text-balance text-xl font-semibold leading-tight tracking-[-0.03em] transition-colors duration-300 group-hover:text-[#8A6C05] sm:text-2xl">
              <Link
                href={`/locations/${item.slug}`}
                className="outline-none after:absolute after:inset-0 after:content-[''] focus-visible:underline focus-visible:decoration-[#8A6C05]/50 focus-visible:underline-offset-4"
              >
                Digital marketing in {item.city}
              </Link>
            </h3>

            <p className="mt-3 line-clamp-4 text-pretty text-sm leading-6 text-[#55524C] sm:text-[15px] sm:leading-7">
              {item.intro}
            </p>

            <div className="mt-auto flex items-center justify-between gap-3 pt-6">
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8A6C05]">
                Explore {item.city}
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
        ))}
      </div>
    </div>
  );
}