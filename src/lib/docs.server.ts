import { buildDocSet, parseCategories, parseDocFile, renderDocMarkdown, type DocFile } from "./docs-core";

// Bundled at build time; no file system access at runtime (the server runs on a worker).
const rawFiles = import.meta.glob("/content/docs/**/*.md", { query: "?raw", import: "default", eager: true }) as Record<string, string>;
const imageFiles = import.meta.glob("/content/docs/images/*.{png,jpg,jpeg,webp,gif,svg,avif}", { query: "?url", import: "default", eager: true }) as Record<string, string>;
const categoryFiles = import.meta.glob("/content/docs/_categories.yml", { query: "?raw", import: "default", eager: true }) as Record<string, string>;

const IMAGES: Record<string, string> = Object.fromEntries(Object.entries(imageFiles).map(([p, url]) => [p.split("/").pop()!, url]));

let cache: DocFile[] | undefined;
/** All current (non-draft) docs, sorted. README.md files in content/docs are ignored. */
export function allDocs(): DocFile[] {
  if (cache) return cache;
  const files = Object.entries(rawFiles)
    .filter(([p]) => !/\/README\.md$/i.test(p))
    .map(([p, raw]) => parseDocFile(p.replace(/^\//, ""), raw));
  cache = buildDocSet(files, parseCategories(Object.values(categoryFiles)[0]));
  return cache;
}

export function getDoc(slug: string): DocFile | undefined {
  return allDocs().find((d) => d.slug === slug);
}

export function renderDoc(doc: DocFile) {
  return renderDocMarkdown(doc.body, IMAGES, doc.sourcePath);
}

const summary = (d: DocFile) => ({ slug: d.slug, title: d.title, description: d.description, category: d.category, updated: d.updated });

/** Titles/descriptions only, for the index, sidebar, search and the menu flag. */
export function docsIndexData() {
  return allDocs().map(summary);
}

/** One rendered page plus sidebar data, or undefined for drafts/unknown slugs. */
export function docPageData(slug: string) {
  const doc = getDoc(slug);
  if (!doc) return undefined;
  const { html, headings } = renderDoc(doc);
  return { doc: summary(doc), html, headings, nav: docsIndexData() };
}
