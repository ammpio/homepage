import { QueryClient } from "@tanstack/react-query";
import { createRouter, type AnyRoute } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { isLocalizablePath, localizePath, splitLocale } from "./i18n/locale";
import { localizeHead } from "./i18n/head";
import type { Language } from "./i18n/translations";

export interface I18nState {
  locale: Language;
}

// Route heads are module singletons; wrap them once so titles, descriptions and JSON-LD follow the URL language.
let headsWrapped = false;
function wrapHeads(routes: Record<string, AnyRoute>) {
  if (headsWrapped) return;
  headsWrapped = true;
  for (const route of Object.values(routes)) {
    const original = route.options.head;
    if (!original || route.isRoot) continue;
    route.options.head = (ctx: Parameters<typeof original>[0]) => {
      const lang = (ctx.match?.context as { i18n?: I18nState } | undefined)?.i18n?.locale ?? "en";
      return localizeHead(original(ctx) as never, lang) as never;
    };
  }
}

export const getRouter = () => {
  const queryClient = new QueryClient();
  // One router per request on the server and one per page load in the browser, so this is safe per visitor.
  const i18n: I18nState = { locale: "en" };

  const router = createRouter({
    routeTree,
    context: { queryClient, i18n },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    rewrite: {
      // /es/pricing → /pricing (language remembered), English URLs unchanged.
      input: ({ url }) => {
        const { lang, path } = splitLocale(url.pathname);
        // English-only pages (privacy, terms…) keep the visitor's language for later navigation.
        if (lang !== "en" || isLocalizablePath(path)) i18n.locale = lang;
        if (lang === "en") return undefined;
        url.pathname = path;
        return url;
      },
      // Links and navigation stay in the visitor's language.
      output: ({ url }) => {
        if (i18n.locale === "en") return undefined;
        const localized = localizePath(url.pathname, i18n.locale);
        if (localized === url.pathname) return undefined;
        url.pathname = localized;
        return url;
      },
    },
  });

  wrapHeads(router.routesById as unknown as Record<string, AnyRoute>);
  return router;
};
