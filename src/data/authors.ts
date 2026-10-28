// Blog bylines and real "last updated" dates. One source for visible text and JSON-LD.
export type Author = { id: string; name: string; jobTitle: string; url?: string };

export const AUTHORS: Record<"andreas" | "svet", Author> = {
  andreas: { id: "andreas", name: "Andreas Lehner", jobTitle: "CCO" }, // LinkedIn url pending
  svet: { id: "svet", name: "Svet Bajlekov", jobTitle: "CEO and co-founder" }, // LinkedIn url pending
};

const POST_AUTHOR: Record<string, keyof typeof AUTHORS> = {
  "meet-ray": "svet",
  "introducing-ammp-os": "svet",
  "cyber-secure-infrastructure": "svet",
  "data-flowing-wrong-way": "svet",
  "decentralized-energy-systems": "svet",
  "mcp-server-beta": "andreas",
  "fragmented-monitoring-costs": "andreas",
  "battery-monitoring-cheat-sheet": "andreas",
  "white-paper-ammp-accure": "andreas",
  "solar-irradiance-research": "andreas",
  "monitoring-solution-selection-guide": "andreas",
  "commercial-solar-portfolio-monitoring-software": "andreas",
  "multi-brand-solar-monitoring-checklist": "andreas",
  "rank-solar-alarms-by-revenue-risk": "andreas",
  "solar-investor-reports-with-ai": "andreas",
  "automated-ppa-billing-solar": "andreas",
  "track-solar-ppa-performance-guarantees": "andreas",
  "solar-investor-reporting-tools-compared": "andreas",
  "monitor-solar-battery-backup-load-shedding-south-africa": "andreas",
};

/** Named author, or undefined when the post is credited to AMMP as the organisation. */
export function postAuthor(slug: string): Author | undefined {
  const id = POST_AUTHOR[slug];
  return id ? AUTHORS[id] : undefined;
}

/** Real last-edit dates; posts never edited after publishing are absent. */
export const POST_UPDATED: Record<string, string> = {
  "rank-solar-alarms-by-revenue-risk": "2026-10-28",
  "solar-investor-reports-with-ai": "2026-10-28",
  "automated-ppa-billing-solar": "2026-10-28",
  "track-solar-ppa-performance-guarantees": "2026-10-28",
  "solar-investor-reporting-tools-compared": "2026-10-28",
  "meet-ray": "2026-10-22",
  "mcp-server-beta": "2026-10-26",
  "sps-africa": "2026-10-22",
  "monitoring-solution-selection-guide": "2026-10-22",
};

export const PAGE_UPDATED = { product: "2026-10-22", pricing: "2026-10-22", faq: "2026-10-22" } as const;

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}
