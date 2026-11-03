"use client";

import Image from "next/image";

import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/partners/Reveal";

export type PartnerReel = {
  title: string;
  url: string;
  poster?: string;
};

export function PartnerReelCard({
  reel,
  className,
}: {
  reel: PartnerReel;
  className?: string;
}) {
  return (
    <a
      href={reel.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Watch ${reel.title} on Instagram`}
      className={`group relative flex aspect-[9/16] items-center justify-center overflow-hidden rounded-[1.4rem] bg-[#171717] text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8A6C05] focus-visible:ring-offset-2 sm:rounded-[1.6rem] ${className ?? ""}`}
    >
      {reel.poster ? (
        <Image
          src={reel.poster}
          alt=""
          fill
          sizes="(max-width: 640px) 78vw, (max-width: 1024px) 45vw, 30vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
        />
      ) : (
        <span className="px-8 text-center font-display text-xl font-semibold">
          {reel.title}
        </span>
      )}

      <span
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
      />

      <span className="absolute bottom-4 left-4 right-4 text-xs font-semibold sm:text-sm">
        Watch reel on Instagram
      </span>

      <span className="absolute left-1/2 top-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#F7C928] text-[#171717] shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition-transform duration-300 group-hover:scale-110 group-active:scale-95 motion-reduce:transition-none">
        <Icon name="play" className="ml-0.5 size-6" />
      </span>
    </a>
  );
}

export function PartnerReels({
  partnerName,
  reels,
}: {
  partnerName: string;
  reels: PartnerReel[];
}) {
  return (
    <section
      aria-labelledby="partner-reels-heading"
      className="mt-12 border-t border-[#171717]/15 pt-8 sm:mt-16 sm:pt-10"
    >
      <Reveal>
        <div className="flex items-center justify-between gap-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8A6C05] sm:text-xs">
            Partner videos
          </p>
          {reels.length > 0 ? (
            <p className="shrink-0 font-mono text-[10px] text-[#77766D] sm:text-xs">
              {String(reels.length).padStart(2, "0")} REELS
            </p>
          ) : null}
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
          <h2
            id="partner-reels-heading"
            className="font-display text-balance text-[clamp(1.8rem,5.5vw,3rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-[#171717]"
          >
            {partnerName}, in motion
          </h2>

          <p className="max-w-sm text-sm leading-6 text-[#55524C]">
            Is partner ke Instagram se reels aur videos.
          </p>
        </div>
      </Reveal>

      {reels.length > 0 ? (
        <div className="mt-7 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 sm:mt-9 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:pb-0 lg:grid-cols-3">
          {reels.map((reel, index) => (
            <Reveal
              key={reel.url}
              delay={Math.min(index, 4) * 0.07}
              className="w-[78%] shrink-0 snap-center sm:w-auto"
            >
              <article className="overflow-hidden rounded-[1.6rem] border border-[#171717]/10 bg-white/75">
                <PartnerReelCard reel={reel} className="rounded-b-none" />

                <div className="flex items-center justify-between gap-3 p-4">
                  <h3 className="min-w-0 font-display text-sm font-semibold leading-snug tracking-[-0.01em] text-[#171717] sm:text-base">
                    {reel.title}
                  </h3>

                  <a
                    href={reel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-xs font-semibold text-[#8A6C05] underline decoration-[#8A6C05]/40 underline-offset-4 transition-colors hover:text-[#171717] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8A6C05] sm:text-sm"
                  >
                    Instagram
                    <span className="sr-only">: {reel.title}</span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      ) : (
        <Reveal className="mt-7 rounded-2xl border border-[#171717]/10 bg-[#FFF9E5] p-6 sm:p-8">
          <p className="font-display text-xl font-semibold tracking-[-0.02em] text-[#171717]">
            Aur videos jaldi aa rahe hain.
          </p>
          <p className="mt-2 text-sm leading-6 text-[#55524C]">
            Partner reels gallery mein add hote hi yahan dikhengi.
          </p>
        </Reveal>
      )}
    </section>
  );
}