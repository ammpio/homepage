// Which languages a page exists in. Light module: safe to import from the root head and the sitemap.
import type { Language } from "./translations";
import { LANGUAGES, isLocalizablePath } from "./locale";
import { ENGLISH_ONLY_POSTS } from "./english-only-posts";

export function isLocalizedBlogSlug(slug: string): boolean {
  return !ENGLISH_ONLY_POSTS.has(slug);
}

export function availableLanguages(path: string): Language[] {
  const p = path.replace(/\/+$/, "") || "/";
  if (!isLocalizablePath(p)) return ["en"];
  const post = /^\/blog\/([^/]+)$/.exec(p);
  if (post && !isLocalizedBlogSlug(post[1]!)) return ["en"];
  return LANGUAGES;
}
