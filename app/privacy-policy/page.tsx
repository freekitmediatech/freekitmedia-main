import type { Metadata } from "next";

import { LegalDocument } from "@/components/legal/LegalDocument";
import { legalDocuments } from "@/content/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how FreeKit Media collects, uses, stores and protects personal information submitted through our contact and inquiry forms.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return <LegalDocument doc={legalDocuments.privacy} />;
}