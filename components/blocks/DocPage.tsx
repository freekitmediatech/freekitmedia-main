import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Container";
import { BlockRenderer } from "@/components/blocks/BlockRenderer";
import { SubpageHeader } from "@/components/sections/SubpageHeader";
import { Footer } from "@/components/sections/Footer";
import type { Block } from "@/lib/content/types";

export type DocEntry = {
  eyebrow: string;
  title: string;
  intro?: string;
  chips?: string[];
  blocks: Block[];
};

export function DocPage({
  entry,
  backHref,
  backLabel,
  afterContent,
}: {
  entry: DocEntry;
  backHref: string;
  backLabel: string;
  afterContent?: ReactNode;
}) {
  return (
    <>
      <SubpageHeader />
      <main id="main" className="flex-1 pb-16 lg:pb-0">
        <div className="bg-ink pt-16 pb-14 text-paper">
          <Container>
            <p className="text-xs font-semibold tracking-[0.18em] text-brand uppercase">
              {entry.eyebrow}
            </p>
            <h1 className="font-display mt-4 max-w-3xl text-h1 leading-[1.05] font-extrabold tracking-[-0.02em]">
              {entry.title}
            </h1>
            {entry.intro && (
              <p className="mt-4 max-w-2xl text-lead text-paper/65">
                {entry.intro}
              </p>
            )}
            {entry.chips && entry.chips.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {entry.chips.map((chip) => (
                  <span
                    key={chip}
                    className="px-3 py-1 text-xs font-medium text-paper/70 border border-paper/15 bg-paper/[0.05]"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            )}
          </Container>
        </div>
        <Container className="max-w-3xl pt-14">
          <BlockRenderer blocks={entry.blocks} />
          {afterContent}
          <Link
            href={backHref}
            className="mt-16 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-brand-deep"
          >
            <Icon name="chevronRight" className="size-4 rotate-180" />
            {backLabel}
          </Link>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export function DocFallback() {
  return (
    <>
      <SubpageHeader />
      <div className="bg-ink pt-16 pb-14">
        <Container>
          <div className="h-4 w-32 bg-paper/10" />
          <div className="mt-6 h-12 w-2/3 bg-paper/10" />
          <div className="mt-4 h-4 w-1/2 bg-paper/10" />
        </Container>
      </div>
    </>
  );
}
