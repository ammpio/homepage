// Locale ↔ URL rules. English lives at the root, Spanish under /es, Brazilian Portuguese under /pt.
// Pure module (no React, no data imports) so the router, sitemap, head tags and tests share one source.
import type { Language } from "./translations";

export const SITE_ORIGIN = "https://www.ammp.io";
export const LANGUAGES: Language[] = ["en", "es", "pt"];
export const LOCALIZED: Exclude<Language, "en">[] = ["es", "pt"];

/** BCP 47 tag for <html lang>, hreflang and og:locale. */
export const HTML_LANG: Record<Language, string> = { en: "en", es: "es", pt: "pt-BR" };
export const OG_LOCALE: Record<Language, string> = { en: "en_US", es: "es_ES", pt: "pt_BR" };

// Pages that stay English-only: legal text, redirects/downloads, beta/trial sign-up, machine endpoints.
const ENGLISH_ONLY_EXACT = new Set(["/privacy", "/terms", "/beta", "/trial", "/stratopi-image", "/unipi-image", "/support", "/sitemap.xml", "/llms-full.txt"]);
const ENGLISH_ONLY_PREFIX = ["/api/", "/lovable/", "/_serverFn", "/_server", "/__l5e", "/assets/"];

function clean(path: string): string {
  const p = path.replace(/\/+$/, "");
  return p === "" ? "/" : p;
}

/** Whether a (prefix-free) site path has Spanish and Portuguese versions. Blog posts are further gated by data. */
export function isLocalizablePath(path: string): boolean {
  const p = clean(path);
  if (ENGLISH_ONLY_EXACT.has(p)) return false;
  if (ENGLISH_ONLY_PREFIX.some((prefix) => p.startsWith(prefix))) return false;
  if (p === "/llms.txt") return true;
  // Raw docs markdown/JSON and other files stay English.
  if (/\.[a-z0-9]+$/i.test(p)) return false;
  return true;
}

/** Split a public pathname into its language and the internal (English) path. */
export function splitLocale(pathname: string): { lang: Language; path: string } {
  const m = /^\/(es|pt)(\/.*)?$/.exec(pathname);
  if (!m) return { lang: "en", path: pathname || "/" };
  const path = m[2] || "/";
  if (!isLocalizablePath(path)) return { lang: "en", path: pathname };
  return { lang: m[1] as Language, path };
}

/** Public path of an internal path in a language. English-only paths keep their English URL. */
export function localizePath(path: string, lang: Language): string {
  if (lang === "en" || !path.startsWith("/") || path.startsWith("//")) return path;
  const [pathname = "/", rest = ""] = splitOnce(path);
  if (/^\/(es|pt)(\/|$)/.test(pathname)) return path;
  if (!isLocalizablePath(pathname)) return path;
  return `/${lang}${pathname === "/" ? "" : pathname}${rest}`;
}

function splitOnce(path: string): [string, string] {
  const i = path.search(/[?#]/);
  return i === -1 ? [path, ""] : [path.slice(0, i), path.slice(i)];
}

export function absoluteUrl(path: string, lang: Language): string {
  const p = localizePath(clean(path), lang);
  return `${SITE_ORIGIN}${p === "/" ? "/" : p}`;
}
