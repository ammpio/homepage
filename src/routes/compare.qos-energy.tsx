import { createFileRoute } from "@tanstack/react-router";
import { Building2, PlayCircle, Users, Zap } from "lucide-react";
import { Band, PageHero, SectionHeading, FeatureGrid, CompareTable } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";

export const Route = createFileRoute("/compare/qos-energy")({
  staticData: { sitemap: true },
  head: () => ({ meta: [
    { title: "AMMP vs QOS Energy — AMMP" },
    { name: "description", content: "Compare AMMP with QOS Energy (formerly Bazefield/Quantum). See how our vendor-neutral, AI-assisted approach differs." },
    { property: "og:title", content: "AMMP vs QOS Energy — AMMP" },
    { property: "og:description", content: "Compare AMMP with QOS Energy (formerly Bazefield/Quantum). See how our vendor-neutral, AI-assisted approach differs." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Page,
});

const rows = [
  { feature: "Hardware-independent monitoring", ammp: true, other: true },
  { feature: "Portfolio management", ammp: true, other: true },
  { feature: "Live demo access", ammp: true, other: false },
  { feature: "Email alerts", ammp: true, other: true },
  { feature: "Slack/Teams integration", ammp: true, other: false },
  { feature: "SMS alerts", ammp: true, other: true },
  { feature: "Standard reports", ammp: true, other: true },
  { feature: "PPA-specific reporting", ammp: true, other: true },
  { feature: "Time-of-use analysis", ammp: true, other: "Partial" },
  { feature: "Wheeling support", ammp: true, other: false },
  { feature: "Inverter support", ammp: true, other: true },
  { feature: "Meter integration", ammp: true, other: true },
  { feature: "Generator monitoring", ammp: true, other: false },
  { feature: "Battery systems", ammp: true, other: true },
  { feature: "South African market features", ammp: true, other: false },
  { feature: "Emerging markets support", ammp: true, other: "Partial" },
];

const differentiators = [
  { icon: Building2, title: "Built for Renewable Portfolios", text: "Solar, storage and hybrid assets across mixed hardware, managed in one workspace." },
  { icon: Zap, title: "Generator Integration", text: "Monitor hybrid systems with solar, battery, and diesel generator support in one platform." },
  { icon: Users, title: "South African Expertise", text: "Native support for ToU tariffs, wheeling arrangements, and local utility requirements." },
  { icon: PlayCircle, title: "Try Before You Buy", text: "Access a live demo instantly, no sales call required to see the platform in action." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Platform comparison"
        title="AMMP vs QOS Energy"
        intro="Compare AMMP with QOS Energy (formerly Bazefield/Quantum). See how our vendor-neutral, AI-assisted approach differs."
        primary={{ label: "Book a demo", to: "/demo" }}
        primaryVariant="pink"
        secondary={{ label: "Talk to sales", to: "/contact" }}
      />
      <Band tone="grey">
        <SectionHeading eyebrow="Overview" title="Where the approaches differ" />
        <div className="mt-6 max-w-3xl space-y-4 text-base leading-7 text-muted-foreground">
          <p>QOS Energy, which acquired Bazefield and was previously known as Quantum, offers a comprehensive asset performance management platform primarily focused on utility-scale wind and solar projects.</p>
          <p>AMMP takes a different approach, with an AI coworker on AMMP OS built for renewable energy portfolios. The platform handles mixed hardware, storage and hybrid systems, PPA and tariff reporting, and contract tracking in one place.</p>
        </div>
      </Band>
      <Band tone="white">
        <SectionHeading eyebrow="Feature comparison" title={`AMMP vs ${"QOS Energy"}`} />
        <CompareTable otherLabel="QOS Energy" rows={rows} />
      </Band>
      <Band tone="grey">
        <SectionHeading eyebrow="Why AMMP" title="Why choose AMMP?" center />
        <FeatureGrid columns={4} features={differentiators} />
      </Band>
      <PageCta />
    </>
  );
}
