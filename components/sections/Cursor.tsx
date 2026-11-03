"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const cursorBase =
  "pointer-events-none fixed left-0 top-0 z-[90] motion-reduce:hidden";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let cancelled = false;
    let cleanup = () => {};

    void import("@/lib/gsap")
      .then(({ gsap }) => {
        if (cancelled) return;

        const dotX = gsap.quickTo(dot, "x", {
          duration: 0.08,
          ease: "power2.out",
        });
        const dotY = gsap.quickTo(dot, "y", {
          duration: 0.08,
          ease: "power2.out",
        });
        const ringX = gsap.quickTo(ring, "x", {
          duration: 0.32,
          ease: "power3.out",
        });
        const ringY = gsap.quickTo(ring, "y", {
          duration: 0.32,
          ease: "power3.out",
        });

        gsap.set([dot, ring], {
          xPercent: -50,
          yPercent: -50,
          autoAlpha: 0,
        });

        let visible = false;
        let grow = false;

        const onMove = (event: PointerEvent) => {
          dotX(event.clientX);
          dotY(event.clientY);
          ringX(event.clientX);
          ringY(event.clientY);
          if (!visible) {
            visible = true;
            gsap.to([dot, ring], { autoAlpha: 1, duration: 0.3 });
          }
        };

        const isInteractive = (target: EventTarget | null) =>
          Boolean(
            target instanceof Element &&
              target.closest("a, button, summary, [data-cursor-grow]"),
          );

        const onOver = (event: PointerEvent) => {
          if (!isInteractive(event.target) || grow) return;
          grow = true;
          gsap.to(ring, {
            scale: 1.9,
            duration: 0.35,
            ease: "power3.out",
          });
        };

        const onOut = (event: PointerEvent) => {
          if (isInteractive(event.target) || !grow) return;
          grow = false;
          gsap.to(ring, {
            scale: 1,
            duration: 0.35,
            ease: "power3.out",
          });
        };

        const onLeave = () => {
          visible = false;
          gsap.to([dot, ring], { autoAlpha: 0, duration: 0.3 });
        };

        window.addEventListener("pointermove", onMove, { passive: true });
        window.addEventListener("pointerover", onOver, { passive: true });
        window.addEventListener("pointerout", onOut, { passive: true });
        document.documentElement.addEventListener("pointerleave", onLeave);

        cleanup = () => {
          window.removeEventListener("pointermove", onMove);
          window.removeEventListener("pointerover", onOver);
          window.removeEventListener("pointerout", onOut);
          document.documentElement.removeEventListener("pointerleave", onLeave);
          gsap.killTweensOf([dot, ring]);
        };
      })
      .catch((error: unknown) => {
        console.error("Unable to load custom cursor motion", error);
      });

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  return (
    <div aria-hidden="true">
      <div
        ref={dotRef}
        className={cn(
          cursorBase,
          "hidden size-1.5 rounded-full bg-brand lg:block",
        )}
      />
      <div
        ref={ringRef}
        className={cn(
          cursorBase,
          "hidden size-9 rounded-full border border-brand/60 lg:block",
        )}
      />
    </div>
  );
}
