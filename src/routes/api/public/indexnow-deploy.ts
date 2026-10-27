import { createFileRoute } from "@tanstack/react-router";
import { sitemapUrls, submitToIndexNow } from "@/lib/indexnow";

// Called by Netlify's "Deploy succeeded" outgoing webhook: ?token=<INDEXNOW_DEPLOY_TOKEN>. Submits every sitemap URL.
export const Route = createFileRoute("/api/public/indexnow-deploy")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const expected = process.env.INDEXNOW_DEPLOY_TOKEN;
        const token = new URL(request.url).searchParams.get("token");
        if (!expected || !token || token !== expected) return new Response("Unauthorized", { status: 401 });
        const body = await request.json().catch(() => ({}) as Record<string, unknown>);
        if (body && typeof body === "object" && "context" in body && body.context !== "production") {
          return Response.json({ skipped: "not production" });
        }
        return Response.json(await submitToIndexNow(await sitemapUrls()));
      },
    },
  },
});
