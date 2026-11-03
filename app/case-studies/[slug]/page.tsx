import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { DocPage, DocFallback } from "@/components/blocks/DocPage";
import { JsonLd, articleJsonLd, breadcrumbJsonLd, openGraph } from "@/lib/seo";
import { repo } from "@/lib/content";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return repo.caseStudies.list().map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/case-studies/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const entry = repo.caseStudies.bySlug(slug);
  if (!entry) return {};
  return {
    title: entry.title,
    description: entry.summary,
    alternates: { canonical: `/case-studies/${entry.slug}` },
    openGraph: openGraph({
      title: entry.title,
      description: entry.summary,
      path: `/case-studies/${entry.slug}`,
      image: `/og/case-studies/${entry.slug}.png`,
    }),
  };
}

export default function CaseStudyPage(
  props: PageProps<"/case-studies/[slug]">,
) {
  return (
    <Suspense fallback={<DocFallback />}>
      <Content slugPromise={props.params} />
    </Suspense>
  );
}

async function Content({ slugPromise }: { slugPromise: Promise<Params> }) {
  const { slug } = await slugPromise;
  const entry = repo.caseStudies.bySlug(slug);
  if (!entry) notFound();
  return (
    <>
      <DocPage
        entry={{
          eyebrow: `Case study — ${entry.industry}`,
          title: entry.title,
          intro: entry.summary,
          chips: [entry.industry, entry.city, ...entry.servicesUsed],
          blocks: entry.blocks,
        }}
        backHref="/#proof"
        backLabel="Browse all case studies"
      />
      <JsonLd
        data={articleJsonLd({
          title: entry.title,
          description: entry.summary,
          slug: `/case-studies/${entry.slug}`,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
          { name: entry.title, path: `/case-studies/${entry.slug}` },
        ])}
      />
    </>
  );
}
