// Translate a route's head() output (title, description, Open Graph, JSON-LD) for /es and /pt pages.
import type { Language } from "./translations";
import { translateText } from "./translate";
import { HTML_LANG, SITE_ORIGIN, localizePath } from "./locale";

type Meta = Record<string, unknown>;
interface Head {
  meta?: Meta[];
  links?: Array<Record<string, unknown>>;
  scripts?: Array<Record<string, unknown>>;
  [k: string]: unknown;
}

const TEXT_META = new Set(["description", "og:title", "og:description", "twitter:title", "twitter:description", "og:image:alt", "twitter:image:alt", "keywords"]);
const URL_KEYS = new Set(["url", "@id", "item", "mainEntityOfPage"]);
const SKIP_KEYS = new Set(["@context", "@type", "image", "logo", "sameAs", "email", "datePublished", "dateModified", "contentUrl", "thumbnailUrl", "embedUrl", "priceCurrency", "applicationCategory", "operatingSystem"]);

/** Translated text, also for longer strings that split into separately translated sentences. */
export function translateLong(lang: Language, value: string): string {
  const whole = translateText(lang, value);
  if (whole !== value) return whole;
  // Titles like "Pricing — flexible plans | AMMP": translate the parts around separators.
  const parts = value.split(/(\s[|—–-]\s)/);
  if (parts.length > 1) {
    const out = parts.map((p, i) => (i % 2 ? p : translateText(lang, p))).join("");
    if (out !== value) return out;
  }
  return value;
}

export function localizeUrl(value: string, lang: Language): string {
  if (!value.startsWith(SITE_ORIGIN)) return value;
  const rest = value.slice(SITE_ORIGIN.length) || "/";
  const hashAt = rest.indexOf("#");
  const path = hashAt === -1 ? rest : rest.slice(0, hashAt);
  const hash = hashAt === -1 ? "" : rest.slice(hashAt);
  if (path === "/" && hash) return value; // keep shared "#organization" ids stable
  const localized = localizePath(path, lang);
  return `${SITE_ORIGIN}${localized}${hash}`;
}

export function localizeJsonLd(value: unknown, lang: Language, key = ""): unknown {
  if (typeof value === "string") {
    if (SKIP_KEYS.has(key)) return value;
    if (URL_KEYS.has(key)) return localizeUrl(value, lang);
    if (key === "inLanguage") return HTML_LANG[lang];
    return translateLong(lang, value);
  }
  if (Array.isArray(value)) return value.map((v) => localizeJsonLd(v, lang, key));
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value)) out[k] = localizeJsonLd(v, lang, k);
    if (("@type" in out) && (out["@type"] === "WebPage" || out["@type"] === "Article" || out["@type"] === "BlogPosting" || out["@type"] === "FAQPage")) out["inLanguage"] = HTML_LANG[lang];
    return out;
  }
  return value;
}

export function localizeHead<T extends Head | undefined>(head: T, lang: Language): T {
  if (!head || lang === "en") return head;
  const meta = head.meta?.map((m) => {
    if (typeof m["title"] === "string") return { ...m, title: translateLong(lang, m["title"] as string) };
    const key = (m["name"] ?? m["property"]) as string | undefined;
    if (key && typeof m["content"] === "string") {
      if (TEXT_META.has(key)) return { ...m, content: translateLong(lang, m["content"] as string) };
      if (key === "og:url") return { ...m, content: localizeUrl(m["content"] as string, lang) };
    }
    return m;
  });
  const scripts = head.scripts?.map((s) => {
    if (s["type"] !== "application/ld+json" || typeof s["children"] !== "string") return s;
    try {
      return { ...s, children: JSON.stringify(localizeJsonLd(JSON.parse(s["children"] as string), lang)) };
    } catch {
      return s;
    }
  });
  const links = head.links?.map((l) => (typeof l["href"] === "string" && (l["rel"] === "canonical") ? { ...l, href: localizeUrl(l["href"] as string, lang) } : l));
  return { ...head, ...(meta ? { meta } : {}), ...(scripts ? { scripts } : {}), ...(links ? { links } : {}) } as T;
}
