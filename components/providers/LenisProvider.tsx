"use client";

import type Lenis from "lenis";
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  type ReactNode,
  type RefObject,
} from "react";

const LenisRefContext = createContext<RefObject<Lenis | null> | null>(null);

export const useLenis = () => useContext(LenisRefContext);

export function LenisProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !window.matchMedia("(pointer: fine)").matches
    ) {
      return;
    }

    let cancelled = false;
    let cleanup = () => {};

    void Promise.all([import("lenis"), import("@/lib/gsap")])
      .then(([{ default: Lenis }, { gsap, ScrollTrigger }]) => {
        if (cancelled) return;

        const instance = new Lenis({ lerp: 0.1 });
        instance.on("scroll", ScrollTrigger.update);
        const raf = (time: number) => instance.raf(time * 1000);
        gsap.ticker.add(raf);
        gsap.ticker.lagSmoothing(0);
        lenisRef.current = instance;

        const onLoad = () => ScrollTrigger.refresh();
        window.addEventListener("load", onLoad);
        if (document.readyState === "complete") onLoad();
        void document.fonts.ready.then(() => {
          if (!cancelled) ScrollTrigger.refresh();
        });

        cleanup = () => {
          window.removeEventListener("load", onLoad);
          gsap.ticker.remove(raf);
          instance.destroy();
          lenisRef.current = null;
        };
      })
      .catch((error: unknown) => {
        console.error("Unable to initialize smooth scrolling", error);
      });

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  return (
    <LenisRefContext.Provider value={lenisRef}>
      {children}
    </LenisRefContext.Provider>
  );
}
