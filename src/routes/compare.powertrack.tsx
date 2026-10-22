import { createFileRoute } from "@tanstack/react-router";
import { Layers, RefreshCw, BarChart3, Building } from "lucide-react";
import { Band, PageHero, SectionHeading, FeatureGrid, CompareTable } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";

export const Route = createFileRoute("/compare/powertrack")({
  staticData: { sitemap: true },
  head: () => ({ meta: [
    { title: "AMMP vs PowerTrack — AMMP" },
    { name: "description", content: "Looking for a PowerTrack alternative? Compare AlsoEnergy's PowerTrack with AMMP on customization, integrations, support and BESS depth." },
    { property: "og:title", content: "AMMP vs PowerTrack — AMMP" },
    { property: "og:description", content: "Looking for a PowerTrack alternative? Compare AlsoEnergy's PowerTrack with AMMP on customization, integrations, support and BESS depth." },
    { property: "og:type", content: "article" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Page,
});

const rows = [
  { feature: "Customization model", ammp: "Custom integrations, KPIs and workflows built for you on a maintained platform.", other: "Configuration within a standardized, widely deployed feature set." },
  { feature: "Integration approach", ammp: "API-first: we connect to vendor clouds and APIs, with an edge gateway only where needed.", other: "Gateway-focused: data collection centerd on their own hardware and dataloggers." },
  { feature: "Support model", ammp: "Direct access to platform engineers, not a first-line queue.", other: "Tiered ticket queues with escalation paths." },
  { feature: "BESS and hybrid depth", ammp: "Built for PV, BESS, generators and hybrid sites, including high-datapoint storage systems.", other: "Strong PV heritage, storage supported as part of the standard product." },
  { feature: "Reporting flexibility", ammp: "Programmable, white-labeled reporting and customer-facing portals.", other: "Comprehensive report library with configurable templates." },
  { feature: "Time to ship a custom requirement", ammp: "Typically 2 to 6 weeks, against a fixed-price quote.", other: "Depends on the product roadmap for anything outside the standard set." },
  { feature: "Contract flexibility", ammp: "Modular pricing by MWp and modules, with a discounted trial period.", other: "Subscription tied to hardware and platform packages." },
];

const differentiators = [
  { icon: Layers, title: "Multi-vendor by default", text: "Ray, the AI coworker on AMMP OS, works across 30+ device brands, so you are not tied to the hardware ecosystem PowerTrack was built around." },
  { icon: RefreshCw, title: "Built for what PowerTrack won't build", text: "Custom integrations, KPIs and workflows that fall outside PowerTrack's standard feature set are quoted and shipped, typically in 2 to 6 weeks." },
  { icon: BarChart3, title: "Storage and hybrid depth", text: "PowerTrack has a strong PV heritage; AMMP is built for PV, BESS, generators and hybrid sites from the ground up." },
  { icon: Building, title: "Engineers, not a ticket queue", text: "You get direct access to the people who build the platform, instead of a tiered support queue." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Platform comparison"
        title="AMMP vs PowerTrack"
        intro="PowerTrack, AlsoEnergy's monitoring platform now part of Stem, is a fine choice if you want the largest installed base and a standard feature set. If your portfolio has requirements that don't fit the template, keep reading."
        primary={{ label: "Book a demo", to: "/demo" }}
        primaryVariant="pink"
        secondary={{ label: "See how tailoring works", to: "/customization" }}
      />
      <Band tone="grey">
        <SectionHeading eyebrow="Overview" title="Where the platforms differ" />
        <div className="mt-6 max-w-3xl space-y-4 text-base leading-7 text-muted-foreground">
          <p>PowerTrack provides monitoring and reporting for solar and storage portfolios with a widely deployed, standardized feature set. It works well when your portfolio and requirements fit that template.</p>
          <p>AMMP puts an AI coworker on top of AMMP OS to build the integrations, KPIs and workflows that don't fit anyone's default template, across 30+ device brands, with direct access to the engineers who build the platform.</p>
        </div>
      </Band>
      <Band tone="white">
        <SectionHeading eyebrow="Approach comparison" title="AMMP vs PowerTrack" />
        <CompareTable otherLabel="PowerTrack" rows={rows} />
        <p className="mt-4 text-center text-sm text-muted-foreground">PowerTrack information is based on publicly available documentation as of August 2026. Tell us if anything is out of date and we will correct it.</p>
      </Band>
      <Band tone="grey">
        <SectionHeading eyebrow="Why AMMP" title="Why choose AMMP?" center />
        <FeatureGrid columns={4} features={differentiators} />
      </Band>
      <PageCta />
    </>
  );
}
