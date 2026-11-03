
import type { Block } from "@/lib/content/types";

export type PartnerGalleryItem = {
  id: string;
  mediaType: "reel" | "image";
  url?: string;
  src?: string;
  poster?: string;
  title: string;
  caption?: string;
  contentCategory?: string;
  instagramUrl?: string;
};

export type PartnerMetric = {
  value: string;
  label: string;
  hint?: string;
};

export type PartnerDeliverableGroup = {
  group: string;
  items: string[];
};

export type PartnerStrategyPhase = {
  intention: "attention" | "discovery" | "credibility" | "education" | "conversion";
  title: string;
  description: string;
};

export type PartnerStory = {
  client: string;
  challenge: string;
  strategy: string;
  execution: string;
  results?: string;
};

export type PartnerTheme = {
  mode?: "dark" | "light";
  accent?: string;
  accentSoft?: string;
  background?: string;
  foreground?: string;
  muted?: string;
};

export type Partner = {
  slug: string;
  name: string;
  logo?: string;
  franchise?: boolean;
  industry: string;
  city?: string;
  oneLine: string;
  whatWeDid: string;
  featured: boolean;
  blocks: Block[];
  reels?: { title: string; url: string; poster?: string }[];
  headline?: string;
  intro?: string;
  story?: PartnerStory;
  deliverables?: PartnerDeliverableGroup[];
  strategy?: PartnerStrategyPhase[];
  metrics?: PartnerMetric[];
  gallery?: PartnerGalleryItem[];
  theme?: PartnerTheme;
  relatedSlugs?: string[];
};

export const partners: Partner[] = [
  {
    slug: "tanishq",
    name: "Tanishq",
    logo: "/images/partners/normalized/tanishq.png",
    franchise: true,
    industry: "Jewellery",
    city: "Bilaspur",
    oneLine: "Festive campaigns aur store visibility.",
    whatWeDid:
      "Festive collections ke ads, store reels, offer creatives aur local awareness campaigns.",
    featured: true,
    blocks: [
      { type: "heading", text: "Tanishq — Bilaspur", level: 2 },
      {
        type: "text",
        text: "Tanishq ka Bilaspur franchise hamara partner brand hai. Franchise marketing ka focus local customers tak pahunchna aur store visibility badhana hai.",
      },
      {
        type: "stats",
        items: [
          { value: "Festive", label: "campaigns" },
          { value: "Reels", label: "store collections ke liye" },
          { value: "Local", label: "awareness campaigns" },
        ],
      },
      {
        type: "callout",
        title: "Jo humne kiya",
        text: "Festive campaigns, collection reels, offer creatives aur local targeted ads.",
      },
    ],
  },
  {
    slug: "kisna",
    name: "Kisna",
    logo: "/images/partners/normalized/kisna.png",
    franchise: true,
    industry: "Jewellery",
    city: "Bilaspur",
    oneLine: "Franchise aur daily-wear collection ki digital presentation.",
    whatWeDid:
      "Daily-wear collections ke content creatives, offer campaigns aur store reels.",
    featured: true,
    blocks: [
      { type: "heading", text: "Kisna — Bilaspur", level: 2 },
      {
        type: "text",
        text: "Kisna ki daily-wear aur silver collections ke liye regular content, festive offers aur local store campaigns par kaam kiya.",
      },
      {
        type: "quote",
        text: "Sona bikta hai bharose se — bharosa dikhne se banta hai.",
        by: "FreeKit Media — Jewellery playbook",
      },
    ],
  },
  {
    slug: "balaji-jewellers",
    name: "Balaji Jewellers",
    logo: "/images/partners/normalized/balaji-jewellers.png",
    industry: "Jewellery",
    city: "Chhattisgarh",
    oneLine: "Store offers aur festive collections ki digital reach.",
    whatWeDid: "Offer creatives, store reels aur local awareness campaigns.",
    featured: false,
    blocks: [
      { type: "heading", text: "Balaji Jewellers", level: 2 },
      {
        type: "text",
        text: "Balaji Jewellers ke liye store offers, festive collections aur local customers tak pahunchne wale campaigns par kaam kiya.",
      },
    ],
  },
  {
    slug: "royal-enfield",
    name: "Royal Enfield",
    logo: "/images/partners/normalized/royal-enfield.png",
    franchise: true,
    industry: "Automotive",
    city: "Chhattisgarh",
    oneLine: "Ride events aur community campaigns ki digital presence.",
    whatWeDid: "Event creatives, reels aur community engagement campaigns.",
    featured: false,
    reels: [
      {
        title: "Stellars Moto Riders Reel",
        url: "https://www.instagram.com/stellars.moto.riders/reel/Dei3a71gMWJ/",
      },
    ],
    blocks: [
      { type: "heading", text: "Royal Enfield", level: 2 },
      {
        type: "text",
        text: "Royal Enfield ke ride events aur showrooms ke liye creatives, reels aur community-first digital campaigns par kaam kiya.",
      },
    ],
    headline: "Built for the ride that matters.",
    intro:
      "Royal Enfield aur Stellars Moto Riders ke saath humne woh content bana jismein ride events, rider stories aur cinematic reels ek saath aa rahe the.",
    story: {
      client: "Royal Enfield aur Stellars Moto Riders",
      challenge:
        "Ride events aur showroom launches ka energy online mein kam dikh raha tha aur unka rider community digital bhi nahi mila.",
      strategy:
        "Real rides, real riders aur real roads pe cinematic storytelling aur event-led reel content banaya.",
      execution:
        "Event creatives, ride event reels aur community-first engagement campaigns banaye.",
    },
    deliverables: [
      {
        group: "Engaging content",
        items: [
          "Event creatives",
          "Ride event reels",
          "Community storytelling content",
        ],
      },
    ],
    strategy: [
      {
        intention: "attention",
        title: "Stop the scroll",
        description:
          "Content designed to capture rider attention before the ride itself.",
      },
      {
        intention: "credibility",
        title: "Earn real trust",
        description:
          "Rides and rider stories that reflect the brand honestly.",
      },
      {
        intention: "conversion",
        title: "Move riders to intent",
        description:
          "Campaign content created to move interest toward enquiries and test rides.",
      },
    ],
    gallery: [
      {
        id: "stellars-moto-riders-reel",
        mediaType: "reel",
        title: "Stellars Moto Riders Reel",
        caption:
          "Event energy, real riders aur cinematic reels - the way Royal Enfield ride communities actually move.",
        instagramUrl:
          "https://www.instagram.com/stellars.moto.riders/reel/Dei3a71gMWJ/",
      },
    ],
    theme: {
      mode: "dark",
      accent: "#F7C928",
      accentSoft: "#FBE17D",
      background: "#171717",
      foreground: "#FFFFFF",
      muted: "rgba(255, 255, 255, 0.66)",
    },
    relatedSlugs: ["renault", "suzuki"],
  },


{
slug: "Suzuki",
name: "Suzuki ",
logo: "/images/partners/normalized/suzuki.png",
franchise: true,
industry: "Automotive",
city: "Chhattisgarh",
oneLine: "Motorcycle franchise aur local brand visibility.",
whatWeDid: "Digital brand visibility and local marketing support.",
featured: false,
blocks: [{ type: "heading", text: "Suzuki Motorcycles Franchise", level: 2 }],
}

,
  // {
  //   slug: "mayura-group",
  //   name: "Mayura Group",
  //   industry: "Business group",
  //   oneLine: "Brand storytelling and campaign content for Mayura Group.",
  //   whatWeDid: "Brand storytelling and campaign content.",
  //   featured: false,
  //   reels: [
  //     {
  //       title: "Mayura Group Reel",
  //       url: "https://www.instagram.com/mayura_group/reel/De8t6b7xNXd/",
  //     },
  //   ],
  //   blocks: [{ type: "heading", text: "Mayura Group", level: 2 }],
  //   headline: "Where welcome becomes a story.",
  //   intro:
  //     "Mayura Group ka Hotel Mayura - Raipur wala three-decade-old hospitality story - ke liye humne brand storytelling aur campaign content banaya.",
  //   story: {
  //     client: "Mayura Group - Hotel Mayura",
  //     challenge:
  //       "Woh hospitality story online mein nahi dikh raha tha aur unka digital presence usse kam tha.",
  //     strategy:
  //       "Brand storytelling aur campaign content ke through guest stories ko bharosa banane ki koshish.",
  //     execution:
  //       "Brand storytelling aur campaign content banaye.",
  //   },
  //   deliverables: [
  //     {
  //       group: "Brand storytelling",
  //       items: [
  //         "Brand story development",
  //         "Campaign narrative",
  //       ],
  //     },
  //     {
  //       group: "Engaging content",
  //       items: [
  //         "Reels",
  //         "Lifestyle storytelling content",
  //       ],
  //     },
  //   ],
  //   strategy: [
  //     {
  //       intention: "attention",
  //       title: "Warmth that stops the scroll",
  //       description:
  //         "Content designed to make people feel welcome before they ever step in.",
  //     },
  //     {
  //       intention: "education",
  //       title: "Show the experience",
  //       description:
  //         "Content that communicates rooms, food and experiences with honesty.",
  //     },
  //     {
  //       intention: "conversion",
  //       title: "Turn stories into stays",
  //       description:
  //         "Campaign content created to support enquiries and direct bookings.",
  //     },
  //   ],
  //   gallery: [
  //     {
  //       id: "mayura-group-reel",
  //       mediaType: "reel",
  //       title: "Mayura Group Reel",
  //       caption:
  //         "Hospitality wali kahani - rooms, warmth aur stories.",
  //       instagramUrl:
  //         "https://www.instagram.com/mayura_group/reel/De8t6b7xNXd/",
  //     },
  //   ],
  //   theme: {
  //     mode: "light",
  //     accent: "#65745B",
  //     accentSoft: "#E4E8E1",
  //     background: "#F7F6F2",
  //     foreground: "#171717",
  //     muted: "#55524C",
  //   },
  // },

  {
    slug: "pathosure",
    name: "Pathosure",
    logo: "/images/partners/normalized/pathosure.png",
    industry: "Education",
    city: "Chhattisgarh",
    oneLine: "Students aur parents ke liye digital awareness.",
    whatWeDid:
      "Learning content aur admission campaigns ki digital presentation.",
    featured: false,
    blocks: [
      { type: "heading", text: "Pathosure", level: 2 },
      {
        type: "text",
        text: "Education brand ke liye students aur parents tak pahunchne ke liye content aur awareness campaigns par kaam kiya.",
      },
    ],
  },
  {
    slug: "next-world",
    name: "Next World",
    logo: "/images/partners/normalized/next-world.png",
    industry: "Business Services",
    city: "Chhattisgarh",
    oneLine: "Brand ki digital visibility aur creative support.",
    whatWeDid: "Social media presence aur brand creatives.",
    featured: false,
    blocks: [
      { type: "heading", text: "Next World", level: 2 },
      {
        type: "text",
        text: "Brand visibility aur creative support ke liye digital campaigns aur creatives par kaam kiya.",
      },
    ],
  },
  {
    slug: "mixxit",
    name: "Mixxit",
    logo: "/images/partners/normalized/mixxit.png",
    industry: "Retail",
    city: "Chhattisgarh",
    oneLine: "Retail offers aur store promotions ka digital push.",
    whatWeDid: "Offer creatives aur store promotion campaigns.",
    featured: false,
    blocks: [
      { type: "heading", text: "Mixxit", level: 2 },
      {
        type: "text",
        text: "Retail offers aur store promotions ke liye digital creatives aur campaigns par kaam kiya.",
      },
    ],
  },
  {
    slug: "gd-goenka",
    name: "GD Goenka ",
    logo: "/images/partners/normalized/gd-goenka.png",
    franchise: true,
    industry: "Education",
    city: "Chhattisgarh",
    oneLine: "Education franchise and local brand visibility.",
    whatWeDid: "Digital brand visibility and local marketing support.",
    featured: false,
    blocks: [{ type: "heading", text: "GD Goenka Franchise", level: 2 }],
  },
  {
    slug: "sankalp-hospital",
    name: "Sankalp Hospital",
    logo: "/images/partners/normalized/sankalp-hospital.png",
    industry: "Healthcare",
    city: "Chhattisgarh",
    oneLine: "Healthcare brand and local community visibility.",
    whatWeDid: "Digital brand visibility and local marketing support.",
    featured: false,
    blocks: [{ type: "heading", text: "Sankalp Hospital", level: 2 }],
  },
  {
    slug: "mrm-hospital",
    name: "MRM Hospital",
        logo: "/images/partners/normalized/mrm-hospital.png",
    industry: "Healthcare",
    city: "Chhattisgarh",
    oneLine: "Healthcare brand and local community visibility.",
    whatWeDid: "Digital brand visibility and local marketing support.",
    featured: false,
    blocks: [{ type: "heading", text: "MRM Hospital", level: 2 }],
  },
  {
    slug: "vasundhara-builders",
    name: "Vasundhara Builders",
    logo: "/images/partners/normalized/vasundhara-builders.png",
    industry: "Real Estate",
    city: "Chhattisgarh",
    oneLine: "Real estate brand and local market visibility.",
    whatWeDid: "Digital brand visibility and local marketing support.",
    featured: false,
    blocks: [{ type: "heading", text: "Vasundhara Builders", level: 2 }],
  },

  {
    slug: "renault",
    name: "Renault",
    franchise: true,
    logo: "/images/partners/normalized/renault.png",
    industry: "Automotive",
    city: "Chhattisgarh",
    oneLine: "Automotive franchise and local brand visibility.",
    whatWeDid: "Digital brand visibility and local marketing support.",
    featured: false,
    blocks: [{ type: "heading", text: "Renault Franchise", level: 2 }],
  },
  {
    slug: "dr-sharma",
    name: "Dr Sharma",
    industry: "Dental care",
    oneLine: "Dental awareness and smile-focused campaign content.",
    whatWeDid: "Short-form videos about dental care and oral health.",
    featured: false,
    blocks: [
      { type: "heading", text: "Dr Sharma", level: 2 },
      {
        type: "text",
        text: "Short-form campaign videos focused on dental care and oral health.",
      },
    ],
  },
  // {
  //   slug: "urs",
  //   name: "URS",
  //   industry: "Lifestyle",
  //   oneLine: "Relationship-focused campaign content.",
  //   whatWeDid: "Short-form video content about communication and relationships.",
  //   featured: false,
  //   blocks: [
  //     { type: "heading", text: "URS", level: 2 },
  //     {
  //       type: "text",
  //       text: "Short-form campaign content about communication and relationships.",
  //     },
  //   ],
  // },
  {
    slug: "srpr",
    name: "SRPR",
    industry: "Healthcare",
    oneLine: "Women's health awareness content.",
    whatWeDid: "Short-form video content about period pain and care.",
    featured: false,
    blocks: [
      { type: "heading", text: "SRPR", level: 2 },
      {
        type: "text",
        text: "Short-form campaign content focused on period pain awareness.",
      },
    ],
  },
];

export function featuredPartners(partnersList: Partner[]) {
  return partnersList.filter((partner) => partner.featured);
}



//  partners with franchise property set to true
//  if any  updates thsi file is fine
 // 2 missing lofo  : sankal  ,vasundhara