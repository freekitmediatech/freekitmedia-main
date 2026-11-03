import { site } from "@/content/site";
import { faqs } from "@/content/page-sections";
import { servicePages } from "@/content/service-pages";
import { repo } from "@/lib/content";

function overview() {
  return [
    `# ${site.name}`,
    "",
    `> ${site.tagline}`,
    "",
    "## Why this site exists",
    "",
    `${site.name} is a full-service digital marketing agency in Chhattisgarh, India. The site documents what the agency does, who it has worked with, and how businesses in Bilaspur, Ambikapur and Korba can hire it. It exists so customers searching locally — and AI agents summarising for them — can find exactly what the agency offers, at what price and process, and how to contact it.`,
    "",
    "## Contact",
    "",
    `- Website: ${site.url}`,
    `- Phone: ${site.phone.primary.display}`,
    `- Email: ${site.email}`,
    `- Instagram: ${site.instagram.url} (${site.instagram.handle})`,
    `- Cities served: ${site.cities.join(", ")} — Chhattisgarh, India`,
    "",
    "## Page index",
    "",
    `- [Home](${site.url}/): what the agency is, services, proof and FAQ`,
    `- [Services](${site.url}/services): all four service lines`,
    ...repo.services.list().map(
      (s) => `- [${s.title}](${site.url}/services/${s.slug}): ${s.short}`,
    ),
    `- [Partners](${site.url}/partners): brands we have worked with`,
    ...repo.partners.list().map(
      (p) => `- [${p.name}](${site.url}/partners/${p.slug}): ${p.industry} — ${p.city}`,
    ),
    `- [Industries](${site.url}/industries): marketing playbooks per industry`,
    ...repo.industries.list().map(
      (i) => `- [${i.name}](${site.url}/industries/${i.slug}): ${i.problemLine}`,
    ),
    `- [Case Studies](${site.url}/case-studies): real campaign stories`,
    ...repo.caseStudies.list().map(
      (c) => `- [${c.title}](${site.url}/case-studies/${c.slug}): ${c.industry} — ${c.city}`,
    ),
    `- [Blog](${site.url}/blog): practical marketing guides in Hinglish`,
    ...repo.blog.list().map(
      (b) => `- [${b.title}](${site.url}/blog/${b.slug}): ${b.minutes} min read`,
    ),
    `- [Contact](${site.url}/contact): request a free digital audit`,
  ].join("\n");
}

function faqBlock() {
  return [
    "## Frequently asked questions",
    "",
    ...faqs.flatMap((faq) => [`### ${faq.q}`, "", faq.a, ""]),
  ].join("\n");
}

function servicesFull() {
  return servicePages
    .map((page) =>
      [
        `## Service: ${page.title}`,
        "",
        page.sub,
        "",
        `Page: ${site.url}/services/${page.slug}`,
        "",
        "### What we deliver",
        "",
        ...page.deliverables.flatMap((d) => [
          `**${d.group}**`,
          "",
          ...d.items.map((item) => `- ${item}`),
          "",
        ]),
        "### Process",
        "",
        ...page.process.map(
          (step, i) => `${i + 1}. **${step.title}** — ${step.text}`,
        ),
        "",
        "### FAQs",
        "",
        ...page.faqs.flatMap((faq) => [`Q: ${faq.q}`, "", `A: ${faq.a}`, ""]),
      ].join("\n"),
    )
    .join("\n");
}

function otherSectionsFull() {
  const partners = repo.partners.list().map((p) =>
    [
      `## Partner: ${p.name}`,
      "",
      `- Industry: ${p.industry} — City: ${p.city}`,
      `- Page: ${site.url}/partners/${p.slug}`,
      "",
      p.oneLine,
      "",
      p.whatWeDid,
      "",
    ].join("\n"),
  );

  const industries = repo.industries.list().map((i) =>
    [
      `## Industry: ${i.name}`,
      "",
      `- Page: ${site.url}/industries/${i.slug}`,
      "",
      `The problem: ${i.problemLine}`,
      "",
      ...i.weDo.map((item) => `- ${item}`),
      "",
    ].join("\n"),
  );

  const caseStudies = repo.caseStudies.list().map((c) =>
    [
      `## Case study: ${c.title}`,
      "",
      `- Client label: ${c.clientLabel} — Industry: ${c.industry} — City: ${c.city}`,
      `- Services used: ${c.servicesUsed.join(", ")}`,
      `- Page: ${site.url}/case-studies/${c.slug}`,
      "",
      c.summary,
      "",
      ...c.blocks.flatMap((block) => {
        if (block.type === "text") return [block.text, ""];
        if (block.type === "heading") return [`### ${block.text}`, ""];
        if (block.type === "list") return [...block.items.map((item) => `- ${item}`), ""];
        if (block.type === "stats")
          return [
            ...block.items.map((item) => `- ${item.value} ${item.label}`),
            "",
          ];
        if (block.type === "callout")
          return [`**${block.title}** — ${block.text}`, ""];
        if (block.type === "quote") return [`> ${block.text}`, ""];
        return [];
      }),
    ].join("\n"),
  );

  const blog = repo.blog.list().map((b) =>
    [
      `## Article: ${b.title}`,
      "",
      `- Page: ${site.url}/blog/${b.slug}`,
      `- Reading time: ${b.minutes} minutes — Last updated: ${b.updated}`,
      "",
      b.excerpt,
      "",
      ...b.blocks.flatMap((block) => {
        if (block.type === "text") return [block.text, ""];
        if (block.type === "heading") return [`### ${block.text}`, ""];
        if (block.type === "list") return [...block.items.map((item) => `- ${item}`), ""];
        if (block.type === "callout")
          return [`**${block.title}** — ${block.text}`, ""];
        if (block.type === "quote") return [`> ${block.text}`, ""];
        if (block.type === "cta") return [`**${block.title}** — ${block.text}`, ""];
        return [];
      }),
    ].join("\n"),
  );

  return [
    servicesFull(),
    partners.join("\n"),
    industries.join("\n"),
    caseStudies.join("\n"),
    blog.join("\n"),
  ].join("\n");
}

export function llmsTxt() {
  return `${overview()}\n\n---\n\n${faqBlock()}# Full content\n\nFull page-by-page content is available at ${site.url}/llms-full.txt\n`;
}

export function llmsFullTxt() {
  return `${overview()}\n\n---\n\n${faqBlock()}\n\n---\n\n${otherSectionsFull()}`;
}
