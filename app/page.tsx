import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { PartnerMarquee } from "@/components/sections/PartnerMarquee";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServiceHoverPreview } from "@/components/sections/ServicesSection";

import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { PitchSection } from "@/components/sections/PitchSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { Cursor } from "@/components/sections/Cursor";
import { FloatingWhatsApp, StickyMobileBar } from "@/components/sections/ReachBars";
import { Footer } from "@/components/sections/Footer";
import { Testimonials } from "@/components/sections/Testimonials";
// import { SystemSection } from "@/components/sections/SystemSection";
import { faqs } from "@/content/page-sections";
import { JsonLd, faqJsonLd } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Chhattisgarh | Content, Ads & Branding",
  description:
    "FreeKit Media helps businesses in Bilaspur, Ambikapur, Raipur and across Chhattisgarh with content, Meta and Google ads, websites, social media and branding.",
  keywords: [
    "digital marketing agency Bilaspur",
    "digital marketing agency Ambikapur",
    "digital marketing agency Raipur",
    "digital marketing agency Chhattisgarh",
    "social media management Korba",
    "Instagram ads Ambikapur",
    "content creation agency",
  ],
  openGraph: {
    title: "Digital Marketing Agency in Chhattisgarh | FreeKit Media",
    description:
      "Content, ads, websites and branding for businesses in Bilaspur, Ambikapur, Raipur and across Chhattisgarh.",
    type: "website",
    locale: "en_IN",
  },
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <Navbar />
      <main id="main" className="flex-1 pb-16 lg:pb-0">
        <Hero />
        <PartnerMarquee />
        {/* <SystemSection /> */}
        <Testimonials />

        {/* <ProblemSection /> */}
         <ProcessSection />
        <ServiceHoverPreview />
        {/* <NoShortcuts /> */}
{/*        
        <ProofSection /> */}
        <ComparisonSection />
        <PitchSection />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
      <StickyMobileBar />
      <FloatingWhatsApp />
      <Cursor />
    </>
  );
}
