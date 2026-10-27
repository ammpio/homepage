import { SITE } from "@/data/ammp-facts";
import { DOCS_BASE, splitFrontmatter } from "./docs-core";
import { allDocs } from "./docs.server";

/** "## Documentation" section for llms.txt (list) or llms-full.txt (with page bodies). Server-only. */
export function docsLlmsSection(full: boolean): string {
  const docs = allDocs();
  if (!docs.length) return "";
  if (!full) {
    return `\n## Documentation\n${docs.map((d) => `- [${d.title}](${SITE}${DOCS_BASE}/${d.slug}) (${d.category}): ${d.description} Markdown: ${SITE}${DOCS_BASE}/${d.slug}.md`).join("\n")}\n`;
  }
  return `\n## Documentation\n\n${docs
    .map((d) => `### ${d.title}\nURL: ${SITE}${DOCS_BASE}/${d.slug}\nCategory: ${d.category}\nLast updated: ${d.updated}\n\n${splitFrontmatter(d.raw).body.trim()}`)
    .join("\n\n")}\n`;
}
