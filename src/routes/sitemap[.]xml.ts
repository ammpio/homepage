import { createFileRoute } from "@tanstack/react-router";
import { getRouterInstance } from "@tanstack/react-start";
import { isSitemapRouteIncluded, sitemapPathForLocation, sitemapStaticPaths, sitemapXML, withLanguageVersions, type SitemapEntry } from "@/lib/sitemap";
import { availableLanguages } from "@/i18n/available";
import { HTML_LANG, localizePath } from "@/i18n/locale";
import type { Language } from "@/i18n/translations";
import { publishedPosts } from "@/data/blog-posts";

const BASE_URL = "https://www.ammp.io";

export const Route = createFileRoute("/sitemap.xml")({
  staticData: { sitemap: false },
  server: {
    handlers: {
      GET: async () => {
        const router = await getRouterInstance();
        const entries: SitemapEntry[] = sitemapStaticPaths(router).map((path) => ({ path }));
        const routeId = "/blog/$slug";
        if (isSitemapRouteIncluded(router.routesById[routeId])) {
          for (const post of publishedPosts()) {
            const location = router.buildLocation({ to: "/blog/$slug", params: { slug: post.slug }, search: () => ({}), hash: "" });
            const path = sitemapPathForLocation(router, location, routeId);
            if (path) entries.push({ path });
          }
        }
        const docsRouteId = "/product_/documentation/$slug";
        if (isSitemapRouteIncluded(router.routesById[docsRouteId])) {
          const { allDocs } = await import("@/lib/docs.server");
          if (allDocs().length) entries.push({ path: "/product/documentation" });
          for (const doc of allDocs()) {
            const location = router.buildLocation({ to: "/product/documentation/$slug", params: { slug: doc.slug }, search: () => ({}), hash: "" });
            const path = sitemapPathForLocation(router, location, docsRouteId);
            if (path) entries.push({ path, lastmod: doc.updated });
          }
        }
        if (entries.length === 0) {
          return new Response("No pages are included in this sitemap.", { status: 404, headers: { "Cache-Control": "no-store" } });
        }
        const localized = withLanguageVersions(
          entries,
          (path) => availableLanguages(path),
          (path, lang) => localizePath(path, lang as Language),
          (lang) => HTML_LANG[lang as Language],
        );
        return new Response(sitemapXML(BASE_URL, localized), {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
