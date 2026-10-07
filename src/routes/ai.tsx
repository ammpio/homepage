import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/ai")({
  staticData: { sitemap: false },
  beforeLoad: () => {
    throw redirect({ to: "/ray", statusCode: 301 });
  },
});
