import { describe, expect, it } from "vitest";
import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join, relative } from "node:path";
import { buildDocSet, parseCategories, parseDocFile, renderDocMarkdown, rewriteDocLink } from "./docs-core";
import { llmsTxt } from "../data/ammp-facts";

const ROOT = join(__dirname, "../../content/docs");
const fm = (extra: Record<string, string> = {}) => {
  const f = { title: "T", description: "D", category: "Modules", order: "1", updated: "2026-10-27", status: "current", ...extra };
  return `---\n${Object.entries(f).filter(([, v]) => v !== "").map(([k, v]) => `${k}: ${v}`).join("\n")}\n---\nBody`;
};

describe("frontmatter validation", () => {
  it("accepts a valid page", () => expect(parseDocFile("content/docs/a.md", fm()).status).toBe("current"));
  it("rejects an unknown status", () => expect(() => parseDocFile("a.md", fm({ status: "published" }))).toThrow(/status/));
  it("rejects a missing title", () => expect(() => parseDocFile("a.md", fm({ title: "" }))).toThrow(/title/));
  it("rejects a bad date", () => expect(() => parseDocFile("a.md", fm({ updated: "27 Oct" }))).toThrow(/updated/));
  it("rejects a missing frontmatter block", () => expect(() => parseDocFile("a.md", "# no frontmatter")).toThrow(/frontmatter/));
});

describe("doc set", () => {
  it("allows zero current pages", () => {
    expect(buildDocSet([parseDocFile("draft.md", fm({ status: "draft" }))], [])).toEqual([]);
  });
  it("does not advertise the documentation index without current pages", () => {
    expect(llmsTxt(false)).not.toContain("https://www.ammp.io/product/documentation");
    expect(llmsTxt(true)).toContain("https://www.ammp.io/product/documentation");
  });
  it("excludes drafts and sorts by category order then page order", () => {
    const cats = parseCategories("- name: Getting started\n  order: 1\n- name: Modules\n  order: 2");
    const set = buildDocSet(
      [
        parseDocFile("b.md", fm({ title: "B", order: "2" })),
        parseDocFile("a.md", fm({ title: "A", order: "1" })),
        parseDocFile("g.md", fm({ title: "G", category: "Getting started", order: "9" })),
        parseDocFile("d.md", fm({ title: "Draft", status: "draft" })),
      ],
      cats,
    );
    expect(set.map((d) => d.title)).toEqual(["G", "A", "B"]);
  });
  it("rejects duplicate page names across folders", () => {
    expect(() => buildDocSet([parseDocFile("x/a.md", fm()), parseDocFile("y/a.md", fm())], [])).toThrow(/duplicate/);
  });
});

describe("markdown rendering", () => {
  it("rewrites links between docs pages", () => {
    expect(rewriteDocLink("../modules/ticketing.md#statuses")).toBe("/product/documentation/ticketing#statuses");
    expect(rewriteDocLink("https://example.com/a.md")).toBe("https://example.com/a.md");
  });
  it("fails on a missing image", () => {
    expect(() => renderDocMarkdown("![x](../images/missing.png)", {})).toThrow(/missing\.png/);
  });
  it("renders callouts and collects H2/H3 headings", () => {
    const { html, headings } = renderDocMarkdown("## One\n### Two\n> [!WARNING]\n> Careful", {});
    expect(headings.map((h) => h.id)).toEqual(["one", "two"]);
    expect(html).toContain("docs-callout-warning");
  });
});

// Validates the real files in content/docs, so a broken agent PR fails CI.
describe("content/docs files", () => {
  const walk = (dir: string): string[] =>
    readdirSync(dir, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(join(dir, e.name)) : e.name.endsWith(".md") && e.name !== "README.md" ? [join(dir, e.name)] : []));
  const files = walk(ROOT);
  const images = Object.fromEntries(existsSync(join(ROOT, "images")) ? readdirSync(join(ROOT, "images")).map((n) => [n, `/img/${n}`]) : []);
  const catsPath = join(ROOT, "_categories.yml");
  const docs = files.map((f) => parseDocFile(relative(join(ROOT, "../.."), f), readFileSync(f, "utf8")));

  it("has valid frontmatter and unique names", () => {
    expect(() => buildDocSet(docs, parseCategories(existsSync(catsPath) ? readFileSync(catsPath, "utf8") : undefined))).not.toThrow();
  });
  it.each(["getting-started-with-ammp-os", "alerting", "ticketing"])("keeps the %s placeholder unpublished", (slug) => {
    expect(docs.find((doc) => doc.slug === slug)?.status).toBe("draft");
  });
  it.each(docs.map((d) => [d.sourcePath, d] as const))("%s renders with all images and doc links present", (_p, d) => {
    const { html } = renderDocMarkdown(d.body, images, d.sourcePath);
    const slugs = new Set(docs.map((x) => x.slug));
    for (const m of html.matchAll(/href="\/product\/documentation\/([\w-]+)/g)) expect(slugs, `broken link to ${m[1]}`).toContain(m[1]);
  });
});
