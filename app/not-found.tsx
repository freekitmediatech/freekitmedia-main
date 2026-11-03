
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { services } from "@/content/services";
import { site } from "@/content/site";

const YELLOW = "#F7C928";
const BRAND_GOLD = "#8A6C05";
const CHARCOAL = "#171517";

function Broken404Illustration() {
  return (
    <div className="error-visual relative mx-auto w-full max-w-[540px]">
      <div
        aria-hidden="true"
        className="error-glow absolute inset-[15%] rounded-full bg-[#8A6C05]/20 blur-[85px]"
      />

      <div
        aria-hidden="true"
        className="error-glow-secondary absolute right-[15%] top-[15%] h-24 w-24 rounded-full bg-[#F7C928]/20 blur-3xl"
      />

      <svg
        viewBox="0 0 520 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Broken browser window with a 404 error"
        className="error-svg relative z-10 w-full overflow-visible"
      >
        {/* Orbital system */}
        <ellipse
          className="error-orbit"
          cx="260"
          cy="244"
          rx="215"
          ry="155"
          stroke={BRAND_GOLD}
          strokeOpacity=".32"
          strokeWidth="1.5"
          strokeDasharray="5 10"
          transform="rotate(-18 260 244)"
        />

        <ellipse
          cx="260"
          cy="244"
          rx="185"
          ry="132"
          stroke={CHARCOAL}
          strokeOpacity=".07"
          strokeWidth="1"
          strokeDasharray="2 12"
        />

        {/* Decorative cross */}
        <g className="error-spark">
          <path
            d="M78 115L91 128M91 115L78 128"
            stroke={BRAND_GOLD}
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>

        <g className="error-spark">
          <path
            d="M425 113V145M409 129H441"
            stroke={BRAND_GOLD}
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>

        <path
          d="M120 80L126 95L141 101L126 107L120 122L114 107L99 101L114 95Z"
          fill={YELLOW}
        />

        <circle cx="414" cy="290" r="4" fill={BRAND_GOLD} />
        <circle cx="365" cy="94" r="3" fill={YELLOW} />
        <circle cx="424" cy="339" r="5" fill={YELLOW} />

        {/* Main illustration group */}
        <g className="error-window">
          {/* Shadow */}
          <rect
            x="94"
            y="121"
            width="332"
            height="246"
            rx="28"
            fill={CHARCOAL}
            fillOpacity=".07"
            transform="rotate(-4 260 244)"
          />

          {/* Left panel */}
          <path
            d="M117 142Q117 126 133 126H257L243 177L256 213L239 255L254 290L241 337L254 357H133Q117 357 117 341V142Z"
            fill="#FFFFFF"
            stroke={CHARCOAL}
            strokeOpacity=".12"
            strokeWidth="1.5"
          />

          {/* Right panel */}
          <path
            d="M267 126H387Q403 126 403 142V341Q403 357 387 357H267L281 323L265 286L281 248L266 213L280 177L267 126Z"
            fill="#FFF9E5"
            stroke={BRAND_GOLD}
            strokeOpacity=".3"
            strokeWidth="1.5"
          />

          {/* Browser header */}
          <path
            d="M133 126H257L253 151H133Q117 151 117 142Q117 126 133 126Z"
            fill={CHARCOAL}
          />

          <path
            d="M267 126H387Q403 126 403 142V151H271Z"
            fill={CHARCOAL}
          />

          <circle cx="137" cy="139" r="4" fill={BRAND_GOLD} />
          <circle cx="151" cy="139" r="4" fill={YELLOW} />
          <circle cx="165" cy="139" r="4" fill="#FFFFFF" fillOpacity=".6" />

          {/* Broken 404 numerals */}
          <text
            x="181"
            y="247"
            fill={CHARCOAL}
            fontSize="79"
            fontWeight="800"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
            letterSpacing="-7"
          >
            4
          </text>

          <text
            x="339"
            y="247"
            fill={CHARCOAL}
            fontSize="79"
            fontWeight="800"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
            letterSpacing="-7"
          >
            4
          </text>

          {/* Error face */}
          <circle cx="260" cy="231" r="38" fill={BRAND_GOLD} />

          <path
            d="M247 219L255 227M255 219L247 227M266 219L274 227M274 219L266 227"
            stroke="#FFFFFF"
            strokeWidth="4"
            strokeLinecap="round"
          />

          <path
            d="M247 244Q260 233 273 244"
            stroke={YELLOW}
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Crack highlight */}
          <path
            className="error-crack"
            d="M257 126L270 165L252 187L269 211L251 236L269 260L251 288L264 315L251 357"
            stroke={BRAND_GOLD}
            strokeWidth="4"
            strokeLinejoin="round"
          />

          <path
            d="M257 126L270 165L252 187L269 211L251 236L269 260L251 288L264 315L251 357"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />

          {/* Floating fragments */}
          <path
            className="error-fragment"
            d="M83 320L111 301L126 325L106 341Z"
            fill="#FFF9E5"
            stroke={BRAND_GOLD}
            strokeOpacity=".65"
          />

          <path
            className="error-fragment"
            d="M398 354L417 337L430 361L410 369Z"
            fill={CHARCOAL}
            fillOpacity=".12"
          />

          <path
            className="error-fragment"
            d="M84 367L101 351L113 372L96 383Z"
            fill={YELLOW}
          />

          <path
            className="error-fragment"
            d="M416 393L430 376L445 396L428 405Z"
            fill={CHARCOAL}
            fillOpacity=".8"
          />

          <path
            className="error-fragment"
            d="M380 405L391 393L401 407L390 414Z"
            fill={BRAND_GOLD}
            fillOpacity=".6"
          />

          {/* Status label */}
          <rect
            x="178"
            y="392"
            width="164"
            height="36"
            rx="18"
            fill="#FFFFFF"
            stroke={CHARCOAL}
            strokeOpacity=".1"
          />

          <circle cx="198" cy="410" r="4" fill={BRAND_GOLD} />

          <text
            x="211"
            y="415"
            fill={CHARCOAL}
            fontSize="11"
            fontWeight="700"
            letterSpacing="1.4"
            fontFamily="Arial, sans-serif"
          >
            PAGE NOT FOUND
          </text>
        </g>
      </svg>

      <p className="relative z-10 mt-1 text-center text-xs font-medium tracking-wide text-[#171517]/45">
        Even good brands take a wrong turn sometimes.
      </p>
    </div>
  );
}

export default function NotFound() {
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = pageRef.current;

    if (!root) return;

    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      const intro = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      // Staggered entrance
      intro
        .from(".error-eyebrow", {
          y: 14,
          opacity: 0,
          duration: 0.55,
        })
        .from(
          ".error-number",
          {
            y: 35,
            opacity: 0,
            scale: 0.94,
            duration: 0.8,
          },
          "-=0.25",
        )
        .from(
          ".error-heading",
          {
            y: 24,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.4",
        )
        .from(
          ".error-description",
          {
            y: 16,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.35",
        )
        .from(
          ".error-actions > *",
          {
            y: 12,
            opacity: 0,
            stagger: 0.09,
            duration: 0.45,
          },
          "-=0.3",
        )
        .from(
          ".error-visual",
          {
            x: 35,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.85",
        )
        .from(
          ".error-services",
          {
            y: 16,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.3",
        );

      // Gentle floating movement
      gsap.to(".error-window", {
        y: -9,
        duration: 3.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      // Slowly rotating orbit
      gsap.to(".error-orbit", {
        rotation: 360,
        transformOrigin: "50% 50%",
        duration: 50,
        ease: "none",
        repeat: -1,
      });

      // Soft breathing glow
      gsap.to(".error-glow", {
        opacity: 0.85,
        scale: 1.12,
        duration: 3.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".error-glow-secondary", {
        opacity: 0.7,
        scale: 1.15,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      // Crack shimmer
      gsap.to(".error-crack", {
        opacity: 0.65,
        filter: "drop-shadow(0px 0px 5px #8A6C05)",
        duration: 1.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      // Independent fragment motion
      gsap.utils.toArray<SVGElement>(".error-fragment").forEach(
        (fragment, index) => {
          gsap.to(fragment, {
            y: index % 2 === 0 ? -8 : 7,
            rotation: index % 2 === 0 ? 5 : -5,
            transformOrigin: "50% 50%",
            duration: 2.5 + index * 0.35,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: index * 0.2,
          });
        },
      );

      // Small decorative sparks
      gsap.to(".error-spark", {
        opacity: 0.35,
        scale: 0.85,
        transformOrigin: "50% 50%",
        duration: 1.6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.5,
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={pageRef}
      id="main"
      className="relative flex flex-1 flex-col overflow-hidden bg-mist"
    >
      <Container className="flex flex-1 flex-col py-8 sm:py-12">
        {/* Header */}
        <header className="flex items-center justify-between gap-4">
          <Link href="/" className="py-2" aria-label={site.name}>
            <Logo />
          </Link>

          <Link
            href="/contact"
            className="link-underline text-sm font-semibold text-ink decoration-[#8A6C05] decoration-2 underline-offset-4"
          >
            {site.cta.audit}
          </Link>
        </header>

        {/* Hero */}
        <section className="grid flex-1 items-center gap-8 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6 lg:py-16">
          <div className="min-w-0">
            <p className="error-eyebrow mb-5 inline-flex items-center gap-2 rounded-full border border-[#8A6C05]/20 bg-[#8A6C05]/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#8A6C05]">
              <span className="h-2 w-2 rounded-full bg-[#F7C928] ring-1 ring-[#171517]/10" />
              Oops! Page not found
            </p>

            <p className="error-number font-display flex items-start text-hero leading-none font-extrabold tracking-[-0.04em] text-ink sm:text-hero">
              <span>4</span>

              <span
                aria-hidden="true"
                className="mx-[0.06em] inline-block rounded-md bg-[#F7C928] px-[0.14em] text-[#171517]"
              >
                0
              </span>

              <span>4</span>
            </p>

            <h1 className="error-heading font-display mt-7 max-w-2xl text-h1 leading-[1.08] font-extrabold tracking-[-0.045em] text-ink">
              Looks like this page{" "}
              <span className="box-decoration-clone bg-[#F7C928] px-2.5 text-[#171517]">
                went missing.
              </span>
            </h1>

            <p className="error-description mt-5 max-w-xl text-lead leading-relaxed text-grey-600">
              The page you’re looking for doesn’t exist or may have moved.
              Let’s get you back on track and help you find what you need.
            </p>

            {/* CTA buttons */}
            <div className="error-actions mt-8 flex flex-wrap items-center gap-3">
              <Button href="/" size="lg">
                Back to homepage
              </Button>

              <Button href="/contact" variant="outline" size="lg">
                {site.cta.audit}
              </Button>

              <Link
                href="/blog"
                className="link-underline px-2 text-sm font-medium text-[#8A6C05] decoration-[#8A6C05] underline-offset-4"
              >
                Explore our blog
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-3 text-sm text-grey-600">
              <span className="h-px w-10 bg-[#8A6C05]" />
              <span>Lost? Let’s find your way back.</span>
            </div>
          </div>

          {/* Animated illustration */}
          <div className="w-full lg:pl-4">
            <Broken404Illustration />
          </div>
        </section>

        {/* Services */}
        <nav
          aria-label="Explore our services"
          className="error-services border-t border-ink/10 pt-8 pb-4 sm:pb-8"
        >
          <p className="text-xs font-semibold tracking-[0.18em] text-[#8A6C05] uppercase">
            Explore what we do
          </p>

          <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex items-center justify-between gap-4 border-t border-ink/10 py-4 transition-colors duration-300 hover:border-[#8A6C05]/50"
                >
                  <span className="flex items-center gap-3">
                    <span className="font-display text-sm font-bold text-[#8A6C05]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="font-display text-sm font-bold tracking-tight text-ink transition-colors duration-300 group-hover:text-[#8A6C05]">
                      {service.title}
                    </span>
                  </span>

                  <Icon
                    name="arrowRight"
                    className="size-4 text-ink/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#8A6C05]"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </main>
  );
}
