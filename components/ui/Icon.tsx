
"use client";

import type { ComponentType } from "react";
import {
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  Camera,
  Check,
  ChevronDown,
  ChevronRight,
  Clock,
  Eye,
  Globe,
  Hash,
  Heart,
  Landmark,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  MessageCircle,
  Minus,
  Phone,
  Play,
  Plus,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";

import { cn } from "@/lib/utils";

function InstagramIcon({
  className,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("size-5 shrink-0", className)}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.2 6.8h.01" />
    </svg>
  );
}

function YoutubeIcon({
  className,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("size-5 shrink-0", className)}
    >
      <rect x="2.5" y="5.5" width="19" height="13" rx="3.5" />
      <path
        d="m10 9.5 5 2.5-5 2.5Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function LinkedinIcon({
  className,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("size-5 shrink-0", className)}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export const iconKeys = [
  "check",
  "x",
  "plus",
  "minus",
  "arrowRight",
  "chevronRight",
  "chevronDown",
  "star",
  "shield",
  "badgeCheck",
  "globe",
  "users",
  "megaphone",
  "search",
  "eye",
  "pencil",
  "mapPin",
  "clock",
  "calendarClock",
  "phone",
  "play",
  "whatsapp",
  "mail",
  "volume",
  "volumeX",
  "menu",
  "instagram",
  "youtube",
  "linkedin",
  "camera",
  "heart",
  "trendingUp",
  "smartphone",
  "landmark",
  "sparkles",
] as const;

export type IconName = (typeof iconKeys)[number];

type IconComponent = ComponentType<{
  className?: string;
  strokeWidth?: number;
}>;

const icons: Record<IconName, IconComponent> = {
  check: Check,
  x: X,
  plus: Plus,
  minus: Minus,
  arrowRight: ArrowRight,
  chevronRight: ChevronRight,
  chevronDown: ChevronDown,
  star: Star,
  shield: ShieldCheck,
  badgeCheck: BadgeCheck,
  globe: Globe,
  users: Users,
  megaphone: Megaphone,
  search: Search,
  eye: Eye,
  pencil: Hash,
  mapPin: MapPin,
  clock: Clock,
  calendarClock: CalendarClock,
  phone: Phone,
  play: Play,
  whatsapp: MessageCircle,
  mail: Mail,
  volume: Volume2,
  volumeX: VolumeX,
  menu: Menu,
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
  linkedin: LinkedinIcon,
  camera: Camera,
  heart: Heart,
  trendingUp: TrendingUp,
  smartphone: Smartphone,
  landmark: Landmark,
  sparkles: Sparkles,
};

type IconProps = {
  name: IconName;
  className?: string;
};

export function Icon({ name, className }: IconProps) {
  const BrandOrLucide = icons[name];

  if (!BrandOrLucide) {
    console.error(
      `[Icon] Unknown icon: "${name}". Available icons:`,
      Object.keys(icons),
    );

    return null;
  }

  return (
    <BrandOrLucide
      aria-hidden="true"
      strokeWidth={1.75}
      className={cn("size-5 shrink-0", className)}
    />
  );
}
