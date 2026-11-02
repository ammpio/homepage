import { describe, expect, it } from "vitest";
import { blogPosts, featuredPost, getBlogPost, isPublished, publishedPosts } from "./blog-posts";

describe("featured blog post", () => {
  const now = new Date("2026-10-28T12:00:00Z");
  it("is pinned to Meet Ray even when newer posts exist", () => {
    const featured = featuredPost(publishedPosts(now), now);
    expect(featured.slug).toBe("meet-ray");
    expect(featured.date).toBe("2026-10-07");
  });
  it("only ever features a live post", () => {
    expect(isPublished(featuredPost(publishedPosts(now), now), now)).toBe(true);
  });
  it("falls back to the newest post if the pinned one is gone", () => {
    const withoutPinned = blogPosts.filter((p) => p.slug !== "meet-ray");
    const fallback = featuredPost(withoutPinned, now);
    expect(fallback.slug).not.toBe("meet-ray");
    expect(withoutPinned.filter((p) => p.date === fallback.date).includes(fallback)).toBe(true);
  });
});

import { blogLlmsSection } from "@/lib/blog-llms";
describe("published-now posts", () => {
  const slugs = ["rank-solar-alarms-by-revenue-risk", "solar-investor-reports-with-ai", "automated-ppa-billing-solar", "track-solar-ppa-performance-guarantees", "solar-investor-reporting-tools-compared"];
  const now = new Date("2026-10-28T12:00:00Z");
  it("are live on 28 Oct 2026 and listed in llms.txt", () => {
    const section = blogLlmsSection(now);
    for (const s of slugs) {
      expect(getBlogPost(s, now)?.date).toBe("2026-10-28");
      expect(section).toContain(`/blog/${s}`);
    }
  });
  it("include the load-shedding post, published 28 Oct 2026", () => {
    expect(getBlogPost("monitor-solar-battery-backup-load-shedding-south-africa", now)?.date).toBe("2026-10-28");
    expect(blogLlmsSection(now)).toContain("/blog/monitor-solar-battery-backup-load-shedding-south-africa");
  });
});

import { llmsTxt } from "@/data/ammp-facts";
describe("EPC use-case page", () => {
  it("is listed for llms.txt", () => {
    expect(llmsTxt()).toContain("https://www.ammp.io/use-cases/epcs");
  });
});

import { postAuthor } from "@/data/authors";
import { blogBatch4Translations } from "@/i18n/blog-batch4-translations";
describe("November 2026 Insights posts", () => {
  const slugs = ["why-is-my-solar-portfolio-underperforming", "calculate-performance-ratio-solar-portfolio", "detect-inverter-faults-early-reduce-truck-rolls", "can-claude-chatgpt-analyse-solar-monitoring-data"];
  const now = new Date("2026-11-02T12:00:00Z");
  it("are live on 2 Nov 2026, by Andreas Lehner, with an FAQ and in llms.txt", () => {
    const section = blogLlmsSection(now);
    for (const s of slugs) {
      const post = getBlogPost(s, now);
      expect(post?.date).toBe("2026-11-02");
      expect(post?.faq?.length).toBeGreaterThan(0);
      expect(postAuthor(s)?.name).toBe("Andreas Lehner");
      expect(section).toContain(`/blog/${s}`);
    }
  });
  it("have Spanish and Portuguese titles", () => {
    for (const s of slugs) {
      const title = getBlogPost(s, now)!.title;
      expect(blogBatch4Translations.es[title]).toBeTruthy();
      expect(blogBatch4Translations.pt[title]).toBeTruthy();
    }
  });
  it("say Ray groups repeat alarms in the inverter post", () => {
    expect(JSON.stringify(getBlogPost(slugs[2], now)!.body)).toContain("groups repeat alarms into one fix list");
  });
});
