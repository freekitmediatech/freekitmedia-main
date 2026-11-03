import type { MetadataRoute } from "next";
import { site } from "@/content/site";

// Crawlers used by AI/LLM agents. Explicitly allowed so the site's public
// pages (and llms.txt / llms-full.txt) stay accessible to every major agent.
const aiAgents = [
  "GPTBot", // OpenAI
  "OAI-SearchBot", // OpenAI search
  "ChatGPT-User",
  "ClaudeBot", // Anthropic
  "Claude-User",
  "Claude-SearchBot",
  "PerplexityBot", // Perplexity
  "Perplexity-User",
  "Google-Extended", // Gemini training/grounding
  "Applebot-Extended",
  "CCBot", // Common Crawl
  "Bytespider", // ByteDance
  "Amazonbot", // Alexa / Nova
  "Meta-ExternalAgent", // Meta AI
  "Diffbot",
  "YouBot",
  "cohere-ai",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...aiAgents.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
