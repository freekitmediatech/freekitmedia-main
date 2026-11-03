export type PartnerVideo =
  | { title: string; mediaType: "image"; url: string }
  | {
      title: string;
      mediaType?: "reel";
      reelUrl?: string;
      poster?: string;
    };

export const partnerVideos: Record<string, PartnerVideo[]> = {
  "royal-enfield": [
    { title: "One ride. One brotherhood." },
    { title: "World Motorcycle Day" },
    { title: "Ready for the next ride" },
    { title: "Ride your dream" },
  ],
  "next-world": [
    { title: "The sale is on" },
    { title: "Mega Freedom Sale" },
    {
      title: "Hello Summer, Hello Style",
      mediaType: "image",
      url: "https://ik.imagekit.io/freekitMedia/Freekit%20media%20Assets/rahul/nextworld/Hello%20Summer,%20Hello%20Style!%20%E2%98%80%EF%B8%8F_Is%20season%20apne%20wardrobe%20ko%20dijiye%20ek%20fresh%20upgrade%20with%20Nishant_s.jpg?updatedAt=1793189291211",
    },
  ],
  "vasundhara-builders": [
    { title: "Your dream home, made yours" },
    { title: "The right cement for a stronger home" },
    { title: "Plot or ready-to-move flat?" },
  ],
  "dr-sharma": [
    { title: "Smile design, life redesign" },
    { title: "Don't ignore a small dental problem" },
    { title: "The dentist's secret dance move" },
  ],
  suzuki: [
    { title: "Suzuki Access mileage contest" },
    { title: "Mega Freedom Sale" },
    { title: "Suzuki e-Access" },
  ],
  "mrm-hospital": [
    { title: "25+ years of care" },
    { title: "40 years of trusted healthcare" },
  ],
  urs: [{ title: "Start the conversation" }],
  srpr: [{ title: "Period pain needs the right care" }],
};
