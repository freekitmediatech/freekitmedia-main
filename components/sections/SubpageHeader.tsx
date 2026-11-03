"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { site } from "@/content/site";

const sectionLinks = site.navLinks.filter((link) =>
  ["#system", "#process", "#faq"].includes(link.href),
);

const pageLinks = [
  { label: "Services", href: "/services" },
  { label: "Case studies", href: "/case-studies" },
  { label: "Partners", href: "/partners" },
  { label: "Industries", href: "/industries" },
  { label: "Blog", href: "/blog" },
] as const;

export function SubpageHeader() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="relative z-50 border-b border-grey-200 bg-paper">
      <Container className="relative z-50 flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          onClick={closeMenu}
          className="py-2"
          aria-label={`${site.name} home`}
        >
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {sectionLinks.map((link) => (
            <Link
              key={link.href}
              href={`/${link.href}`}
              className="px-2 py-2 text-sm font-medium text-ink/70 transition-colors hover:text-ink motion-reduce:transition-none"
            >
              {link.label}
            </Link>
          ))}
          {pageLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-2 py-2 text-sm font-medium text-ink/70 transition-colors hover:text-ink motion-reduce:transition-none"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="relative z-50 flex items-center gap-2">
          <Button href="/contact" size="sm" className="!hidden sm:!inline-flex">
            {site.cta.audit}
          </Button>
          <button
            ref={menuButtonRef}
            type="button"
            aria-expanded={open}
            aria-controls="subpage-mobile-navigation"
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen((value) => !value)}
            className="grid size-10 place-items-center border border-ink/15 text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-deep lg:hidden"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="size-5"
            >
              {open ? (
                <path
                  d="M6 6L18 18M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M3 7H21M3 12H21M3 17H21"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </Container>

      <div
        id="subpage-mobile-navigation"
        aria-label="Full-screen navigation"
        aria-hidden={!open}
        inert={!open}
        className={`fixed inset-0 z-40 overflow-y-auto bg-paper pt-20 transition-[opacity,visibility] duration-300 motion-reduce:transition-none lg:hidden ${
          open
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
      >
        <Container className="flex min-h-full flex-col pb-8">
          <p className="border-b border-ink/15 pb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/45">
            Explore FreeKit
          </p>
          <nav aria-label="Mobile navigation">
            <ul>
              {[
                ...sectionLinks.map((link) => ({
                  label: link.label,
                  href: `/${link.href}`,
                })),
                ...pageLinks,
              ].map((link, index) => (
                <li key={link.href} className="border-b border-ink/10">
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="group flex min-h-16 items-center justify-between gap-4 py-3"
                  >
                    <span className="flex items-center gap-4">
                      <span className="font-mono text-[10px] text-brand-deep">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-3xl font-bold tracking-[-0.05em] text-ink">
                        {link.label}
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-xl text-ink/35 transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
                    >
                      ↗
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-auto pt-8">
            <Button
              href="/contact"
              size="lg"
              onClick={closeMenu}
              className="w-full"
            >
              {site.cta.audit}
            </Button>
            <p className="text-xs text-ink/50">
              {site.address.line}
            </p>
          </div>
        </Container>
      </div>
    </header>
  );
}
