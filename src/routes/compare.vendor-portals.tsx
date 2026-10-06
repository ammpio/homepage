import { createFileRoute } from "@tanstack/react-router";
import { FileText, Layers, Shield, TrendingUp } from "lucide-react";
import { Band, PageHero, SectionHeading, FeatureGrid, CompareTable } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";

export const Route = createFileRoute("/compare/vendor-portals")({
  head: () => ({ meta: [
    { title: "AMMP vs Manufacturer Portals — AMMP" },
    { name: "description", content: "Stop juggling multiple monitoring platforms. Unify your entire portfolio, regardless of hardware, in one powerful platform." },
    { property: "og:title", content: "AMMP vs Manufacturer Portals — AMMP" },
    { property: "og:description", content: "Stop juggling multiple monitoring platforms. Unify your entire portfolio, regardless of hardware, in one powerful platform." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Page,
});

const rows = [
  { feature: "Single dashboard for all vendors", ammp: true, other: false },
  { feature: "Multi-vendor portfolio view", ammp: true, other: false },
  { feature: "Standardized data format", ammp: true, other: false },
  { feature: "Cross-portfolio comparisons", ammp: true, other: false },
  { feature: "Unified reporting across brands", ammp: true, other: false },
  { feature: "Consistent KPI definitions", ammp: true, other: false },
  { feature: "Single investor report", ammp: true, other: false },
  { feature: "PPA/financial reporting", ammp: true, other: false },
  { feature: "Unified alerting system", ammp: true, other: false },
  { feature: "Cross-portfolio alarm rules", ammp: true, other: false },
  { feature: "Slack/Teams integration", ammp: true, other: false },
  { feature: "30+ device brands", ammp: true, other: "No — Each portal supports only its own brand" },
  { feature: "Meters & sensors", ammp: true, other: "Partial" },
  { feature: "Battery systems (any brand)", ammp: true, other: false },
  { feature: "Third-party API access", ammp: true, other: "Partial" },
  { feature: "Unified ticketing system", ammp: true, other: false },
  { feature: "Cross-vendor O&M workflows", ammp: true, other: false },
  { feature: "No hardware lock-in", ammp: true, other: false },
  { feature: "Vendor-neutral procurement", ammp: true, other: false },
  { feature: "White-label options", ammp: true, other: false },
];

const differentiators = [
  { icon: Layers, title: "One Dashboard, All Vendors", text: "Stop logging into FusionSolar, Sunny Portal, iSolarCloud, and SEMS separately. See everything in one place." },
  { icon: FileText, title: "Consistent Reporting", text: "Generate unified reports across your entire portfolio with standardised metrics, no more spreadsheet gymnastics." },
  { icon: Shield, title: "Future-Proof Your Portfolio", text: "Choose the best equipment for each project without worrying about monitoring fragmentation." },
  { icon: TrendingUp, title: "True Performance Comparison", text: "Compare site performance fairly across different hardware vendors with normalised analytics." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Platform comparison"
        title="AMMP vs Manufacturer Portals"
        intro="Stop juggling multiple monitoring platforms. Unify your entire portfolio, regardless of hardware, in one powerful platform."
        primary={{ label: "Book a demo", to: "/demo" }}
        primaryVariant="pink"
        secondary={{ label: "Talk to sales", to: "/contact" }}
      />
      <Band tone="grey">
        <SectionHeading eyebrow="Overview" title="Where the approaches differ" />
        <div className="mt-6 max-w-3xl space-y-4 text-base leading-7 text-muted-foreground">
          <p>Every inverter manufacturer has their own monitoring portal: Huawei has FusionSolar, Sungrow has iSolarCloud, SMA has Sunny Portal, and so on. If you manage a diverse portfolio, you are constantly switching between platforms, dealing with inconsistent data formats, and manually consolidating reports.</p>
          <p>AMMP solves this with an AI coworker on AMMP OS that unifies 30+ device brands into a single platform. One login, one dashboard, one source of truth for your entire fleet.</p>
        </div>
      </Band>
      <Band tone="white">
        <SectionHeading eyebrow="Feature comparison" title={`AMMP vs ${"Vendor Portals"}`} />
        <CompareTable otherLabel="Vendor Portals" rows={rows} />
      </Band>
      <Band tone="grey">
        <SectionHeading eyebrow="Why AMMP" title="Why choose AMMP?" center />
        <FeatureGrid columns={4} features={differentiators} />
      </Band>
      <PageCta />
    </>
  );
}
