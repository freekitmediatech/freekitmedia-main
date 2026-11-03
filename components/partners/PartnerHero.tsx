"use client";

import Image from "next/image";

import { FadeUp } from "@/components/sections/CaseStudiesMotion";
import { Container } from "@/components/ui/Container";
import type { Partner, PartnerTheme } from "@/content/partners";

const defaultTheme: PartnerTheme = {
  mode: "dark",
  accent: "#F7C928",
  accentSoft: "#FBE17D",
  background: "#171717",
  foreground: "#FFFFFF",
  muted: "rgba(255, 255, 255, 0.66)",
};

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
}

export function PartnerHero({ partner }: { partner: Partner }) {
  const theme = partner.theme ?? defaultTheme;
  const isDark = theme.mode !== "light";
  const background = theme.background ?? (isDark ? "#171717" : "#F7F6F2");
  const foreground = theme.foreground ?? (isDark ? "#FFFFFF" : "#171717");
  const muted =
    theme.muted ?? (isDark ? "rgba(255, 255, 255, 0.66)" : "#55524C");
  const accent = theme.accent ?? "#F7C928";
  const accentSoft = theme.accentSoft ?? "#FBE17D";

  const chips: string[] = [
    partner.industry,
    ...(partner.city ? [partner.city] : []),
    ...(partner.franchise ? ["Franchise"] : []),
  ].filter((chip): chip is string => Boolean(chip));

  return (
    <section className="relative isolate overflow-clip">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{ backgroundColor: background }}
      />
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/2 -z-10 size-[22rem] -translate-x-1/2 rounded-full opacity-60 blur-[100px] sm:-top-40 sm:size-[34rem] sm:opacity-70 sm:blur-[110px]"
        style={{ backgroundColor: accent }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -right-24 -z-10 size-[20rem] rounded-full opacity-50 blur-[90px] sm:size-[30rem] sm:opacity-60 sm:blur-[100px]"
        style={{ backgroundColor: accentSoft }}
      />

      <Container className="relative">
        <div className="grid gap-10 py-12 sm:gap-12 sm:py-20 lg:grid-cols-12 lg:items-center lg:gap-16 lg:py-24">
          {/* Text */}
          <div className="min-w-0 lg:col-span-7">
            <FadeUp>
              <p
                className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] sm:text-xs"
                style={{ color: accent }}
              >
                <span
                  className="size-1.5 shrink-0 rounded-full"
                  style={{ backgroundColor: accent }}
                />
                Partner / {partner.industry}
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h1
                className="font-display mt-5 text-balance text-[clamp(2.2rem,9vw,5.2rem)] font-semibold leading-[1] tracking-[-0.05em] sm:mt-6 lg:leading-[0.96] lg:tracking-[-0.06em]"
                style={{ color: foreground }}
              >
                {partner.headline ?? partner.name}
              </h1>
            </FadeUp>

            {partner.intro ? (
              <FadeUp delay={0.2}>
                <p
                  className="mt-5 max-w-xl text-pretty text-[15px] leading-7 sm:mt-6 sm:text-lg sm:leading-8"
                  style={{ color: muted }}
                >
                  {partner.intro}
                </p>
              </FadeUp>
            ) : null}

            {chips.length > 0 ? (
              <FadeUp delay={0.3}>
                <ul className="mt-6 flex flex-wrap gap-2 sm:mt-8">
                  {chips.map((chip) => (
                    <li
                      key={chip}
                      className="rounded-full border px-3 py-1 text-[11px] font-medium sm:text-xs"
                      style={{ color: muted, borderColor: `${foreground}26` }}
                    >
                      {chip}
                    </li>
                  ))}
                </ul>
              </FadeUp>
            ) : null}
          </div>

          {/* Logo card */}
          <FadeUp delay={0.25} className="min-w-0 lg:col-span-5">
            <div
              className="relative aspect-[16/10] overflow-hidden rounded-[1.4rem] border sm:aspect-[4/3] sm:rounded-[2rem]"
              style={{ borderColor: `${foreground}1f` }}
            >
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{ backgroundColor: `${foreground}10` }}
              />

              {partner.logo ? (
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-contain p-8 sm:p-14"
                />
              ) : (
                <span
                  className="absolute inset-0 grid place-items-center font-display text-5xl font-semibold tracking-tight sm:text-6xl"
                  style={{ color: accent }}
                >
                  {initials(partner.name)}
                </span>
              )}
            </div>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}