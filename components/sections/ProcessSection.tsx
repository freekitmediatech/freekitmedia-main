"use client";

import { useRef, useState } from "react";

import { Container } from "@/components/ui/Container";
import { process as processData } from "@/content/page-sections";
import { useReveal } from "@/lib/use-reveal";

const sourceLinks = [
  "https://storyset.com/illustration/on-the-office/amico",
  "https://storyset.com/illustration/mobile-marketing/cuate",
  "https://storyset.com/illustration/game-analytics/bro#FFC100FF&hide=&hide=complete",
  "https://storyset.com/illustration/analytics/bro#FFC100FF&hide=&hide=complete",
  "https://storyset.com/illustration/creativity/cuate",
  "https://storyset.com/illustration/editing-body-text/bro#FFC100FF&hide=&hide=complete",
];

const processImages = [
  "/images/process/1.gif",
  "/images/process/4.gif",
  "/images/process/5.gif",
  "/images/process/8.gif",
  "/images/process/3.gif",
  "/images/process/6.gif",
];

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const mobileScrollerRef = useRef<HTMLOListElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  useReveal(sectionRef);

  const total = processData.steps.length;

  const scrollToCard = (index: number) => {
    const container = mobileScrollerRef.current;

    if (!container) return;

    const cards = container.querySelectorAll<HTMLElement>("li");
    const card = cards[index];

    if (!card) return;

    card.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });

    setActiveIndex(index);
  };

  const handleScroll = () => {
    const container = mobileScrollerRef.current;

    if (!container) return;

    const cards = container.querySelectorAll<HTMLElement>("li");

    if (!cards.length) return;

    const containerRect = container.getBoundingClientRect();

    const containerCenter =
      containerRect.left + containerRect.width / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const distance = Math.abs(containerCenter - cardCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  const previousCard = () => {
    scrollToCard(Math.max(0, activeIndex - 1));
  };

  const nextCard = () => {
    scrollToCard(Math.min(total - 1, activeIndex + 1));
  };

  return (
    <section
      id="process"
      ref={sectionRef}
      className="
        relative overflow-hidden
        bg-[#FFE58F]
        py-16 text-[#20201E]
        sm:py-20
        lg:py-28
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #8A6C05 1px, transparent 0)",
          backgroundSize: "30px 30px",
        }}
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-40 top-10
          h-96 w-96
          rounded-full
          bg-white/40
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-40 bottom-0
          h-80 w-80
          rounded-full
          bg-[#F7C928]/20
          blur-3xl
        "
      />

      <Container className="relative z-10">
        {/* =========================================================
            HEADER
        ========================================================= */}

        <div
          data-reveal
          className="mx-auto max-w-2xl text-center"
        >
          <span
            className="
              inline-flex
              rounded-full
              border border-[#20201E]/15
              bg-white/60
              px-4 py-1.5
              font-mono
              text-[10px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-[#8A6C05]
              backdrop-blur-sm
            "
          >
            Our Process
          </span>

          <h2
            className="
              font-display
              mt-5
              text-h1
              font-extrabold
              leading-[1.04]
              tracking-[-0.035em]
            "
          >
            {processData.headline}
          </h2>

          <div
            aria-hidden="true"
            className="
              mx-auto mt-5
              h-[3px] w-10
              rounded-full
              bg-[#20201E]
            "
          />

          <p
            className="
              mx-auto mt-5
              max-w-xl
              text-sm
              leading-6
              text-[#20201E]/60
              sm:text-base
            "
          >
            {processData.sub}
          </p>
        </div>

        {/* =========================================================
            OUTCOME PILLS
        ========================================================= */}

        <div
          data-reveal
          className="
            mt-7
            flex flex-wrap
            justify-center
            gap-2
          "
        >
          {processData.grows.map((grow) => (
            <span
              key={grow.name}
              className="
                rounded-full
                border border-[#20201E]/10
                bg-white/70
                px-3.5 py-1.5
                text-xs
                font-semibold
                text-[#20201E]/70
                shadow-[0_8px_20px_-18px_rgba(32,32,30,0.5)]
              "
            >
              {grow.name}
            </span>
          ))}
        </div>

        {/* =========================================================
            PROCESS CAROUSEL / DESKTOP GRID
        ========================================================= */}

        <div className="relative mt-12 sm:mt-14">
          <ol
            ref={mobileScrollerRef}
            onScroll={handleScroll}
            aria-label="Our process"
            data-reveal-stagger
            className="
              flex
              snap-x snap-mandatory
              gap-4
              overflow-x-auto
              overscroll-x-contain
              scroll-smooth
              pb-5
              pl-[6vw]
              pr-[6vw]

              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden

              sm:grid
              sm:grid-cols-2
              sm:gap-5
              sm:overflow-visible
              sm:px-0
              sm:pb-0

              lg:grid-cols-3
            "
          >
            {processData.steps.map((step, index) => {
              const image = processImages[index];
              const sourceUrl =
                step.sourceUrl || sourceLinks[index];

              return (
                <li
                  key={step.num}
                  data-reveal
                  className="
                    w-[88vw]
                    shrink-0
                    snap-center

                    sm:w-auto
                    sm:shrink
                  "
                >
                  <article
                    className="
                      group
                      relative
                      flex
                      h-full
                      min-h-[455px]
                      flex-col
                      overflow-hidden
                      rounded-[26px]
                      border border-white/80
                      bg-white
                      shadow-[0_20px_55px_-30px_rgba(60,45,0,0.55)]
                      transition-all
                      duration-500

                      hover:-translate-y-2
                      hover:shadow-[0_30px_70px_-32px_rgba(60,45,0,0.7)]

                      sm:min-h-[420px]
                    "
                  >
                    {/* Top accent */}
                    <div
                      aria-hidden="true"
                      className="
                        absolute
                        left-0 right-0 top-0
                        z-30
                        h-[3px]
                        bg-[#20201E]
                      "
                    />

                    {/* =================================================
                        GIF
                    ================================================= */}

                    <div
                      className="
                        relative
                        h-[275px]
                        shrink-0
                        overflow-hidden
                        bg-[#FFF5C7]

                        sm:h-[260px]
                      "
                    >
                      {/* Illustration background */}
                      <div
                        aria-hidden="true"
                        className="
                          absolute
                          left-1/2 top-1/2
                          size-60
                          -translate-x-1/2
                          -translate-y-1/2
                          rounded-full
                          bg-[#FFE58F]
                          transition-transform
                          duration-700
                          group-hover:scale-110

                          sm:size-52
                        "
                      />

                      {/* Animated GIF */}
                      <img
                        src={image}
                        alt=""
                        draggable={false}
                        className="
                          absolute
                          inset-0
                          z-10
                          h-full
                          w-full
                          object-contain
                          p-4
                          transition-transform
                          duration-700
                          group-hover:scale-[1.05]

                          sm:p-5
                        "
                      />

                      {/* Step number */}
                      <span
                        className="
                          absolute
                          left-5 top-5
                          z-20
                          grid
                          size-11
                          place-items-center
                          rounded-full
                          bg-[#20201E]
                          font-mono
                          text-[11px]
                          font-bold
                          tracking-wide
                          text-[#F7C928]
                          shadow-lg
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* =================================================
                        CONTENT
                    ================================================= */}

                    <div
                      className="
                        flex
                        flex-1
                        flex-col
                        p-6
                        sm:p-7
                      "
                    >
                      <p
                        className="
                          font-mono
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[0.2em]
                          text-[#8A6C05]
                        "
                      >
                        Step {String(index + 1).padStart(2, "0")}
                      </p>

                      <h3
                        className="
                          font-display
                          mt-2
                          text-2xl
                          font-extrabold
                          leading-tight
                          tracking-[-0.025em]
                        "
                      >
                        {step.title}
                      </h3>

                      <p
                        className="
                          mt-3
                          max-w-sm
                          text-sm
                          leading-6
                          text-[#20201E]/55
                        "
                      >
                        {step.text}
                      </p>

                      {/* Bottom */}
                      <div
                        className="
                          mt-auto
                          flex
                          items-center
                          justify-between
                          pt-5
                        "
                      >
                        <span
                          aria-hidden="true"
                          className="
                            h-px
                            w-10
                            bg-[#20201E]/10
                            transition-all
                            duration-500
                            group-hover:w-16
                            group-hover:bg-[#8A6C05]
                          "
                        />

                        {sourceUrl && (
                          <a
                            href={sourceUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="
                              text-[9px]
                              font-bold
                              uppercase
                              tracking-[0.15em]
                              text-[#8A6C05]
                              opacity-50
                              transition-opacity
                              hover:opacity-100
                            "
                          >
                            Storyset ↗
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Bottom hover accent */}
                    <span
                      aria-hidden="true"
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-[3px]
                        w-0
                        bg-[#20201E]
                        transition-all
                        duration-500
                        group-hover:w-full
                      "
                    />
                  </article>
                </li>
              );
            })}
          </ol>

          {/* =========================================================
              MOBILE CONTROLS
          ========================================================= */}

          <div
            className="
              mt-4
              flex
              items-center
              justify-between
              sm:hidden
            "
          >
            {/* Previous */}
            <button
              type="button"
              onClick={previousCard}
              disabled={activeIndex === 0}
              aria-label="Previous process step"
              className="
                grid
                size-12
                shrink-0
                place-items-center
                rounded-full
                border
                border-[#20201E]/15
                bg-white/90
                text-[#20201E]
                shadow-[0_8px_25px_-12px_rgba(32,32,30,0.5)]
                transition-all
                duration-200
                active:scale-90
                disabled:pointer-events-none
                disabled:opacity-30
              "
            >
              <span
                aria-hidden="true"
                className="text-xl leading-none"
              >
                ←
              </span>
            </button>

            {/* Swipe dots */}
            <div
              className="flex items-center gap-1"
              aria-label="Process step navigation"
            >
              {processData.steps.map((step, index) => (
                <button
                  key={step.num}
                  type="button"
                  onClick={() => scrollToCard(index)}
                  aria-label={`Go to process step ${index + 1}`}
                  aria-current={
                    activeIndex === index ? "step" : undefined
                  }
                  className="
                    flex
                    min-h-11
                    min-w-3
                    items-center
                    justify-center
                  "
                >
                  <span
                    className={`
                      block
                      rounded-full
                      transition-all
                      duration-300
                      ${
                        activeIndex === index
                          ? "h-1.5 w-7 bg-[#20201E]"
                          : "size-1.5 bg-[#20201E]/25"
                      }
                    `}
                  />
                </button>
              ))}
            </div>

            {/* Next */}
            <button
              type="button"
              onClick={nextCard}
              disabled={activeIndex === total - 1}
              aria-label="Next process step"
              className="
                grid
                size-12
                shrink-0
                place-items-center
                rounded-full
                border
                border-[#20201E]/15
                bg-white/90
                text-[#20201E]
                shadow-[0_8px_25px_-12px_rgba(32,32,30,0.5)]
                transition-all
                duration-200
                active:scale-90
                disabled:pointer-events-none
                disabled:opacity-30
              "
            >
              <span
                aria-hidden="true"
                className="text-xl leading-none"
              >
                →
              </span>
            </button>
          </div>
        </div>

        {/* =========================================================
            HONESTY / BOTTOM MESSAGE
        ========================================================= */}

        <div
          data-reveal
          className="
            mx-auto
            mt-8
            max-w-3xl
            rounded-[22px]
            border border-[#20201E]/10
            bg-white/60
            px-6 py-6
            text-center
            backdrop-blur-sm
            sm:px-8
          "
        >
          <p
            className="
              font-display
              text-lg
              font-extrabold
              sm:text-xl
            "
          >
            {processData.honesty.title}
          </p>

          <p
            className="
              mx-auto
              mt-2
              max-w-xl
              text-xs
              leading-5
              text-[#20201E]/55
              sm:text-sm
            "
          >
            {processData.honesty.text}
          </p>

          <p
            className="
              mt-3
              text-xs
              font-bold
              text-[#8A6C05]
            "
          >
            {processData.honesty.line}
          </p>
        </div>
      </Container>
    </section>
  );
}