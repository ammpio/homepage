import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteShell } from "../components/site/SiteShell";
import { LanguageProvider } from "../i18n/LanguageContext";
import { AutoTranslate } from "../i18n/AutoTranslate";
import { CloudflareAnalytics } from "../components/CloudflareAnalytics";
import { loadDocsIndex } from "../lib/docs-data";
import { LanguageSuggestion } from "../components/i18n/LanguageSuggestion";
import { HTML_LANG, OG_LOCALE, absoluteUrl } from "../i18n/locale";
import { availableLanguages } from "../i18n/available";
import type { I18nState } from "../router";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-medium text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: import("@tanstack/react-router").ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient; i18n: I18nState }>()({
  staticData: { sitemap: false },
  // A failed network call (e.g. during a dev reload or flaky connection) must not blank the whole site; hide the docs link instead.
  loader: async () => ({ hasDocumentation: await loadDocsIndex().then((d) => d.length > 0, () => false) }),
  staleTime: Infinity,
  head: ({ matches, match }) => {
    const last = matches[matches.length - 1];
    const path = (last?.pathname ?? "/").replace(/\/+$/, "") || "/";
    const lang = (match.context as { i18n?: I18nState }).i18n?.locale ?? "en";
    const canonical = absoluteUrl(path, lang);
    const languages = availableLanguages(path);
    const alternates = languages.length > 1
      ? [
          ...languages.map((l) => ({ rel: "alternate", hrefLang: HTML_LANG[l], href: absoluteUrl(path, l) })),
          { rel: "alternate", hrefLang: "x-default", href: absoluteUrl(path, "en") },
        ]
      : [];
    return {
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "AMMP Technologies" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: canonical },
      { property: "og:site_name", content: "AMMP" },
      { property: "og:locale", content: OG_LOCALE[lang] },
      ...languages.filter((l) => l !== lang).map((l) => ({ property: "og:locale:alternate", content: OG_LOCALE[l] })),
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" },
      { rel: "icon", type: "image/png", href: "/favicon.png?v=2" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "canonical", href: canonical },
      ...alternates,
    ],
    scripts: [{
      type: "text/javascript",
      children: `(function(w,d){ w._obert=w._obert||{}; if(w._obert.loaded)return; w._obert.loaded=1; w._obert.siteKey='ob_sGD83LF6mmcjqy1iL8jCkc-XeOswuzVW'; var s=d.createElement('script'); s.async=1; s.src='https://tracker.obert.io/tracker/v1/obert.js'; d.head.appendChild(s); })(window,document);`,
    }, {
      type: "text/javascript",
      src: "https://visitors.lemlist.com/api/visitors/tracking?k=%2BV8CgWU%2F4LjNyTt2rO6n14I%2BaxSz5l4oZ%2FZFZBIz8sA%3D&t=tea_Y2ogsEes9G3XyBaDk",
    }, {
      type: "application/ld+json",
      children: JSON.stringify([
        { "@context": "https://schema.org", "@type": "Organization", "@id": "https://www.ammp.io/#organization", name: "AMMP Technologies B.V.", url: "https://www.ammp.io", logo: "https://www.ammp.io/apple-touch-icon.png", sameAs: ["https://www.linkedin.com/company/ammptechnologies"], contactPoint: { "@type": "ContactPoint", contactType: "sales", email: "sales@ammp.io" } },
        { "@context": "https://schema.org", "@type": "WebSite", name: "AMMP", url: "https://www.ammp.io" },
      ]),
    }],
  };
  },
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const router = useRouter();
  const lang = (router.options.context as { i18n?: I18nState }).i18n?.locale ?? "en";
  return (
    <html lang={HTML_LANG[lang]}>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient, i18n } = Route.useRouteContext();
  const { hasDocumentation } = Route.useLoaderData();

  return (
    <LanguageProvider language={i18n.locale}>
      <QueryClientProvider client={queryClient}>
        <AutoTranslate />
        <LanguageSuggestion />
        <CloudflareAnalytics />
        <SiteShell hasDocumentation={hasDocumentation} />
      </QueryClientProvider>
    </LanguageProvider>
  );
}
