import { describe, expect, it } from "vitest";
import { blogPosts, isPublished } from "./blog-posts";

describe("load-shedding post schedule", () => {
  const post = blogPosts.find((p) => p.slug === "monitor-solar-battery-backup-load-shedding-south-africa")!;

  it("is hidden before Wed 9 Dec 2026, 09:00 CET", () => {
    expect(isPublished(post, new Date("2026-12-09T07:59:59Z"))).toBe(false);
  });

  it("is live from Wed 9 Dec 2026, 09:00 CET", () => {
    expect(isPublished(post, new Date("2026-12-09T08:00:00Z"))).toBe(true);
  });
});
