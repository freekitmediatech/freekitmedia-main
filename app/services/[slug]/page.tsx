import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { DocFallback } from "@/components/blocks/DocPage";
import { Footer } from "@/components/sections/Footer";
import { SubpageHeader } from "@/components/sections/SubpageHeader";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { servicePageBySlug } from "@/content/service-pages";
import { JsonLd, breadcrumbJsonLd, faqJsonLd, openGraph, serviceJsonLd } from "@/lib/seo";
import { repo } from "@/lib/content";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return repo.services.list().map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const page = servicePageBySlug(slug);
  if (!page) return {};
  const title = `${page.title} Services`;
  return {
    title,
    description: page.metaDescription,
    keywords: [page.title, "FreeKit Media service", page.tag],
    alternates: { canonical: `/services/${page.slug}` },
    openGraph: openGraph({
      title,
      description: page.metaDescription,
      path: `/services/${page.slug}`,
      image: `/og/services/${page.slug}.png`,
    }),
  };
}

export default function ServicePage(props: PageProps<"/services/[slug]">) {
  return (
    <Suspense fallback={<DocFallback />}>
      <Content slugPromise={props.params} />
    </Suspense>
  );
}

async function Content({ slugPromise }: { slugPromise: Promise<Params> }) {
  const { slug } = await slugPromise;
  const page = servicePageBySlug(slug);
  if (!page) notFound();
  return (
    <>
      <SubpageHeader />
      <ServiceDetail service={page} />
      <Footer />
      <JsonLd
        data={serviceJsonLd({
          name: page.title,
          description: page.metaDescription,
          path: `/services/${page.slug}`,
        })}
      />
      <JsonLd data={faqJsonLd(page.faqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: page.title, path: `/services/${page.slug}` },
        ])}
      />
    </>
  );
}
