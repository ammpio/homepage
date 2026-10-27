import { blogPosts } from "@/data/blog-posts";

export const INDEXNOW_KEY = "c244f7d3909334813390e15da68c0272";
export const INDEXNOW_HOST = "www.ammp.io";
const ORIGIN = `https://${INDEXNOW_HOST}`;

/** Blog URLs whose publishAt fell inside the last `hours` hours. */
export function recentlyPublishedUrls(now: Date = new Date(), hours = 26): string[] {
  const from = now.getTime() - hours * 3600_000;
  return blogPosts
    .filter((p) => p.publishAt && Date.parse(p.publishAt) <= now.getTime() && Date.parse(p.publishAt) > from)
    .map((p) => `${ORIGIN}/blog/${p.slug}`);
}

export async function submitToIndexNow(urls: string[]): Promise<{ submitted: number; status?: number }> {
  if (!urls.length) return { submitted: 0 };
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: INDEXNOW_HOST, key: INDEXNOW_KEY, keyLocation: `${ORIGIN}/${INDEXNOW_KEY}.txt`, urlList: urls.slice(0, 10000) }),
  });
  return { submitted: urls.length, status: res.status };
}

export async function sitemapUrls(): Promise<string[]> {
  const xml = await (await fetch(`${ORIGIN}/sitemap.xml`)).text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]).filter((u) => u.startsWith(ORIGIN));
}
