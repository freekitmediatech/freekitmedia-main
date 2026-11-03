"use client";

import Link from "next/link";
import { useRef } from "react";

import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { FinalCta } from "@/components/sections/FinalCta";
import { PartnerDeliverables } from "@/components/partners/PartnerDeliverables";
import { PartnerGallery } from "@/components/partners/PartnerGallery";
import { PartnerHero } from "@/components/partners/PartnerHero";
import { PartnerMetrics } from "@/components/partners/PartnerMetrics";
import { PartnerNarrative } from "@/components/partners/PartnerNarrative";
import { PartnerRelated } from "@/components/partners/PartnerRelated";
import { PartnerStrategy } from "@/components/partners/PartnerStrategy";
import { useReveal } from "@/lib/use-reveal";
import type { Partner } from "@/content/partners";

export function PartnerCaseStudy({ partner }: { partner: Partner }) {
  const ref = useRef<HTMLDivElement>(null);
  useReveal(ref);

  const hasDeliverables = Boolean(partner.deliverables && partner.deliverables.length > 0);
  const hasStrategy = Boolean(partner.strategy && partner.strategy.length > 0);
  const hasMetrics = Boolean(partner.metrics && partner.metrics.length > 0);

  return (
    <>
      <PartnerHero partner={partner} />
      <PartnerNarrative partner={partner} />
      {hasDeliverables ? <PartnerDeliverables partner={partner} /> : null}
      <PartnerGallery partner={partner} />
      {hasStrategy ? <PartnerStrategy partner={partner} /> : null}
      {hasMetrics ? <PartnerMetrics partner={partner} /> : null}
      <PartnerRelated partner={partner} />
      <div className="bg-paper pb-16 sm:pb-24">
        <Container>
          <Link
            href="/partners"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-brand-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-deep"
          >
            <Icon name="chevronRight" className="size-4 rotate-180" />
            All partners
            <span className="sr-only">: back to all partners</span>
          </Link>
        </Container>
      </div>
      <FinalCta />
    </>
  );
}