// Page-weight checks against the latest production build in dist/ (skipped when no build exists).
// Run after `bunx vite build`. Budgets are uncompressed bytes of JavaScript a page loads before any interaction.
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const DIST = path.resolve(__dirname, "../../dist");
const manifestFile = fs.existsSync(`${DIST}/server`) ? fs.readdirSync(`${DIST}/server`).find((f) => f.startsWith("_tanstack-start-manifest")) : undefined;
const BUDGET_BYTES = 900 * 1024;

function preloads(src: string, route: string): string[] {
  const i = src.indexOf(`${JSON.stringify(route)}: {`);
  if (i < 0) return [];
  return [...src.slice(i, src.indexOf("}", i)).matchAll(/"(\/assets\/[^"]+\.js)"/g)].map((m) => m[1]!);
}

function pageScripts(route: string): Map<string, string> {
  const src = fs.readFileSync(`${DIST}/server/${manifestFile}`, "utf8");
  const seen = new Map<string, string>();
  const stack = [...preloads(src, "__root__"), ...preloads(src, route)];
  while (stack.length) {
    const asset = stack.pop()!;
    if (seen.has(asset)) continue;
    const file = `${DIST}/client${asset}`;
    if (!fs.existsSync(file)) continue;
    const code = fs.readFileSync(file, "utf8");
    seen.set(asset, code);
    for (const m of code.matchAll(/(?:import|from)\s*["'](\.\/[^"']+\.js)["']/g)) stack.push(`/assets/${m[1]!.slice(2)}`);
  }
  return seen;
}

describe.skipIf(!manifestFile)("page weight (production build)", () => {
  for (const route of ["/", "/ray", "/pricing", "/blog/$slug"]) {
    it(`${route} stays under the JavaScript budget`, () => {
      const total = [...pageScripts(route).values()].reduce((n, c) => n + Buffer.byteLength(c), 0);
      expect(total).toBeLessThan(BUDGET_BYTES);
    });
    it(`${route} in English loads no Spanish/Portuguese dictionary`, () => {
      // "Sobre el autor" and "Perfil no LinkedIn" only exist in the lazy dictionaries.
      for (const code of pageScripts(route).values()) {
        expect(code).not.toContain("Sobre el autor");
        expect(code).not.toContain("Perfil no LinkedIn");
      }
    });
  }
});
