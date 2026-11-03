import Image from "next/image";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative inline-flex size-9 shrink-0 overflow-hidden rounded-lg bg-white ring-1 ring-ink/10",
        className,
      )}
    >
      <Image
        src={site.logo.src}
        alt=""
        fill
        sizes="36px"
        className="object-contain p-1"
      />
    </span>
  );
}

export function Logo({ variant = "dark", className }: { variant?: "dark" | "light"; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <LogoMark />
      <span
        className={cn(
          "font-display text-lg font-bold tracking-tight leading-none",
          variant === "light" ? "text-white" : "text-ink",
        )}
      >
        Freekit
        <span
          className={cn(
            "ml-1.5 font-medium",
            variant === "light" ? "text-white/60" : "text-ink/50",
          )}
        >
          Media
        </span>
      </span>
    </span>
  );
}
