// No-JavaScript fetch checks against a running server: SSR_BASE_URL=http://localhost:8080 bunx vitest run src/i18n/localized-ssr.test.ts
import { describe, expect, it } from "vitest";

const BASE = process.env["SSR_BASE_URL"];
const PAGES: Array<[string, Record<"es" | "pt", RegExp>]> = [
  ["/", { es: /Ponga la IA a trabajar|IA a trabajar/, pt: /Coloque a IA para trabalhar/ }],
  ["/pricing", { es: /Precios/, pt: /Preços/ }],
  ["/solutions/solar-monitoring", { es: /monitoreo|Monitoreo/, pt: /monitoramento|Monitoramento/ }],
  ["/compare/sungrow", { es: /Sungrow/, pt: /Sungrow/ }],
  ["/use-cases/epcs", { es: /EPC/, pt: /EPC/ }],
  ["/blog", { es: /Ideas y orientación práctica/, pt: /portfólio|Ideias/ }],
  ["/blog/meet-ray", { es: /Ray/, pt: /Ray/ }],
  ["/product/documentation/meet-ray", { es: /Conoce a Ray/, pt: /Conheça (o )?Ray/ }],
];
const HTML_LANG = { es: "es", pt: "pt-BR" } as const;

async function get(path: string) {
  const res = await fetch(`${BASE}${path}`, { headers: { "user-agent": "ssr-test" } });
  return { status: res.status, html: await res.text() };
}

describe.skipIf(!BASE)("localized pages without JavaScript", () => {
  for (const [path, expected] of PAGES) {
    for (const lang of ["es", "pt"] as const) {
      const url = `/${lang}${path === "/" ? "" : path}`;
      it(`${url} is translated with lang, canonical and hreflang`, async () => {
        const { status, html } = await get(url);
        expect(status).toBe(200);
        expect(html).toMatch(new RegExp(`<html[^>]*lang="${HTML_LANG[lang]}"`));
        expect(html).toMatch(expected[lang]);
        const self = `https://www.ammp.io${url}`;
        expect(html).toContain(`<link rel="canonical" href="${self}"/>`);
        expect(html).toContain(`hrefLang="es" href="https://www.ammp.io/es${path === "/" ? "" : path}"`);
        expect(html).toContain(`hrefLang="pt-BR" href="https://www.ammp.io/pt${path === "/" ? "" : path}"`);
        expect(html).toContain(`hrefLang="x-default" href="https://www.ammp.io${path}"`);
        // Internal links stay in the same language.
        expect(html).toContain(`href="/${lang}/contact"`);
      });
    }
  }

  it("English-only pages have no localized URL", async () => {
    expect((await get("/es/privacy")).status).toBe(404);
    expect((await get("/pt/terms")).status).toBe(404);
  });

  it("old English URLs keep working", async () => {
    const { status, html } = await get("/pricing");
    expect(status).toBe(200);
    expect(html).toMatch(/<html[^>]*lang="en"/);
  });

  it("sitemap lists localized URLs with alternates", async () => {
    const { html: xml } = await get("/sitemap.xml");
    for (const [path] of PAGES) {
      for (const lang of ["es", "pt"] as const) expect(xml).toContain(`<loc>https://www.ammp.io/${lang}${path === "/" ? "" : path}</loc>`);
    }
    expect(xml).toContain('hreflang="pt-BR"');
    expect(xml).not.toContain("/es/privacy");
  });

  it("serves /es/llms.txt and /pt/llms.txt", async () => {
    expect((await get("/es/llms.txt")).html).toContain("más de 10.000 sitios");
    expect((await get("/pt/llms.txt")).html).toContain("mais de 10.000 usinas");
  });
});
