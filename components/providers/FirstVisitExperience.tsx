"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { LogoMark } from "@/components/ui/Logo";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/content/site";

type ExperiencePhase = "checking" | "loader" | "welcome" | "done";

const STORAGE_KEY = "fk-first-visit-complete";

function hasCompletedFirstVisit() {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "true";
  } catch (error) {
    console.error("Unable to read first-visit experience state.", error);
    return false;
  }
}

function saveFirstVisitCompletion() {
  try {
    window.localStorage.setItem(STORAGE_KEY, "true");
  } catch (error) {
    console.error("Unable to save first-visit experience state.", error);
  }
}

export function FirstVisitExperience() {
  const [phase, setPhase] = useState<ExperiencePhase>("checking");
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const isActive = phase === "loader" || phase === "welcome";

  useEffect(() => {
    let welcomeTimeout = 0;
    const startTimeout = window.setTimeout(() => {
      if (hasCompletedFirstVisit()) {
        setPhase("done");
        return;
      }

      setPhase("loader");
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      welcomeTimeout = window.setTimeout(
        () => setPhase("welcome"),
        reducedMotion ? 250 : 1250,
      );
    }, 0);

    return () => {
      window.clearTimeout(startTimeout);
      window.clearTimeout(welcomeTimeout);
    };
  }, []);

  useEffect(() => {
    if (!isActive) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [isActive]);

  useEffect(() => {
    if (phase !== "welcome") return;

    const previousFocus = document.activeElement;
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        saveFirstVisitCompletion();
        setPhase("done");
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          "a[href], button:not([disabled])",
        ),
      ).filter((element) => element.getClientRects().length > 0);

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);

      if (
        previousFocus instanceof HTMLElement &&
        document.body.contains(previousFocus)
      ) {
        previousFocus.focus();
      }
    };
  }, [phase]);

  if (phase === "checking" || phase === "done") return null;

  const dismiss = () => {
    saveFirstVisitCompletion();
    setPhase("done");
  };

  return (
    <div className="fixed inset-0 z-[110] grid place-items-center overflow-y-auto p-4 sm:p-8">
      <div
        aria-hidden="true"
        className="fk-visit-backdrop fixed inset-0 bg-[#171717]/75 backdrop-blur-md"
      />

      {phase === "loader" ? (
        <div
          role="status"
          aria-live="polite"
          className="fk-visit-loader relative z-10 flex w-full max-w-xs flex-col items-center text-center text-white"
        >
          <span className="fk-visit-mark mb-5 grid size-[4.5rem] place-items-center rounded-2xl bg-white p-2 shadow-[0_12px_40px_rgba(0,0,0,0.2)]">
            <LogoMark className="size-full rounded-xl ring-0" />
          </span>
          <p className="font-display text-xl font-bold tracking-tight">
            {site.name}
          </p>
          <p className="mt-2 text-sm text-white/65">
            Bringing your brand into focus
          </p>
          <span
            aria-hidden="true"
            className="fk-visit-progress mt-8 h-0.5 w-44 overflow-hidden bg-white/20"
          >
            <span className="block h-full origin-left bg-brand" />
          </span>
        </div>
      ) : (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="first-visit-title"
          aria-describedby="first-visit-description"
          className="fk-visit-card relative z-10 my-auto w-full max-w-[42rem] rounded-[1.75rem] bg-[#F7F6F2] px-6 py-12 text-center shadow-[0_32px_100px_rgba(0,0,0,0.28)] sm:px-12 sm:py-16"
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={dismiss}
            aria-label="Close welcome message"
            className="absolute right-4 top-4 grid size-11 place-items-center rounded-full border border-[#171717]/15 text-[#171717] transition-colors hover:bg-[#F7C928] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8A6C05] sm:right-6 sm:top-6"
          >
            <Icon name="x" className="size-5" />
          </button>

          <span className="inline-flex items-center gap-2 rounded-full bg-[#F7C928]/25 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#6D5400] sm:text-xs">
            <LogoMark className="size-5 rounded-full ring-0" />
            FreeKit Media
          </span>

          <h1
            id="first-visit-title"
            className="font-display mx-auto mt-7 max-w-xl text-[clamp(2rem,6vw,3.5rem)] font-extrabold leading-[1.03] tracking-[-0.06em] text-[#171717]"
          >
            Aapka brand{" "}
            <span className="decoration-[#F7C928] decoration-[0.2em] underline underline-offset-4">
              yaad rehna chahiye.
            </span>
          </h1>

          <p
            id="first-visit-description"
            className="mx-auto mt-5 max-w-lg text-sm leading-6 text-[#55524C] sm:mt-6 sm:text-base sm:leading-7"
          >
            Customers pehle online dekhte hain, phir bharosa karte hain. Hum
            content, ads aur design ko ek strategy mein jodte hain—taaki aapka
            brand nazar aaye aur chuna jaaye.
          </p>

          <Link
            href="/contact"
            onClick={dismiss}
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#F7C928] px-7 text-sm font-bold text-[#171717] shadow-[0_8px_24px_rgba(138,108,5,0.16)] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8A6C05] motion-reduce:transition-none"
          >
            Let&apos;s talk about your brand
            <Icon name="arrowRight" className="size-4" />
          </Link>

          <p className="mt-5 text-xs text-[#55524C]/75">
            {site.tagline}
          </p>
        </div>
      )}

      <style>{`
        @keyframes fk-visit-backdrop-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fk-visit-mark-in {
          from { opacity: 0; transform: translateY(12px) scale(0.94); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes fk-visit-progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        @keyframes fk-visit-card-in {
          from { opacity: 0; transform: translateY(18px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .fk-visit-backdrop { animation: fk-visit-backdrop-in 320ms ease-out both; }
        .fk-visit-mark { animation: fk-visit-mark-in 480ms cubic-bezier(.2,.8,.2,1) both; }
        .fk-visit-progress > span { animation: fk-visit-progress 1050ms cubic-bezier(.4,0,.2,1) both; }
        .fk-visit-card { animation: fk-visit-card-in 420ms cubic-bezier(.2,.8,.2,1) both; }

        @media (prefers-reduced-motion: reduce) {
          .fk-visit-backdrop,
          .fk-visit-mark,
          .fk-visit-progress > span,
          .fk-visit-card { animation: none; }
        }
      `}</style>
    </div>
  );
}
