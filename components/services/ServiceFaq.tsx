"use client";

import { useState } from "react";

import Link from "next/link";

import { Icon } from "@/components/ui/Icon";
import { site } from "@/content/site";
import { cn, whatsappLink } from "@/lib/utils";

type FaqItem = { q: string; a: string };

export function ServiceFaq({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="grid min-w-0 gap-10 lg:grid-cols-[0.8fr_1.4fr] lg:gap-16">
      <div className="min-w-0 lg:sticky lg:top-28 lg:self-start">
        <p className="flex items-center gap-2 text-xs font-semibold text-[#8A6C05]">
          <span className="size-2 rounded-full bg-[#8A6C05]" />
          Straight answers
        </p>

        <h2 className="font-display mt-5 text-3xl font-extrabold leading-tight tracking-[-0.045em] text-[#171717] sm:text-4xl">
          Questions before
          <br />
          you decide.
        </h2>

        <p className="mt-5 max-w-sm text-sm leading-7 text-[#55524C] sm:text-base">
          The specific ones for this service. More about the audit, pricing and
          reporting on the{" "}
          <Link
            href="/#faq"
            className="font-semibold text-[#8A6C05] underline decoration-[#8A6C05]/40 underline-offset-4 transition-colors hover:text-[#171717]"
          >
            main FAQ
          </Link>
          .
        </p>

        <div className="mt-7 border-t border-[#171717]/15 pt-5">
          <p className="text-xs font-medium text-[#55524C]">
            Still thinking it through?
          </p>

          <a
            href={whatsappLink(site.phone.primary.number, site.whatsapp.ctaText)}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-3 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#171717] px-5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#8A6C05] focus-visible:outline-2 focus-visible:outline-[#8A6C05] focus-visible:outline-offset-2"
          >
            {site.cta.whatsapp}
            <Icon
              name="arrowRight"
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>

      <div className="min-w-0">
        <div className="overflow-hidden rounded-2xl border border-[#171717]/10 bg-white">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `service-faq-answer-${index}`;
            const buttonId = `service-faq-question-${index}`;

            return (
              <article
                key={faq.q}
                className={cn(
                  "border-b border-[#171717]/10 last:border-b-0",
                  isOpen && "bg-[#FFF9E5]",
                )}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="group flex min-h-[72px] w-full items-center gap-3 px-4 py-5 text-left outline-none transition-colors hover:bg-[#F7F6F2] focus-visible:bg-[#FFF9E5] sm:gap-4 sm:px-6 sm:py-6"
                  >
                    <span
                      className={cn(
                        "min-w-0 flex-1 font-display text-base font-bold leading-snug tracking-[-0.025em] transition-colors sm:text-lg",
                        isOpen
                          ? "text-[#8A6C05]"
                          : "text-[#171717] group-hover:text-[#8A6C05]",
                      )}
                    >
                      {faq.q}
                    </span>

                    <span
                      className={cn(
                        "grid size-9 shrink-0 place-items-center rounded-full border transition-all duration-300 sm:size-10",
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
                    <p className="pb-6 pl-4 pr-5 text-sm leading-7 text-[#55524C] sm:pb-7 sm:pl-6 sm:pr-7 sm:text-base">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
