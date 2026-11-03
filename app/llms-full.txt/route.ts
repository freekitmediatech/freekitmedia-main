import { llmsFullTxt } from "@/lib/llms";

export function GET() {
  return new Response(llmsFullTxt(), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
