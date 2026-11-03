"use client";

import { useRef, useState } from "react";

import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { faqs } from "@/content/page-sections";
import { site } from "@/content/site";
import { useReveal } from "@/lib/use-reveal";
import { cn, whatsappLink } from "@/lib/utils";

const ctaClasses =
  "group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#8A6C05] px-6 text-sm font-semibold text-white transition-colors duration-300 hover:bg-yellow-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8A6C05] focus-visible:ring-offset-2 sm:w-auto";

export function FaqSection() {
  const ref = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  useReveal(ref);

  const waHref = whatsappLink(
    site.phone.primary.number,
    site.whatsapp.ctaText,
  );

  return (
    <section
      id="faq"
      ref={ref}
      className="relative overflow-clip bg-[#F7F6F2] py-16 text-[#171717] sm:py-24 lg:py-36"
    >
      <Container>
        {/* Section heading */}
        <div
          data-reveal
          className="flex items-center justify-between gap-4 border-t border-[#171717]/15 pt-5"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8A6C05] sm:text-xs">
            Frequently asked questions
          </p>

          <p className="shrink-0 font-mono text-[10px] text-[#77766D] sm:text-xs">
            {String(faqs.length).padStart(2, "0")} QUESTIONS
          </p>
        </div>

        <div className="mt-8 grid min-w-0 gap-8 sm:mt-12 sm:gap-10 lg:mt-16 lg:grid-cols-[0.85fr_1.4fr] lg:gap-16">
          {/* Left: heading (+ contact on desktop) */}
          <div
            data-reveal
            className="min-w-0 lg:sticky lg:top-28 lg:self-start"
          >
            <p className="flex items-center gap-2 text-[11px] font-semibold text-[#8A6C05] sm:text-xs">
              <span className="size-2 rounded-full bg-[#8A6C05]" />
              Clear answers. No confusion.
            </p>

            <h2 className="font-display mt-4 text-[2.6rem] font-extrabold leading-[0.95] tracking-[-0.06em] sm:mt-5 sm:text-6xl lg:text-[clamp(3rem,4.8vw,5.5rem)] lg:leading-[0.9] lg:tracking-[-0.075em]">
              Got
              <br />
              questions<span className="text-[#8A6C05]">?</span>
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-7 text-[#55524C] sm:mt-5 sm:text-base">
              Find answers about our services, process, and how we help your
              business grow.
            </p>

            {/* Contact — desktop only */}
            <div className="mt-9 hidden border-t border-[#171717]/15 pt-5 lg:block">
              <p className="text-xs font-medium text-[#55524C]">
                Still have questions?
              </p>

              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(ctaClasses, "mt-3 w-auto")}
              >
                {site.cta.whatsapp}
                <Icon
                  name="arrowRight"
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          {/* Right: FAQ accordion */}
          <div data-reveal className="min-w-0">
            <div className="overflow-hidden rounded-2xl border border-[#171717]/10 bg-white/75">
              {faqs.map((faq, index) => {
                const isOpen = activeIndex === index;
                const answerId = `faq-answer-${index}`;
                const buttonId = `faq-question-${index}`;

                return (
                  <article
                    key={faq.q}
                    className={cn(
                      "border-b border-[#171717]/10 transition-colors duration-300 last:border-b-0",
                      isOpen && "bg-[#FFF9E5]",
                    )}
                  >
                    <h3>
                      <button
                        id={buttonId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={answerId}
                        onClick={() => setActiveIndex(isOpen ? null : index)}
                        className="group flex min-h-16 w-full items-center gap-3 px-4 py-4 text-left outline-none transition-colors hover:bg-[#F7F6F2] focus-visible:bg-[#FFF9E5] sm:min-h-[76px] sm:gap-5 sm:px-6 sm:py-5"
                      >
                        {/* Number — fixed width so answer text aligns exactly */}
                        <span
                          className={cn(
                            "hidden w-6 shrink-0 font-mono text-xs tabular-nums sm:block",
                            isOpen ? "text-[#8A6C05]" : "text-[#77766D]",
                          )}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span
                          className={cn(
                            "min-w-0 flex-1 font-display text-[15px] font-bold leading-snug tracking-[-0.02em] transition-colors sm:text-lg lg:text-xl",
                            isOpen
                              ? "text-[#8A6C05]"
                              : "text-[#171717] group-hover:text-[#8A6C05]",
                          )}
                        >
                          {faq.q}
                        </span>

                        <span
                          className={cn(
                            "grid size-8 shrink-0 place-items-center rounded-full border transition-all duration-300 sm:size-10",
                            isOpen
                              ? "rotate-45 border-[#8A6C05] bg-[#8A6C05] text-white"
                              : "border-[#171717]/15 text-[#55524C] group-hover:border-[#8A6C05] group-hover:text-[#8A6C05]",
                          )}
                        >
                          <Icon name="plus" className="size-4" />
                        </span>
                      </button>
                    </h3>

                    <div
                      id={answerId}
                      role="region"
                      aria-labelledby={buttonId}
                      aria-hidden={!isOpen}
                      inert={!isOpen}
                      className={cn(
                        "grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none",
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <div className="overflow-hidden">
                        {/* sm:pl-[4.25rem] = px-6 (1.5) + number w-6 (1.5) + gap-5 (1.25) */}
                        <p className="px-4 pb-5 text-sm leading-7 text-[#55524C] sm:pb-6 sm:pl-[4.25rem] sm:pr-16 sm:text-base">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Contact — mobile/tablet only (list ke neeche) */}
            <div className="mt-6 rounded-2xl border border-[#171717]/10 bg-white/75 p-5 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-6 lg:hidden">
              <div className="min-w-0">
                <p className="font-display text-base font-bold tracking-[-0.02em] sm:text-lg">
                  Still have questions?
                </p>
                <p className="mt-1 text-sm leading-6 text-[#55524C]">
                  Talk to our team directly on WhatsApp.
                </p>
              </div>

              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(ctaClasses, "mt-4 sm:mt-0 sm:shrink-0")}
              >
                {site.cta.whatsapp}
                <Icon
                  name="arrowRight"
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}