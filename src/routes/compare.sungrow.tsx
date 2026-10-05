import { createFileRoute } from "@tanstack/react-router";
import { Globe, LineChart, Unplug, Wrench } from "lucide-react";
import { Band, PageHero, SectionHeading, FeatureGrid, CompareTable } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";

export const Route = createFileRoute("/compare/sungrow")({
  head: () => ({ meta: [
    { title: "AMMP vs Sungrow iSolarCloud — AMMP" },
    { name: "description", content: "Compare Sungrow's iSolarCloud with AMMP's open monitoring platform. See why portfolio operators choose hardware independence." },
    { property: "og:title", content: "AMMP vs Sungrow iSolarCloud — AMMP" },
    { property: "og:description", content: "Compare Sungrow's iSolarCloud with AMMP's open monitoring platform. See why portfolio operators choose hardware independence." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Page,
});

const rows = [
  { feature: "Multi-vendor support", ammp: true, other: "No — iSolarCloud only monitors Sungrow equipment" },
  { feature: "Portfolio management", ammp: true, other: true },
  { feature: "Real-time monitoring", ammp: true, other: true },
  { feature: "Historical data analysis", ammp: true, other: true },
  { feature: "Email alerts", ammp: true, other: true },
  { feature: "Push notifications", ammp: true, other: true },
  { feature: "Slack/Teams integration", ammp: true, other: false },
  { feature: "Custom alarm configuration", ammp: true, other: "Partial" },
  { feature: "Standard reports", ammp: true, other: true },
  { feature: "Custom report builder", ammp: true, other: "Partial" },
  { feature: "Automated report scheduling", ammp: true, other: "Partial" },
  { feature: "Financial/PPA reporting", ammp: true, other: false },
  { feature: "30+ device brands", ammp: true, other: false },
  { feature: "Revenue-grade meters", ammp: true, other: "Partial" },
  { feature: "Weather stations", ammp: true, other: true },
  { feature: "Third-party batteries", ammp: true, other: false },
  { feature: "Ticketing system", ammp: true, other: "Partial" },
  { feature: "SLA tracking", ammp: true, other: false },
  { feature: "Performance guarantees", ammp: true, other: "Partial" },
  { feature: "White-label branding", ammp: true, other: false },
  { feature: "API access", ammp: true, other: "Partial" },
];

const differentiators = [
  { icon: Unplug, title: "Hardware Freedom", text: "Monitor Sungrow alongside Huawei, SMA, GoodWe, and 30+ other brands in one unified platform." },
  { icon: LineChart, title: "Advanced Analytics", text: "Go beyond basic monitoring with PPA tracking, financial reporting, and portfolio-wide benchmarking." },
  { icon: Wrench, title: "Professional O&M Tools", text: "Built-in ticketing, SLA tracking, and performance guarantee monitoring for O&M providers." },
  { icon: Globe, title: "Global + Local", text: "International platform with deep expertise in emerging markets and local requirements." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Platform comparison"
        title="AMMP vs Sungrow iSolarCloud"
        intro="Compare Sungrow's iSolarCloud with AMMP's open monitoring platform. See why portfolio operators choose hardware independence."
        primary={{ label: "Book a demo", to: "/demo" }}
        secondary={{ label: "Talk to sales", to: "/contact" }}
      />
      <Band tone="grey">
        <SectionHeading eyebrow="Overview" title="Where the platforms differ" />
        <div className="mt-6 max-w-3xl space-y-4 text-base leading-7 text-muted-foreground">
          <p>Sungrow's iSolarCloud provides solid monitoring capabilities for Sungrow inverters and storage systems. It is free with Sungrow hardware and offers good basic functionality for single-vendor portfolios.</p>
          <p>However, if you manage sites with multiple inverter brands, or plan to in the future, you need a vendor-neutral platform. Ray, the AI coworker on AMMP OS, works with Sungrow alongside 30+ other brands, giving you one dashboard for your entire portfolio with advanced O&M and financial reporting tools.</p>
        </div>
      </Band>
      <Band tone="white">
        <SectionHeading eyebrow="Feature comparison" title={`AMMP vs ${"iSolarCloud"}`} />
        <CompareTable otherLabel="iSolarCloud" rows={rows} />
      </Band>
      <Band tone="grey">
        <SectionHeading eyebrow="Why AMMP" title="Why choose AMMP?" center />
        <FeatureGrid columns={4} features={differentiators} />
      </Band>
      <PageCta />
    </>
  );
}
