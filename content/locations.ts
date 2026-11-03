export type LocationPage = {
  slug: string;
  city: string;
  description: string;
  intro: string;
  focus: { title: string; detail: string }[];
  faqs: { q: string; a: string }[];
};

export const locationPages: LocationPage[] = [
  {
    slug: "bilaspur",
    city: "Bilaspur",
    description:
      "Digital marketing for Bilaspur businesses: content, paid ads, websites, social media and branding from FreeKit Media.",
    intro:
      "Build a clearer local presence in Bilaspur with useful content, consistent business information and a straightforward path from discovery to enquiry. We plan the work around your actual offer and customers, not a one-size-fits-all posting calendar.",
    focus: [
      {
        title: "Make local information dependable",
        detail:
          "Keep your public business name, contact details, service information and opening hours accurate wherever customers find you. We can help organise the content and profile work around the information you confirm.",
      },
      {
        title: "Show what customers need to decide",
        detail:
          "Plan product, service and people-led content that answers real pre-purchase questions. The right format depends on what you sell and what customers need to see before they call or visit.",
      },
      {
        title: "Connect activity to enquiries",
        detail:
          "Align social content, paid campaigns and the website around a clear next step. Review calls, messages and form submissions alongside reach so activity has a useful business context.",
      },
    ],
    faqs: [
      {
        q: "Can local search and social media be planned together for Bilaspur?",
        a: "Yes. We can review your business information, website and social content together, then agree which updates or campaigns fit your goals and verified service details.",
      },
      {
        q: "Do you guarantee a top Google position in Bilaspur?",
        a: "No. Search rankings depend on competition, relevance, prominence and other factors outside any agency's control. We focus on accurate information, useful pages and measurable work without promising a position.",
      },
    ],
  },
  {
    slug: "ambikapur",
    city: "Ambikapur",
    description:
      "Digital marketing agency services for Ambikapur businesses, with content, advertising, website and branding support from FreeKit Media.",
    intro:
      "For an Ambikapur business, the useful starting point is not simply to post more. First decide which customers you can serve, what they need to understand, and how an interested person should contact you. We build the content and campaign plan around those answers.",
    focus: [
      {
        title: "Define the real service area",
        detail:
          "Set campaign locations from the places your business genuinely serves. Clear coverage helps avoid wasted enquiries and keeps local promises aligned with your operations.",
      },
      {
        title: "Explain the offer before the first call",
        detail:
          "Use your website and social channels to make services, process and next steps easy to understand. We shape the content around the questions your customers actually ask, using details you provide.",
      },
      {
        title: "Make enquiries easy to follow up",
        detail:
          "Choose a practical route for leads—call, WhatsApp or form—and connect it to the relevant page or campaign. Review enquiry quality and follow-up, not just impressions.",
      },
    ],
    faqs: [
      {
        q: "Can campaigns for Ambikapur be limited to the areas we serve?",
        a: "Yes. Geographic targeting can be planned around your confirmed delivery or service area. We would not recommend advertising locations your business cannot serve.",
      },
      {
        q: "Do you guarantee a top Google position in Ambikapur?",
        a: "No. No agency can guarantee a particular organic ranking. We can improve the quality and relevance of your pages and business information, then measure what changes.",
      },
    ],
  },
  {
    slug: "raipur",
    city: "Raipur",
    description:
      "Digital marketing for Raipur businesses: coordinated content, paid campaigns, websites and branding from FreeKit Media.",
    intro:
      "Raipur businesses may have different audiences, locations or service lines to communicate. We help turn those into a manageable digital plan, with each page and campaign reflecting the offer and coverage you can actually support.",
    focus: [
      {
        title: "Separate audiences when the offer differs",
        detail:
          "If your business serves distinct customer groups or has multiple locations, organise the messaging so each audience sees relevant information instead of one broad, generic campaign.",
      },
      {
        title: "Match each campaign to a useful page",
        detail:
          "Give paid activity a clear destination: a service page, location detail or focused landing page that explains the offer and makes the next step obvious.",
      },
      {
        title: "Measure more than reach",
        detail:
          "Agree what counts as a meaningful enquiry, then review calls, messages or form submissions against campaign activity. Use the results to decide what to keep, adjust or stop.",
      },
    ],
    faqs: [
      {
        q: "Can marketing be planned for more than one Raipur location or service?",
        a: "Yes, where your business has distinct locations or services. We can separate the information and campaign structure based on the real coverage and details you confirm.",
      },
      {
        q: "Do you guarantee a top Google position in Raipur?",
        a: "No. Rankings cannot be guaranteed because they depend on many factors, including competitors and search systems. Our work focuses on accurate, useful content and sustainable improvements.",
      },
    ],
  },
];
