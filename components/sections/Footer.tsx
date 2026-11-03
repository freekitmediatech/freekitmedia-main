"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { useLenis } from "@/components/providers/LenisProvider";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { prefersReducedMotion } from "@/lib/gsap";
import { whatsappLink } from "@/lib/utils";

const contactItems = [
  {
    icon: "phone",
    href: `tel:${site.phone.primary.number}`,
    label: site.phone.primary.display,
  },
  {
    icon: "whatsapp",
    href: whatsappLink(site.phone.secondary.number, site.whatsapp.ctaText),
    label: site.phone.secondary.display,
  },
  {
    icon: "mail",
    href: `mailto:${site.email}`,
    label: site.email,
  },
  {
    icon: "instagram",
    href: site.instagram.url,
    label: site.instagram.handle,
  },
  {
    icon: "mapPin",
    label: site.cities.join(", "),
    plain: true,
  },
] as const;

const footerHeading =
  "text-[10px] font-medium uppercase tracking-[0.2em] text-[#F7C928]";

const footerLink =
  "inline-flex min-h-8 w-fit max-w-full items-center text-[13px] font-light leading-5 text-white/65 transition-colors duration-200 hover:text-[#F7C928] focus-visible:rounded-sm focus-visible:text-[#F7C928] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F7C928]";

const legalLinks = [
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/refund-policy", label: "Refund Policy" },
];

/* "#proof" jaise links subpages pe toot jaate hain, isliye "/#proof" banate hain */
function normalizeHref(href: string) {
  if (href.startsWith("#")) return `/${href}`;
  if (href.startsWith("/") || href.startsWith("http")) return href;
  return `/${href}`;
}

const exploreLinks = [
  ...site.navLinks,
  { href: "/services", label: "All services" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/industries", label: "Industries" },
  { href: "/partners", label: "Partners" },
  { href: "/locations", label: "Locations" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]
  .map((link) => ({ ...link, href: normalizeHref(link.href) }))
  .filter(
    (link, index, links) =>
      links.findIndex((item) => item.href === link.href) === index,
  );

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);
  const lenisRef = useLenis();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setCurrentYear(new Date().getFullYear());
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const backToTop = () => {
    const lenis = lenisRef?.current ?? null;

    if (lenis) {
      lenis.scrollTo(0);
    } else {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion() ? "auto" : "smooth",
      });
    }
  };

  return (
    <footer
      id="footer"
      className="relative overflow-hidden bg-[#171717] text-white"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 left-1/2 h-80 w-[42rem] max-w-none -translate-x-1/2 rounded-full bg-[#F7C928]/[0.055] blur-[100px]"
      />

      <Container className="relative pb-[max(2rem,env(safe-area-inset-bottom))] pt-10 sm:pt-14 lg:pt-16">
        {/* Main footer */}
        <div className="overflow-hidden rounded-2xl border border-white/[0.09] bg-[#1D1D1D]">
          <div className="grid gap-9 px-5 py-7 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 sm:px-8 sm:py-9 lg:grid-cols-12 lg:gap-8 lg:px-9 lg:py-11 xl:px-10">
            {/* Brand */}
            <div className="min-w-0 sm:col-span-2 lg:col-span-3">
              <Link
                href="/"
                aria-label={site.name}
                className="inline-flex rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F7C928]"
              >
                <Logo variant="light" />
              </Link>

              <p className="font-display mt-4 max-w-xs text-balance text-base font-medium leading-snug tracking-[-0.01em] text-white/90 sm:text-lg">
                {site.tagline}
              </p>

              <p className="mt-2 max-w-xs text-[13px] font-light leading-5 text-white/45">
                {site.headlineEn} — {site.cities.join(", ")}.
              </p>

              <ul
                className="mt-5 flex flex-wrap gap-2"
                aria-label="Social media"
              >
                {site.socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="grid size-11 place-items-center rounded-full border border-white/10 text-white/60 transition-colors duration-200 hover:border-[#F7C928]/50 hover:bg-[#F7C928]/[0.08] hover:text-[#F7C928] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F7C928] sm:size-10"
                    >
                      <Icon name={social.icon} className="size-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <nav
              aria-label="Services"
              className="min-w-0 border-t border-white/[0.07] pt-7 sm:border-t-0 sm:pt-0 lg:col-span-3"
            >
              <h3 className={footerHeading}>Services</h3>

              <ul className="mt-4 space-y-1">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className={footerLink}
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Explore */}
            <nav
              aria-label="Explore"
              className="min-w-0 border-t border-white/[0.07] pt-7 sm:border-t-0 sm:pt-0 lg:col-span-3"
            >
              <h3 className={footerHeading}>Explore</h3>

              <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1">
                {exploreLinks.map((link) => (
                  <li key={link.href} className="min-w-0">
                    <Link href={link.href} className={footerLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact */}
            <div className="min-w-0 border-t border-white/[0.07] pt-7 sm:col-span-2 sm:pt-9 lg:col-span-3 lg:border-t-0 lg:pt-0">
              <h3 className={footerHeading}>Get in touch</h3>

              <ul className="mt-4 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-1">
                {contactItems.map((item) => {
                  const content = (
                    <>
                      <Icon
                        name={item.icon}
                        className="mt-0.5 size-4 shrink-0 text-[#F7C928]"
                      />
                      <span className="min-w-0 break-words">
                        {item.label}
                      </span>
                    </>
                  );

                  return (
                    <li key={`${item.icon}-${item.label}`} className="min-w-0">
                      {"plain" in item ? (
                        <span className="flex min-h-11 items-start gap-2.5 py-2.5 text-[13px] font-light leading-5 text-white/50">
                          {content}
                        </span>
                      ) : (
                        <a
                          href={item.href}
                          target={
                            item.icon === "instagram" ||
                            item.icon === "whatsapp"
                              ? "_blank"
                              : undefined
                          }
                          rel={
                            item.icon === "instagram" ||
                            item.icon === "whatsapp"
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="flex min-h-11 items-start gap-2.5 rounded-lg py-2.5 text-[13px] font-light leading-5 text-white/65 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F7C928]"
                        >
                          {content}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/[0.08] px-5 py-5 sm:px-8 lg:px-9 xl:px-10">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <p className="text-xs font-light leading-5 text-white/40">
                © {currentYear ? `${currentYear} ` : ""}
                {site.name}. All rights reserved.
              </p>

              <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/35">
                Made in Chhattisgarh, for Chhattisgarh.
              </p>
            </div>

            <div className="mt-4 flex flex-col gap-4 border-t border-white/[0.07] pt-4 sm:flex-row sm:items-center sm:justify-between">
              <nav
                aria-label="Legal"
                className="flex flex-wrap gap-x-5 gap-y-1"
              >
                {legalLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex min-h-9 items-center text-[11px] font-light text-white/45 transition-colors duration-200 hover:text-[#F7C928] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F7C928]"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <button
                type="button"
                onClick={backToTop}
                className="group inline-flex min-h-9 w-fit items-center gap-2 text-[11px] font-medium text-white/50 transition-colors duration-200 hover:text-[#F7C928] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F7C928]"
              >
                Back to top
                <Icon
                  name="arrowRight"
                  className="size-3 -rotate-90 transition-transform duration-200 group-hover:-translate-y-0.5"
                />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}