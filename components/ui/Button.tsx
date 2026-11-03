"use client";

import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";
import { useSound } from "@/components/providers/SoundProvider";
import { Icon } from "@/components/ui/Icon";
import { cn, whatsappLink } from "@/lib/utils";
import { site } from "@/content/site";

type Variant = "primary" | "ink" | "outline" | "outlineLight" | "ghost" | "white";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand text-ink hover:bg-brand-soft shadow-[0_1px_2px_rgba(23,23,23,0.12)] hover:shadow-[0_12px_32px_-8px_rgba(247,201,40,0.65)]",
  ink: "bg-ink text-paper hover:bg-grey-800 hover:shadow-[0_12px_32px_-10px_rgba(11,11,11,0.45)]",
  outline: "border border-ink/20 bg-white text-ink hover:border-ink/50",
  outlineLight:
    "border border-white/25 bg-transparent text-paper hover:border-white/60 hover:bg-white/5",
  ghost: "text-ink hover:bg-ink/5",
  white: "bg-white/10 text-paper hover:bg-white/20",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-[0.95rem]",
  lg: "h-12 px-7 text-base",
};

export type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  href?: string;
  target?: string;
  onClick?: MouseEventHandler<HTMLElement>;
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  target,
  onClick,
}: ButtonProps) {
  const { play } = useSound();
  const classes = cn(
    "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-md font-semibold whitespace-nowrap transition-[background-color,border-color,color,transform,box-shadow] duration-200 hover:-translate-y-px active:translate-y-0 active:transition-none",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );
  const handleMouseEnter = () => play("hover");
  const handleClick: MouseEventHandler<HTMLElement> = (event) => {
    play("click");
    onClick?.(event);
  };

  if (!href) {
    return (
      <button
        type="button"
        className={classes}
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
      >
        {children}
      </button>
    );
  }

  const anchorProps = {
    className: classes,
    onMouseEnter: handleMouseEnter,
    onClick: handleClick,
  };

  if (href.startsWith("http")) {
    return (
      <a
        href={href}
        target={target ?? "_blank"}
        rel="noopener noreferrer"
        {...anchorProps}
      >
        {children}
      </a>
    );
  }
  if (href.startsWith("#")) {
    return <a href={href} {...anchorProps}>{children}</a>;
  }
  return <Link href={href} target={target} {...anchorProps}>{children}</Link>;
}

export function AuditButton({
  label = site.cta.audit,
  ...props
}: Omit<ButtonProps, "href"> & { label?: string }) {
  return (
    <Button href="#contact" variant="primary" {...props}>
      {label}
      <Icon
        name="arrowRight"
        className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
      />
    </Button>
  );
}

export function WhatsAppButton({
  text = site.whatsapp.ctaText,
  ...props
}: Omit<ButtonProps, "href"> & { text?: string }) {
  return (
    <Button href={whatsappLink(site.phone.primary.number, text)} {...props} />
  );
}
