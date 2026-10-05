import { createFileRoute } from "@tanstack/react-router";
import { Puzzle, Scale, TrendingUp, Unlock } from "lucide-react";
import { Band, PageHero, SectionHeading, FeatureGrid, CompareTable } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";

export const Route = createFileRoute("/compare/open-vs-proprietary")({
  head: () => ({ meta: [
    { title: "Open Standards vs Proprietary Protocols — AMMP" },
    { name: "description", content: "Compare the long-term implications of open, vendor-neutral monitoring versus closed, proprietary ecosystems." },
    { property: "og:title", content: "Open Standards vs Proprietary Protocols — AMMP" },
    { property: "og:description", content: "Compare the long-term implications of open, vendor-neutral monitoring versus closed, proprietary ecosystems." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Page,
});

const rows = [
  { feature: "Multi-vendor support", ammp: true, other: false },
  { feature: "30+ device integrations", ammp: true, other: false },
  { feature: "Standard protocols (Modbus, MQTT)", ammp: true, other: "Partial" },
  { feature: "Works with any inverter brand", ammp: true, other: false },
  { feature: "Open API access", ammp: true, other: "Partial" },
  { feature: "Standard data formats", ammp: true, other: "Partial" },
  { feature: "Data export (CSV, JSON)", ammp: true, other: "Partial" },
  { feature: "Third-party integrations", ammp: true, other: "Partial" },
  { feature: "Mix equipment brands", ammp: true, other: false },
  { feature: "Add devices from new vendors", ammp: true, other: false },
  { feature: "Change equipment mid-lifecycle", ammp: true, other: false },
  { feature: "Second-life equipment support", ammp: true, other: false },
  { feature: "No hardware lock-in", ammp: true, other: false },
  { feature: "Competitive equipment pricing", ammp: true, other: false },
  { feature: "Freedom to switch vendors", ammp: true, other: false },
  { feature: "Independent platform provider", ammp: true, other: false },
  { feature: "New tech adoption", ammp: true, other: "Partial" },
  { feature: "Evolving industry standards", ammp: true, other: "Partial" },
  { feature: "M&A-proof monitoring", ammp: true, other: false },
];

const differentiators = [
  { icon: Unlock, title: "True Vendor Freedom", text: "Choose the best equipment for each project without worrying about monitoring compatibility." },
  { icon: Puzzle, title: "Unified Portfolio View", text: "One platform for your entire fleet, regardless of how many different equipment brands you use." },
  { icon: Scale, title: "Procurement Leverage", text: "Negotiate better equipment prices when you are not locked into a single vendor's ecosystem." },
  { icon: TrendingUp, title: "Future-Proof Investment", text: "As new technologies emerge, add them to your portfolio without changing platforms." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Approach comparison"
        title="Open Standards vs Proprietary Protocols"
        intro="Compare the long-term implications of open, vendor-neutral monitoring versus closed, proprietary ecosystems."
        primary={{ label: "Book a demo", to: "/demo" }}
        secondary={{ label: "Talk to sales", to: "/contact" }}
      />
      <Band tone="grey">
        <SectionHeading eyebrow="Overview" title="Where the approaches differ" />
        <div className="mt-6 max-w-3xl space-y-4 text-base leading-7 text-muted-foreground">
          <p>Proprietary monitoring platforms, typically offered by inverter manufacturers, promise seamless integration but come with hidden costs. You are locked into one vendor's equipment, limiting your flexibility and negotiating power.</p>
          <p>AMMP embraces open standards and vendor neutrality. an AI coworker on AMMP OS integrate with 30+ device brands using standard protocols like Modbus, SunSpec, and MQTT. Your monitoring platform should work for you, not limit your equipment choices.</p>
        </div>
      </Band>
      <Band tone="white">
        <SectionHeading eyebrow="Feature comparison" title={`AMMP vs ${"Proprietary"}`} />
        <CompareTable otherLabel="Proprietary" rows={rows} />
      </Band>
      <Band tone="grey">
        <SectionHeading eyebrow="Why AMMP" title="Why open standards with AMMP?" center />
        <FeatureGrid columns={4} features={differentiators} />
      </Band>
      <PageCta />
    </>
  );
}
