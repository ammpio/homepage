import { createFileRoute } from "@tanstack/react-router";

const TARGET =
  "https://ammpio.sharepoint.com/:u:/s/team/IQB-xG-ZoZROS6Ml4KXK9ttvAR4aJ6hBdzc2B1kruAThsPQ?e=oX6vmK&download=1";

export const Route = createFileRoute("/stratopi-image")({
  staticData: { sitemap: false },
  server: {
    handlers: {
      GET: async () => new Response(null, { status: 301, headers: { Location: TARGET } }),
    },
  },
});
