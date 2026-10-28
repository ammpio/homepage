import { createFileRoute } from "@tanstack/react-router";

// One rendered docs page as JSON, used by client-side navigation. Drafts and unknown pages return 404.
export const Route = createFileRoute("/product_/documentation/{$slug}.json")({
  staticData: { sitemap: false },
  server: {
    handlers: {
      GET: async ({ params }) => {
        const { docPageData } = await import("@/lib/docs.server");
        const data = docPageData(params.slug);
        if (!data) return Response.json({ error: "Not found" }, { status: 404 });
        return Response.json(data, { headers: { "Cache-Control": "public, max-age=0, must-revalidate" } });
      },
    },
  },
});
