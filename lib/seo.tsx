import { site } from "@/content/site";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      className="schemadoc"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function absoluteUrl(path: string) {
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function breadcrumbJsonLd(entries: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: entries.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.name,
      item: absoluteUrl(entry.path),
    })),
  };
}

export function faqJsonLd(faqs: readonly { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

export function articleJsonLd(input: {
  title: string;
  description: string;
  slug: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    url: absoluteUrl(input.slug),
    inLanguage: "en-IN",
    author: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    ...(input.datePublished
      ? { datePublished: input.datePublished }
      : {}),
    ...(input.dateModified ? { dateModified: input.dateModified } : {}),
  };
}

export function serviceJsonLd(input: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    serviceType: input.name,
    provider: {
      "@type": "ProfessionalService",
      name: site.name,
      url: site.url,
      telephone: site.phone.primary.number,
      email: site.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: site.cities[0],
        addressRegion: "Chhattisgarh",
        addressCountry: "IN",
      },
      areaServed: site.cities.map((city) => ({ "@type": "City", name: city })),
    },
    areaServed: site.cities.map((city) => ({ "@type": "City", name: city })),
  };
}

export function openGraph(input: {
  title: string;
  description: string;
  path: string;
  image?: string;
}) {
  return {
    title: input.title,
    description: input.description,
    url: absoluteUrl(input.path),
    siteName: site.name,
    type: "website" as const,
    locale: "en_IN" as const,
    ...(input.image
      ? { images: [{ url: input.image, width: 1200, height: 630 }] }
      : {}),
  };
}
