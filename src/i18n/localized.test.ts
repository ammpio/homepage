import { describe, expect, it } from "vitest";
import { absoluteUrl, isLocalizablePath, localizePath, splitLocale } from "./locale";
import { availableLanguages } from "./available";
import { localizeHead } from "./head";
import { translateHtml, translateText } from "./translate";
import { sitemapXML, withLanguageVersions } from "@/lib/sitemap";
import { ENGLISH_ONLY_POSTS } from "./english-only-posts";
import { publishedPosts } from "@/data/blog-posts";

describe("localized URLs", () => {
  it("Spanish lives under /es and Portuguese under /pt", () => {
    expect(splitLocale("/es/pricing")).toEqual({ lang: "es", path: "/pricing" });
    expect(splitLocale("/pt")).toEqual({ lang: "pt", path: "/" });
    expect(splitLocale("/pricing")).toEqual({ lang: "en", path: "/pricing" });
    expect(localizePath("/compare/sungrow", "pt")).toBe("/pt/compare/sungrow");
    expect(localizePath("/", "es")).toBe("/es");
  });

  it("privacy and terms stay English only", () => {
    expect(isLocalizablePath("/privacy")).toBe(false);
    expect(isLocalizablePath("/terms")).toBe(false);
    expect(localizePath("/privacy", "es")).toBe("/privacy");
    expect(splitLocale("/es/privacy").lang).toBe("en");
    expect(availableLanguages("/terms")).toEqual(["en"]);
  });

  it("raw docs markdown stays English", () => {
    expect(localizePath("/product/documentation/alerting.md", "es")).toBe("/product/documentation/alerting.md");
  });

  it("canonical is self-referencing per language", () => {
    expect(absoluteUrl("/pricing", "es")).toBe("https://www.ammp.io/es/pricing");
    expect(absoluteUrl("/", "pt")).toBe("https://www.ammp.io/pt");
    expect(absoluteUrl("/", "en")).toBe("https://www.ammp.io/");
  });

  it("every English-only blog post exists", () => {
    const slugs = new Set(publishedPosts().map((p) => p.slug));
    for (const slug of ENGLISH_ONLY_POSTS) expect(slugs.has(slug)).toBe(true);
  });
});

describe("translation", () => {
  it("translates head title and description for Spanish", () => {
    const head = localizeHead({ meta: [{ title: "Pricing — flexible, modular plans | AMMP" }] }, "es");
    expect(head.meta?.[0]?.["title"]).not.toContain("Pricing");
  });

  it("keeps code blocks English and localizes internal links in docs HTML", () => {
    const html = '<p><a href="/ray">Meet Ray</a></p><pre><code>Meet Ray</code></pre>';
    const out = translateHtml("es", html, (p) => localizePath(p, "es"));
    expect(out).toContain('href="/es/ray"');
    expect(out).toContain("<code>Meet Ray</code>");
    expect(translateText("es", "Meet Ray")).not.toBe("Meet Ray");
  });
});

describe("sitemap language versions", () => {
  it("lists en, es and pt-BR versions with x-default alternates", () => {
    const entries = withLanguageVersions(
      [{ path: "/pricing" }, { path: "/privacy" }],
      (p) => availableLanguages(p),
      (p, l) => localizePath(p, l as "en"),
      (l) => (l === "pt" ? "pt-BR" : l),
    );
    expect(entries.map((e) => e.path)).toEqual(["/pricing", "/es/pricing", "/pt/pricing", "/privacy"]);
    const xml = sitemapXML("https://www.ammp.io", entries);
    expect(xml).toContain('<xhtml:link rel="alternate" hreflang="pt-BR" href="https://www.ammp.io/pt/pricing"/>');
    expect(xml).toContain('<xhtml:link rel="alternate" hreflang="x-default" href="https://www.ammp.io/pricing"/>');
    expect(xml).not.toContain("/es/privacy");
  });
});
