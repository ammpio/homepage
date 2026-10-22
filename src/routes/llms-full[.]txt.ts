import { createFileRoute } from "@tanstack/react-router";
import { llmsTxt } from "@/data/ammp-facts";
import { FAQ_GROUPS } from "@/data/faq";

function llmsFullTxt(): string {
  const faq = FAQ_GROUPS.map(
    (g) => `### ${g.eyebrow}\n\n${g.items.map((i) => `**${i.q}**\n${i.a}`).join("\n\n")}`,
  ).join("\n\n");
  return `${llmsTxt()}\n## Frequently asked questions\n\n${faq}\n`;
}

export const Route = createFileRoute("/llms-full.txt")({
  staticData: { sitemap: false },
  server: {
    handlers: {
      GET: async () =>
        new Response(llmsFullTxt(), {
          headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
        }),
    },
  },
});
