import { createFileRoute } from "@tanstack/react-router";
import { DollarSign, HeartHandshake, RefreshCw, Rocket } from "lucide-react";
import { Band, PageHero, SectionHeading, FeatureGrid, CompareTable } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";

export const Route = createFileRoute("/compare/in-house-systems")({
  head: () => ({ meta: [
    { title: "AMMP vs In-House Systems — AMMP" },
    { name: "description", content: "Building your own monitoring platform? Compare the true cost and effort of in-house development versus a purpose-built solution." },
    { property: "og:title", content: "AMMP vs In-House Systems — AMMP" },
    { property: "og:description", content: "Building your own monitoring platform? Compare the true cost and effort of in-house development versus a purpose-built solution." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Page,
});

const rows = [
  { feature: "Ready to use immediately", ammp: true, other: "No — In-house requires months of development" },
  { feature: "No development team required", ammp: true, other: false },
  { feature: "Proven at scale", ammp: true, other: "Partial" },
  { feature: "30+ device integrations", ammp: true, other: "Partial — Each integration requires custom development" },
  { feature: "New device support", ammp: true, other: "Partial" },
  { feature: "Protocol expertise included", ammp: true, other: false },
  { feature: "99.9% uptime SLA", ammp: true, other: "Partial" },
  { feature: "Redundant infrastructure", ammp: true, other: "Partial" },
  { feature: "Disaster recovery", ammp: true, other: "Partial" },
  { feature: "Ongoing feature updates", ammp: true, other: "Partial" },
  { feature: "Security patches", ammp: true, other: "Partial" },
  { feature: "Performance optimization", ammp: true, other: "Partial" },
  { feature: "No internal maintenance burden", ammp: true, other: false },
  { feature: "Dedicated support team", ammp: true, other: false },
  { feature: "Industry expertise", ammp: true, other: "Partial" },
  { feature: "Best practices guidance", ammp: true, other: false },
  { feature: "Predictable monthly cost", ammp: true, other: false },
  { feature: "No hidden development costs", ammp: true, other: false },
  { feature: "No staff retraining costs", ammp: true, other: false },
];

const differentiators = [
  { icon: Rocket, title: "Deploy in Days, Not Months", text: "Skip the development cycle. Connect your first site in days and scale as fast as you grow." },
  { icon: HeartHandshake, title: "Dedicated Support", text: "Our team knows solar monitoring inside out. Get expert support, not generic IT help." },
  { icon: RefreshCw, title: "Always Improving", text: "Continuous updates and new features without any effort from your team." },
  { icon: DollarSign, title: "Lower Total Cost", text: "Predictable pricing without hidden development, maintenance, or scaling costs." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Approach comparison"
        title="AMMP vs In-House Systems"
        intro="Building your own monitoring platform? Compare the true cost and effort of in-house development versus a purpose-built solution."
        primary={{ label: "Book a demo", to: "/demo" }}
        secondary={{ label: "Talk to sales", to: "/contact" }}
      />
      <Band tone="grey">
        <SectionHeading eyebrow="Overview" title="Where the approaches differ" />
        <div className="mt-6 max-w-3xl space-y-4 text-base leading-7 text-muted-foreground">
          <p>Building an in-house monitoring system seems attractive, full control, custom features, no vendor dependencies. But the reality often includes months of development, ongoing maintenance burden, and hidden costs that compound over time.</p>
          <p>AMMP gives you the power of a custom-built platform without the overhead. an AI coworker on AMMP OS have already solved the hard problems, device integration, data reliability, scalable infrastructure, so your team can focus on operating your solar assets.</p>
        </div>
      </Band>
      <Band tone="white">
        <SectionHeading eyebrow="Feature comparison" title={`AMMP vs ${"In-House"}`} />
        <CompareTable otherLabel="In-House" rows={rows} />
      </Band>
      <Band tone="grey">
        <SectionHeading eyebrow="Why AMMP" title="Why choose AMMP?" center />
        <FeatureGrid columns={4} features={differentiators} />
      </Band>
      <PageCta />
    </>
  );
}
