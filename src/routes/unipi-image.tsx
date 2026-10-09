import { createFileRoute } from "@tanstack/react-router";

const TARGET =
  "https://ammpio.sharepoint.com/:u:/s/team/IQBK8ZMlNAj_RKPk9yAx5TFjAUjJFHcw4GgyVygMXr0OKlg?e=U6sfZ0&download=1";

export const Route = createFileRoute("/unipi-image")({
  staticData: { sitemap: false },
  server: {
    handlers: {
      GET: async () => new Response(null, { status: 301, headers: { Location: TARGET } }),
    },
  },
});
