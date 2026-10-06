import { createFileRoute } from "@tanstack/react-router";
import { Clock, Cpu, Sliders, LayoutDashboard } from "lucide-react";
import { Band, PageHero, SectionHeading, FeatureGrid, CompareTable, Prose } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";

export const Route = createFileRoute("/compare/pv-operation")({
  head: () => ({ meta: [
    { title: "AMMP vs PV Operation — AMMP" },
    { name: "description", content: "How AMMP compares with PV Operation, the Brazilian SCADA and monitoring provider for distributed generation plants, and where the two approaches differ." },
    { property: "og:title", content: "AMMP vs PV Operation — AMMP" },
    { property: "og:description", content: "How AMMP compares with PV Operation, the Brazilian SCADA and monitoring provider for distributed generation plants, and where the two approaches differ." },
    { property: "og:type", content: "article" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Page,
});

const chooseThem = [
  "Your portfolio is solar-only distributed generation in Brazil.",
  "You want an outsourced, staffed watch service rather than running monitoring in-house.",
  "You would rather have a SCADA package specified and installed for you.",
  "Daylight-hours coverage matches how your assets actually operate.",
];

const chooseUs = [
  "You run storage or hybrid sites, or expect to add them in this cycle.",
  "You want your own team on a configurable platform with an open API, not only an outsourced watch service.",
  "You need custom KPIs, billing logic and customer-facing dashboards rather than a fixed monitoring product.",
  "You are mixing equipment brands and do not want a local SCADA box on every site.",
];

const rows = [
  { feature: "Multi-vendor equipment support", ammp: true, other: true },
  { feature: "Real-time SCADA", ammp: true, other: true },
  { feature: "Monitoring coverage", ammp: true, other: "Partial — staffed operations centre during daylight hours" },
  { feature: "Performance analytics", ammp: true, other: "Partial — performance module: PR, generation, availability" },
  { feature: "Battery storage monitoring", ammp: true, other: "Partial — not published on their site" },
  { feature: "Customizable alert rules", ammp: true, other: "Partial — not published on their site" },
  { feature: "WhatsApp alerts", ammp: true, other: "Partial — staffed operations centre during daylight hours" },
  { feature: "Automated PDF reports", ammp: true, other: true },
  { feature: "White-label reports", ammp: true, other: "Partial — not published on their site" },
  { feature: "Time-of-use tariff support", ammp: true, other: "Partial — not published on their site" },
  { feature: "Cloud-native platform", ammp: true, other: "Partial — SCADA SaaS or local SCADA install" },
  { feature: "No hardware lock-in", ammp: true, other: "Partial — Standard and Full hardware packages" },
  { feature: "REST API access", ammp: true, other: "Partial — not published on their site" },
  { feature: "Ticketing system", ammp: true, other: "Partial — not published on their site" },
];

const differentiators = [
  { icon: Clock, title: "24/7, not daylight-only", text: "Batteries and hybrid systems operate around the clock, so they need continuous monitoring and safety analytics rather than sun-hours coverage." },
  { icon: Cpu, title: "No SCADA box required", text: "AMMP is hardware-agnostic and reads from equipment you already own, so there is no local SCADA install or lifetime hardware contract to commit to." },
  { icon: Sliders, title: "Customization as the product", text: "Custom KPIs, billing logic and customer-facing dashboards are built into the engagement, instead of a fixed monitoring service you adapt to." },
  { icon: LayoutDashboard, title: "A platform, not a service desk", text: "Your team gets the alerts centre, ticketing, reporting and an open REST API to work in directly, rather than only receiving output from someone else's operations room." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="AMMP vs PV Operation"
        title="Brazilian SCADA vs a portfolio asset management platform"
        intro="PV Operation delivers SCADA and an operations centre for distributed generation plants in Brazil. AMMP is a hardware-agnostic platform for managing solar and storage portfolios across markets."
        primary={{ label: "Book a demo", to: "/demo" }}
        primaryVariant="pink"
        secondary={{ label: "Talk to sales", to: "/contact" }}
      />
      <Band tone="grey">
        <SectionHeading eyebrow="Which one fits your portfolio" title="Which one fits your portfolio" center />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-xl border border-border bg-card p-6 md:p-8">
            <h3 className="text-xl font-semibold">Choose PV Operation if</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {chooseThem.map((item) => <li key={item} className="flex gap-3"><span>•</span><span>{item}</span></li>)}
            </ul>
          </article>
          <article className="rounded-xl border border-primary/40 bg-card p-6 md:p-8">
            <h3 className="text-xl font-semibold text-primary">Choose AMMP if</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {chooseUs.map((item) => <li key={item} className="flex gap-3"><span className="text-primary">•</span><span>{item}</span></li>)}
            </ul>
          </article>
        </div>
      </Band>
      <Band tone="white">
        <SectionHeading eyebrow="Platform Overview" title="Platform Overview" />
        <div className="mt-6 max-w-3xl space-y-4 text-base leading-7 text-muted-foreground">
          <p>PV Operation is a Brazilian provider focused on distributed generation (GD) plants. It offers SCADA as a service and a local SCADA option, a performance module covering performance ratio, generation and availability, a synoptic panel, and an operations centre that watches plants during daylight hours. Its Standard and Full packages cover inverters, protection relays, boundary meters and, in the Full package, temperature relays, trackers, weather stations, combiners, transformers and MV/LV switchgear.</p>
          <p>AMMP approaches the same assets from the portfolio side. AI coworker run on top of AMMP OS, cloud-native and hardware-agnostic, integrating 30+ device brands without a required local SCADA box, and adding the operational layer around the data: alerts centre, ticketing, automated reporting, tariff and financial monitoring, and a stakeholder portal, for solar and battery portfolios in Brazil and beyond.</p>
        </div>
        <CompareTable otherLabel="PV Operation" rows={rows} />
        <p className="mt-4 text-center text-sm text-muted-foreground">Information about PV Operation is based on their public website. Where a capability is not published, we mark it as partial rather than assume it is missing.</p>
      </Band>
      <Band tone="grey">
        <SectionHeading eyebrow="Why AMMP" title="Why Choose AMMP?" center />
        <FeatureGrid columns={4} features={differentiators} />
      </Band>
      <Band tone="white">
        <SectionHeading eyebrow="Brazil" title="How this works in Brazil" center />
        <Prose>
          <p>AMMP is not a replacement for a local operations team. If you already run a Brazilian operations centre, AMMP sits above it as the portfolio layer: one place for owners, financiers and O&amp;M providers to see every plant, with reporting and workflow built for GD portfolios that keep growing.</p>
        </Prose>
        <p className="mt-10 text-center text-xs text-muted-foreground">All statements about PV Operation are taken from their public website and were accurate as of August 2026. If anything here is out of date, tell us and we will correct it.</p>
      </Band>
      <PageCta />
    </>
  );
}
