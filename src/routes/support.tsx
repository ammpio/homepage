import { createFileRoute } from "@tanstack/react-router";

const TARGET = "https://ammpio.atlassian.net/servicedesk/customer/portals";

export const Route = createFileRoute("/support")({
  staticData: { sitemap: false },
  server: {
    handlers: {
      GET: async () => new Response(null, { status: 301, headers: { Location: TARGET } }),
    },
  },
});
