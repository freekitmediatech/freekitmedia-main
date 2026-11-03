# FreeKit Media - Developer Guide

Project: premium digital marketing agency site for FreeKit Media (Chhattisgarh).
Stack: Next.js 16 App Router + React 19 + TypeScript + Tailwind CSS v4 + GSAP + Lenis + Howler.

## 1. Folder structure

```text
freekitmedia/
|-- app/                        # Next.js App Router
|   |-- layout.tsx              # Root layout: fonts, global metadata, providers
|   |-- page.tsx                # Home page
|   |-- globals.css             # Tailwind v4 import + design tokens
|   |-- not-found.tsx           # Custom 404
|   |-- error.tsx / global-error.tsx / template.tsx
|   |-- sitemap.ts / robots.ts / manifest.ts / opengraph-image.tsx
|   |-- llms.txt / llms-full.txt (route handlers)
|   |-- actions/contact.ts     # Server action for contact form
|   |-- blog/                   # Blog list + blog/[slug]
|   |-- case-studies/ + case-studies/[slug]/
|   |-- industries/ + industries/[slug]/
|   |-- locations/ + locations/[slug]/
|   |-- services/ + services/[slug]/
|   |-- contact/
|   `-- partners/ + partners/[slug]/   # Dynamic partner case studies
|-- components/
|   |-- blocks/                 # DocPage, DocFallback, BlockRenderer
|   |-- partners/               # PartnerCaseStudy + sections + PartnerReels
|   |-- providers/              # LenisProvider, SoundProvider, HashScrollBridge
|   |-- sections/               # Navbar, Hero, Footer, FinalCta, Proof, etc.
|   |-- services/               # ServiceDetail, ServiceFaq, ServiceVisuals
|   `-- ui/                     # Container, Button, Icon, Logo, Mark, SectionHeading
|-- content/                    # Static content collections (CMS-like source of truth)
|-- lib/                        # gsap, seo, use-reveal, utils, content, og-card, llms
|-- public/                     # images, og, sounds, videos
|-- scripts/                    # generate-og.mjs (OG image generation)
|-- next.config.ts, package.json, tsconfig.json, eslint.config.mjs
`-- docs/                       # This folder
```

## 2. Content layer

- `content/*.ts` holds typed arrays: blogPosts, caseStudies, industries, partners, services.
- `lib/content/index.ts` exposes `repo` with `list()` and `bySlug()` for each collection.
- `lib/content/types.ts` defines shared block types (heading, text, image, gallery, video, stats, list, quote, callout, cta).

## 3. API guide

- Next.js: `generateStaticParams`, `generateMetadata`, `notFound`, `PageProps<"/partners/[slug]">`.
- `lib/seo.tsx`: `JsonLd`, `breadcrumbJsonLd`, `openGraph`, `articleJsonLd`, `faqJsonLd`, `serviceJsonLd`.
- `lib/content`: `repo.partners.bySlug(slug)` for any collection.
- `lib/use-reveal.ts`: GSAP scroll reveal via `useReveal(ref)`.
- `lib/gsap.ts`: GSAP + ScrollTrigger setup.
- `lib/utils.ts`: `cn`, `whatsappLink`.

## 4. Post

- Blog: `content/blog.ts` + `app/blog` + `app/blog/[slug]`.

## 5. Tech stack

- next@16.4.2, react@19.3, typescript@5, tailwindcss@4 (@tailwindcss/turbopack), gsap@3, @gsap/react, lenis, howler, lucide-react, react-icons, bun@1.3.14.

## 6. Data flow

content files -> repo collections -> generateStaticParams / generateMetadata / page components -> components -> client motion (GSAP / Lenis).

## 7. How to target / add a partner

Add/update entry in `content/partners.ts`. Dynamic route `app/partners/[slug]` picks it up automatically via `repo.partners.list()` / `bySlug()`.