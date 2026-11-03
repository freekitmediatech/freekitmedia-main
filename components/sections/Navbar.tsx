"use client";

import Link from "next/link";
import {
  useEffect,
  useState,
  type MouseEvent,
} from "react";

import { useLenis } from "@/components/providers/LenisProvider";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { prefersReducedMotion } from "@/lib/gsap";
import { cn, whatsappLink } from "@/lib/utils";
import { site } from "@/content/site";
import type Lenis from "lenis";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="size-6"
    >
      {open ? (
        <path
          d="M6 6L18 18M18 6L6 18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      ) : (
        <>
          <path
            d="M3 7H21"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M8 12H21"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M3 17H16"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </>
      )}
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={cn("size-5", className)}
    >
      <path
        d="M5 12H19M12 5L19 12L12 19"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function getNavHref(href: string) {
  if (
    href.startsWith("/") ||
    href.startsWith("#") ||
    href.startsWith("http")
  ) {
    return href;
  }

  return `/${href}`;
}

function scrollToHash(hash: string, lenis: Lenis | null) {
  const target = document.querySelector<HTMLElement>(hash);

  if (!target) return;

  if (lenis) {
    lenis.scrollTo(target, { offset: -96 });
  } else {
    target.scrollIntoView({
      behavior: prefersReducedMotion() ? "auto" : "smooth",
      block: "start",
    });
  }

  window.history.replaceState(null, "", hash);
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const lenisRef = useLenis();

  const waHref = whatsappLink(
    site.phone.primary.number,
    site.whatsapp.ctaText,
  );

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 20);

    update();
    window.addEventListener("scroll", update, { passive: true });

    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!open) return;

    const lenis = lenisRef?.current ?? null;
    const previousOverflow = document.body.style.overflow;

    // Menu khule to background page scroll na ho (Lenis + native dono band)
    document.body.style.overflow = "hidden";
    lenis?.stop();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      lenis?.start();
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open, lenisRef]);

  const onHashClick =
    (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      setOpen(false);

      if (
        !href.startsWith("/#") ||
        window.location.pathname !== "/"
      ) {
        return;
      }

      const hash = href.slice(1);

      if (!document.querySelector(hash)) return;

      event.preventDefault();

      // Menu band hone aur scroll unlock hone ke baad scroll karo
      window.setTimeout(() => {
        scrollToHash(hash, lenisRef?.current ?? null);
      }, 60);
    };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Main navigation bar */}
      <div
        className={cn(
          "relative z-20 w-full border-b",
          "transition-[background-color,border-color,box-shadow] duration-300",
          "motion-reduce:transition-none",
          scrolled || open
            ? "border-ink/10 bg-paper/95 shadow-[0_8px_35px_-24px_rgba(23,23,23,0.3)] backdrop-blur-xl"
            : "border-transparent bg-paper/90 backdrop-blur-md",
        )}
      >
        <Container className="max-w-[1600px]">
          <div className="flex h-[68px] items-center justify-between gap-4 sm:h-[84px] sm:gap-5">
            {/* Logo */}
            <Link
              href="/"
              onClick={() => setOpen(false)}
              aria-label={`${site.name} home`}
              className="relative z-30 min-w-0 shrink-0 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              <Logo />
            </Link>

            {/* Desktop navigation */}
            <nav
              aria-label="Main navigation"
              className="hidden md:block"
            >
              <ul className="flex items-center gap-1 lg:gap-2">
                {site.navLinks.map((link) => {
                  const href = getNavHref(link.href);

                  return (
                    <li key={link.href}>
                      <Link
                        href={href}
                        onClick={onHashClick(href)}
                        className={cn(
                          "group relative flex min-h-11 items-center",
                          "rounded-xl px-3 lg:px-4",
                          "text-[13px] font-normal tracking-[0.01em] lg:text-sm",
                          "text-ink/65",
                          "transition-all duration-300 ease-out",
                          "hover:-translate-y-0.5",
                          "hover:bg-[#8A6C05]/[0.07]",
                          "hover:text-[#8A6C05]",
                          "focus-visible:outline-none",
                          "focus-visible:ring-2 focus-visible:ring-[#8A6C05]/40",
                          "motion-reduce:transform-none motion-reduce:transition-none",
                        )}
                      >
                        <span className="relative z-10">
                          {link.label}
                        </span>

                        {/* Animated underline */}
                        <span
                          aria-hidden="true"
                          className={cn(
                            "absolute bottom-1.5 left-3 right-3",
                            "h-px origin-center scale-x-0",
                            "rounded-full bg-[#8A6C05]",
                            "transition-transform duration-300 ease-out",
                            "group-hover:scale-x-100",
                            "group-focus-visible:scale-x-100",
                            "lg:left-4 lg:right-4",
                          )}
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* CTA (sm+) and mobile menu button */}
            <div className="relative z-30 flex shrink-0 items-center gap-3">
              <Button
                href="/contact"
                size="md"
                className="!hidden sm:!inline-flex"
              >
                {site.cta.audit}
              </Button>

              <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                aria-expanded={open}
                aria-controls="fullscreen-navigation"
                aria-label={
                  open ? "Close navigation" : "Open navigation"
                }
                className={cn(
                  "grid size-11 place-items-center rounded-xl border",
                  "transition-all duration-300 ease-out md:hidden",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8A6C05]/50",
                  open
                    ? "border-ink bg-ink text-paper"
                    : "border-ink/15 bg-paper text-ink hover:border-[#8A6C05]/50 hover:bg-[#8A6C05]/[0.06] hover:text-[#8A6C05]",
                  "motion-reduce:transition-none",
                )}
              >
                <MenuIcon open={open} />
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Full-screen mobile navigation */}
      <div
        id="fullscreen-navigation"
        data-lenis-prevent
        aria-label="Full-screen navigation"
        aria-hidden={!open}
        inert={!open}
        className={cn(
          "fixed inset-0 z-10 overflow-y-auto overscroll-contain bg-paper",
          "transition-[opacity,visibility] duration-300 ease-out",
          "motion-reduce:transition-none md:hidden",
          open
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0",
        )}
      >
        <div
          className={cn(
            "flex min-h-full flex-col px-5 sm:px-10",
            "pt-[calc(68px+1.5rem)] sm:pt-[calc(84px+2rem)]",
            "pb-[max(1.5rem,env(safe-area-inset-bottom))]",
          )}
        >
          {/* Menu heading */}
          <div className="mb-2 flex items-center justify-between border-b border-ink/15 pb-4">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-ink/50">
              Explore FreeKit
            </p>

            <p className="font-mono text-[10px] font-light text-ink/40">
              {String(site.navLinks.length).padStart(2, "0")} PAGES
            </p>
          </div>

          {/* Mobile links */}
          <nav aria-label="Full-screen mobile menu">
            <ul>
              {site.navLinks.map((link, index) => {
                const href = getNavHref(link.href);

                return (
                  <li
                    key={link.href}
                    style={{
                      transitionDelay: open
                        ? `${80 + index * 45}ms`
                        : "0ms",
                    }}
                    className={cn(
                      "border-b border-ink/10",
                      "transition-[opacity,transform] duration-500 ease-out",
                      "motion-reduce:transition-none",
                      open
                        ? "translate-y-0 opacity-100"
                        : "translate-y-3 opacity-0",
                    )}
                  >
                    <Link
                      href={href}
                      onClick={onHashClick(href)}
                      className={cn(
                        "group relative flex min-h-[64px] items-center justify-between gap-4 py-3",
                        "sm:min-h-[88px] sm:py-4",
                        "transition-colors duration-300",
                        "hover:bg-[#8A6C05]/[0.04] active:bg-[#8A6C05]/[0.08]",
                        "focus-visible:outline-none focus-visible:bg-[#8A6C05]/[0.06]",
                        "motion-reduce:transition-none",
                      )}
                    >
                      <span className="flex min-w-0 items-center gap-3 sm:gap-6">
                        {/* Fixed width: saare labels ek hi line mein align */}
                        <span className="w-6 shrink-0 font-mono text-[10px] font-light text-[#8A6C05] sm:w-8 sm:text-xs">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span
                          className={cn(
                            "min-w-0 break-words font-display font-light",
                            "text-[clamp(1.6rem,7.5vw,3.5rem)]",
                            "leading-[1.05] tracking-[-0.03em]",
                            "text-ink",
                            "transition-all duration-300 ease-out",
                            "group-hover:translate-x-2 group-active:translate-x-1",
                            "group-hover:text-[#8A6C05] group-active:text-[#8A6C05]",
                            "motion-reduce:transform-none motion-reduce:transition-none",
                          )}
                        >
                          {link.label}
                        </span>
                      </span>

                      <ArrowIcon
                        className={cn(
                          "shrink-0 text-ink/30",
                          "transition-all duration-300 ease-out",
                          "group-hover:translate-x-1",
                          "group-hover:text-[#8A6C05] group-active:text-[#8A6C05]",
                          "motion-reduce:transition-none",
                        )}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile CTA buttons */}
          <div className="mt-auto grid gap-3 pt-8 sm:grid-cols-2 sm:pt-10">
            <Button
              href={waHref}
              variant="outline"
              size="lg"
              onClick={() => setOpen(false)}
            >
              {site.cta.whatsapp}
            </Button>

            <Button
              href="/contact"
              size="lg"
              onClick={() => setOpen(false)}
            >
              {site.cta.audit}
            </Button>
          </div>

          {/* Footer */}
          <div className="mt-6 flex flex-wrap items-end justify-between gap-3 border-t border-ink/10 pt-4">
            <p className="max-w-xs text-xs font-light leading-relaxed text-ink/55">
              Thoughtful work. Honest growth.
            </p>

            <p className="text-[9px] font-medium uppercase tracking-[0.17em] text-ink/40">
              Chhattisgarh, India
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;