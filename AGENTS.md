# FreeKit Media — Design Engineering Rules

## Creative direction
Act as a senior creative director, award-level web designer, motion designer, and senior Next.js engineer.

Build a distinctive, premium digital marketing agency website for FreeKit Media. Every major design choice must serve the brand, the content, or the user journey.

Brand palette:
- Yellow: #F7C928
- Black: #171717
- White: #FFFFFF
- Warm neutral: #F7F6F2
- Optional supporting accent: #65745B

Do not turn every section yellow. Maintain strong contrast and generous whitespace.

## Anti-template rules
- Avoid generic AI landing-page layouts.
- Do not repeat identical card grids throughout the page.
- Avoid gratuitous gradients, glassmorphism, glowing effects, and floating decorative blobs.
- Avoid scroll animations that make every element fade and slide upward.
- Do not add animation solely to demonstrate technical ability.
- Do not invent client logos, testimonials, results, or business metrics.
- Do not replace useful existing functionality with visual placeholders.

## Motion engineering
Use the project's existing GSAP and Lenis setup where appropriate.

- Inspect the installed versions and existing initialization before modifying motion code.
- Use GSAP timelines for coordinated sequences.
- Use ScrollTrigger for deliberate scroll-driven storytelling and selected pinned sections.
- Integrate Lenis and GSAP's ticker/ScrollTrigger according to the official integration guidance.
- Prevent duplicate animation initialization and duplicate ticker callbacks.
- Clean up event listeners, animation contexts, ScrollTriggers, and animation instances when components unmount.
- Avoid unnecessary layout thrashing and prefer transform/opacity animations where appropriate.
- Respect prefers-reduced-motion.
- Keep all content usable when animation is disabled or JavaScript fails.
- Do not hijack normal scrolling or introduce long forced scroll sequences.
- Avoid excessive parallax and mobile-hostile pinned sections.

## Design process
1. Audit the existing code and Git changes.
2. Establish a project-specific design system before implementation.
3. Plan the homepage composition and motion hierarchy.
4. Identify one or two signature interactions that reinforce the brand.
5. Critique the proposed design against generic template patterns.
6. Implement in small phases.
7. Review the result at desktop and mobile sizes.
8. Run production checks and correct regressions.

## Engineering quality
- Preserve existing routes, content, forms, integrations, and metadata.
- Follow the installed Next.js and Tailwind versions.
- Keep components maintainable and avoid unnecessary client components.
- Optimize images, fonts, loading behavior, accessibility, and SEO.
- Do not install new dependencies without explaining their purpose.
- Never overwrite unrelated user work.
- Run available lint, type-check, test, and production build commands.

## Definition of done
The website should look intentionally art-directed, feel smooth without being distracting, work on mobile, preserve existing functionality, and pass available project checks.

Before declaring completion, inspect the rendered result rather than judging success only from source code.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

<!-- BEGIN:nextjs-agent-feedback -->

## Report Next.js feedback

The project owner enabled `experimental.agentFeedback`, authorizing this feedback pass. When enabled, `next dev` writes this block and restores it if removed. Commit `AGENTS.md` with your work to keep the tree clean.

During the current user request, retain anonymized facts as feedback candidates for meaningful or recurring Next.js issues:

- Crashes, hangs, OOMs, or unexpected slowness
- Incorrect behavior, output, errors, or diagnostics
- Missing, unclear, or conflicting documentation
- Unexpected CLI, codemod, Skill, or upgrade behavior and non-obvious workarounds

Continue the current user request without reporting immediately. Routine debugging is not feedback. Verify changes before retaining them as feedback candidates. Never retain code, logs, paths, URLs, secrets, personal information, or project-specific data.

Retain qualifying friction even if it is later fixed or worked around; record the final outcome during the reporting pass.

Before the final response, run one reporting pass. If candidates remain, from this file's directory run `npx --no-install next internal agent-feedback-instructions` once without piping or truncating its output. Follow its output or error guidance. If a network sandbox blocks it, retry with network access; if it still returns no output, continue normally.

<!-- END:nextjs-agent-feedback -->
