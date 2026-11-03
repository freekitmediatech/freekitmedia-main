import type { IconName } from "@/components/ui/Icon";

export const contactBusinessTypes = [
  "Jewellery / Retail",
  "Healthcare / Doctor",
  "Real Estate / Automobile",
  "Education / Hotel",
  "Founder / Personal brand",
  "Other",
] as const;

export const site = {
  name: "FreeKit Media",
  legalName: "FreeKit Media",
  tagline: "Aapka brand dikhega, tabhi toh bikega.",
  headlineEn: "Building Brands Through Digital Presence",
  description:
    "FreeKit Media is a digital marketing agency serving Bilaspur, Ambikapur, Raipur and businesses across Chhattisgarh with content, Meta and Google ads, websites, social media, and branding.",
  url: "https://freekitmedia.com",
  logo: { src: "/images/logo.jpg", width: 220, height: 220 },
  cta: {
    audit: "Request a free audit",
    submitAudit: "Send my request",
    whatsapp: "Let's chat",
    auditNote: "A relaxed 30-minute conversation, online or at your office.",
  },
  phone: {
    primary: { number: "+918839801546", display: "+91 88398 01546" },
    secondary: { number: "+918358803679", display: "+91 83588 03679" },
  },
  email: "hello@freekitmedia.com",
  instagram: {
    handle: "@freekitmedia_hub",
    url: "https://www.instagram.com/freekitmedia_hub",
  },
  socials: [
    { icon: "instagram", label: "Instagram", href: "https://www.instagram.com/freekitmedia_hub" },
  ] as const,
  cities: ["Bilaspur", "Ambikapur", "Raipur", "Korba"] as const,
  address: {
    line: "Bilaspur, Chhattisgarh, India",
  },
  whatsapp: {
    ctaText:
      "Hello FreeKit Media, I’d like to request a free digital audit for my business.",
  },
  navLinks: [
    // { label: "System", href: "/#system" },
    { label: "Services", href: "/#services" },
    { label: "Process", href: "/#process" },
    { label: "Partners", href: "/#partners" },
    { label: "FAQ", href: "/#faq" },
    { label: "Blog", href: "/blog" },
    { label: "Locations", href: "/locations" },
  ] as const,
} as const;

export const marqueeNames = [
  "Tanishq",
  "Kisna",
  "Pathosure",
  "Next World",
  "Mixxit",
  "& many more",
] as const;

export const proofStats = [
  { value: "150+", label: "businesses ka bharosa", icon: "users" },
  { value: "9", label: "industries served", icon: "globe" },
  { value: "₹6,00,000+", label: "ek din mein, Instagram ads se", icon: "trendingUp" },
  { value: "3", label: "shehar — Bilaspur, Ambikapur, Korba", icon: "mapPin" },
] as const;

export type HeroHeadingPart = { text: string; highlight?: boolean } | "\n";

export const heroHeading: HeroHeadingPart[] = [
  { text: "Aapka brand dikhega," },
  "\n",
  { text: "tabhi toh bikega.", highlight: true },
];

export type TrustItem = { icon: IconName; label: string };

export const heroTrust: TrustItem[] = [
  { icon: "users", label: "150+ businesses" },
  { icon: "badgeCheck", label: " Brands like Tanishq & Kisna  " },
  { icon: "star", label: "Real reviews, real results" },
];
