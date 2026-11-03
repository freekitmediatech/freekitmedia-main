"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "@/components/providers/LenisProvider";
import { prefersReducedMotion } from "@/lib/gsap";

export function HashScrollBridge() {
  const pathname = usePathname();
  const lenisRef = useLenis();

  useEffect(() => {
    const hash = window.location.hash;

    let cancelled = false;
    let frame = 0;
    let timeout = 0;

    const run = () => {
      if (cancelled) return;
      let target: Element | null = null;
      try {
        target = document.querySelector(hash);
      } catch {
        return;
      }
      if (!target) return;
      if (lenisRef?.current) {
        lenisRef.current.scrollTo(target as HTMLElement, { offset: 16 });
      } else {
        target.scrollIntoView({
          behavior: prefersReducedMotion() ? "auto" : "smooth",
        });
      }
    };

    frame = requestAnimationFrame(() => {
      if (hash && hash !== "#") {
        timeout = window.setTimeout(run, 200);
      } else if (!cancelled) {
        const lenis = lenisRef?.current;
        if (lenis) {
          lenis.scrollTo(0, { immediate: true });
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        }
      }
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
    };
  }, [lenisRef, pathname]);

  return null;
}
