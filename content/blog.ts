import type { Block } from "@/lib/content/types";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  minutes: number;
  updated: string;
  blocks: Block[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "online-presence-checklist",
    title: "Aapki online presence kitni halke hai? 10-minute checklist",
    excerpt:
      "Google se Instagram tak — 10 mein check karo: business live hai, ya sirf khatauron mein ghussa hai.",
    minutes: 6,
    updated: "2026-10-01",
    blocks: [
      { type: "heading", text: "10-minute presence check", level: 2 },
      {
        type: "text",
        text: "Phone uthao aur apne business ko customer ki tarah search karo — Google par, Instagram par, aur apne shehar ke naam ke saath. Jo dikhe, wahi presence hai. Jo na dikhe, wo customer aapke competitor ko ja raha hai.",
      },
      { type: "heading", text: "Checklist", level: 3 },
      {
        type: "text",
        text: "Google Business profile live hai? Instagram ka last post kitne din purana hai? Reviews par reply kiya Hai? Website mobile par fast hai? WhatsApp number 2 tap mein milta hai? Offer dukaan ke alawa online bhi dikhti hai?",
      },
      {
        type: "callout",
        title: "Free Digital Audit",
        text: "Checklist ke baad confusion ho toh hum aapke business ka poora audit 30 minute mein karte hain — sabse pehle kya theek karne ka jawab bhi saath.",
      },
    ],
  },
  {
    slug: "3-months-consistency",
    title: "3 mahine ki consistency se kya hota hai",
    excerpt:
      "Jhooth se nahi dare — system se farak. 3 mahine mein exactly kya badalta hai, honest explain karte hain.",
    minutes: 4,
    updated: "2026-09-15",
    blocks: [
      { type: "heading", text: "Mahina 1: foundation", level: 2 },
      {
        type: "text",
        text: "Business ki saaf story, content calendar aur profiles ka cleanup. Pehle mahine nazar badal jaati hai, sale ko thoda aur time chahiye.",
      },
      { type: "heading", text: "Mahina 2-3: momentum", level: 2 },
      {
        type: "text",
        text: "Data bata deta hai — kaunsa creative logon se click kha raha hai, kaunsi audience enquiry kar rahi hai. Yahi par sabse pehla asli farak number mein dikhta hai.",
      },
      {
        type: "quote",
        text: "Timeline par honest. Progress par relentless.",
        by: "FreeKit Media",
      },
    ],
  },
  {
    slug: "instagram-ads-vs-random-booster",
    title: "Instagram ads vs booster button — fark kya hai?",
    excerpt:
      "Booster = lottery. Ads = system. Dono ka fark ek hi reel me soojhta hai.",
    minutes: 5,
    updated: "2026-08-20",
    blocks: [
      { type: "heading", text: "Booster kya karta hai", level: 2 },
      {
        type: "text",
        text: "Booster button 'reach' kharidta hai — log post dekhenge, achha lagega, aur scroll kar jayenge. Enquiry ya sale usse track nahi hoti.",
      },
      { type: "heading", text: "Proper ads kya karte hain", level: 2 },
      {
        type: "text",
        text: "Audience chuni jati hai, objective set hota hai (enquiry, call, sale), creative test hota hai, aur cost-per-enquiry track hota hai. Booster aur ads ka fark — kharch aur investment ka hai.",
      },
    ],
  },
];
