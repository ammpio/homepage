// Text-to-text translation used on the server and the client.
// Exact-match dictionaries: English source text → Spanish/Portuguese.
import type { Language } from "./translations";
import { runtimeTranslations } from "./runtime-translations";
import { docsTranslations } from "./docs-translations";
import { loadSheddingTranslations } from "./loadshedding-translations";
import { blogBatch4Translations } from "./blog-batch4-translations";
import { epcTranslations } from "./epc-translations";
import { compareOmEpcTranslations } from "./compare-om-epc-translations";
import { productRuntimeTranslations } from "./product-runtime-translations";
import { localizedGapTranslations } from "./localized-gap-translations";

type Dict = Record<string, string>;
const sources: Array<Record<"es" | "pt", Dict>> = [
  docsTranslations,
  epcTranslations,
  compareOmEpcTranslations,
  loadSheddingTranslations,
  blogBatch4Translations,
  productRuntimeTranslations,
  runtimeTranslations,
  localizedGapTranslations,
];

const merged: Record<"es" | "pt", Map<string, string>> = { es: new Map(), pt: new Map() };
for (const lang of ["es", "pt"] as const) {
  for (let i = sources.length - 1; i >= 0; i--) {
    for (const [k, v] of Object.entries(sources[i]![lang] ?? {})) if (v) merged[lang].set(k, v);
  }
}

/** Translation for an exact (trimmed) source string, or undefined. */
export function lookup(lang: Language, content: string): string | undefined {
  if (lang === "en") return undefined;
  return merged[lang].get(content);
}

/** Translate a text value, preserving surrounding whitespace. Unknown text is returned unchanged. */
export function translateText(lang: Language, value: string): string {
  if (lang === "en") return value;
  const content = value.trim();
  if (!content) return value;
  const hit = merged[lang].get(content);
  if (hit === undefined) return value;
  const lead = value.match(/^\s*/)?.[0] ?? "";
  const tail = value.match(/\s*$/)?.[0] ?? "";
  return `${lead}${hit}${tail}`;
}

const ENTITY: Record<string, string> = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'", "&#x27;": "'", "&nbsp;": "\u00a0" };
const decode = (s: string) => s.replace(/&(amp|lt|gt|quot|#39|#x27|nbsp);/g, (m) => ENTITY[m] ?? m);
const encode = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/**
 * Translate the text of an HTML fragment (rendered markdown). Text inside <code>/<pre> stays English.
 * Internal links (href="/…") are rewritten to the same language. `localize` maps a path to the public path.
 */
export function translateHtml(lang: Language, html: string, localize: (path: string) => string): string {
  if (lang === "en") return html;
  let skip = 0;
  return html.replace(/(<[^>]+>)|([^<]+)/g, (_m, tag: string | undefined, text: string | undefined) => {
    if (tag) {
      const name = /^<\/?\s*([a-z0-9]+)/i.exec(tag)?.[1]?.toLowerCase();
      if (name === "code" || name === "pre") skip += tag.startsWith("</") ? -1 : tag.endsWith("/>") ? 0 : 1;
      let out = tag.replace(/\shref="(\/[^"/][^"]*|\/)"/, (_h, href: string) => ` href="${localize(href)}"`);
      out = out.replace(/\s(alt|title)="([^"]*)"/g, (_a, attr: string, value: string) => ` ${attr}="${encode(translateText(lang, decode(value))).replace(/"/g, "&quot;")}"`);
      return out;
    }
    if (!text || skip > 0) return text ?? "";
    return encode(translateText(lang, decode(text)));
  });
}
