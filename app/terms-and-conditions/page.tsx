import type { Metadata } from "next";

import { LegalDocument } from "@/components/legal/LegalDocument";
import { legalDocuments } from "@/content/legal";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Read the Terms and Conditions that govern the use of the FreeKit Media website and the digital marketing and creative services offered through it.",
  alternates: { canonical: "/terms-and-conditions" },
};

export default function TermsAndConditionsPage() {
  return <LegalDocument doc={legalDocuments.terms} />;
}