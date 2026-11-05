"use client";

import Link from "next/link";
import type { PointerEvent } from "react";
import { useRef, useState } from "react";

import { services } from "@/content/services";

const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`;

// Temporary service images
const serviceImages: Record<string, string> = {
  "content-creation-branding": unsplash(
    "photo-1492691527719-9d1e07e534b4",
  ),
  "meta-google-ads": unsplash(
    "photo-1460925895917-afdab827c52f",
  ),
  "website-social-media": unsplash(
    "photo-1467232004584-a241de8bcf5d",
  ),
  "personal-branding-influencer": unsplash(
    "photo-1534528741775-53994a69daeb",
  ),
  "local-seo-google-business": unsplash(
    "photo-1524661135-423995f22d0b",
  ),
  "lead-generation-whatsapp": unsplash(
    "photo-1611606063065-ee7946f0787a",
  ),
  "offline-branding-print":
    "https://www.forestdigital.co.uk/wp-content/uploads/2022/08/IMG_2611_2-scaled.jpg",
  "growth-audit-strategy": unsplash(
    "photo-1552664730-d307ca884978",
  ),
};

function setOrigin(event: PointerEvent<HTMLAnchorElement>) {
  const el = event.currentTarget;
  const rect = el.getBoundingClientRect();

  el.style.setProperty("--x", `${event.clientX - rect.left}px`);
  el.style.setProperty("--y", `${event.clientY - rect.top}px`);
}

export function ServiceHoverPreview() {
  const mobileScrollerRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const total = services.length;

  const scrollToCard = (index: number) => {
    const container = mobileScrollerRef.current;

    if (!container) return;

    const cards =
      container.querySelectorAll<HTMLElement>("[data-service-card]");

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

    const cards =
      container.querySelectorAll<HTMLElement>("[data-service-card]");

    if (!cards.length) return;

    const containerRect = container.getBoundingClientRect();

    const containerCenter =
      containerRect.left + containerRect.width / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();

      const cardCenter = rect.left + rect.width / 2;

      const distance = Math.abs(
        containerCenter - cardCenter,
      );

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
      id="services"
      className="
        relative
        overflow-hidden
        bg-[#F8F7F4]
        py-14
        text-[#20201E]
        sm:py-24
      "
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        {/* =========================================================
            HEADER
        ========================================================= */}

        <div
          className="
            mx-auto
            max-w-5xl
            pb-10
            text-center
            sm:pb-14
            lg:pt-6
          "
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/50 sm:text-xs">
            Our services
          </p>

          <h2
            className="
              mt-5
              font-display
              text-[clamp(2.75rem,7vw,6.5rem)]
              font-black
              uppercase
              leading-[0.9]
              tracking-[-0.07em]
              sm:mt-6
            "
          >
            What we do best
            <span className="text-[#D5AC19]">.</span>
          </h2>

          <div className="mt-6 flex justify-center text-center sm:mt-8">
            <p className="max-w-2xl text-lg font-semibold leading-snug sm:text-2xl">
              <span className="inline-block rounded-sm bg-[#F7C928] px-2 py-1 text-[#171717]">
                Your entire marketing team, under one roof.
              </span>
            </p>
          </div>

          <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-black/60 sm:text-base">
            Content, ads, website aur branding — sab ek team se.
          </p>
        </div>

        {/* =========================================================
            SERVICES
        ========================================================= */}

        <div
          ref={mobileScrollerRef}
          onScroll={handleScroll}
          className="
            flex
            snap-x
            snap-mandatory
            gap-4
            overflow-x-auto
            overscroll-x-contain
            scroll-smooth
            pb-5
            pl-[5vw]
            pr-[5vw]

            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden

            sm:grid
            sm:grid-cols-2
            sm:gap-0
            sm:overflow-visible
            sm:px-0
            sm:pb-0

            lg:grid-cols-4
          "
        >
          {services.map((service, index) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              data-service-card
              onPointerEnter={setOrigin}
              onPointerMove={setOrigin}
              className="
                group
                relative
                flex
                min-h-[460px]
                w-[88vw]
                shrink-0
                snap-center
                flex-col
                justify-between
                overflow-hidden
                border
                border-black/15
                bg-white
                p-6
                outline-none

                transition-all
                duration-500

                hover:-translate-y-1
                hover:shadow-[0_25px_55px_-30px_rgba(32,32,30,0.5)]

                focus-visible:ring-2
                focus-visible:ring-inset
                focus-visible:ring-[#65745B]

                sm:min-h-[360px]
                sm:w-auto
                sm:shrink
                sm:border-b
                sm:border-r
                sm:p-6

                xl:min-h-[400px]
              "
            >
              {/* =====================================================
                  IMAGE REVEAL
              ===================================================== */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-[#20201E]
                  transition-[clip-path]
                  duration-700
                  ease-[cubic-bezier(0.22,1,0.36,1)]

                  [clip-path:circle(0%_at_var(--x,50%)_var(--y,50%))]

                  group-hover:[clip-path:circle(150%_at_var(--x,50%)_var(--y,50%))]

                  group-focus-visible:[clip-path:circle(150%_at_50%_50%)]

                  motion-reduce:transition-none

                  [@media(hover:none)]:opacity-20
                  [@media(hover:none)]:[clip-path:circle(150%_at_50%_50%)]
                "
              >
                {serviceImages[service.slug] && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={serviceImages[service.slug]}
                    alt=""
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                    className="
                      size-full
                      scale-110
                      object-cover
                      transition-transform
                      duration-[1200ms]
                      ease-out
                      group-hover:scale-100
                    "
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/50 to-black/85" />
              </div>

              {/* =====================================================
                  YELLOW TOP LINE
              ===================================================== */}

              <span
                aria-hidden="true"
                className="
                  absolute
                  left-0
                  top-0
                  z-20
                  h-[3px]
                  w-0
                  bg-[#F7C928]
                  transition-[width]
                  duration-700
                  ease-out
                  group-hover:w-full
                "
              />

              {/* =====================================================
                  TOP
              ===================================================== */}

              <div className="relative z-10 flex items-start justify-between">
                <span
                  className="
                    text-xs
                    tabular-nums
                    text-black/40
                    transition-colors
                    duration-500
                    group-hover:text-[#F7C928]
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span
                  className="
                    grid
                    size-10
                    place-items-center
                    rounded-full
                    border
                    border-black/20
                    text-lg
                    transition-all
                    duration-500
                    group-hover:rotate-45
                    group-hover:border-[#F7C928]
                    group-hover:bg-[#F7C928]
                    group-hover:text-[#20201E]
                  "
                >
                  ↗
                </span>
              </div>

              {/* =====================================================
                  BOTTOM
              ===================================================== */}

              <div className="relative z-10">
                <p
                  className="
                    mb-3
                    font-mono
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-black/40
                    transition-colors
                    duration-500
                    group-hover:text-[#F7C928]
                  "
                >
                  Service
                </p>

                <h3
                  className="
                    font-display
                    text-[clamp(1.6rem,2.1vw,2.3rem)]
                    font-black
                    uppercase
                    leading-[0.92]
                    tracking-[-0.06em]
                    transition-colors
                    duration-500
                    [overflow-wrap:anywhere]
                    group-hover:text-white
                  "
                >
                  {service.title}
                </h3>

                <p
                  className="
                    mt-3
                    max-w-[280px]
                    text-sm
                    leading-relaxed
                    text-black/55
                    transition-colors
                    duration-500
                    group-hover:text-white/80
                  "
                >
                  {service.description}
                </p>

                <span
                  className="
                    mt-5
                    flex
                    translate-y-3
                    items-center
                    gap-2
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-[#F7C928]
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:translate-y-0
                    group-hover:opacity-100

                    [@media(hover:none)]:hidden
                  "
                >
                  Explore service
                  <span aria-hidden="true">↗</span>
                </span>
              </div>

              {/* Bottom accent */}
              <span
                aria-hidden="true"
                className="
                  absolute
                  bottom-0
                  left-0
                  z-20
                  h-[3px]
                  w-0
                  bg-[#F7C928]
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />
            </Link>
          ))}
        </div>

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
            aria-label="Previous service"
            className="
              grid
              size-12
              shrink-0
              place-items-center
              rounded-full
              border
              border-black/15
              bg-white
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

          {/* Dots */}
          <div
            className="flex items-center gap-1"
            aria-label="Service navigation"
          >
            {services.map((service, index) => (
              <button
                key={service.slug}
                type="button"
                onClick={() => scrollToCard(index)}
                aria-label={`Go to service ${index + 1}`}
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
            aria-label="Next service"
            className="
              grid
              size-12
              shrink-0
              place-items-center
              rounded-full
              border
              border-black/15
              bg-white
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

        {/* =========================================================
            CONTACT CTA
        ========================================================= */}

        <div className="mt-6 flex justify-center">
          <Link
            href="/contact"
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.16em]
              text-[#20201E]
              underline
              underline-offset-4
              transition-opacity
              hover:opacity-60
            "
          >
            Discuss a project ↗
          </Link>
        </div>
      </div>
    </section>
  );
}