import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "start" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      data-reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-start",
        className,
      )}
    >
      <p className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-3.5 py-1.5 text-xs font-semibold tracking-[0.14em] text-ink/60 uppercase">
        <span aria-hidden="true" className="size-1.5 rounded-full bg-brand" />
        {eyebrow}
      </p>
      <h2 className="font-display mt-5 text-3xl font-bold tracking-[-0.02em] text-ink sm:text-4xl lg:text-[2.6rem] lg:leading-[1.12]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-ink/65 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
