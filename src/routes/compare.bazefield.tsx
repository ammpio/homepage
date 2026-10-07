import { createFileRoute } from "@tanstack/react-router";
import { Clock, DollarSign, MessageSquare, Zap } from "lucide-react";
import { Band, PageHero, SectionHeading, FeatureGrid, CompareTable } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";

export const Route = createFileRoute("/compare/bazefield")({
  head: () => ({ meta: [
    { title: "Renewable Portfolios vs Traditional SCADA — AMMP" },
    { name: "description", content: "Bazefield (now part of Univers) is a powerful SCADA platform built for utility-scale renewable energy. AMMP offers a focused solution for commercial and industrial distributed energy portfolios." },
    { property: "og:title", content: "Renewable Portfolios vs Traditional SCADA — AMMP" },
    { property: "og:description", content: "Bazefield (now part of Univers) is a powerful SCADA platform built for utility-scale renewable energy. AMMP offers a focused solution for commercial and industrial distributed energy portfolios." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Page,
});

const rows = [
  { feature: "Multi-vendor equipment support", ammp: true, other: true },
  { feature: "Wind & hydro support", ammp: false, other: true },
  { feature: "Battery storage monitoring", ammp: true, other: true },
  { feature: "Real-time SCADA", ammp: true, other: true },
  { feature: "Edge computing", ammp: true, other: true },
  { feature: "Customizable alert rules", ammp: true, other: true },
  { feature: "Slack/Teams integration", ammp: true, other: false },
  { feature: "WhatsApp alerts", ammp: true, other: false },
  { feature: "Email notifications", ammp: true, other: true },
  { feature: "Automated PDF reports", ammp: true, other: true },
  { feature: "White-label reports", ammp: true, other: true },
  { feature: "Investor-ready analytics", ammp: true, other: true },
  { feature: "Self-service report builder", ammp: true, other: "Partial" },
  { feature: "REST API access", ammp: true, other: true },
  { feature: "Webhook support", ammp: true, other: "Partial" },
  { feature: "Third-party platform integration", ammp: true, other: true },
  { feature: "Quick deployment (<1 week)", ammp: true, other: "No — Enterprise deployments typically longer" },
];

const differentiators = [
  { icon: Zap, title: "Portfolio-First Platform", text: "While Bazefield is a SCADA-centerd solution, AMMP is built for operators managing many renewable sites across mixed hardware." },
  { icon: Clock, title: "Rapid Deployment", text: "Get up and running in days, not months. AMMP's cloud-native architecture eliminates lengthy enterprise implementation cycles." },
  { icon: MessageSquare, title: "Modern Integrations", text: "Native Slack, Teams, and WhatsApp integrations keep your team connected without complex middleware." },
  { icon: DollarSign, title: "Transparent Pricing", text: "Simple, predictable pricing based on your portfolio size. No hidden enterprise licensing fees or long-term commitments." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="AMMP vs Bazefield"
        title="Renewable Portfolios vs Traditional SCADA"
        intro="Bazefield (now part of Univers) is a powerful SCADA platform built for utility-scale renewable energy. AMMP offers a focused solution for commercial and industrial distributed energy portfolios."
        primary={{ label: "Book a demo", to: "/demo" }}
        primaryVariant="pink"
        secondary={{ label: "Talk to sales", to: "/contact" }}
      />
      <Band tone="grey">
        <SectionHeading eyebrow="Overview" title="Where the approaches differ" />
        <div className="mt-6 max-w-3xl space-y-4 text-base leading-7 text-muted-foreground">
          <p>Bazefield is a market-leading SCADA and operations management platform, now part of the Univers family. It supports solar, wind, storage, and hydro assets, with particular strength in utility-scale projects requiring advanced control capabilities.</p>
          <p>AMMP takes a different approach, with an AI coworker on AMMP OS focused specifically on commercial and industrial distributed energy systems. This allows for faster deployment, simpler operations, and pricing that scales with your portfolio rather than enterprise licensing models.</p>
        </div>
      </Band>
      <Band tone="white">
        <SectionHeading eyebrow="Feature comparison" title={`AMMP vs ${"Bazefield"}`} />
        <CompareTable otherLabel="Bazefield" rows={rows} />
      </Band>
      <Band tone="grey">
        <SectionHeading eyebrow="Why AMMP" title="Why choose AMMP?" center />
        <FeatureGrid columns={4} features={differentiators} />
      </Band>
      <PageCta />
    </>
  );
}
