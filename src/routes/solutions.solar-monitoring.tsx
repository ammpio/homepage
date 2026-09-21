import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Activity, Bell, Battery, FileText, Plug, Cpu, Bot } from "lucide-react";
import { Band, PageHero, SectionHeading, FeatureGrid, Faq } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";

export const Route = createFileRoute("/solutions/solar-monitoring")({
  head: () => ({ meta: [
    { title: "Solar Monitoring Software — AMMP" },
    { name: "description", content: "Real-time solar monitoring across 30+ inverter brands, backed by AI coworkers that investigate and act on what the data shows." },
    { property: "og:title", content: "Solar Monitoring Software — AMMP" },
    { property: "og:description", content: "Real-time solar monitoring across 30+ inverter brands, hybrid PV + BESS, smart alerts and an open API." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});

const capabilities = [
  { icon: Activity, title: "Real-time SCADA", text: "Sub-minute telemetry from every inverter, meter and sensor, without a heavy on-site SCADA stack." },
  { icon: Cpu, title: "Multi-inverter support", text: "30+ inverter brands integrated out of the box, normalised into a single data model." },
  { icon: Bell, title: "Smart alerts", text: "Configurable rules with Slack, Microsoft Teams, WhatsApp and email delivery, no alert fatigue." },
  { icon: FileText, title: "PPA & investor reporting", text: "Automated, white-label PDF and API reports for off-takers, lenders and asset owners." },
  { icon: Battery, title: "Hybrid PV + BESS", text: "Monitor solar and storage in one place, with state-of-charge, cycling and round-trip efficiency analytics." },
  { icon: Plug, title: "Open REST API", text: "Push data into your CMMS, BI tools or in-house dashboards. Your data, your workflows." },
];

const faqs = [
  { q: "What is a solar monitoring system?", a: "A solar monitoring system collects real-time performance data from a PV plant, inverters, meters, sensors and (where present) batteries, and turns it into dashboards, alerts and reports so operators can detect issues, verify production and report to stakeholders." },
  { q: "Which inverters and devices does AMMP support?", a: "AMMP supports 30+ brands including Huawei, SMA, Sungrow, Fronius, GoodWe, Growatt, Victron, SolarEdge, Solis, Sunsynk, Deye and more, plus a wide range of meters, dataloggers and battery management systems. New integrations are added continuously." },
  { q: "Is AMMP cloud-based or on-premise?", a: "AMMP is cloud-native by default, with edge agents that handle local data collection. On-premise and private-cloud deployments are available for customers with specific data residency or cybersecurity requirements." },
  { q: "Does it monitor batteries and hybrid systems too?", a: "Yes. AMMP is purpose-built for hybrid PV + BESS sites and tracks battery state-of-charge, cycling, degradation and round-trip efficiency alongside standard solar performance metrics." },
  { q: "How is AMMP priced?", a: "Pricing scales with portfolio size and the modules you use, with no per-user fees and no long-term lock-in. See the pricing page for details or talk to sales for a portfolio quote." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Solutions · Solar monitoring"
        title="AI coworkers that watch every panel,"
        highlight="so your team investigates less and acts sooner."
        intro="AMMP AI coworkers sit on top of AMMP OS, the real-time solar monitoring platform for C&I and distributed portfolios, multi-vendor, hybrid-ready and built for teams who need answers, not just dashboards."
        primary={{ label: "Try demo", to: "/demo" }}
        secondary={{ label: "Talk to sales", to: "/contact" }}
      />

      <Band tone="grey">
        <SectionHeading eyebrow="AI + AMMP OS" title="Coworkers grounded in real-time telemetry" intro="Every alert an AI coworker raises is backed by the same sub-minute data feeding your dashboards, so recommendations come with evidence, not guesses." />
        <div className="mt-8 flex items-start gap-3 rounded-xl border border-border bg-card p-6">
          <Bot className="mt-0.5 size-5 shrink-0 text-primary" />
          <p className="text-sm leading-6 text-muted-foreground">When production dips below model, a coworker checks irradiance, soiling and inverter health before it ever reaches your queue, then opens the work order with the evidence attached.</p>
        </div>
      </Band>

      <Band>
        <SectionHeading title="A complete solar monitoring platform" />
        <FeatureGrid features={capabilities} />
      </Band>

      <Band tone="grey">
        <SectionHeading title="What is solar monitoring?" />
        <div className="mt-6 max-w-3xl space-y-4 text-lg leading-8 text-muted-foreground">
          <p>Solar monitoring is the continuous collection and analysis of performance data from a PV plant. It tells operators whether the plant is producing what it should, flags faults early, and provides the evidence needed for warranty claims, PPA invoicing and investor reporting.</p>
          <p>Modern solar monitoring goes beyond a single inverter dashboard: it unifies data from every device on site, supports hybrid solar-plus-storage configurations, and integrates with the operational tools O&M and asset management teams already use.</p>
        </div>
      </Band>

      <Band>
        <SectionHeading title="Built for hybrid solar and storage" center />
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-muted-foreground">Every dashboard, alert and report in AMMP works the same way for solar-only, storage-only and hybrid PV + BESS sites, so you can monitor a mixed portfolio without switching tools or stitching data together.</p>
      </Band>

      <Band tone="grey">
        <SectionHeading title="How AMMP compares" center />
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          <Link to="/compare/meteocontrol" className="block rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary">
            <h3 className="font-semibold">vs Meteocontrol</h3>
            <p className="mt-2 text-sm text-muted-foreground">Modern, vendor-neutral C&I solar focus with native Slack and Teams.</p>
          </Link>
          <Link to="/compare/traditional-monitoring" className="block rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary">
            <h3 className="font-semibold">vs Traditional monitoring</h3>
            <p className="mt-2 text-sm text-muted-foreground">Cloud-native, fast to deploy and built for hybrid PV + BESS.</p>
          </Link>
          <Link to="/integrations" className="block rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary">
            <h3 className="font-semibold">See all integrations</h3>
            <p className="mt-2 text-sm text-muted-foreground">30+ inverter, meter and battery integrations already built. <ArrowRight className="mt-1 inline size-3.5" /></p>
          </Link>
        </div>
      </Band>

      <Band>
        <SectionHeading title="Frequently asked questions" center />
        <Faq items={faqs} />
      </Band>

      <PageCta />
    </>
  );
}
