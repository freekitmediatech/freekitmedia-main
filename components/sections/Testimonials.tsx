"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type MouseEvent } from "react";

const AUDIT_HREF = "/contact";
const CALL_HREF = "/contact";

const stories = [
  {
    id: 1,
    title: "Dr. Sharma's story",
    client: "Dr. Sharma",
    business: "Dental practice (practice name TODO)", // changetis 
    quote: "TODO: Add an approved quote from this video testimonial.",
    video: "https://ik.imagekit.io/freekitMedia/Freekit%20media%20Assets/testimonials/sharma%20dental%20feedback.mp4?updatedAt=1793103262616",
    poster: "/images/partners/videos/1.jpeg",
  },
  {
    id: 2,
    title: "Balaji & Balaji Jawellers story",
    client: "Balaji & Balaji Jewellers",
    business: "Jewellery retail",
    quote: "TODO: Add an approved quote from this video testimonial.",
    video: "https://ik.imagekit.io/freekitMedia/Freekit%20media%20Assets/testimonials/Balaji%20&%20Balaji%20Feedback.mov/ik-video.mp4?updatedAt=1793103953744",
    poster: "/images/partners/videos/3.png",
  },
  {
    id: 3,
    title: "Tyre Center's story",
    client: "Tyre Centre",
    business: "Tyre business (business name TODO)",
    quote: "TODO: Add an approved quote from this video testimonial.",
    video: "https://ik.imagekit.io/freekitMedia/Freekit%20media%20Assets/testimonials/tyre%20centre%20feedback.mp4?updatedAt=1793103261793",
    poster: "/images/partners/videos/3.jpeg",
  },
  {
    id: 4,
    title: "The URS story",
    client: "URS",
    business: "Business type TODO",
    quote: "TODO: Add an approved quote from this video testimonial.",
    video: "https://ik.imagekit.io/freekitMedia/Freekit%20media%20Assets/testimonials/URS%20Feedback.mp4?updatedAt=1793103639145",
    poster: "/images/partners/videos/4.jpeg",
  },
];

const auditItems = [
  "Content & profile check",
  "Google & ads review",
  "A clear growth plan",
];

export function Testimonials() {
  const [activeStory, setActiveStory] =
    useState<(typeof stories)[number] | null>(null);
  const [playingPreviewId, setPlayingPreviewId] = useState<number | null>(null);

  const carouselRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!activeStory) return;

    carouselRef.current
      ?.querySelectorAll<HTMLVideoElement>("[data-story-preview]")
      .forEach((video) => video.pause());
  }, [activeStory]);

  const playPreview = (event: MouseEvent<HTMLButtonElement>) => {
    if (
      activeStory ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const carousel = carouselRef.current;
    const preview = event.currentTarget.querySelector<HTMLVideoElement>(
      "[data-story-preview]",
    );
    if (!carousel || !preview) return;

    carousel
      .querySelectorAll<HTMLVideoElement>("[data-story-preview]")
      .forEach((video) => {
        if (video !== preview) video.pause();
      });

    preview.play().catch((error: unknown) => {
      if (
        error instanceof DOMException &&
        (error.name === "AbortError" || error.name === "NotAllowedError")
      ) {
        return;
      }

      console.error("Unable to autoplay testimonial preview.", error);
    });
  };

  const scrollCarousel = (direction: "left" | "right") => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const card = carousel.querySelector<HTMLElement>("[data-story-card]");
    if (!card) return;

    const styles = window.getComputedStyle(carousel);
    const gap = parseFloat(styles.columnGap) || 0;
    const distance = card.getBoundingClientRect().width + gap;

    carousel.scrollBy({
      left: direction === "right" ? distance : -distance,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (!activeStory) return;

    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveStory(null);
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          "button:not([disabled]), video[controls]",
        ),
      ).filter((element) => element.getClientRects().length > 0);

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (!first || !last) return;

      if (
        event.shiftKey &&
        (document.activeElement === first ||
          !dialogRef.current.contains(document.activeElement))
      ) {
        event.preventDefault();
        last.focus();
      } else if (
        !event.shiftKey &&
        (document.activeElement === last ||
          !dialogRef.current.contains(document.activeElement))
      ) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);

      if (
        previouslyFocused instanceof HTMLElement &&
        document.body.contains(previouslyFocused)
      ) {
        previouslyFocused.focus();
      }
    };
  }, [activeStory]);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-white px-5 py-16 sm:py-20 lg:py-28"
    >
      {/* CTA styles: plain CSS, Tailwind pe depend nahi */}
      <style>{`
        .fk-cta {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          margin-top: 48px;
          border-radius: 28px;
          background: #F7C928;
          color: #171717;
        }
        .fk-ring {
          position: absolute;
          z-index: -1;
          border-radius: 9999px;
          border: 1px solid rgba(0,0,0,0.1);
          pointer-events: none;
        }
        .fk-ring-1 { width: 256px; height: 256px; right: -128px; top: -112px; }
        .fk-ring-2 { width: 192px; height: 192px; right: -80px; top: -64px; }

        .fk-inner {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          align-items: center;
          gap: 32px;
          padding: 32px 20px;
        }
        .fk-left { min-width: 0; }

        .fk-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin: 0 0 20px;
          padding: 8px 14px;
          border-radius: 9999px;
          background: #000;
          color: #F7C928;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }
        .fk-dot {
          width: 10px;
          height: 10px;
          border-radius: 9999px;
          background: #34d399;
        }

        .fk-title {
          margin: 0;
          max-width: 42rem;
          font-size: clamp(2.25rem, 6.5vw, 4.25rem);
          font-weight: 700;
          line-height: 1.04;
          letter-spacing: -0.05em;
        }
        .fk-italic {
          font-family: Georgia, "Times New Roman", serif;
          font-style: italic;
          font-weight: 400;
        }

        .fk-desc {
          margin: 20px 0 0;
          max-width: 34rem;
          font-size: 15px;
          line-height: 1.6;
          color: rgba(0,0,0,0.75);
        }

        .fk-btn-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 28px;
        }
        .fk-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 52px;
          padding: 0 26px;
          border-radius: 9999px;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          transition: transform .25s ease, background-color .25s ease, box-shadow .25s ease;
        }
        .fk-btn:focus-visible { outline: 2px solid #000; outline-offset: 3px; }
        .fk-btn-primary {
          background: #080808;
          color: #fff;
          box-shadow: 0 10px 25px rgba(0,0,0,0.18);
        }
        .fk-btn-primary:hover { transform: translateY(-2px); background: #262626; }
        .fk-btn-outline {
          border: 2px solid #000;
          color: #000;
          background: transparent;
        }
        .fk-btn-outline:hover { background: rgba(0,0,0,0.06); }

        .fk-ticks {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px 20px;
          margin-top: 16px;
          font-size: 13px;
          color: rgba(0,0,0,0.75);
        }
        .fk-tick { display: inline-flex; align-items: center; gap: 6px; }

        .fk-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 16px 40px;
          margin-top: 32px;
          padding-top: 24px;
          border-top: 1px solid rgba(0,0,0,0.15);
        }
        .fk-stat-big { margin: 0; font-size: 30px; font-weight: 700; letter-spacing: -0.03em; line-height: 1.1; }
        .fk-stat-mid { margin: 0; font-size: 22px; font-weight: 700; letter-spacing: -0.03em; line-height: 1.1; }
        .fk-stat-label { margin: 4px 0 0; font-size: 13px; color: rgba(0,0,0,0.7); }

        .fk-card {
          position: relative;
          min-width: 0;
          padding: 24px 20px;
          border-radius: 22px;
          background: #090909;
          color: #fff;
          box-shadow: 0 25px 50px rgba(0,0,0,0.25);
        }
        .fk-badge {
          position: absolute;
          top: -12px;
          right: 20px;
          padding: 8px 14px;
          border-radius: 9999px;
          background: #fff;
          color: #000;
          font-size: 12px;
          font-weight: 700;
          box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        }
        .fk-card-eyebrow {
          margin: 0;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #F7C928;
        }
        .fk-card-title {
          margin: 8px 0 0;
          font-size: 26px;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: #fff;
        }
        .fk-list { display: flex; flex-direction: column; gap: 16px; margin-top: 24px; }
        .fk-item { display: flex; align-items: center; gap: 12px; }
        .fk-num {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: #F7C928;
          color: #000;
          font-size: 14px;
          font-weight: 700;
        }
        .fk-item-text { margin: 0; font-size: 16px; font-weight: 500; line-height: 1.3; color: #fff; }
        .fk-card-foot {
          margin-top: 24px;
          padding-top: 18px;
          border-top: 1px solid rgba(255,255,255,0.15);
        }
        .fk-card-foot p { margin: 0; font-size: 13px; line-height: 1.5; color: rgba(255,255,255,0.6); }

        @media (max-width: 419px) {
          .fk-btn { width: 100%; }
        }
        @media (min-width: 640px) {
          .fk-cta { margin-top: 64px; }
          .fk-ring-1 { width: 440px; height: 440px; right: -80px; top: -144px; }
          .fk-ring-2 { width: 340px; height: 340px; right: -40px; top: -96px; }
          .fk-inner { gap: 40px; padding: 48px 40px; }
          .fk-pill { font-size: 12px; margin-bottom: 24px; }
          .fk-desc { font-size: 16px; line-height: 1.75; margin-top: 24px; }
          .fk-btn-row { margin-top: 32px; }
          .fk-ticks { font-size: 14px; }
          .fk-stats { margin-top: 40px; padding-top: 28px; }
          .fk-stat-big { font-size: 36px; }
          .fk-stat-mid { font-size: 26px; }
          .fk-stat-label { font-size: 14px; }
          .fk-card { padding: 28px; border-radius: 26px; }
          .fk-badge { right: 24px; }
          .fk-card-eyebrow { font-size: 12px; }
          .fk-card-title { font-size: 30px; }
          .fk-list { margin-top: 24px; }
        }
        @media (min-width: 1024px) {
          .fk-cta { margin-top: 80px; }
          .fk-ring-1 { width: 520px; height: 520px; }
          .fk-ring-2 { width: 400px; height: 400px; }
          .fk-inner {
            grid-template-columns: minmax(0, 1.2fr) minmax(320px, 0.8fr);
            gap: 48px;
            padding: 56px 48px;
          }
          .fk-card { padding: 32px; transform: rotate(2deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .fk-btn { transition: none; }
          .fk-btn-primary:hover { transform: none; }
        }
      `}</style>

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-9 text-center sm:mb-12 lg:mb-16">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-500 sm:mb-5 sm:text-sm">
            Customer Stories
          </p>

          <h2 className="font-display text-4xl font-medium leading-tight tracking-[-0.045em] text-neutral-900 sm:text-5xl lg:text-7xl">
            Don’t take{" "}
            <span className="font-serif font-normal italic">our word</span> for
            it.
          </h2>

        </div>

        {/* Carousel */}
        <div className="relative mx-auto max-w-7xl">
          {/* Previous button */}
          <button
            type="button"
            onClick={() => scrollCarousel("left")}
            aria-label="Previous partner stories"
            className="absolute -left-4 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-900 shadow-lg transition hover:scale-105 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 md:flex lg:-left-5"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <div
            ref={carouselRef}
            aria-label="Customer video stories"
            className="flex items-stretch snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-5 lg:gap-5"
          >
            {stories.map((story) => (
              <article
                key={story.id}
                data-story-card
                className="flex w-[76vw] min-w-0 max-w-[300px] flex-none snap-start flex-col sm:w-[42vw] sm:max-w-[320px] lg:w-[calc((100%-60px)/4)] lg:max-w-none"
              >
                <button
                  type="button"
                  onMouseEnter={playPreview}
                  onMouseLeave={(event) => {
                    const preview =
                      event.currentTarget.querySelector<HTMLVideoElement>(
                        "[data-story-preview]",
                      );
                    preview?.pause();
                    if (preview) preview.currentTime = 0;
                  }}
                  onClick={() => setActiveStory(story)}
                  aria-label={`Play ${story.title} testimonial video`}
                  className="group relative block aspect-[3/4] w-full overflow-hidden rounded-2xl bg-neutral-900 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-neutral-400 motion-reduce:transition-none"
                >
                <video
                  data-story-preview
                  src={story.video}
                  poster={story.poster}
                  muted
                  loop
                  playsInline
                  preload="none"
                  aria-hidden="true"
                  tabIndex={-1}
                  onPlay={() => setPlayingPreviewId(story.id)}
                  onPause={() =>
                    setPlayingPreviewId((current) =>
                      current === story.id ? null : current,
                    )
                  }
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none"
                />

                {playingPreviewId !== story.id && (
                  <Image
                    src={story.poster}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 76vw, (max-width: 1024px) 42vw, 320px"
                    className="pointer-events-none object-cover"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/45" />

                {/* Story badge */}
                <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-3 py-2 text-xs font-semibold text-white shadow-sm backdrop-blur-md sm:left-4 sm:top-4 sm:text-sm">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-4 w-4 shrink-0"
                    aria-hidden="true"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" />
                  </svg>
                  {story.title}
                </div>

                {/* Play button */}
                <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-neutral-900 shadow-lg transition duration-300 group-hover:scale-110 group-hover:bg-neutral-100 sm:h-16 sm:w-16">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="ml-1 h-5 w-5 sm:h-6 sm:w-6"
                    aria-hidden="true"
                  >
                    <path d="M7 4.8v14.4L19 12 7 4.8Z" />
                  </svg>
                </span>

                <span className="absolute inset-x-0 bottom-0 p-4 text-sm font-medium text-white opacity-100 sm:p-5 sm:opacity-0 sm:transition-opacity sm:group-hover:opacity-100">
                  Watch story <span aria-hidden="true">↗</span>
                </span>
                </button>
                <div className="flex-1 border-x border-b border-neutral-200 bg-white p-4 sm:p-5">
                  <p className="text-sm font-semibold text-neutral-900">
                    {story.client}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-neutral-600">
                    Business: {story.business}
                  </p>
                  {/* <blockquote className="mt-3 border-t border-neutral-200 pt-3 text-sm leading-6 text-neutral-700">
                    “{story.quote}”
                  </blockquote> */}
                </div>
              </article>
            ))}
          </div>

          {/* Next button */}
          <button
            type="button"
            onClick={() => scrollCarousel("right")}
            aria-label="Next partner stories"
            className="absolute -right-4 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-900 shadow-lg transition hover:scale-105 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 md:flex lg:-right-5"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

          <p className="mt-1 text-center text-xs text-neutral-500 sm:hidden">
            Swipe to explore <span aria-hidden="true">→</span>
          </p>
        </div>

        {/* Free Audit CTA */}
        <div className="fk-cta">
          <div aria-hidden="true" className="fk-ring fk-ring-1" />
          <div aria-hidden="true" className="fk-ring fk-ring-2" />

          <div className="fk-inner">
            {/* Left content */}
            <div className="fk-left">
              <p className="fk-pill">
                <span className="fk-dot" />
                Free Digital Audit
              </p>

              <h3 className="fk-title font-display">
                Let&apos;s make your brand{" "}
                <span className="fk-italic">impossible</span> to ignore.
              </h3>

              <p className="fk-desc">
                Get a free audit of your social media, Google and ads — and see
                exactly what&apos;s costing you leads.
              </p>

              <div className="fk-btn-row">
                <Link href={AUDIT_HREF} className="fk-btn fk-btn-primary">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="22"
                    height="22"
                    style={{ color: "#25D366", flexShrink: 0 }}
                    aria-hidden="true"
                  >
                    <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.9L2 22l5.25-1.38A9.9 9.9 0 1 0 12.04 2Zm5.8 14.1c-.25.7-1.45 1.33-2 1.4-.52.07-1.17.1-1.88-.12-.43-.14-.98-.32-1.68-.63-2.96-1.28-4.89-4.26-5.04-4.46-.14-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.46.27-.3.6-.37.8-.37h.57c.18 0 .43-.07.67.5.25.6.85 2.07.92 2.22.08.15.13.32.03.52-.1.2-.15.32-.3.5-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.3.77 1.26 1.65 2.04 1.13 1 2.09 1.32 2.39 1.47.3.15.47.12.65-.07.17-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.73.82 2.03.97.3.15.5.22.57.35.07.12.07.72-.18 1.42Z" />
                  </svg>
                  Get My Free Audit
                </Link>

                <Link href={CALL_HREF} className="fk-btn fk-btn-outline">
                  Book a Call <span aria-hidden="true">→</span>
                </Link>
              </div>

              <div className="fk-ticks">
                <span className="fk-tick">
                  <span aria-hidden="true">✓</span> Free
                </span>
                <span className="fk-tick">
                  <span aria-hidden="true">✓</span> No obligation
                </span>
              </div>

              <div className="fk-stats">
                <div>
                  <p className="fk-stat-big font-display">150+</p>
                  <p className="fk-stat-label">Brands grown</p>
                </div>
                <div>
                  <p className="fk-stat-mid font-display">Across Chhattisgarh</p>
                  <p className="fk-stat-label">Statewide</p>
                </div>
              </div>
            </div>

            {/* Right black audit card */}
            <div className="fk-card">
              <span className="fk-badge">100% free</span>

              <p className="fk-card-eyebrow">Your Free Audit</p>
              <h4 className="fk-card-title font-display">What you get</h4>

              <div className="fk-list">
                {auditItems.map((item, index) => (
                  <div key={item} className="fk-item">
                    <span className="fk-num">{index + 1}</span>
                    <p className="fk-item-text">{item}</p>
                  </div>
                ))}
              </div>

              <div className="fk-card-foot">
                <p>
                  No pressure. Just practical insights to help your business
                  grow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {activeStory && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-3 backdrop-blur-md motion-reduce:backdrop-blur-none sm:p-6"
          onClick={() => setActiveStory(null)}
          role="presentation"
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={activeStory.title}
            className="relative w-full max-w-4xl overflow-hidden rounded-xl bg-black shadow-2xl sm:rounded-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setActiveStory(null)}
              aria-label="Close video"
              className="absolute right-2 top-2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-2xl leading-none text-white transition hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white motion-reduce:transition-none sm:right-3 sm:top-3"
            >
              ×
            </button>

            <video
              key={activeStory.id}
              src={activeStory.video}
              poster={activeStory.poster}
              controls
              autoPlay
              muted
              playsInline
              preload="metadata"
              aria-label={`${activeStory.title} video`}
              className="block max-h-[85dvh] min-h-[200px] w-full bg-black object-contain sm:min-h-[300px]"
            >
              Your browser does not support HTML video.
            </video>
          </div>
        </div>
      )}
    </section>
  );
}

export default Testimonials;