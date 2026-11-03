import { createFileRoute } from "@tanstack/react-router";
import { llmsTxt, SITE } from "@/data/ammp-facts";
import { blogLlmsSection } from "@/lib/blog-llms";
import { localizedLlmsTxt } from "@/lib/llms-localized";
import { splitLocale } from "@/i18n/locale";

const headers = { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" };

export const Route = createFileRoute("/llms.txt")({
  staticData: { sitemap: false },
  server: {
    handlers: {
      // Also serves /es/llms.txt and /pt/llms.txt (the router strips the language prefix).
      GET: async ({ request }) => {
        const { docsLlmsSection } = await import("@/lib/docs-llms");
        const docsSection = docsLlmsSection(false);
        const { lang } = splitLocale(new URL(request.url).pathname);
        if (lang !== "en") return new Response(localizedLlmsTxt(lang, Boolean(docsSection)), { headers });
        const others = `\n## Other languages\n- [Español](${SITE}/es/llms.txt)\n- [Português (Brasil)](${SITE}/pt/llms.txt)\n`;
        return new Response(llmsTxt(Boolean(docsSection)) + blogLlmsSection() + docsSection + others, { headers });
      },
    },
  },
});
