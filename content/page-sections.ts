export const systemPillars = [
  {
    num: "01",
    name: "Visibility",
    desc: "Consistent content, strong local recall aur regular presence — ruk khichbe se silsile tootta hai, aur log bhool jaate hain.",
    outcome: "Log aapko dekhte hain.",
  },
  {
    num: "02",
    name: "Trust",
    desc: "Real customers, real reviews, real stories. Dikhawa nahi — proof hi bikta hai.",
    outcome: "Log aap par bharosa karte hain.",
  },
  {
    num: "03",
    name: "Conversion",
    desc: "Sahi message, sahi log, sahi waqt — enquiry se seedha sale tak.",
    outcome: "Log aapse kharidte hain.",
  },
] as const;

export const problem = {
  headline: "Customer aapke paas aane se pehle online decide kar leta hai.",
  text: "Aaj ka customer pehle Google aur Instagram par dekhta hai: reviews, videos, offers — aur phir call ya visit karta hai. Zyadatar businesses ke paas product ki kami nahi hoti; kami hoti hai dikhne, bharose aur pehchaan ki.",
  line: "Achhe business ko achhi presentation chahiye, tabhi wo ek brand banta hai.",
} as const;

export const losses = [
  {
    title: "Low visibility",
    text: "Log aapko dekhte hi nahi — ya dekhte hain, par yaad nahi rakhte.",
  },
  {
    title: "Weak trust signals",
    text: "Reviews, testimonials aur real customer stories online kahin nahi dikhte.",
  },
  {
    title: "Offer sirf dukaan tak",
    text: "Naye customers tak offer pahunchta hi nahi, kyunki online presence nahi hai.",
  },
  {
    title: "Local search mein nazar nahi",
    text: "Inactive Google & Instagram profile = kam calls, kam bharosa.",
  },
] as const;

export const noShortcuts = {
  title: "No shortcuts. No vanity.",
  items: [
    {
      title: "Random post nahi",
      text: "Bina objective ke random post ya reel hum nahi banate. Har content piece ke peeche ek kaam hai.",
    },
    {
      title: "Fake vanity nahi",
      text: "Fake followers ya sirf likes ka game nahi. Likes bikte nahi, enquiries bikti hain.",
    },
    {
      title: "Jhoota vaada nahi",
      text: "Ek raat mein result ka jhootha vaada nahi. Jo kehte hain, report mein dikhaate hain.",
    },
  ],
  line: "Har campaign track hota hai, test hota hai, aur behtar banaya jaata hai.",
} as const;

export const process = {
  headline: "How we work",

  sub: "Har mahine strategy, content aur optimisation ke through aapke brand ko zyada visible, trusted aur ready-for-growth banate hain.",

  steps: [
    {
      num: "01",
      title: "Business samajhna",
      text: "Aapka product, customer, competition aur current online presence — sabse pehle picture clear karte hain.",
      icon: "search",
      image: "/images/process/business.png",
      sourceUrl: "https://storyset.com/illustration/on-the-office/amico",
    },

    {
      num: "02",
      title: "Strategy banana",
      text: "Aapke business aur city ke hisaab se clear strategy banate hain. Copy-paste template nahi.",
      icon: "target",
      image: "/images/process/strategy.png",
      sourceUrl: "https://storyset.com/illustration/mobile-marketing/cuate",
    },

    {
      num: "03",
      title: "Shoot & content",
      text: "Monthly content calendar, reels, creatives aur ad content — sab ek consistent direction mein.",
      icon: "camera",
      image: "/images/process/content.png",
      sourceUrl:
        "https://storyset.com/illustration/game-analytics/bro#FFC100FF&hide=&hide=complete",
    },

    {
      num: "04",
      title: "Execution",
      text: "Posting, ads, Google profile aur print support — jo plan hua hai, woh properly live hota hai.",
      icon: "rocket",
      image: "/images/process/execution.png",
      sourceUrl:
        "https://storyset.com/illustration/analytics/bro#FFC100FF&hide=&hide=complete",
    },

    {
      num: "05",
      title: "Track & optimise",
      text: "Har campaign data deta hai. Jo kaam kar raha hai use scale, jo nahi kar raha use improve karte hain.",
      icon: "trendingUp",
      image: "/images/process/analytics.png",
      sourceUrl: "https://storyset.com/illustration/creativity/cuate",
    },

    {
      num: "06",
      title: "Monthly review",
      text: "Clear report, honest numbers aur agle mahine ka action plan — taaki progress hamesha visible rahe.",
      icon: "barChart",
      image: "/images/process/review.png",
      sourceUrl:
        "https://storyset.com/illustration/editing-body-text/bro#FFC100FF&hide=&hide=complete",
    },
  ],

  grows: [
    {
      name: "Visibility",
      text: "Reach, views, local searches",
      icon: "eye",
    },
    {
      name: "Branding",
      text: "Pehchaan aur customer ka bharosa",
      icon: "heart",
    },
    {
      name: "Leads & Sales",
      text: "Quality enquiries, calls aur footfall",
      icon: "trendingUp",
    },
  ],

  report: {
    title: "Monthly report mein kya dikhta hai",
    items: [
      "Reach aur views",
      "Enquiries aur calls",
      "Cost per enquiry",
      "Campaign-wise performance",
    ],
    note: "Sab transparent — numbers chhupe nahi hote.",
  },

  honesty: {
    title: "Marketing jaadu nahi hai.",
    text: "Enquiries jaldi aa sakti hain, lekin asli farak strategy aur consistency ke saath 3 mahine mein dikhta hai.",
    line: "Timeline par honest. Progress par relentless.",
  },
} as const;

export const proof = {
  headline: "150+ brands ne bharosa kiya",
  sub: "Healthcare se Jewellery, Real Estate se Fashion tak — sabse pehle visibility, phir bharosa, aur tabhi sale.",
  testimonial: {
    quote: "Professional enough and know their job. Best agency across Chhattisgarh.",
    by: "Dr Anurag Sharma",
    role: "Healthcare, Bilaspur",
  },
  result: {
    tag: "Result highlight",
    value: "₹6,00,000+",
    line: "Instagram ads se ek hi din mein jewellery ka direct order.",
    by: "Kisna Franchise Team",
    quote:
      "Freekit team is very professional and they know their job. They have helped us to get more enquiries and sales through Instagram ads.",
  },
  industriesNote:
    "Industries: Healthcare, Jewellery, Automobile, Real Estate, Fashion, Retail, Hotel, Education, Personal Branding.",
} as const;

export const comparison = {
  headline: "Freekit media vs other agency",
  sub: "Fark bol ke nahi, system se aata hai. Honest comparison:",
  rows: [
    {
      label: "Services",
      us: "Sab ek jagah — content, ads, web, print",
      them: "Har kaam ke alag vendors",
    },
    {
      label: "Reporting",
      us: "Monthly numbers, transparent",
      them: "Vague updates, screenshots",
    },
    {
      label: "Strategy",
      us: "City & business ke hisaab se, never template",
      them: "Copy-paste plan",
    },
    {
      label: "Focus",
      us: "Enquiries & sales",
      them: "Likes & followers",
    },
    {
      label: "Team",
      us: "In-house shoot + ads + web",
      them: "Outsourced zerre",
    },
    {
      label: "Accountability",
      us: "Ek team, ek jawab",
      them: "Blame game",
    },
  ] as const,
};

export const pitchItems = [
  {
    slug: "jewellery-retail",
    who: "Jewellery & Retail",
    problem:
      "Showroom festive ke daura hi chalta hai; baaki mahino customers online kahin dikhte nahi.",
    weDo: "Festive + off-season campaigns, purity/trust content aur collection reels — taaki jab customer sona soche, aapka naam pehle aaye.",
    cta: "Apna festive plan discuss karo",
  },
  {
    slug: "healthcare-doctors",
    who: "Healthcare & Doctors",
    problem:
      "Achhe doctor ka naam sirf muh-bol ke pahunchta hai; online reviews aur profile weak hote hain.",
    weDo: "Doctor personal branding, patient stories, aur Google My Business optimisation — bharosa pehle, appointment baad mein.",
    cta: "Explore the healthcare example",
  },
  {
    slug: "real-estate-automobile",
    who: "Real Estate & Automobile",
    problem:
      "Big-ticket purchase hai — customer site pe aane se pehle 10 baar online check kar chuka hota hai.",
    weDo: "Walkthrough videos, test-drive stories aur offer campaigns jo seedha walk-in karwate hain.",
    cta: "Walk-in badaane ki strategy chuno",
  },
  {
    slug: "education-hotel",
    who: "Education & Hotel",
    problem:
      "Admission aur booking ka faisla content aur reviews se hota hai — jo abhi online dikh nahi raha.",
    weDo: "Campus/property tours, result aur reviews ki storytelling, seasonal offer campaigns.",
    cta: "Explore the admissions and booking plan",
  },
  {
    slug: "founders-personal-brand",
    who: "Founders & Personal Brands",
    problem:
      "Founder khud brand ka best influencer hai, par camera ke peeche chhota ho gaya hai.",
    weDo: "Face-of-the-brand content, founder story, interview snippets aur LinkedIn/Instagram presence.",
    cta: "Explore the founder branding roadmap",
  },
] as const;

export const faqs = [
  {
    q: "Result kitne din mein dikhta hai?",
    a: "Pehle 2-3 hafton mein enquiries ka flow shuru ho jaata hai. Brand ki asli pakad 3 mahine ki consistent strategy ke baad banti hai. Timeline hum pehle din hi saaf bata dete hain, bina kisi jhoothe vaade ke.",
  },
  {
    q: "Pricing kaise decide hoti hai?",
    a: "Aapke business, target audience aur growth goals ke hisaab se custom package banta hai. Free audit ke baad WhatsApp par ek clear quotation milti hai, jisme koi hidden charge nahi hota.",
  },
  {
    q: "Kya main sirf ek service le sakta hoon?",
    a: "Bilkul. Aap sirf ads, sirf reels ya koi bhi ek service le sakte hain. Par best results tab milte hain jab visibility aur trust dono saath chalte hain, aur hum wahi strategy suggest karte hain jo aapke goal ke liye sahi ho.",
  },
  {
    q: "Offline marketing bhi karte ho?",
    a: "Haan. Hoarding, banner, brochure aur festive creatives ka design hum banate hain, saath mein marketing consultation bhi. Print aap apne trusted vendor se karwa sakte hain, taaki rate aur quality par aapka poora control rahe. Design hamesha aapki online strategy ke saath align rehta hai.",
  },
  {
    q: "Report kaisi milti hai?",
    a: "Har mahine ek clear report: reach, enquiries aur calls, cost per enquiry aur campaign-wise performance. Aapko hamesha pata hota hai ki paisa kahan lag raha hai aur kya return aa raha hai.",
  },
  {
    q: "Free audit mein kya hota hai?",
    a: "30 minute ka session, aapke office par ya online. Hum aapki Google, Instagram aur website presence check karte hain aur batate hain ki customer aapko kahan miss kar raha hai. Saath hi ek clear action plan milta hai ki sabse pehle kya theek karna hai.",
  },
] as const;