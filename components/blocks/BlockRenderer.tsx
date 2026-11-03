import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import type { Block, StatItem } from "@/lib/content/types";
import { cn } from "@/lib/utils";

function Stats({ items }: { items: StatItem[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-grey-200 bg-mist p-6"
        >
          <p className="font-display text-3xl font-bold tracking-tight text-ink">
            {item.value}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-grey-600">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}

function Gallery({ images }: { images: { src: string; alt: string }[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {images.map((img) => (
        <div
          key={img.src}
          className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-grey-200"
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "heading":
      return block.level === 3 ? (
        <h3 className="font-display mt-12 text-h3 font-bold tracking-tight text-ink">
          {block.text}
        </h3>
      ) : (
        <h2 className="font-display mt-16 text-h2 font-bold tracking-tight text-ink">
          {block.text}
        </h2>
      );
    case "text":
      return (
        <p className="mt-6 text-base leading-relaxed text-grey-600 sm:text-lg">
          {block.text}
        </p>
      );
    case "image":
      return (
        <figure className="mt-10">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-grey-200">
            <Image
              src={block.src}
              alt={block.alt}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
          {block.caption && (
            <figcaption className="mt-3 text-sm text-grey-400">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    case "gallery":
      return (
        <div className="mt-10">
          <Gallery images={block.images} />
        </div>
      );
    case "video":
      return (
        <div className="mt-10 overflow-hidden rounded-2xl border border-grey-200 bg-ink">
          <video
            src={block.src}
            poster={block.poster}
            controls
            playsInline
            preload="metadata"
            className="aspect-video w-full"
          />
        </div>
      );
    case "stats":
      return (
        <div className="mt-10">
          <Stats items={block.items} />
        </div>
      );
    case "list":
      return (
        <ul className="mt-6 space-y-3">
          {block.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-base leading-relaxed text-grey-600 sm:text-lg"
            >
              <span
                aria-hidden="true"
                className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand-deep"
              />
              {item}
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <figure className="border-l-2 border-brand pl-6">
          <blockquote className="font-display text-xl font-medium leading-relaxed text-ink sm:text-2xl">
            “{block.text}”
          </blockquote>
          {block.by && (
            <figcaption className="mt-4 text-sm font-medium text-grey-600">
              — {block.by}
            </figcaption>
          )}
        </figure>
      );
    case "callout":
      return (
        <div className="mt-10 rounded-2xl border border-ink bg-ink px-6 py-8 text-paper sm:px-10">
          <p className="font-display text-lg font-bold tracking-tight sm:text-xl">
            {block.title}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-paper/70 sm:text-base">
            {block.text}
          </p>
        </div>
      );
    case "cta":
      return (
        <div className="mt-14 rounded-3xl bg-brand p-8 text-ink sm:p-10">
          <p className="font-display text-h3 font-bold tracking-tight">
            {block.title}
          </p>
          <p className="mt-2 max-w-xl text-sm leading-relaxed sm:text-base">
            {block.text}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={block.href} variant="ink" size="lg">
              {block.label}
            </Button>
          </div>
        </div>
      );
    default:
      return null;
  }
}

export function BlockRenderer({
  blocks,
  className,
}: {
  blocks: Block[];
  className?: string;
}) {
  return (
    <div className={cn("space-y-2", className)}>
      {blocks.map((block, i) => (
        <BlockView key={i} block={block} />
      ))}
    </div>
  );
}

export function PageMeta({
  industry,
  city,
  servicesUsed,
}: {
  industry?: string;
  city?: string;
  servicesUsed?: string[];
}) {
  const chips = [industry, city, ...(servicesUsed ?? [])].filter(
    (chip): chip is string => Boolean(chip),
  );
  if (chips.length === 0) return null;
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {chips.map((chip) => (
        <span
          key={chip}
          className="rounded-full bg-grey-100 px-3 py-1 text-xs font-medium text-grey-600"
        >
          {chip}
        </span>
      ))}
    </div>
  );
}

export function BackLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="mt-10 inline-flex items-center gap-1 text-sm font-semibold text-ink transition-colors hover:text-brand-deep"
    >
      <span aria-hidden="true">←</span> {label}
    </Link>
  );
}
