import { createFileRoute } from "@tanstack/react-router";
import { FileText, Globe, MessageSquare, Shield } from "lucide-react";
import { Band, PageHero, SectionHeading, FeatureGrid, CompareTable } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";

export const Route = createFileRoute("/compare/meteocontrol")({
  staticData: { sitemap: true },
  head: () => ({ meta: [
    { title: "AMMP vs Meteocontrol — AMMP" },
    { name: "description", content: "Compare two renewable energy monitoring platforms. See how AMMP's vendor-neutral platform and AI coworker compare to Meteocontrol's established solution." },
    { property: "og:title", content: "AMMP vs Meteocontrol — AMMP" },
    { property: "og:description", content: "Compare two renewable energy monitoring platforms. See how AMMP's vendor-neutral platform and AI coworker compare to Meteocontrol's established solution." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Page,
});

const rows = [
  { feature: "Hardware-independent monitoring", ammp: true, other: "Partial" },
  { feature: "Portfolio-level dashboard", ammp: true, other: true },
  { feature: "Customizable dashboards", ammp: true, other: true },
  { feature: "Real-time data streaming", ammp: true, other: true },
  { feature: "Email alerts", ammp: true, other: true },
  { feature: "Slack integration", ammp: true, other: false },
  { feature: "Microsoft Teams integration", ammp: true, other: false },
  { feature: "Custom alarm thresholds", ammp: true, other: true },
  { feature: "Standard reports", ammp: true, other: true },
  { feature: "PPA-specific reporting", ammp: true, other: "Partial" },
  { feature: "Programmable reports (API)", ammp: true, other: false },
  { feature: "White-label reports", ammp: true, other: true },
  { feature: "30+ device integrations", ammp: true, other: true },
  { feature: "Open REST API", ammp: true, other: "Partial" },
  { feature: "Generator monitoring", ammp: true, other: "Partial" },
  { feature: "Ticketing system", ammp: true, other: true },
  { feature: "SLA tracking", ammp: true, other: true },
  { feature: "Mobile app", ammp: true, other: true },
  { feature: "Time-of-use tariff support", ammp: true, other: false },
];

const differentiators = [
  { icon: Shield, title: "Independent Company", text: "AMMP remains an independent, privately-held company focused solely on monitoring excellence." },
  { icon: MessageSquare, title: "Modern Communication", text: "Native Slack and Teams integration keeps your team informed where they already work." },
  { icon: FileText, title: "Programmable Reports", text: "Generate custom reports via API for complete automation of your reporting workflows." },
  { icon: Globe, title: "Renewable Portfolio Depth", text: "One platform for solar, storage and hybrid assets across mixed hardware and portfolios of any size." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Platform comparison"
        title="AMMP vs Meteocontrol"
        intro="Compare two renewable energy monitoring platforms. See how AMMP's vendor-neutral platform and AI coworker compare to Meteocontrol's established solution."
        primary={{ label: "Book a demo", to: "/demo" }}
        primaryVariant="pink"
        secondary={{ label: "Talk to sales", to: "/contact" }}
      />
      <Band tone="grey">
        <SectionHeading eyebrow="Overview" title="Where the approaches differ" />
        <div className="mt-6 max-w-3xl space-y-4 text-base leading-7 text-muted-foreground">
          <p>Both AMMP and Meteocontrol offer comprehensive monitoring for renewable energy assets, but they differ in approach. Meteocontrol is an established, hardware-linked solution with a long track record in solar.</p>
          <p>AMMP is a vendor-neutral platform for renewable energy portfolios, from solar to storage and hybrid systems. Ray, the AI coworker on AMMP OS, brings Slack/Teams integration and fully programmable reporting APIs to your team's daily workflow.</p>
        </div>
      </Band>
      <Band tone="white">
        <SectionHeading eyebrow="Feature comparison" title={`AMMP vs ${"Meteocontrol"}`} />
        <CompareTable otherLabel="Meteocontrol" rows={rows} />
      </Band>
      <Band tone="grey">
        <SectionHeading eyebrow="Why AMMP" title="Why choose AMMP?" center />
        <FeatureGrid columns={4} features={differentiators} />
      </Band>
      <PageCta />
    </>
  );
}
