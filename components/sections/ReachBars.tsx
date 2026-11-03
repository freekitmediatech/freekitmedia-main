
"use client";

import { Icon } from "@/components/ui/Icon";
import { site } from "@/content/site";
import { whatsappLink, cn } from "@/lib/utils";

export function StickyMobileBar() {
  const whatsappHref = whatsappLink(
    site.phone.primary.number,
    site.whatsapp.ctaText,
  );

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 lg:hidden",
        "px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]",
        "pointer-events-none",
      )}
    >
      <div
        className={cn(
          "pointer-events-auto mx-auto grid max-w-lg grid-cols-2 gap-2",
          "rounded-2xl border border-[#8A6C05]/20",
          "bg-[#FFFFFF]/90 p-2",
          "shadow-[0_-8px_40px_-18px_rgba(23,23,23,0.22)]",
          "backdrop-blur-2xl",
        )}
      >
        {/* Call button */}
        <a
          href={`tel:${site.phone.primary.number}`}
          aria-label={`Call ${site.phone.primary.display}`}
          className={cn(
            "group relative flex h-12 items-center justify-center gap-2",
            "overflow-hidden rounded-xl",
            "bg-[#171717] text-sm font-semibold text-white",
            "transition-all duration-300",
            "hover:bg-[#292927] active:scale-[0.97]",
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              "absolute inset-0 -translate-x-full",
              "bg-gradient-to-r from-transparent via-white/10 to-transparent",
              "transition-transform duration-700 group-hover:translate-x-full",
            )}
          />
          <Icon
            name="phone"
            className="relative size-4 transition-transform duration-300 group-hover:-rotate-12"
          />
          <span className="relative">Call us</span>
        </a>

        {/* WhatsApp button */}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Message us on WhatsApp"
          className={cn(
            "group relative flex h-12 items-center justify-center gap-2",
            "overflow-hidden rounded-xl",
            "border border-[#8A6C05]/20",
            "bg-[#FFF9E5] text-sm font-bold text-[#171717]",
            "transition-all duration-300",
            "hover:bg-[#FBE17D] active:scale-[0.97]",
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              "absolute inset-0 -translate-x-full",
              "bg-white/40 transition-transform duration-500",
              "group-hover:translate-x-full",
            )}
          />
          <Icon
            name="whatsapp"
            className="relative size-[1.1rem] transition-transform duration-300 group-hover:scale-110"
          />
          <span className="relative">{site.cta.whatsapp}</span>
          <span
            aria-hidden="true"
            className="absolute right-2 top-2 size-1.5 rounded-full bg-[#8A6C05]"
          />
        </a>
      </div>
    </div>
  );
}

export function FloatingWhatsApp() {
  const whatsappHref = whatsappLink(
    site.phone.primary.number,
    site.whatsapp.ctaText,
  );

  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message us on WhatsApp"
      className={cn(
        "group fixed bottom-7 right-7 z-40 hidden lg:flex",
        "items-center gap-3 rounded-full",
        "border border-white/10 bg-[#171717]/95",
        "py-3 pl-5 pr-3 text-white",
        "shadow-[0_16px_50px_-18px_rgba(23,23,23,0.65)]",
        "backdrop-blur-2xl",
        "transition-all duration-500 ease-out",
        "hover:-translate-y-1 hover:border-[#8A6C05]/60",
        "hover:shadow-[0_20px_60px_-18px_rgba(23,23,23,0.75)]",
      )}
    >
      {/* Text */}
      <span className="flex flex-col">
        <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-white/50">
          Have a project?
        </span>
        <span className="mt-0.5 text-sm font-semibold tracking-tight">
          Chat with us
        </span>
      </span>

      {/* WhatsApp icon */}
      <span
        className={cn(
          "relative grid size-11 place-items-center rounded-full",
          "bg-[#FFF9E5] text-[#171717]",
          "transition-all duration-300",
          "group-hover:rotate-[-8deg] group-hover:scale-105",
        )}
      >
        <Icon name="whatsapp" className="size-5" />
        <span
          aria-hidden="true"
          className={cn(
            "absolute -right-0.5 -top-0.5 size-3 rounded-full",
            "border-2 border-[#171717] bg-[#F7C928]",
          )}
        />
      </span>
    </a>
  );
}
