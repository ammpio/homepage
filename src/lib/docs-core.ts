import { Marked, type Tokens } from "marked";
import { parse as parseYaml } from "yaml";

/** Pure docs logic (no Vite globs) so it is testable and shared by the server loader and tests. */

export const DOCS_BASE = "/product/documentation";
export const DOC_STATUSES = ["current", "draft"] as const;
export type DocStatus = (typeof DOC_STATUSES)[number];

export type DocMeta = {
  slug: string;
  title: string;
  description: string;
  category: string;
  order: number;
  updated: string; // YYYY-MM-DD
  status: DocStatus;
};
export type DocHeading = { depth: 2 | 3; text: string; id: string };
export type DocFile = DocMeta & { body: string; raw: string; sourcePath: string };
export type Category = { name: string; order: number };

const FM = /^---\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)([\s\S]*)$/;

/** Split "---\nyaml\n---\nbody" into parsed frontmatter and body. */
export function splitFrontmatter(raw: string): { data: Record<string, unknown>; body: string } {
  const m = FM.exec(raw.replace(/^\uFEFF/, ""));
  if (!m) throw new Error("missing frontmatter block (--- ... ---) at the top of the file");
  const data = parseYaml(m[1]) as unknown;
  if (!data || typeof data !== "object" || Array.isArray(data)) throw new Error("frontmatter must be a YAML mapping");
  return { data: data as Record<string, unknown>, body: m[2] };
}

export function slugFromPath(path: string): string {
  return (path.split("/").pop() ?? path).replace(/\.md$/, "");
}

/** Parse and validate one docs file; throws with a readable message naming the file. */
export function parseDocFile(path: string, raw: string): DocFile {
  const fail = (msg: string): never => {
    throw new Error(`[docs] ${path}: ${msg}`);
  };
  let parsed: ReturnType<typeof splitFrontmatter>;
  try {
    parsed = splitFrontmatter(raw);
  } catch (e) {
    return fail((e as Error).message);
  }
  const d = parsed.data;
  const slug = slugFromPath(path);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) fail(`file name "${slug}" must be lowercase words joined by hyphens`);
  const str = (k: string) => {
    const v = d[k];
    if (typeof v !== "string" || !v.trim()) fail(`"${k}" is required and must be text`);
    return (v as string).trim();
  };
  const order = d.order;
  if (typeof order !== "number" || !Number.isFinite(order)) fail(`"order" is required and must be a number`);
  let updated = d.updated as unknown;
  if (updated instanceof Date) updated = updated.toISOString().slice(0, 10);
  if (typeof updated !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(updated) || Number.isNaN(Date.parse(updated)))
    fail(`"updated" must be a date like 2026-10-27`);
  const status = d.status;
  if (!DOC_STATUSES.includes(status as DocStatus)) fail(`"status" must be one of: ${DOC_STATUSES.join(", ")}`);
  const description = str("description");
  if (description.length > 160) fail(`"description" must be 160 characters or fewer (is ${description.length})`);
  return {
    slug,
    title: str("title"),
    description,
    category: str("category"),
    order: order as number,
    updated: updated as string,
    status: status as DocStatus,
    body: parsed.body,
    raw,
    sourcePath: path,
  };
}

export function parseCategories(raw: string | undefined): Category[] {
  if (!raw) return [];
  const data = parseYaml(raw) as unknown;
  if (!Array.isArray(data)) throw new Error("[docs] content/docs/_categories.yml must be a list of { name, order }");
  return data.map((c, i) => {
    if (!c || typeof c.name !== "string" || typeof c.order !== "number")
      throw new Error(`[docs] _categories.yml entry ${i + 1} needs a "name" (text) and "order" (number)`);
    return { name: c.name, order: c.order };
  });
}

/** Validate a whole set: unique slugs. Returns only current pages, sorted by category then order then title. */
export function buildDocSet(files: DocFile[], categories: Category[]): DocFile[] {
  const seen = new Map<string, string>();
  for (const f of files) {
    const prev = seen.get(f.slug);
    if (prev) throw new Error(`[docs] duplicate page name "${f.slug}" in ${prev} and ${f.sourcePath}`);
    seen.set(f.slug, f.sourcePath);
  }
  const catOrder = (name: string) => categories.find((c) => c.name === name)?.order ?? Number.MAX_SAFE_INTEGER;
  return files
    .filter((f) => f.status === "current")
    .sort((a, b) => catOrder(a.category) - catOrder(b.category) || a.category.localeCompare(b.category) || a.order - b.order || a.title.localeCompare(b.title));
}

export function groupByCategory<T extends { category: string }>(docs: T[]): { category: string; docs: T[] }[] {
  const groups: { category: string; docs: T[] }[] = [];
  for (const d of docs) {
    let g = groups.find((x) => x.category === d.category);
    if (!g) groups.push((g = { category: d.category, docs: [] }));
    g.docs.push(d);
  }
  return groups;
}

export function headingId(text: string): string {
  return text.toLowerCase().replace(/<[^>]+>/g, "").replace(/&[a-z#0-9]+;/g, "").replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-") || "section";
}

/** Rewrite a relative "./other.md#x" or "../modules/other.md" link to the docs URL; leaves other links untouched. */
export function rewriteDocLink(href: string): string {
  if (/^[a-z]+:|^\/\/|^#|^\//i.test(href)) return href;
  const m = /^(?:\.{1,2}\/)*(?:[\w-]+\/)*([\w-]+)\.md(#.*)?$/.exec(href);
  return m ? `${DOCS_BASE}/${m[1]}${m[2] ?? ""}` : href;
}

const CALLOUTS: Record<string, string> = { NOTE: "Note", TIP: "Tip", IMPORTANT: "Important", WARNING: "Warning", CAUTION: "Caution" };

/**
 * Render markdown to HTML. `images` maps image file names (e.g. "foo.png") to served URLs;
 * a reference to an unknown image throws so CI fails.
 */
export function renderDocMarkdown(body: string, images: Record<string, string>, source = "doc"): { html: string; headings: DocHeading[] } {
  const headings: DocHeading[] = [];
  const used = new Map<string, number>();
  const md = new Marked({ gfm: true });
  md.use({
    renderer: {
      heading(this: { parser: { parseInline: (t: Tokens.Generic[]) => string } }, { tokens, depth, text }: Tokens.Heading) {
        const inner = this.parser.parseInline(tokens);
        let id = headingId(text);
        const n = used.get(id) ?? 0;
        used.set(id, n + 1);
        if (n) id = `${id}-${n}`;
        if (depth === 2 || depth === 3) headings.push({ depth, text: inner.replace(/<[^>]+>/g, ""), id });
        const level = Math.max(2, depth); // page title is the only h1
        return `<h${level} id="${id}">${inner}</h${level}>\n`;
      },
      link(this: { parser: { parseInline: (t: Tokens.Generic[]) => string } }, { href, title, tokens }: Tokens.Link) {
        const url = rewriteDocLink(href);
        const external = /^https?:/i.test(url);
        const t = title ? ` title="${title}"` : "";
        return `<a href="${url}"${t}${external ? ' target="_blank" rel="noopener"' : ""}>${this.parser.parseInline(tokens)}</a>`;
      },
      image({ href, text, title }: Tokens.Image) {
        let src = href;
        if (!/^https?:/i.test(href)) {
          const name = href.split("/").pop() ?? href;
          const resolved = images[name];
          if (!resolved) throw new Error(`[docs] ${source}: image "${href}" not found in content/docs/images/`);
          src = resolved;
        }
        const t = title ? ` title="${title}"` : "";
        return `<img src="${src}" alt="${text.replace(/"/g, "&quot;")}"${t} loading="lazy" />`;
      },
      blockquote(this: { parser: { parse: (t: Tokens.Generic[]) => string } }, { tokens }: Tokens.Blockquote) {
        const inner = this.parser.parse(tokens);
        const m = /^<p>\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*/.exec(inner);
        if (!m) return `<blockquote>${inner}</blockquote>\n`;
        const kind = m[1];
        const rest = `<p>${inner.slice(m[0].length)}`.replace(/^<p><\/p>\s*/, "");
        return `<div class="docs-callout docs-callout-${kind.toLowerCase()}" role="note"><p class="docs-callout-title">${CALLOUTS[kind]}</p>${rest}</div>\n`;
      },
      table(this: { parser: { parseInline: (t: Tokens.Generic[]) => string } }, token: Tokens.Table) {
        const cell = (c: Tokens.TableCell, tag: "th" | "td") =>
          `<${tag}${c.align ? ` style="text-align:${c.align}"` : ""}>${this.parser.parseInline(c.tokens)}</${tag}>`;
        const head = `<tr>${token.header.map((c) => cell(c, "th")).join("")}</tr>`;
        const rows = token.rows.map((r) => `<tr>${r.map((c) => cell(c, "td")).join("")}</tr>`).join("");
        return `<div class="docs-table"><table><thead>${head}</thead><tbody>${rows}</tbody></table></div>\n`;
      },
    },
  });
  const html = md.parse(body, { async: false }) as string;
  return { html, headings };
}
