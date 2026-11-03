import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { DocPage, DocFallback } from "@/components/blocks/DocPage";
import { JsonLd, articleJsonLd, breadcrumbJsonLd, openGraph } from "@/lib/seo";
import { repo } from "@/lib/content";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return repo.blog.list().map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const entry = repo.blog.bySlug(slug);
  if (!entry) return {};
  return {
    title: entry.title,
    description: entry.excerpt,
    alternates: { canonical: `/blog/${entry.slug}` },
    openGraph: openGraph({
      title: entry.title,
      description: entry.excerpt,
      path: `/blog/${entry.slug}`,
      image: `/og/blog/${entry.slug}.png`,
    }),
  };
}

export default function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  return (
    <Suspense fallback={<DocFallback />}>
      <Content slugPromise={props.params} />
    </Suspense>
  );
}

async function Content({ slugPromise }: { slugPromise: Promise<Params> }) {
  const { slug } = await slugPromise;
  const entry = repo.blog.bySlug(slug);
  if (!entry) notFound();
  return (
    <>
      <DocPage
        entry={{
          eyebrow: `Blog — ${entry.minutes} min read`,
          title: entry.title,
          intro: entry.excerpt,
          chips: [`Updated: ${entry.updated}`],
          blocks: entry.blocks,
        }}
        backHref="/blog"
        backLabel="Browse all articles"
      />
      <JsonLd
        data={articleJsonLd({
          title: entry.title,
          description: entry.excerpt,
          slug: `/blog/${entry.slug}`,
          dateModified: entry.updated,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: entry.title, path: `/blog/${entry.slug}` },
        ])}
      />
    </>
  );
}
