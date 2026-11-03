"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { Icon } from "@/components/ui/Icon";
import { getIndustryImage } from "@/lib/industry-images";

const EASE = [0.22, 1, 0.36, 1] as const;

type Item = {
  slug: string;
  name: string;
  problemLine: string;
};

/* Page ke top pe patli gold progress line */
export function ScrollProgress() {
  const reduce = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-[#8A6C05]"
    />
  );
}

function IndustryCard({
  item,
  index,
  total,
  reduce,
}: {
  item: Item;
  index: number;
  total: number;
  reduce: boolean;
}) {
  const ref = useRef<HTMLElement>(null);

  /* Card screen se guzarte hue image halki upar-neeche hoti hai */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: reduce ? 0 : 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: reduce ? 0 : 0.7, ease: EASE }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#171717]/10 bg-white/75 transition-colors duration-300 focus-within:border-[#8A6C05]/40 hover:border-[#8A6C05]/40 hover:bg-[#FFF9E5]"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#EAE7DF] sm:aspect-[4/3] lg:aspect-[16/11]">
        <motion.div
          style={reduce ? undefined : { y: imageY }}
          className="absolute inset-x-0 -inset-y-[9%]"
        >
          <Image
            src={getIndustryImage(item.slug)}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
          />
        </motion.div>

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#171717]/55 via-transparent to-transparent"
        />

        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 font-mono text-[10px] font-medium text-[#171717] backdrop-blur sm:text-xs">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h2 className="font-display text-2xl font-semibold leading-tight tracking-[-0.03em] transition-colors duration-300 group-hover:text-[#8A6C05] sm:text-[1.7rem]">
          <Link
            href={`/industries/${item.slug}`}
            className="outline-none after:absolute after:inset-0 after:z-10 after:content-[''] focus-visible:underline focus-visible:decoration-[#8A6C05]/50 focus-visible:underline-offset-4"
          >
            {item.name}
          </Link>
        </h2>

        <p className="mt-3 line-clamp-4 text-pretty text-sm leading-6 text-[#55524C] sm:text-[15px] sm:leading-7">
          {item.problemLine}
        </p>

        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8A6C05]">
            See our approach
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
      </div>
    </motion.article>
  );
}

export function IndustriesGrid({ items }: { items: readonly Item[] }) {
  const reduce = useReducedMotion() ?? false;

  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
      {items.map((item, index) => (
        <IndustryCard
          key={item.slug}
          item={item}
          index={index}
          total={items.length}
          reduce={reduce}
        />
      ))}
    </div>
  );
}