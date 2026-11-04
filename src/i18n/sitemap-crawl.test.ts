// Crawls every sitemap URL without JavaScript: SSR_BASE_URL=http://localhost:8080 bunx vitest run src/i18n/sitemap-crawl.test.ts
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const BASE = process.env["SSR_BASE_URL"];
const ORIGIN = "https://www.ammp.io";

function headingSkips(html: string): string[] {
  const body = html.replace(/<script[\s\S]*?<\/script>/g, "");
  const levels = [...body.matchAll(/<h([1-6])[\s>]/g)].map((m) => Number(m[1]));
  const problems: string[] = [];
  if (levels.filter((l) => l === 1).length !== 1) problems.push(`${levels.filter((l) => l === 1).length} H1s`);
  for (let i = 1; i < levels.length; i++) if (levels[i]! > levels[i - 1]! + 1) problems.push(`H${levels[i - 1]} → H${levels[i]}`);
  return problems;
}

describe.skipIf(!BASE)("every sitemap URL", () => {
  it("returns 200 without redirect, is not a Netlify redirect source, and never skips a heading level", async () => {
    const xml = await (await fetch(`${BASE}/sitemap.xml`)).text();
    const urls = [...new Set([...xml.matchAll(/(?:<loc>|href=")(https:\/\/www\.ammp\.io[^<"]*)/g)].map((m) => m[1]!))];
    expect(urls.length).toBeGreaterThan(100);
    const redirectSources = new Set(readFileSync("public/_redirects", "utf8").split("\n").map((l) => l.trim().split(/\s+/)[0]).filter((p): p is string => !!p && p.startsWith("/")).map((p) => p.replace(/\/$/, "") || "/"));
    const failures: string[] = [];
    const queue = [...urls];
    await Promise.all(Array.from({ length: 8 }, async () => {
      for (let url = queue.shift(); url; url = queue.shift()) {
        const path = url.slice(ORIGIN.length) || "/";
        if (redirectSources.has(path.replace(/\/$/, "") || "/")) failures.push(`${path}: listed in _redirects`);
        const res = await fetch(`${BASE}${path}`, { redirect: "manual" });
        if (res.status !== 200) { failures.push(`${path}: ${res.status}`); continue; }
        const skips = headingSkips(await res.text());
        if (skips.length) failures.push(`${path}: ${skips.join(", ")}`);
      }
    }));
    expect(failures.sort()).toEqual([]);
  }, 600_000);
});
