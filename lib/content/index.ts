import { blogPosts, type BlogPost } from "@/content/blog";
import { caseStudies, type CaseStudy } from "@/content/case-studies";
import { industries, type Industry } from "@/content/industries";
import { partners, type Partner } from "@/content/partners";
import { services, type Service } from "@/content/services";

type Collection<T extends { slug: string }> = {
  label: string;
  basePath: string;
  list: () => T[];
  bySlug: (slug: string) => T | undefined;
};

function collection<T extends { slug: string }>(
  label: string,
  basePath: string,
  items: T[],
): Collection<T> {
  return {
    label,
    basePath,
    list: () => items,
    bySlug: (slug: string) => items.find((item) => item.slug === slug),
  };
}

export const repo = {
  services: collection<Service>("Services", "/services", services),
  partners: collection<Partner>("Partners", "/partners", partners),
  industries: collection<Industry>("Industries", "/industries", industries),
  caseStudies: collection<CaseStudy>(
    "Case Studies",
    "/case-studies",
    caseStudies,
  ),
  blog: collection<BlogPost>("Blog", "/blog", blogPosts),
};

export type CollectionKey = keyof typeof repo;
