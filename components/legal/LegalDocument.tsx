import Link from "next/link";

import { Footer } from "@/components/sections/Footer";
import { SubpageHeader } from "@/components/sections/SubpageHeader";
import { Container } from "@/components/ui/Container";
import type { LegalDocumentData } from "@/content/legal";

export function LegalDocument({ doc }: { doc: LegalDocumentData }) {
  const { eyebrow, title, intro, effectiveDate, sections } = doc;

  return (
    <>
      <SubpageHeader />
      <main id="main" className="flex-1">
        <header className="border-b border-ink/10 bg-paper">
          <Container className="pt-14 pb-12 sm:pt-16 sm:pb-14 lg:pt-20 lg:pb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-deep">
              {eyebrow}
            </p>

            <h1 className="font-display mt-4 max-w-3xl text-h1 font-extrabold leading-[1.05] tracking-[-0.02em] text-ink">
              {title}
            </h1>

            {intro ? (
              <p className="mt-5 max-w-2xl text-lead text-ink/70">{intro}</p>
            ) : null}

            <p className="mt-6 text-xs font-medium uppercase tracking-[0.16em] text-ink/45">
              Effective date: {effectiveDate}
            </p>
          </Container>
        </header>

        <Container>
          <div className="max-w-3xl py-12 sm:py-14 lg:py-16">
            <nav
              aria-label="Table of contents"
              className="rounded-2xl border border-ink/10 bg-mist/60 p-6 sm:p-8"
            >
              <h2 className="font-display text-lg font-bold tracking-[-0.03em] text-ink">
                Contents
              </h2>

              <ol className="mt-5 space-y-2.5">
                {sections.map((section) => (
                  <li key={section.id}>
                    <Link
                      href={`#${section.id}`}
                      className="group flex items-baseline gap-3 rounded-lg px-2 py-2 text-sm text-ink/70 transition-colors duration-300 hover:bg-ink/[0.03] hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-deep"
                    >
                      <span className="font-mono text-[11px] font-semibold text-brand-deep">
                        {section.number}.
                      </span>

                      <span className="font-medium leading-snug">
                        {section.heading}
                      </span>
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="mt-14">
              {sections.map((section, index) => (
                <section
                  key={section.id}
                  className={
                    index === 0 ? "" : "mt-14 border-t border-ink/10 pt-14"
                  }
                >
                  <h2
                    id={section.id}
                    className="scroll-mt-28 font-display text-2xl font-bold tracking-[-0.03em] text-ink sm:text-3xl"
                  >
                    <span className="font-mono text-sm font-semibold text-brand-deep">
                      {section.number}.
                    </span>{" "}
                    {section.heading}
                  </h2>

                  <div className="mt-5 space-y-4">
                    {section.intro ? (
                      <p className="text-[15px] font-medium text-ink/85 sm:text-base">
                        {section.intro}
                      </p>
                    ) : null}

                    {section.paragraphs?.map((paragraph, paragraphIndex) => (
                      <p
                        key={paragraphIndex}
                        className="text-[15px] leading-7 text-ink/70 first:mt-0 sm:text-base sm:leading-8"
                      >
                        {paragraph}
                      </p>
                    ))}

                    {section.list ? (
                      section.ordered === false ? (
                        <ul className="mt-5 list-disc space-y-2 pl-6 text-[15px] leading-7 text-ink/70 sm:text-base sm:leading-8">
                          {section.list.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <ol className="mt-5 list-decimal space-y-2 pl-6 text-[15px] leading-7 text-ink/70 sm:text-base sm:leading-8">
                          {section.list.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ol>
                      )
                    ) : null}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}