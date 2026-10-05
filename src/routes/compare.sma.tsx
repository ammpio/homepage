import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, Building, Layers, RefreshCw } from "lucide-react";
import { Band, PageHero, SectionHeading, FeatureGrid, CompareTable } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";

export const Route = createFileRoute("/compare/sma")({
  head: () => ({ meta: [
    { title: "AMMP vs SMA Sunny Portal — AMMP" },
    { name: "description", content: "Break free from vendor lock-in. Compare SMA's Sunny Portal with AMMP's open, multi-vendor platform." },
    { property: "og:title", content: "AMMP vs SMA Sunny Portal — AMMP" },
    { property: "og:description", content: "Break free from vendor lock-in. Compare SMA's Sunny Portal with AMMP's open, multi-vendor platform." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Page,
});

const rows = [
  { feature: "Multi-vendor support", ammp: true, other: "No — Sunny Portal only monitors SMA hardware" },
  { feature: "Portfolio management", ammp: true, other: true },
  { feature: "Performance analytics", ammp: true, other: true },
  { feature: "Weather data integration", ammp: true, other: "Partial" },
  { feature: "Email alerts", ammp: true, other: true },
  { feature: "Slack/Teams integration", ammp: true, other: false },
  { feature: "Custom alarm rules", ammp: true, other: "Partial" },
  { feature: "Standard reports", ammp: true, other: true },
  { feature: "Custom report builder", ammp: true, other: "Partial" },
  { feature: "PPA/financial reporting", ammp: true, other: false },
  { feature: "API access", ammp: true, other: "Partial" },
  { feature: "30+ device brands", ammp: true, other: false },
  { feature: "Meter integration", ammp: true, other: true },
  { feature: "Battery systems (any brand)", ammp: true, other: false },
  { feature: "Generator monitoring", ammp: true, other: false },
  { feature: "Ticketing system", ammp: true, other: "Partial" },
  { feature: "Third-party O&M support", ammp: true, other: false },
  { feature: "Works with existing systems", ammp: true, other: false },
  { feature: "No hardware lock-in", ammp: true, other: false },
  { feature: "White-label options", ammp: true, other: false },
];

const differentiators = [
  { icon: Layers, title: "True Multi-Vendor Support", text: "Monitor systems from any manufacturer, Huawei, Sungrow, SolarEdge, and 30+ more, in one unified platform." },
  { icon: RefreshCw, title: "Works With Existing Systems", text: "Add an AI coworker on AMMP OS to sites already installed, regardless of the inverter brand or age of the system." },
  { icon: BarChart3, title: "Portfolio-Wide Insights", text: "Compare performance across your entire fleet, even when sites have different hardware." },
  { icon: Building, title: "Built for Asset Managers", text: "Purpose-built for portfolio operators and O&M providers managing diverse system types." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Platform comparison"
        title="AMMP vs SMA Sunny Portal"
        intro="Break free from vendor lock-in. Compare SMA's Sunny Portal with AMMP's open, multi-vendor platform."
        primary={{ label: "Book a demo", to: "/demo" }}
        secondary={{ label: "Talk to sales", to: "/contact" }}
      />
      <Band tone="grey">
        <SectionHeading eyebrow="Overview" title="Where the platforms differ" />
        <div className="mt-6 max-w-3xl space-y-4 text-base leading-7 text-muted-foreground">
          <p>SMA Sunny Portal provides monitoring for SMA inverter systems with a clean interface. While it works well for SMA-only installations, it operates as a proprietary system tied exclusively to SMA hardware.</p>
          <p>AMMP puts an AI coworker on top of AMMP OS to work across 30+ device brands, including SMA. That means you can monitor your entire portfolio, SMA sites, Huawei sites, Sungrow sites, all in one platform with consistent reporting and analytics.</p>
        </div>
      </Band>
      <Band tone="white">
        <SectionHeading eyebrow="Feature comparison" title={`AMMP vs ${"Sunny Portal"}`} />
        <CompareTable otherLabel="Sunny Portal" rows={rows} />
      </Band>
      <Band tone="grey">
        <SectionHeading eyebrow="Why AMMP" title="Why choose AMMP?" center />
        <FeatureGrid columns={4} features={differentiators} />
      </Band>
      <PageCta />
    </>
  );
}
