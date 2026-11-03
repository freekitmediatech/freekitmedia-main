import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import React from "react";

const require = createRequire(import.meta.url);
const { ImageResponse } = require("next/og");
const { ogCard, OG_SIZE } = require("../lib/og-card.js");

const { servicePages } = await import("../content/service-pages.ts");
const { partners } = await import("../content/partners.ts");
const { blogPosts } = await import("../content/blog.ts");
const { caseStudies } = await import("../content/case-studies.ts");
const { industries } = await import("../content/industries.ts");

const dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(dirname, "..");

const groups = [
  {
    folder: "services",
    cards: servicePages.map((p) => ({
      slug: p.slug,
      title: p.title,
      subtitle: p.sub,
    })),
  },
  {
    folder: "partners",
    cards: partners.map((p) => ({
      slug: p.slug,
      title: p.name,
      subtitle: `${p.industry} — ${p.city}. ${p.oneLine}`,
    })),
  },
  {
    folder: "industries",
    cards: industries.map((i) => ({
      slug: i.slug,
      title: `${i.name} — digital marketing`,
      subtitle: i.problemLine,
    })),
  },
  {
    folder: "case-studies",
    cards: caseStudies.map((c) => ({
      slug: c.slug,
      title: c.title,
      subtitle: `${c.industry} — ${c.city}. ${c.summary}`,
    })),
  },
  {
    folder: "blog",
    cards: blogPosts.map((b) => ({
      slug: b.slug,
      title: b.title,
      subtitle: b.excerpt,
    })),
  },
];

let count = 0;
for (const group of groups) {
  const dir = path.join(root, "public", "og", group.folder);
  await mkdir(dir, { recursive: true });
  for (const card of group.cards) {
    const res = new ImageResponse(ogCard(React, card), OG_SIZE);
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(path.join(dir, `${card.slug}.png`), buf);
    count += 1;
  }
}
console.log(`generate-og: wrote ${count} OG images to public/og/`);
