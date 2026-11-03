import type { Block } from "@/lib/content/types";

export type CaseStudy = {
  slug: string;
  clientLabel: string;
  title: string;
  industry: string;
  city: string;
  servicesUsed: string[];
  summary: string;
  blocks: Block[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "jewellery-6-lakh-one-day",
    clientLabel: "Jewellery brand",
    title: "₹6,00,000+ ka order, ek hi din mein",
    industry: "Jewellery",
    city: "Chhattisgarh",
    servicesUsed: ["Instagram Ads", "Reels", "Offer Creative"],
    summary:
      "Ek hi din mein Instagram ads se ₹6,00,000+ ka direct order. Koi seher nahi — saaf message, saaf audience, saaf timing.",
    blocks: [
      { type: "heading", text: "Result pehle", level: 2 },
      {
        type: "stats",
        items: [
          { value: "₹6,00,000+", label: "ek hi din ka order" },
          { value: "Instagram", label: "sirf ads se" },
          { value: "0", label: "fake followers ka jaadu" },
        ],
      },
      { type: "heading", text: "Kya hua", level: 2 },
      {
        type: "text",
        text: "Jewellery client ke paas ek collection thi jiska festive window chal raha tha. Humne ek single, saaf offer campaign Instagram par chalaya — creative hamara in-house shoot tha, audience local high-intent, aur WhatsApp par seedha enquiry flow. Usi din ke andar ₹6 lakh+ ka order bandh gaya.",
      },
      { type: "heading", text: "Humne kya kiya", level: 3 },
      {
        type: "text",
        text: "Ek reel, ek offer creative, ek audience set, ek clear CTA. Zyada experiments nahi — jo test chala, use scale kar diya.",
      },
      {
        type: "callout",
        title: "Lesson",
        text: "Enquiry flow fast ho toh ads ki taakat hi alag hoti hai. Customer ko sochne ki der na do.",
      },
      {
        type: "cta",
        title: "Let’s explore what could work for your business",
        text: "Tell us about your goals and we’ll discuss a practical place to begin.",
        href: "/#contact",
        label: "Request a free audit",
      },
    ],
  },
];
