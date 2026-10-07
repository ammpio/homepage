import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, Building, Layers, RefreshCw } from "lucide-react";
import { Band, PageHero, SectionHeading, FeatureGrid, CompareTable } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";

export const Route = createFileRoute("/compare/fronius")({
  staticData: { sitemap: true },
  head: () => ({ meta: [
    { title: "AMMP vs Fronius Solar.web — AMMP" },
    { name: "description", content: "Break free from vendor lock-in. Compare Fronius Solar.web with AMMP's open, multi-vendor platform." },
    { property: "og:title", content: "AMMP vs Fronius Solar.web — AMMP" },
    { property: "og:description", content: "Break free from vendor lock-in. Compare Fronius Solar.web with AMMP's open, multi-vendor platform." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Page,
});

const rows = [
  { feature: "Multi-vendor support", ammp: true, other: "No — Solar.web only monitors Fronius hardware" },
  { feature: "Portfolio management", ammp: true, other: true },
  { feature: "Performance analytics", ammp: true, other: true },
  { feature: "Commercial-scale focus", ammp: true, other: "Partial — Solar.web is primarily residential-focused" },
  { feature: "Email alerts", ammp: true, other: true },
  { feature: "Slack/Teams integration", ammp: true, other: false },
  { feature: "Custom alarm rules", ammp: true, other: "Partial" },
  { feature: "Standard reports", ammp: true, other: true },
  { feature: "Custom report builder", ammp: true, other: "Partial" },
  { feature: "PPA/financial reporting", ammp: true, other: false },
  { feature: "API access", ammp: true, other: true },
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
  { icon: Layers, title: "True Multi-Vendor Support", text: "Monitor systems from any manufacturer, Huawei, SMA, SolarEdge, and 30+ more, in one unified platform." },
  { icon: RefreshCw, title: "Commercial-Grade Platform", text: "Purpose-built for commercial and utility-scale renewable portfolios, not just residential installations." },
  { icon: BarChart3, title: "Portfolio-Wide Insights", text: "Compare performance across your entire fleet, even when sites have different hardware." },
  { icon: Building, title: "Built for Asset Managers", text: "Purpose-built for portfolio operators and O&M providers managing diverse system types." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Platform comparison"
        title="AMMP vs Fronius Solar.web"
        intro="Break free from vendor lock-in. Compare Fronius Solar.web with AMMP's open, multi-vendor platform."
        primary={{ label: "Book a demo", to: "/demo" }}
        primaryVariant="pink"
        secondary={{ label: "Talk to sales", to: "/contact" }}
      />
      <Band tone="grey">
        <SectionHeading eyebrow="Overview" title="Where the platforms differ" />
        <div className="mt-6 max-w-3xl space-y-4 text-base leading-7 text-muted-foreground">
          <p>Fronius Solar.web provides monitoring for Fronius inverter systems with a user-friendly interface. While excellent for residential Fronius installations, it is limited to Fronius equipment and lacks features needed for commercial portfolio management.</p>
          <p>AMMP is hardware-agnostic and commercial-focused, with an AI coworker on AMMP OS integrating 30+ device brands including Fronius. That means you can monitor your entire portfolio, Fronius sites, Huawei sites, SMA sites, all in one platform with professional-grade reporting and analytics.</p>
        </div>
      </Band>
      <Band tone="white">
        <SectionHeading eyebrow="Feature comparison" title={`AMMP vs ${"Solar.web"}`} />
        <CompareTable otherLabel="Solar.web" rows={rows} />
      </Band>
      <Band tone="grey">
        <SectionHeading eyebrow="Why AMMP" title="Why choose AMMP?" center />
        <FeatureGrid columns={4} features={differentiators} />
      </Band>
      <PageCta />
    </>
  );
}
