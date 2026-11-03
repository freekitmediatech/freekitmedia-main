import type { IconName } from "@/components/ui/Icon";

export type VisualKind = "studio" | "console" | "devices" | "spotlight";

export type SignatureKind = "pipeline" | "report" | "board" | "path";

export type SignatureStep = {
  label: string;
  detail: string;
};

export type ServicePage = {
  slug: string;
  num: string;
  icon: IconName;
  visual: VisualKind;
  short: string;
  title: string;
  tag: string;
  headline: string;
  sub: string;
  chips: string[];
  problems: { title: string; text: string }[];
  deliverables: { group: string; items: string[] }[];
  signature: {
    kicker: string;
    title: string;
    text: string;
    kind: SignatureKind;
    steps: SignatureStep[];
    note: string;
  };
  story?: { href: string; label: string; text: string };
  process: { title: string; text: string }[];
  fits: { icon: IconName; label: string; text: string }[];
  faqs: { q: string; a: string }[];
  metaDescription: string;
};

export const servicePages: ServicePage[] = [
  {
    slug: "content-creation-branding",
    num: "01",
    icon: "camera",
    visual: "studio",
    short: "Reels, shoots, brand identity",
    title: "Content Creation & Branding",
    tag: "Service 01 · Made in-house",
    headline: "Make the brand match the product.",
    sub: "Reels, photo shoots, brand identity and print — planned, shot and edited by one in-house team. Nothing outsourced half-way, nothing left looking like someone else's brand.",
    chips: [
      "In-house studio & editors",
      "Monthly content calendar",
      "Brand guidelines included",
    ],
    problems: [
      {
        title: "The look changes every week",
        text: "New freelancer, new fonts, new colours. Customers stop recognising you before they stop scrolling.",
      },
      {
        title: "Content runs on leftover time",
        text: "Posting is the first thing that stops when the business gets busy — exactly when customers are looking.",
      },
      {
        title: "Great product, weak presentation",
        text: "The camera work around the product decides how customers value it. Good lighting isn't extra; it's the price of entry.",
      },
      {
        title: "Print and online don't match",
        text: "The hoarding looks one way, the Instagram grid another. Each piece quietly weakens the rest.",
      },
    ],
    deliverables: [
      {
        group: "Shoot & short video",
        items: [
          "Monthly reels and short-form video",
          "Product and lifestyle photo shoots",
          "In-house studio or on-location days",
        ],
      },
      {
        group: "Brand identity",
        items: [
          "Logo, colours, typography — one visual system",
          "Brand guidelines, so every post looks the same",
          "Templates your team can recognise instantly",
        ],
      },
      {
        group: "Print & offline",
        items: [
          "Hoardings, banners and brochures",
          "Festive print design that matches the online look",
          "Marketing consultation along the way",
        ],
      },
      {
        group: "Editorial system",
        items: [
          "Monthly content calendar, visible in advance",
          "Caption, sound and layout direction",
          "Delivery of every file we shoot — it stays yours",
        ],
      },
    ],
    signature: {
      kicker: "The pipeline",
      title: "One pipeline. Zero handovers.",
      text: "From the idea to the post, nothing leaves our team — so month 12 still looks like month 1.",
      kind: "pipeline",
      steps: [
        { label: "Brief", detail: "One plan, per month, per goal" },
        { label: "Shoot", detail: "In-house studio & camera team" },
        { label: "Edit", detail: "In-house editors, same guidelines" },
        { label: "Calendar", detail: "You see the month in advance" },
        { label: "Publish", detail: "Planned posts, no random drops" },
        { label: "Report", detail: "What worked, what's next" },
      ],
      note: "Brief to report, the work never changes vendors — because it never leaves our team.",
    },
    process: [
      {
        title: "Free audit first",
        text: "Thirty minutes — online or at your office. We look at your current content, brand consistency and what your customers actually see.",
      },
      {
        title: "Plan & quotation",
        text: "Shoot days, content mix and a clear monthly calendar — sized for your business and city, quoted on WhatsApp.",
      },
      {
        title: "Monthly production",
        text: "Shoot, edit and identity work happen on our side. You approve the calendar; we handle the rest.",
      },
      {
        title: "Deliver & review",
        text: "Content delivered in a usable format, then a monthly review: what carried, what changes next month.",
      },
    ],
    fits: [
      {
        icon: "sparkles",
        label: "Retail & showrooms",
        text: "Collections, festive lines and product stories that actually convert to visits.",
      },
      {
        icon: "instagram",
        label: "Fashion & jewellery",
        text: "The most visual categories need the most consistent visual system.",
      },
      {
        icon: "heart",
        label: "Healthcare",
        text: "Calm, trustworthy presentation that builds patient confidence before they arrive.",
      },
      {
        icon: "landmark",
        label: "Hotels & education",
        text: "Tours, campus and stay stories shot properly — the visit is already sold online.",
      },
    ],
    faqs: [
      {
        q: "Can we shoot in our own showroom?",
        a: "Yes. Most clients mix both — on-location shoot days in the showroom plus studio product shots. The mix is set in your monthly plan, not imposed on it.",
      },
      {
        q: "We already have a logo. Do we still need branding?",
        a: "The logo is one piece. If fonts, colours and layouts change with every post, customers never learn to recognise you. Brand guidelines are usually where the real fix is.",
      },
      {
        q: "Who owns the content you create?",
        a: "You do. Everything we shoot and edit is delivered to you in full quality — nothing is rented or locked.",
      },
      {
        q: "How much content comes in a month?",
        a: "It depends on your package and pace, so you'll see the exact mix — reels, posts, stories, print — in your monthly calendar before the work starts.",
      },
    ],
    metaDescription:
      "Reels, photo shoots, brand identity and print creatives from an in-house Content Creation & Branding team — FreeKit Media, Chhattisgarh.",
  },
  {
    slug: "meta-google-ads",
    num: "02",
    icon: "megaphone",
    visual: "console",
    short: "Targeted campaigns, real enquiries",
    title: "Meta Ads & Google Ads",
    tag: "Service 02 · Performance",
    headline: "Ads measured in enquiries. Not in likes.",
    sub: "Instagram, Facebook and Google campaigns built around your city, your offer and your customers — with every rupee tracked to the enquiry.",
    chips: [
      "Cost-per-enquiry tracked",
      "City-specific audiences",
      "Ad creatives made in-house",
    ],
    problems: [
      {
        title: "Budget spends, phone stays quiet",
        text: "Boosted posts buy reach and likes. Enquiries are a different job — they need an offer, an audience and a next step.",
      },
      {
        title: "Copy-paste campaign plans",
        text: "Audiences and budgets inherited from some other city's spreadsheet waste your money politely.",
      },
      {
        title: "No tracking, no truth",
        text: "If enquiries and calls can't be traced back to a campaign, no one can say which money worked.",
      },
      {
        title: "Creative that doesn't match the business",
        text: "When the ad looks nothing like the actual shop, offer or product, clicks wander off.",
      },
    ],
    deliverables: [
      {
        group: "Campaigns",
        items: [
          "Instagram & Facebook — awareness, offer and enquiry campaigns",
          "Google Search & Display campaigns",
          "Seasonal and festive campaign windows",
        ],
      },
      {
        group: "Audience & research",
        items: [
          "Audience research built around your city",
          "Offer angles per business, not per template",
          "Geography and intent you can actually serve",
        ],
      },
      {
        group: "Creative",
        items: [
          "Ad creatives made in-house",
          "Tested against data, not taste",
          "Fresh variants so fatigue doesn't set in",
        ],
      },
      {
        group: "Reporting",
        items: [
          "Enquiries and calls traced per campaign",
          "Cost per enquiry, visible monthly",
          "Straight answer: scale, fix or stop",
        ],
      },
    ],
    signature: {
      kicker: "The monthly report",
      title: "Open the report. Every number is there.",
      text: "The same four things, every month — because those are the numbers a business can act on.",
      kind: "report",
      steps: [
        { label: "Reach & views", detail: "How far the message travelled" },
        { label: "Enquiries & calls", detail: "What actually came back" },
        { label: "Cost per enquiry", detail: "What each enquiry cost you" },
        {
          label: "Campaign performance",
          detail: "Split-wise: scale, fix or stop",
        },
      ],
      note: "Nothing stays hidden — the report you see is the report we work from.",
    },
    story: {
      href: "/case-studies/jewellery-6-lakh-one-day",
      label: "Read the jewellery story",
      text: "One festive campaign we ran for a jewellery partner turned a single day into the business's best — that's the kind of result this service is built for.",
    },
    process: [
      {
        title: "Free audit first",
        text: "Thirty minutes, online or at your office. We map your offer, audience and the current state of any running ads.",
      },
      {
        title: "Plan & quotation",
        text: "A campaign plan per city and business on WhatsApp — budget sized to your pace, no hidden charges.",
      },
      {
        title: "Build & launch",
        text: "Audiences researched, creatives produced in-house, tracking set up so every enquiry has a source.",
      },
      {
        title: "Optimise weekly",
        text: "Data decides where money moves. What carries gets scaled; what doesn't, gets switched off.",
      },
      {
        title: "Report monthly",
        text: "Reach, enquiries, cost per enquiry, campaign-wise performance — and next month's plan in the same document.",
      },
    ],
    fits: [
      {
        icon: "users",
        label: "Retail & showrooms",
        text: "Offers that reach the buyer's phone, not just the notice board.",
      },
      {
        icon: "trendingUp",
        label: "Real estate & automobile",
        text: "High-ticket decisions get researched online first — meet customers there.",
      },
      {
        icon: "heart",
        label: "Clinics & doctors",
        text: "Consultation and appointment enquiries you can actually count.",
      },
      {
        icon: "calendarClock",
        label: "Education & hotels",
        text: "Admission and booking seasons, planned around your intake windows.",
      },
    ],
    faqs: [
      {
        q: "What budget do we need to start?",
        a: "It depends on your business, city and pace — so we size it during the free audit and quote clearly on WhatsApp. You'll know the full number before anything spends.",
      },
      {
        q: "Do you guarantee sales?",
        a: "No — and you should be careful with anyone who says they do. First enquiries can come quickly, but the real difference shows around three months of consistent work. We promise transparent numbers and relentless optimisation.",
      },
      {
        q: "Should we run Meta or Google?",
        a: "Both are handled in-house, but the split is a decision, not a default. Local retail and offers usually find people fast on Instagram and Facebook; service and intent-led searches do better on Google. The audit decides for your case.",
      },
      {
        q: "Who makes the ad creatives?",
        a: "Our in-house team — the same people who shoot the content. That's why the ad looks like your actual business, and why variants keep coming without a new vendor.",
      },
    ],
    metaDescription:
      "Meta and Google ad campaigns with city-specific audiences and in-house creatives — tracked to enquiries, reported monthly. FreeKit Media, Chhattisgarh.",
  },
  {
    slug: "website-social-media",
    num: "03",
    icon: "smartphone",
    visual: "devices",
    short: "Fast website + active profiles",
    title: "Website & Social Media Management",
    tag: "Service 03 · Always on",
    headline: "Be found locally. Be answered instantly.",
    sub: "A fast, enquiry-ready website — plus Instagram, Facebook and Google My Business that never go quiet. One monthly system, one team.",
    chips: [
      "Mobile-first website",
      "Monthly posting calendar",
      "Google My Business maintained",
    ],
    problems: [
      {
        title: "Local search skips you",
        text: "An inactive Google profile means fewer calls — the customer two streets away can't find what you do best.",
      },
      {
        title: "Posts stop when work starts",
        text: "The profile goes quiet in your busiest weeks — right when people are watching it most.",
      },
      {
        title: "The website works on desktop only",
        text: "Mobile is where your customers decide. A heavy, cramped site loses the enquiry before it begins.",
      },
      {
        title: "Traffic with no door",
        text: "No WhatsApp, no call button, no clear next step — visitors leave without anything to act on.",
      },
    ],
    deliverables: [
      {
        group: "Website",
        items: [
          "Fast, mobile-first website, built enquiry-ready",
          "WhatsApp enquiry flow straight from the site",
          "Content written and structured by our team",
        ],
      },
      {
        group: "Social media",
        items: [
          "Instagram & Facebook monthly calendar",
          "Captions, hashtags and profile optimisation",
          "Stories and highlights that keep profiles alive",
        ],
      },
      {
        group: "Google My Business",
        items: [
          "Regular posts on your business profile",
          "Review replies handled to a clear voice",
          "Local search presence looked after",
        ],
      },
      {
        group: "Maintenance",
        items: [
          "Site kept fast, current and secure",
          "Hours, offers and updates handled monthly",
          "One report — site, socials and GMB together",
        ],
      },
    ],
    signature: {
      kicker: "The always-on board",
      title: "Four channels. One busy-sheet.",
      text: "Every month, all four surfaces move together — so no corner of your presence goes stale while another is on fire.",
      kind: "board",
      steps: [
        {
          label: "Instagram",
          detail: "Calendar posts, stories, profile upkeep",
        },
        {
          label: "Facebook",
          detail: "Offer & event posts for local reach",
        },
        {
          label: "Google",
          detail: "GMB posts, review replies, search upkeep",
        },
        {
          label: "Website",
          detail: "Updates, speed, enquiry flow checks",
        },
      ],
      note: "Posting stops being the thing everyone forgets — because it stops being anyone's side job.",
    },
    process: [
      {
        title: "Free audit first",
        text: "We review your site, profiles and Google presence — where customers get stuck or go missing.",
      },
      {
        title: "Plan & quotation",
        text: "Site structure and monthly cadence on one plan, quoted clearly on WhatsApp.",
      },
      {
        title: "Build & set up",
        text: "Website built and made enquiry-ready; social and Google profiles cleaned up and optimised.",
      },
      {
        title: "Run monthly",
        text: "Calendar executed, GMB alive, reviews answered, site maintained — with a monthly report covering all of it.",
      },
    ],
    fits: [
      {
        icon: "mapPin",
        label: "Local businesses",
        text: "When someone searches nearby, be the profile they find — and trust.",
      },
      {
        icon: "heart",
        label: "Clinics & healthcare",
        text: "Appointment-ready profiles and Google presence patients check before visiting.",
      },
      {
        icon: "landmark",
        label: "Hotels & education",
        text: "Bookings and admissions start with what people see online first.",
      },
      {
        icon: "smartphone",
        label: "Founders & growing teams",
        text: "Too busy to post? That's exactly what this retainer is for.",
      },
    ],
    faqs: [
      {
        q: "Can you redesign an existing website?",
        a: "Yes — some sites need a full rebuild for speed and enquiry flow, others just need a serious refresh. We'll tell you honestly which one, after the audit.",
      },
      {
        q: "Who writes the content for the site and posts?",
        a: "We do — copy, captions and posting plans are part of the work. Photos can come from our own shoots too, so nothing is stock-generic.",
      },
      {
        q: "What happens when we need something changed on the site?",
        a: "Small monthly updates — hours, offers, prices, photos — are handled as part of the retainer. Bigger work is scoped separately, clearly.",
      },
      {
        q: "Is hosting and the domain included?",
        a: "Those details, and how they're billed, are laid out in your quotation after the audit — so there are no surprises mid-month.",
      },
    ],
    metaDescription:
      "Fast, enquiry-ready websites with always-on Instagram, Facebook and Google My Business management — one monthly system from FreeKit Media.",
  },
  {
    slug: "personal-branding-influencer",
    num: "04",
    icon: "sparkles",
    visual: "spotlight",
    short: "Founder face = brand face",
    title: "Personal Branding & Influencer Marketing",
    tag: "Service 04 · Trust engine",
    headline: "Put the founder on camera. Trust walks in with them.",
    sub: "Personal brand strategy for founders and doctors — plus influencer collabs built on real, local audiences, not follower counts.",
    chips: [
      "Face-of-brand shoots",
      "Local influencer collabs",
      "UGC reused in ads",
    ],
    problems: [
      {
        title: "The right face never shows",
        text: "The founder or doctor is the brand's most credible story — and stays behind the camera.",
      },
      {
        title: "Collabs picked on follower count",
        text: "Big audiences, wrong city, wrong kind of attention. The invoice is loud; the response isn't.",
      },
      {
        title: "Authority without proof",
        text: "Credentials, expertise and stories live in people's heads — not on the profile where decisions happen.",
      },
      {
        title: "Good content used once",
        text: "A strong creator-made asset dies on the grid instead of carrying offers, ads and walk-ins.",
      },
    ],
    deliverables: [
      {
        group: "Personal brand",
        items: [
          "Founder / doctor personal brand strategy",
          "Face-of-the-brand content shoots",
          "Interviews, tips and story-led authority content",
        ],
      },
      {
        group: "Influencer collabs",
        items: [
          "Local reach with real audiences",
          "Shortlists chosen on fit, not hype",
          "Briefs that keep the collab on-message",
        ],
      },
      {
        group: "UGC that pays twice",
        items: [
          "Creator-made content built to travel",
          "Edited versions reused inside your ad campaigns",
          "Consent and usage handled cleanly",
        ],
      },
      {
        group: "Presence",
        items: [
          "Profile strategy across Instagram (and LinkedIn where relevant)",
          "Posting cadence you can sustain",
          "Monthly review of what's building authority",
        ],
      },
    ],
    signature: {
      kicker: "The spotlight path",
      title: "From camera-shy to face of the brand.",
      text: "Nobody becomes the face overnight — and nobody should have to improvise it. Four moves, done in order.",
      kind: "path",
      steps: [
        {
          label: "Profile & story audit",
          detail: "Who should the camera finally meet?",
        },
        {
          label: "Story arc",
          detail: "Topics, angles and tone worth repeating",
        },
        {
          label: "Shoot day",
          detail: "Designed around your schedule, not ours",
        },
        {
          label: "Monthly cadence",
          detail: "Authority content + collab windows",
        },
      ],
      note: "The first shoot is usually the hardest. After that, the face stops being stage-fright and starts being leverage.",
    },
    process: [
      {
        title: "Free audit first",
        text: "We look at your personal presence and your business's current trust — what shows up when someone Googles the founder.",
      },
      {
        title: "Story arc & plan",
        text: "Topics, angles and cadence that fit the person — quoted clearly on WhatsApp.",
      },
      {
        title: "First shoot",
        text: "Face-of-brand content shot around your time: at work, in-store, on-site. Short, planned sessions.",
      },
      {
        title: "Run & report",
        text: "Presence maintained monthly; collab windows and UGC reused across ads; one review, every month.",
      },
    ],
    fits: [
      {
        icon: "users",
        label: "Doctors & clinics",
        text: "Patient trust starts with the doctor's face and voice — not stock photos.",
      },
      {
        icon: "sparkles",
        label: "Founders & promoters",
        text: "The person behind the product is the story customers remember.",
      },
      {
        icon: "heart",
        label: "Consultants & experts",
        text: "Authority content that compounds — one insight at a time.",
      },
      {
        icon: "instagram",
        label: "Influencer-backed campaigns",
        text: "Launches and offers that need credible local voices, not rented logos.",
      },
    ],
    faqs: [
      {
        q: "Do you work with doctors?",
        a: "Yes — healthcare is one of the industries we serve. The work focuses on doctor personal branding, patient education content and Google presence. We don't invent medical claims; the credibility has to come from you.",
      },
      {
        q: "What if the founder has no time to shoot?",
        a: "The whole system is built around your schedule — short, planned sessions at the business, batched content and professional editing. Being slow on camera is normal; being absent from it is what costs.",
      },
      {
        q: "How are influencers chosen?",
        a: "On audience — city, niche, engagement and fit with your brand. Follower count is the last filter, not the first.",
      },
      {
        q: "Can UGC be used in our ads?",
        a: "Yes — and that's usually the smartest use. We handle creation and usage rights so the content works on the feed, then again inside your campaigns.",
      },
    ],
    metaDescription:
      "Founder and doctor personal branding with face-of-brand shoots, local influencer collabs and UGC reusable in ads — FreeKit Media, Chhattisgarh.",
  },
];

export function servicePageBySlug(slug: string) {
  return servicePages.find((page) => page.slug === slug);
}

export const otherServices = (slug: string) =>
  servicePages.filter((page) => page.slug !== slug);
