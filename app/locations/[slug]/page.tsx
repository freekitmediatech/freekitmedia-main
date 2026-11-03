import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/sections/Footer";
import { SubpageHeader } from "@/components/sections/SubpageHeader";
import { Container } from "@/components/ui/Container";
import { locationPages } from "@/content/locations";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  JsonLd,
  openGraph,
} from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return locationPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/locations/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const location = locationPages.find((entry) => entry.slug === slug);
  if (!location) return {};

  const title = `Digital Marketing Agency in ${location.city}`;
  return {
    title,
    description: location.description,
    alternates: { canonical: `/locations/${location.slug}` },
    openGraph: openGraph({
      title: `${title} | FreeKit Media`,
      description: location.description,
      path: `/locations/${location.slug}`,
      image: "/opengraph-image",
    }),
  };
}

export default async function LocationPage({
  params,
}: PageProps<"/locations/[slug]">) {
  const { slug } = await params;
  const location = locationPages.find((entry) => entry.slug === slug);
  if (!location) notFound();

  return (
    <>
      <SubpageHeader />
      <main id="main" className="flex-1">
        <section className="bg-ink py-16 text-paper sm:py-24">
          <Container>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Local digital marketing / Chhattisgarh
            </p>
            <h1 className="font-display mt-5 max-w-4xl text-h1 font-extrabold leading-[0.98] tracking-[-0.04em]">
              Digital marketing agency in {location.city}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper/65 sm:text-lg">
              {location.intro}
            </p>
          </Container>
        </section>

        <section className="py-14 sm:py-20">
          <Container className="max-w-5xl">
            <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-deep">
                  A practical local plan
                </p>
                <h2 className="font-display mt-4 text-3xl font-bold leading-tight tracking-[-0.04em] sm:text-4xl">
                  Start with what your customers need to know.
                </h2>
              </div>
              <div className="divide-y divide-ink/15 border-y border-ink/15">
                {location.focus.map((item, index) => (
                  <article key={item.title} className="py-6 sm:py-7">
                    <p className="font-mono text-xs text-brand-deep">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="font-display mt-3 text-xl font-bold tracking-tight sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-grey-600 sm:text-base">
                      {item.detail}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-[#F7F6F2] py-14 sm:py-20">
          <Container className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-deep">
              Questions / {location.city}
            </p>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
              Local marketing, clearly explained.
            </h2>
            <div className="mt-8 divide-y divide-ink/15 border-y border-ink/15">
              {location.faqs.map((faq) => (
                <details key={faq.q} className="group py-5">
                  <summary className="cursor-pointer list-none pr-6 font-semibold marker:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-deep">
                    {faq.q}
                  </summary>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-grey-600 sm:text-base">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-ink py-14 text-paper sm:py-20">
          <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                Work with FreeKit Media
              </p>
              <h2 className="font-display mt-3 max-w-2xl text-2xl font-bold tracking-[-0.03em] sm:text-3xl">
                Discuss a marketing plan for your {location.city} business.
              </h2>
            </div>
            <a
              href="/contact"
              className="inline-flex min-h-12 shrink-0 items-center justify-center bg-brand px-6 text-sm font-semibold text-ink transition-colors hover:bg-brand-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              Request a free audit
            </a>
          </Container>
        </section>
      </main>
      <Footer />
      <JsonLd data={faqJsonLd(location.faqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" },
          { name: location.city, path: `/locations/${location.slug}` },
        ])}
      />
    </>
  );
}
