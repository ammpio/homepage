import { publishedPosts } from "@/data/blog-posts";

const ORIGIN = "https://www.ammp.io";

/** llms.txt section listing live "Insights" guides; scheduled posts stay out until they go live. */
export function blogLlmsSection(now: Date = new Date()): string {
  const posts = publishedPosts(now).filter((p) => p.category === "Insights");
  if (!posts.length) return "";
  const lines = posts.map((p) => `- [${p.title}](${ORIGIN}/blog/${p.slug}): ${p.excerpt}`);
  return `\n## Guides and insights\n\n${lines.join("\n")}\n`;
}
