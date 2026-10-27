import { createFileRoute } from "@tanstack/react-router";
import { authenticateCronRequest } from "@/integrations/supabase/cron-auth";
import { recentlyPublishedUrls, submitToIndexNow } from "@/lib/indexnow";

// Daily job: submits blog posts that went live in the last 26 hours.
export const Route = createFileRoute("/api/public/indexnow-scheduled")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const denied = await authenticateCronRequest(request);
        if (denied) return denied;
        return Response.json(await submitToIndexNow(recentlyPublishedUrls()));
      },
    },
  },
});
