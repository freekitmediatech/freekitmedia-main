"use client";

import { useRef } from "react";

import { BlockRenderer } from "@/components/blocks/BlockRenderer";
import { Container } from "@/components/ui/Container";
import { useReveal } from "@/lib/use-reveal";
import type { Partner } from "@/content/partners";

export function PartnerNarrative({ partner }: { partner: Partner }) {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  const story = partner.story;

  if (!story) {
    return (
      <section ref={ref} data-reveal className="bg-paper py-16 sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <BlockRenderer blocks={partner.blocks} />
          </div>
        </Container>
      </section>
    );
  }

  const steps = [
    { num: "01", phase: "The partner", title: "Who we worked with", text: story.client },
    { num: "02", phase: "The challenge", title: "The challenge", text: story.challenge },
    { num: "03", phase: "The strategy", title: "The strategy", text: story.strategy },
    { num: "04", phase: "The execution", title: "The execution", text: story.execution },
  ];

  return (
    <section ref={ref} data-reveal className="bg-paper py-16 sm:py-24">
      <Container>
        <header className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-brand-deep uppercase">
            The story
          </p>
          <h2 className="font-display mt-4 text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-[1.02] tracking-[-0.045em] text-ink">
            From first note to real work.
          </h2>
        </header>
        <ol className="mt-12 divide-y divide-ink/10">
          {steps.map((step) => (
            <li
              key={step.num}
              className="grid gap-4 py-8 sm:grid-cols-[72px_1fr] sm:gap-8"
            >
              <span className="font-display text-[4rem] font-extrabold leading-none tracking-[-0.05em] text-ink sm:text-[4.5rem]">
                {step.num}
              </span>
              <div>
                <p className="text-xs font-semibold tracking-[0.16em] text-brand-deep uppercase">
                  {step.phase}
                </p>
                <h3 className="font-display mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-grey-600 sm:text-lg">
                  {step.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
        {story.results ? (
          <div className="mt-12 rounded-3xl bg-ink p-8 text-paper sm:p-10">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brand">
              Where we landed
            </p>
            <p className="mt-4 text-lg leading-8 text-paper/85 sm:text-xl">
              {story.results}
            </p>
          </div>
        ) : null}
      </Container>
    </section>
  );
}