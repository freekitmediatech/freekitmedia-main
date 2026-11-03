import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { locationPages } from "@/content/locations";
import { repo } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;

  return [
    { url: base, priority: 1 },
    { url: `${base}/contact`, priority: 0.9 },
    { url: `${base}/blog`, priority: 0.6 },
    { url: `${base}/services`, priority: 0.8 },
    { url: `${base}/partners`, priority: 0.6 },
    { url: `${base}/industries`, priority: 0.6 },
    { url: `${base}/case-studies`, priority: 0.7 },
    { url: `${base}/locations`, priority: 0.8 },
    ...repo.services.list().map((entry) => ({
      url: `${base}/services/${entry.slug}`,
      priority: 0.8,
    })),
    ...repo.partners.list().map((entry) => ({
      url: `${base}/partners/${entry.slug}`,
      priority: 0.6,
    })),
    ...repo.industries.list().map((entry) => ({
      url: `${base}/industries/${entry.slug}`,
      priority: 0.6,
    })),
    ...repo.caseStudies.list().map((entry) => ({
      url: `${base}/case-studies/${entry.slug}`,
      priority: 0.7,
    })),
    ...repo.blog.list().map((entry) => ({
      url: `${base}/blog/${entry.slug}`,
      priority: 0.5,
    })),
    ...locationPages.map((location) => ({
      url: `${base}/locations/${location.slug}`,
      priority: 0.8,
    })),
  ];
}
