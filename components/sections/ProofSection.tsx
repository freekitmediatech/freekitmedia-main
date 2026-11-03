"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

const results = {
  amount: 600000,
  description: "Instagram ads se ek hi din mein jewellery ka direct order.",
  client: "Kisna Franchise Team",
};

const testimonial = {
  quote:
    "Professional enough and know their job. Best agency across Chhattisgarh.",
  name: "Dr Anurag Sharma",
  role: "Healthcare, Bilaspur",
};

const EASE = [0.22, 1, 0.36, 1] as const;

/* Desktop check: stacking aur hover sirf yahan pe chalega */
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);

    update();
    mq.addEventListener("change", update);

    return () => mq.removeEventListener("change", update);
  }, []);

  return isDesktop;
}

/* ₹ count-up, Indian number format (6,00,000) */
function CountUp({ to, reduce }: { to: number; reduce: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const value = useMotionValue(0);
  const [text, setText] = useState(reduce ? to.toLocaleString("en-IN") : "0");

  useEffect(() => {
    if (reduce) return;

    const unsubscribe = value.on("change", (latest) =>
      setText(Math.round(latest).toLocaleString("en-IN")),
    );

    if (inView) {
      const controls = animate(value, to, { duration: 1.8, ease: EASE });

      return () => {
        controls.stop();
        unsubscribe();
      };
    }

    return unsubscribe;
  }, [inView, reduce, to, value]);

  return (
    <span ref={ref} aria-label={`₹${to.toLocaleString("en-IN")} plus`}>
      <span aria-hidden="true">
        ₹{reduce ? to.toLocaleString("en-IN") : text}+
      </span>
    </span>
  );
}

/* Growth chart, line draw hoti hai aur end dot pulse karta hai */
function GrowthChart({ reduce }: { reduce: boolean }) {
  const line =
    "M0 66 C 20 62, 30 58, 45 52 S 72 46, 88 38 S 118 30, 134 21 S 168 10, 196 6";

  return (
    <motion.svg
      aria-hidden="true"
      viewBox="0 0 200 80"
      fill="none"
      className="h-auto w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <defs>
        <linearGradient id="proofArea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F7C928" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#F7C928" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Grid lines */}
      {[20, 40, 60].map((y) => (
        <line
          key={y}
          x1="0"
          x2="200"
          y1={y}
          y2={y}
          stroke="#171717"
          strokeOpacity="0.06"
          strokeDasharray="3 4"
        />
      ))}

      {/* Area fill */}
      <motion.path
        d={`${line} L196 80 L0 80 Z`}
        fill="url(#proofArea)"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { duration: reduce ? 0 : 0.9, delay: reduce ? 0 : 0.9 },
          },
        }}
      />

      {/* Line */}
      <motion.path
        d={line}
        stroke="#8A6C05"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          hidden: { pathLength: reduce ? 1 : 0 },
          visible: {
            pathLength: 1,
            transition: { duration: reduce ? 0 : 1.6, ease: EASE },
          },
        }}
      />

      {/* End dot + pulse ring */}
      <motion.g
        variants={{
          hidden: { opacity: reduce ? 1 : 0, scale: reduce ? 1 : 0 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { delay: reduce ? 0 : 1.5, duration: reduce ? 0 : 0.4 },
          },
        }}
        style={{ transformOrigin: "196px 6px", transformBox: "fill-box" }}
      >
        {!reduce && (
          <motion.circle
            cx="196"
            cy="6"
            r="4"
            fill="#F7C928"
            animate={{ r: [4, 11], opacity: [0.5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
          />
        )}
        <circle cx="196" cy="6" r="4" fill="#F7C928" stroke="#8A6C05" strokeWidth="1.5" />
      </motion.g>
    </motion.svg>
  );
}

/* Quote mark, outline draw hoti hai */
function QuoteMark({ reduce }: { reduce: boolean }) {
  const mark =
    "M2 30 C2 18 8 10 18 8 L19 13 C13 15 11 19 11 24 L18 24 L18 38 L2 38 Z";

  return (
    <motion.svg
      aria-hidden="true"
      viewBox="0 0 48 44"
      fill="none"
      className="h-9 w-10 sm:h-11 sm:w-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
    >
      {[0, 24].map((x, i) => (
        <g key={x} transform={`translate(${x} 0)`}>
          <motion.path
            d={mark}
            stroke="#8A6C05"
            strokeWidth="1.6"
            strokeLinejoin="round"
            variants={{
              hidden: { pathLength: reduce ? 1 : 0, fillOpacity: reduce ? 1 : 0 },
              visible: {
                pathLength: 1,
                fillOpacity: 1,
                transition: {
                  pathLength: { duration: reduce ? 0 : 1, delay: i * 0.2, ease: EASE },
                  fillOpacity: { duration: reduce ? 0 : 0.5, delay: 0.9 + i * 0.2 },
                },
              },
            }}
            fill="#F7C928"
          />
        </g>
      ))}
    </motion.svg>
  );
}

export function ProofSection() {
  const reduceMotion = useReducedMotion() ?? false;
  const isDesktop = useIsDesktop();

  const secondCardRef = useRef<HTMLElement>(null);

  /* Dusra card jaise upar aata hai, pehla card peeche chhota hota hai */
  const { scrollYProgress } = useScroll({
    target: secondCardRef,
    offset: ["start end", "start 120px"],
  });
  const stackScale = useTransform(scrollYProgress, [0, 1], [1, 0.93]);
  const stackDim = useTransform(scrollYProgress, [0, 1], [1, 0.82]);
  const stackFilter = useTransform(stackDim, (value) => `brightness(${value})`);

  const canStack = !isDesktop && !reduceMotion;

  const cardVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.6, ease: EASE },
    },
  };

  const hover = isDesktop && !reduceMotion ? { y: -4 } : undefined;

  return (
    <section
      id="proof"
      className="relative w-full overflow-clip bg-[#F7F6F2] px-5 pb-12 pt-8 text-[#171717] sm:px-8 sm:pb-16 sm:pt-12 lg:px-10 lg:py-10"
    >
      <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-4 sm:gap-5 lg:grid lg:grid-cols-2 lg:items-stretch lg:gap-6">
        {/* Result card */}
        <motion.article
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          whileHover={hover}
          style={{
            scale: canStack ? stackScale : 1,
            filter: canStack ? stackFilter : undefined,
            transformOrigin: "top center",
          }}
          className="sticky top-[84px] z-10 flex min-h-[340px] flex-col overflow-hidden rounded-[22px] border border-[#EAE5DB] bg-white px-6 py-7 shadow-[0_-14px_30px_-22px_rgba(23,23,23,0.35)] sm:top-[104px] sm:min-h-[380px] sm:px-8 sm:py-9 lg:static lg:min-h-[450px] lg:px-12 lg:py-14 lg:shadow-none"
        >
          <div>
            <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8A6C05] sm:text-xs">
              <span className="size-2 shrink-0 rounded-full bg-[#F7C928]" />
              Result Highlight
            </p>

            <h2 className="mt-4 font-display text-[clamp(2.4rem,9vw,3.5rem)] font-semibold leading-none tracking-[-0.045em] tabular-nums">
              <CountUp to={results.amount} reduce={reduceMotion} />
            </h2>

            <p className="mt-3 max-w-md text-[15px] leading-7 text-[#55524C] sm:text-lg sm:leading-8">
              {results.description}
            </p>
          </div>

          <div className="mt-6 w-full max-w-md lg:mt-8">
            <GrowthChart reduce={reduceMotion} />
          </div>

          <div className="mt-auto border-t border-[#EAE5DB] pt-5">
            <p className="text-xs text-[#77736B] sm:text-sm">Result for</p>
            <p className="mt-1 text-base font-semibold text-[#8A6C05]">
              {results.client}
            </p>
          </div>
        </motion.article>

        {/* Testimonial card */}
        <motion.article
          ref={secondCardRef}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          whileHover={hover}
          className="sticky top-[100px] z-20 flex min-h-[340px] flex-col rounded-[22px] border border-[#EAE5DB] bg-[#FFF9E5] px-6 py-7 shadow-[0_-14px_30px_-22px_rgba(23,23,23,0.35)] sm:top-[120px] sm:min-h-[380px] sm:px-8 sm:py-9 lg:static lg:min-h-[450px] lg:px-12 lg:py-14 lg:shadow-none"
        >
          <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8A6C05] sm:text-xs">
            <span className="size-2 shrink-0 rounded-full bg-[#F7C928]" />
            Client Story
          </p>

          <div className="mt-6 sm:mt-8">
            <QuoteMark reduce={reduceMotion} />
          </div>

          <blockquote className="mt-5 font-display text-[clamp(1.35rem,5.2vw,2.1rem)] font-medium leading-[1.45] tracking-[-0.035em]">
            {testimonial.quote}
          </blockquote>

          <div className="mt-auto border-t border-[#EAE5DB] pt-5">
            <p className="text-base font-semibold text-[#171717]">
              {testimonial.name}
            </p>
            <p className="mt-1 text-sm leading-6 text-[#55524C]">
              {testimonial.role}
            </p>
          </div>
        </motion.article>
      </div>
    </section>
  );
}