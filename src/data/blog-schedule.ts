// Slug → go-live moment (ISO UTC) for every blog post; null = live since publication.
// Lightweight copy for links in shared page sections, so they don't ship every post's full text.
// Must match src/data/blog-posts.ts (blog-posts.test.ts fails when they drift): add a line for each new post.
export const POST_SCHEDULE: Record<string, string | null> = {
  "solar-battery-alerts-microsoft-teams-slack": "2026-11-09T00:00:00Z",
  "solar-monitoring-africa-nigeria-kenya-south-africa": "2026-11-09T00:00:00Z",
  "why-is-my-solar-portfolio-underperforming": "2026-11-02T00:00:00Z",
  "calculate-performance-ratio-solar-portfolio": "2026-11-02T00:00:00Z",
  "detect-inverter-faults-early-reduce-truck-rolls": "2026-11-02T00:00:00Z",
  "can-claude-chatgpt-analyse-solar-monitoring-data": "2026-11-02T00:00:00Z",
  "monitor-solar-battery-backup-load-shedding-south-africa": "2026-10-28T00:00:00Z",
  "solar-investor-reporting-tools-compared": "2026-10-28T00:00:00Z",
  "track-solar-ppa-performance-guarantees": "2026-10-28T00:00:00Z",
  "automated-ppa-billing-solar": "2026-10-28T00:00:00Z",
  "solar-investor-reports-with-ai": "2026-10-28T00:00:00Z",
  "rank-solar-alarms-by-revenue-risk": "2026-10-28T00:00:00Z",
  "multi-brand-solar-monitoring-checklist": "2026-10-28T08:00:00Z",
  "commercial-solar-portfolio-monitoring-software": null,
  "meet-ray": null,
  "mcp-server-beta": null,
  "sps-africa": null,
  "jaltech": null,
  "sawa-energy": null,
  "energea": null,
  "empower-new-energy": null,
  "broadreach-energy": null,
  "bright-light": null,
  "forest-energy": null,
  "introducing-ammp-os": null,
  "fragmented-monitoring-costs": null,
  "cyber-secure-infrastructure": null,
  "data-flowing-wrong-way": null,
  "monitoring-solution-selection-guide": null,
  "decentralized-energy-systems": null,
  "solar-irradiance-research": null,
  "battery-monitoring-cheat-sheet": null,
  "white-paper-ammp-accure": null,
  "iso-27001-certification": null,
  "featured-foresight-media": null,
  "featured-sifted": null,
  "featured-esi-africa": null,
  "featured-tech-eu": null,
  "featured-afrik21": null,
  "featured-silicon-canals": null,
  "set100-award-2021": null,
};

/** True when the post exists and is live right now (same rule as isPublished). */
export function isLiveSlug(slug: string, now: Date = new Date()): boolean {
  if (!(slug in POST_SCHEDULE)) return false;
  const at = POST_SCHEDULE[slug];
  return !at || now.getTime() >= Date.parse(at);
}
