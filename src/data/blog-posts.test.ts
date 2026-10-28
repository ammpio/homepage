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
