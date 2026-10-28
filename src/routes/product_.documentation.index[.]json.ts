import { createFileRoute } from "@tanstack/react-router";

// Docs index as JSON, used by client-side navigation. Served by the same deployment as the pages.
export const Route = createFileRoute("/product_/documentation/index.json")({
  staticData: { sitemap: false },
  server: {
    handlers: {
      GET: async () => {
        const { docsIndexData } = await import("@/lib/docs.server");
        return Response.json(docsIndexData(), { headers: { "Cache-Control": "public, max-age=0, must-revalidate" } });
      },
    },
  },
});
