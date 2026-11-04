import { describe, expect, it } from "vitest";
import { blogPosts } from "@/data/blog-posts";
import { howToJsonLd } from "./howto";

const EXPECTED = ["calculate-performance-ratio-solar-portfolio", "detect-inverter-faults-early-reduce-truck-rolls", "track-solar-ppa-performance-guarantees", "monitor-solar-battery-backup-load-shedding-south-africa", "why-is-my-solar-portfolio-underperforming", "multi-brand-solar-monitoring-checklist", "monitoring-solution-selection-guide"];

describe("HowTo schema", () => {
  it("is set on exactly the step-by-step posts", () => {
    expect(blogPosts.filter((p) => p.howTo).map((p) => p.slug).sort()).toEqual([...EXPECTED].sort());
  });
  for (const post of blogPosts.filter((p) => p.howTo)) {
    it(`${post.slug}: every step is a visible heading, no offers or prices`, () => {
      const ld = howToJsonLd(post.howTo!, post.body, "https://www.ammp.io/blog/x");
      const headings = post.body.flatMap((b) => (b.type === "heading" ? [b.text] : []));
      for (const step of ld.step) expect(headings).toContain(step.name);
      expect(JSON.stringify(ld)).not.toMatch(/"@type":"(Offer|Product)"|"(price|offers|estimatedCost)"/);
    });
  }
});
