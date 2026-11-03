"use client";

import type { RefObject } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export function useReveal<T extends HTMLElement = HTMLDivElement>(
  ref: RefObject<T | null>,
) {
  useGSAP(
    () => {
      const container = ref.current;
      if (!container) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const groups = container.querySelectorAll<HTMLElement>(
          "[data-reveal-stagger]",
        );
        groups.forEach((group) => {
          const items = group.querySelectorAll<HTMLElement>(
            ":scope [data-reveal]",
          );
          gsap.fromTo(
            items,
            { y: 28, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.7,
              stagger: 0.09,
              scrollTrigger: { trigger: group, start: "top 82%", once: true },
            },
          );
        });
        const singles = Array.from(
          container.querySelectorAll<HTMLElement>("[data-reveal]"),
        ).filter((el) => !el.closest("[data-reveal-stagger]"));
        singles.forEach((el) => {
          gsap.fromTo(
            el,
            { y: 24, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.7,
              scrollTrigger: {
                trigger: el.parentElement ?? el,
                start: "top 85%",
                once: true,
              },
            },
          );
        });
      });
      return () => mm.revert();
    },
    { scope: ref },
  );
}
