import { describe, expect, it } from "vitest";
import { blogPosts, getBlogPost, isPublished } from "./blog-posts";

describe("load-shedding post schedule", () => {
  const post = blogPosts.find((p) => p.slug === "monitor-solar-battery-backup-load-shedding-south-africa")!;

  it("is hidden before Wed 9 Dec 2026, 09:00 CET", () => {
    expect(isPublished(post, new Date("2026-12-09T07:59:59Z"))).toBe(false);
  });

  it("is live from Wed 9 Dec 2026, 09:00 CET", () => {
    expect(isPublished(post, new Date("2026-12-09T08:00:00Z"))).toBe(true);
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
  it("keep the load-shedding post hidden until 9 Dec", () => {
    expect(getBlogPost("monitor-solar-battery-backup-load-shedding-south-africa", now)).toBeUndefined();
    expect(blogLlmsSection(now)).not.toContain("load-shedding");
  });
});
