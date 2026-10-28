import { createFileRoute } from "@tanstack/react-router";
import { llmsTxt } from "@/data/ammp-facts";
import { blogLlmsSection } from "@/lib/blog-llms";

export const Route = createFileRoute("/llms.txt")({
  staticData: { sitemap: false },
  server: {
    handlers: {
      GET: async () => {
        const { docsLlmsSection } = await import("@/lib/docs-llms");
        const docsSection = docsLlmsSection(false);
        return new Response(llmsTxt(Boolean(docsSection)) + blogLlmsSection() + docsSection, {
          headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
