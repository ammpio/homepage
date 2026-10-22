import { createFileRoute } from "@tanstack/react-router";
import { llmsTxt } from "@/data/ammp-facts";

export const Route = createFileRoute("/llms.txt")({
  staticData: { sitemap: false },
  server: {
    handlers: {
      GET: async () =>
        new Response(llmsTxt(), {
          headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
        }),
    },
  },
});
