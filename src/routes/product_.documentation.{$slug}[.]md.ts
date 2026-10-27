import { createFileRoute } from "@tanstack/react-router";

// Raw markdown of a docs page, for AI tools and Ray. Drafts and unknown pages return 404.
export const Route = createFileRoute("/product_/documentation/{$slug}.md")({
  staticData: { sitemap: false },
  server: {
    handlers: {
      GET: async ({ params }) => {
        const { getDoc } = await import("@/lib/docs.server");
        const doc = getDoc(params.slug);
        if (!doc) return new Response("Not found", { status: 404, headers: { "Content-Type": "text/plain; charset=utf-8" } });
        return new Response(doc.raw, {
          headers: { "Content-Type": "text/markdown; charset=utf-8", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
