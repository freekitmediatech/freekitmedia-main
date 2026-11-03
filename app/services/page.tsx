import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/sections/Footer";
import { SubpageHeader } from "@/components/sections/SubpageHeader";
import { Container } from "@/components/ui/Container";
import { services } from "@/content/services";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Digital Marketing Services",
  description: `Explore content, advertising, website, social media and branding services from ${site.name}.`,
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <SubpageHeader />
      <main id="main" className="flex-1">
        <section className="bg-ink py-16 text-paper sm:py-24">
          <Container>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Services / One connected team
            </p>
            <h1 className="font-display mt-5 max-w-4xl text-h1 font-extrabold leading-[0.98] tracking-[-0.04em]">
              Digital marketing services, ek hi chhat ke neeche.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper/65 sm:text-lg">
              Har service alag. Har effort connected. Choose what your
              business needs, and we&apos;ll talk through the right scope.
            </p>
          </Container>
        </section>

        <section className="py-14 sm:py-20">
          <Container>
            <div className="border-t border-ink/15">
              {services.map((service, index) => (
                <article
                  key={service.slug}
                  className="grid gap-5 border-b border-ink/15 py-7 sm:py-9 lg:grid-cols-12 lg:items-start lg:gap-8"
                >
                  <p className="font-mono text-xs text-ink/45 lg:col-span-1">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div className="lg:col-span-7">
                    <h2 className="font-display text-2xl font-bold leading-tight tracking-[-0.03em] sm:text-3xl">
                      <Link
                        href={`/services/${service.slug}`}
                        className="transition-colors hover:text-brand-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-deep"
                      >
                        {service.title}
                      </Link>
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-grey-600 sm:text-base">
                      {service.description}
                    </p>
                  </div>
                  <ul className="space-y-2 text-sm text-grey-600 lg:col-span-4">
                    {service.points.slice(0, 3).map((point) => (
                      <li key={point} className="flex gap-2">
                        <span aria-hidden="true" className="text-brand-deep">
                          /
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <Link
              href="/contact"
              className="mt-10 inline-flex min-h-12 items-center bg-brand px-6 text-sm font-semibold text-ink transition-colors hover:bg-brand-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-deep"
            >
              {site.cta.audit}
            </Link>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
