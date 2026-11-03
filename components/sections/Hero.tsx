
"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import { Button, AuditButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { whatsappLink, cn } from "@/lib/utils";
import {
  heroHeading,
  heroTrust,
  site,
} from "@/content/site";

function Title() {
  return (
    <h1
      data-hero-title
      className={cn(
        "font-display mx-auto max-w-5xl text-[clamp(3rem,8.3vw,7.4rem)]",
        "font-semibold leading-[0.94] tracking-[-0.075em] text-ink",
      )}
    >
      {heroHeading.map((part, i) => {
        if (typeof part === "string") {
          return <br key={i} />;
        }

        return (
          <span
            key={i}
            className={cn(
              "inline-block px-[0.07em] pb-[0.06em]",
              part.highlight &&
                "rounded-[0.14em] bg-brand text-ink",
            )}
          >
            {part.text}{" "}
          </span>
        );
      })}
    </h1>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [videoReady, setVideoReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  async function handleVideoPlay() {
    const video = videoRef.current;
    if (!video) return;

    try {
      await video.play();
    } catch (error) {
      console.error("Unable to play hero video:", error);
    }
  }

  return (
    <section
      id="top"
      ref={ref}
      className={cn(
        "relative isolate overflow-hidden",
        "bg-[#F7F6F2]",
        "pb-12 pt-28",
        "sm:pb-16 sm:pt-36",
        "lg:pb-20 lg:pt-40",
      )}
    >
      {/* Premium yellow background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div
          className={cn(
            "absolute inset-x-0 top-0 h-[760px]",
            "bg-[radial-gradient(ellipse_at_12%_18%,rgba(247,201,40,0.24),transparent_42%),radial-gradient(ellipse_at_88%_16%,rgba(247,201,40,0.16),transparent_43%),radial-gradient(ellipse_at_50%_65%,rgba(255,249,229,0.78),transparent_48%)]",
          )}
        />

        <div className="absolute inset-x-0 top-0 h-[760px] bg-gradient-to-b from-white/20 via-[#F7F6F2]/35 to-[#F7F6F2]" />

        <div className="absolute -top-36 left-[35%] size-[28rem] rounded-full bg-[#F7C928]/20 blur-[100px] sm:size-[42rem]" />

        <div className="absolute -right-32 top-24 size-80 rounded-full bg-[#8A6C05]/10 blur-[100px]" />

        <div className="absolute inset-x-0 top-[29rem] h-px bg-[#171717]/[0.06]" />
      </div>

      <Container className="relative">
        {/* Hero introduction */}
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          {/* Main heading */}
          <Title />

          {/* Primary actions */}
          <div
            data-hero-actions
            className={cn(
              "mt-8 flex w-full flex-col items-stretch justify-center gap-3",
              "sm:mt-9 sm:w-auto sm:flex-row sm:items-center sm:gap-4",
            )}
          >
            <AuditButton size="lg">
              {site.cta.audit}
            </AuditButton>

            <Button
              href={whatsappLink(
                site.phone.primary.number,
                site.whatsapp.ctaText,
              )}
              variant="outline"
              size="lg"
              className={cn(
                "group border-[#8A6C05]/25",
                "bg-white/75 text-[#171717]",
                "shadow-[0_5px_20px_-12px_rgba(23,23,23,0.25)]",
                "transition-all duration-300",
                "hover:border-[#8A6C05]/50 hover:bg-[#FFF9E5]",
              )}
            >
              <Icon
                name="whatsapp"
                className="mr-2 size-5 text-[#8A6C05] transition-transform duration-300 group-hover:scale-110"
              />
              {site.cta.whatsapp}
            </Button>
          </div>

          {/* Trust indicators */}
          <div
            data-hero-trust
            className={cn(
              "mt-8 flex max-w-3xl flex-wrap items-center justify-center",
              "gap-x-3 gap-y-3",
              "sm:mt-9 sm:gap-x-4 sm:gap-y-4",
            )}
          >
            {heroTrust.map((item) => (
              <div
                key={item.label}
                className={cn(
                  "flex items-center gap-2.5",
                  "rounded-full border border-[#8A6C05]/10",
                  "bg-white/55 py-2 pl-2 pr-3",
                  "text-xs font-medium text-[#55524C]",
                  "transition-colors duration-300",
                  "hover:border-[#8A6C05]/25 hover:bg-white/90",
                  "sm:text-sm",
                )}
              >
                <span className="grid size-7 shrink-0 place-items-center rounded-full border border-[#8A6C05]/15 bg-[#FFF9E5]">
                  <Icon
                    name={item.icon}
                    className="size-3.5 text-[#8A6C05]"
                  />
                </span>

                {item.label}
              </div>
            ))}
          </div>
        </div>

        {/* Cinematic showreel */}
        <div
          data-hero-card
          className={cn(
            "relative mx-auto mt-12 w-full max-w-[1360px]",
            "sm:mt-16 lg:mt-[4.5rem]",
          )}
        >
          <div
            className={cn(
              "overflow-hidden rounded-[1.4rem]",
              "border border-white/80 bg-[#171717] p-1.5",
              "shadow-[0_35px_100px_-35px_rgba(23,23,23,0.30)]",
              "sm:rounded-[1.9rem] sm:p-2",
            )}
          >
            <div
              className={cn(
                "relative aspect-[4/3] overflow-hidden rounded-[1rem]",
                "bg-[#171717]",
                "sm:aspect-[16/9] sm:rounded-[1.5rem]",
                "lg:aspect-[2.05/1]",
              )}
            >
              {/* Poster */}
              {!isPlaying && (
                <Image
                  src="/videos/hero-poster.jpg"
                  alt="Freekit Media showreel preview"
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 640px) 100vw, 95vw"
                  className="pointer-events-none z-[1] object-cover"
                />
              )}

              {/* Video: no scroll-controlled playback */}
              <video
                ref={videoRef}
                src="https://ik.imagekit.io/freekitMedia/Freekit%20media%20Assets/testimonials/freekit%20media%20video.mp4"
                poster="/videos/hero-poster.jpg"
                playsInline
                preload="none"
                controls={isPlaying}
                onLoadedData={() => setVideoReady(true)}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                className={cn(
                  "absolute inset-0 z-[2] size-full object-cover",
                  "transition-opacity duration-300",
                  videoReady || isPlaying
                    ? "opacity-100"
                    : "opacity-0",
                )}
              />

              {/* Cinematic overlays */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-[3] bg-gradient-to-t from-[#171717]/90 via-[#171717]/15 to-[#171717]/10"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-[3] bg-[radial-gradient(ellipse_at_80%_10%,rgba(247,201,40,0.12),transparent_50%)]"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-[3] ring-1 ring-inset ring-white/10"
              />

              {/* Simple play button */}
              {!isPlaying && (
                <button
                  type="button"
                  onClick={handleVideoPlay}
                  aria-label="Play Freekit Media showreel"
                  className={cn(
                    "absolute left-1/2 top-1/2 z-20",
                    "-translate-x-1/2 -translate-y-1/2",
                    "grid size-[68px] place-items-center rounded-full",
                    "border border-white/60 bg-[#F7C928] text-[#171717]",
                    "shadow-[0_12px_40px_rgba(0,0,0,0.24)]",
                    "transition-transform duration-200",
                    "hover:scale-110 active:scale-95",
                    "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/70",
                    "motion-reduce:transition-none",
                    "sm:size-20",
                  )}
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="ml-1 size-6 fill-current sm:size-7"
                  >
                    <path d="M7 4.5v15l12-7.5z" />
                  </svg>
                </button>
              )}

              {/* Video content */}
              <div
                className={cn(
                  "pointer-events-none absolute inset-x-0 bottom-0 z-[4]",
                  "flex flex-wrap items-end justify-between gap-5",
                  "p-5 text-white sm:p-8 lg:p-10",
                )}
              >
                <div className="max-w-xl">
                  <p className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/65 sm:text-[10px]">
                    <span className="size-1.5 rounded-full bg-[#F7C928]" />
                    Built to make brands move
                  </p>

                  <p className="font-display mt-3 text-2xl font-semibold leading-[1.08] tracking-[-0.045em] sm:mt-4 sm:text-4xl lg:text-5xl">
                    Attention is earned.
                    <br />
                    <span className="text-[#FBE17D]">
                      Growth is engineered.
                    </span>
                  </p>
                </div>

                <a
                  href="#contact"
                  className={cn(
                    "pointer-events-auto inline-flex items-center gap-2.5",
                    "rounded-full border border-white/20",
                    "bg-white/10 px-4 py-3",
                    "text-xs font-semibold text-white",
                    "backdrop-blur-xl transition-all duration-300",
                    "hover:border-[#F7C928]/60 hover:bg-[#8A6C05]/25",
                    "sm:text-sm",
                  )}
                >
                  Let&apos;s talk
                  <Icon name="arrowRight" className="size-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Showreel footer */}
          <div
            className={cn(
              "mt-4 flex flex-wrap items-center justify-end",
              "gap-3 px-1 sm:mt-5",
              "text-[10px] uppercase tracking-[0.13em]",
              "text-[#77766D] sm:text-xs",
            )}
          >
            <a
              href="#proof"
              className={cn(
                "group inline-flex items-center gap-2",
                "font-semibold text-[#55524C]",
                "transition-colors duration-300 hover:text-[#8A6C05]",
              )}
            >
              Explore our work
              <Icon
                name="arrowRight"
                className="size-3.5 transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
