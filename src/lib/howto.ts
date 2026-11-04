import type { BlogBlock } from "@/data/blog-posts";

function blockText(b: BlogBlock): string | undefined {
  if (b.type === "paragraph") return b.text;
  if (b.type === "rich") return b.parts.map((p) => (typeof p === "string" ? p : "b" in p ? p.b : p.a)).join("");
  if (b.type === "list") return b.items.join(" ");
  return undefined;
}

/** HowTo JSON-LD whose steps are visible headings; each step's text is the first text block under it. */
export function howToJsonLd(howTo: { name: string; steps: string[] }, body: BlogBlock[], url: string) {
  const steps = howTo.steps.map((name, i) => {
    const at = body.findIndex((b) => b.type === "heading" && b.text === name);
    if (at === -1) throw new Error(`HowTo step not found as heading: ${name}`);
    let text: string | undefined;
    for (let j = at + 1; j < body.length && body[j]!.type !== "heading"; j++) { text = blockText(body[j]!); if (text) break; }
    return { "@type": "HowToStep", position: i + 1, name, text: text ?? name };
  });
  return { "@context": "https://schema.org", "@type": "HowTo", name: howTo.name, url, step: steps };
}
