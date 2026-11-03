import type { IconName } from "@/components/ui/Icon";

export type Service = {
  slug: string;
  num: string;
  icon: IconName;
  short: string;
  title: string;
  description: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "content-creation-branding",
    num: "01",
    icon: "camera",
    short: "Reels, shoots, brand identity",
    title: "Content Creation & Branding",
    description:
      "Reels, photo & video shoots, brand identity aur creatives. In-house team, in-house setup.",
    points: [
      "Monthly reels aur short video",
      "Product aur lifestyle photo shoots",
      "Logo, brand identity aur print creatives",
      "Brand guideline — jo bhi post karbaao, look same rahe",
      "In-house studio aur editors",
    ],
  },
  {
    slug: "meta-google-ads",
    num: "02",
    icon: "megaphone",
    short: "Targeted campaigns, real enquiries",
    title: "Meta Ads & Google Ads",
    description:
      "Instagram, Facebook aur Google par targeted campaigns — awareness, offer aur enquiry ke liye.",
    points: [
      "Instagram & Facebook ads (awareness, offer, enquiry)",
      "Google Search & Display campaigns",
      "Audience research aapke sheher ke hisaab se",
      "Ad creative in-house, data pe test hota",
      "Cost-per-enquiry track hota hai, sirf likes nahi",
    ],
  },
  {
    slug: "website-social-media",
    num: "03",
    icon: "smartphone",
    short: "Fast website + active profiles",
    title: "Website & Social Media Management",
    description:
      "Posting, captions, profile optimisation, Google My Business aur ek fast, enquiry-ready website.",
    points: [
      "Fast, mobile-first website (enquiry-ready)",
      "Instagram & Facebook ka monthly calendar",
      "Captions, hashtags aur profile optimisation",
      "Google My Business — posts, reviews, local search",
      "WhatsApp enquiry flow direct site se",
    ],
  },
  {
    slug: "personal-branding-influencer",
    num: "04",
    icon: "sparkles",
    short: "Founder face = brand face",
    title: "Personal Branding & Influencer Marketing",
    description:
      "Founder ya doctor ko brand ka chehra banana, plus influencer & UGC collaborations jo bharosa badhate hain.",
    points: [
      "Founder/doctor ki personal brand strategy",
      "Face-of-the-brand content shoots",
      "Influencer collabs (local reach, real audiences)",
      "UGC content jo ads mein bhi chalta hai",
      "Page par authority — interviews, tips, stories",
    ],
  },
  {
    slug: "local-seo-google-business",
    num: "05",
    icon: "smartphone",
    short: "Sheher mein pehle dikhiye",
    title: "Local SEO & Google My Business",
    description:
      "Jab koi aapke sheher mein aapki service search kare, tab aap sabse pehle dikhein — maps, reviews aur local search.",
    points: [
      "Google My Business setup aur monthly optimisation",
      "Local keywords — sheher aur area ke hisaab se",
      "Reviews ka system — achhe reviews kaise aayein",
      "Photos, posts aur Q&A regular update",
      "Maps par calls aur directions ka tracking",
    ],
  },
  {
    slug: "lead-generation-whatsapp",
    num: "06",
    icon: "megaphone",
    short: "Enquiry se customer tak",
    title: "Lead Generation & WhatsApp Marketing",
    description:
      "Ads aur website se aayi har enquiry ko track karna, WhatsApp par follow-up karna aur customer banana.",
    points: [
      "Landing pages jo seedha enquiry laate hain",
      "WhatsApp enquiry flow aur quick replies",
      "Har lead ka status track — new, contacted, closed",
      "Follow-up reminders, koi enquiry miss na ho",
      "Monthly lead report — kitni aayi, kitni convert hui",
    ],
  },
  {
    slug: "offline-branding-print",
    num: "07",
    icon: "camera",
    short: "Hoarding, banner, brochure",
    title: "Offline Branding & Print Design",
    description:
      "Hoarding, banner, brochure aur festive print design — online strategy ke saath hi, alag vendor nahi.",
    points: [
      "Hoarding aur banner design",
      "Brochure, flyer aur catalogue",
      "Festive aur offer creatives (print + digital)",
      "Print-ready files aur vendor coordination",
      "Online aur offline ka look ek jaisa",
    ],
  },
  {
    slug: "growth-audit-strategy",
    num: "08",
    icon: "sparkles",
    short: "Pehle samjho, phir plan",
    title: "Growth Audit & Marketing Strategy",
    description:
      "Aapka product, customer, competition aur current online position samajh kar ek clear, business-specific plan.",
    points: [
      "Free business growth assessment",
      "Competitor aur local market ka review",
      "Kya chal raha hai, kya nahi — clear report",
      "Aapke business ke hisaab se plan, template nahi",
      "Monthly review aur next-month roadmap",
    ],
  },
];

export const offlineSupport = {
  title: "Offline branding bhi, wahi ek team se",
  text: "Hoarding, banner, brochure, festive print design aur marketing consultation — online strategy ke saath hi chalta hai, alag vendor nahi.",
  line: "One partner. Online & offline. Ek team. Ek strategy. Ek jagah puri accountability.",
};