import type { Metadata } from "next";

import { LegalDocument } from "@/components/legal/LegalDocument";
import { legalDocuments } from "@/content/legal";

export const metadata: Metadata = {
  title: "Refund and Cancellation Policy",
  description:
    "Understand how FreeKit Media handles refunds and cancellations for project based marketing and creative services.",
  alternates: { canonical: "/refund-policy" },
};

export default function RefundPolicyPage() {
  return <LegalDocument doc={legalDocuments.refund} />;
}