import { createFileRoute } from "@tanstack/react-router";

// Old booth URL; permanent redirect keeps query strings (UTM tags).
export const Route = createFileRoute("/ray-partners")({
  staticData: { sitemap: false },
  server: {
    handlers: {
      GET: async ({ request }) =>
        new Response(null, { status: 301, headers: { Location: "/ssd26-partners" + new URL(request.url).search } }),
    },
  },
});
