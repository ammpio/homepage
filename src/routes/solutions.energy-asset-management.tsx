import { createFileRoute, Link } from "@tanstack/react-router";
import { BarChart3, FileText, Layers, ShieldCheck, Wrench, LineChart, Bot } from "lucide-react";
import { Band, PageHero, SectionHeading, FeatureGrid, Faq } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";

export const Route = createFileRoute("/solutions/energy-asset-management")({
  head: () => ({ meta: [
    { title: "Energy Asset Management Software — AMMP" },
    { name: "description", content: "Centralise monitoring, analytics, SLAs and reporting across your renewable energy portfolio, with AI coworkers doing the first pass of the work." },
    { property: "og:title", content: "Energy Asset Management Software — AMMP" },
    { property: "og:description", content: "Multi-vendor, hybrid PV + BESS, ISO 27001 certified energy asset management, backed by AI coworkers." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});

const capabilities = [
  { icon: Layers, title: "Portfolio dashboards", text: "Aggregate every site, vendor and asset class into one operational view, solar, batteries, generators, meters." },
  { icon: LineChart, title: "Performance analytics", text: "Track yield, PR, availability and revenue against expectations across the entire portfolio." },
  { icon: FileText, title: "Automated reporting", text: "Programmable, white-label PDF and API reports for owners, lenders and PPA off-takers." },
  { icon: Wrench, title: "SLA & O&M oversight", text: "Ticketing, SLA tracking and contractor accountability built into the same platform as the data." },
  { icon: BarChart3, title: "Multi-vendor data", text: "30+ inverter, meter and BMS integrations, normalised into a single data model, no vendor lock-in." },
  { icon: ShieldCheck, title: "Investor-grade exports", text: "ISO 27001 certified, with audit trails and structured data ready for due diligence and refinancing." },
];

const faqs = [
  { q: "What is energy asset management software?", a: "Energy asset management software centralises operational, financial and technical data from a portfolio of renewable energy assets, solar PV, batteries, hybrid systems and generators, so owners and managers can monitor performance, enforce SLAs, automate reporting and make investment decisions from a single source of truth." },
  { q: "How is it different from SCADA or a vendor portal?", a: "SCADA controls a single site in real time; vendor portals only show the equipment of one manufacturer. Energy asset management software sits above both, aggregating multi-vendor data across an entire portfolio and adding the commercial layer (PPA reporting, SLAs, financial KPIs) that owners and asset managers actually need." },
  { q: "Does it work with multiple inverter and battery brands?", a: "Yes. AMMP integrates with 30+ inverter, meter and battery brands including Huawei, SMA, Sungrow, Fronius, GoodWe, Growatt, Victron and SolarEdge, normalising the data into a consistent model so portfolio analytics work regardless of equipment." },
  { q: "Can it manage hybrid solar plus storage portfolios?", a: "Yes. AMMP is built for hybrid PV + BESS sites, including state-of-charge, cycling and degradation analytics for the battery alongside standard solar performance metrics." },
  { q: "How long does it take to deploy?", a: "Most portfolios are live within days, not months. AMMP's cloud-native architecture and pre-built integrations remove the long enterprise implementation cycles typical of legacy SCADA platforms." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Solutions · Energy asset management"
        title="AI coworkers that manage the portfolio"
        highlight="the way your best analyst would."
        intro="AMMP AI coworkers sit on top of AMMP OS, giving asset managers a single platform to monitor, optimise and report on every solar, storage and hybrid site, across vendors, technologies and geographies."
        primary={{ label: "Try demo", to: "/demo" }}
        secondary={{ label: "Talk to sales", to: "/contact" }}
      />

      <Band tone="grey">
        <SectionHeading eyebrow="AI + AMMP OS" title="From portfolio data to portfolio decisions" intro="Coworkers read the same multi-vendor data model as your dashboards, so the commercial and technical picture always matches." />
        <div className="mt-8 flex items-start gap-3 rounded-xl border border-border bg-card p-6">
          <Bot className="mt-0.5 size-5 shrink-0 text-primary" />
          <p className="text-sm leading-6 text-muted-foreground">A compliance coworker checks SLA and contract obligations portfolio-wide, and a reporting coworker prepares the investor-grade exports your team used to build by hand.</p>
        </div>
      </Band>

      <Band>
        <SectionHeading title="What is energy asset management?" />
        <div className="mt-6 max-w-3xl space-y-4 text-lg leading-8 text-muted-foreground">
          <p>Energy asset management is the discipline of running a portfolio of renewable energy assets as a financial and operational whole, not as a collection of disconnected sites. It combines real-time technical monitoring, performance analytics, contractor oversight and commercial reporting into one workflow.</p>
          <p>For asset managers running C&I solar, distributed storage or hybrid portfolios, that means replacing a patchwork of vendor portals, spreadsheets and ad-hoc reports with a centralised platform purpose-built for renewable energy operations.</p>
        </div>
      </Band>

      <Band tone="grey">
        <SectionHeading title="Everything an asset manager needs, in one platform" />
        <FeatureGrid features={capabilities} />
      </Band>

      <Band>
        <SectionHeading title="How AMMP compares" center />
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          <Link to="/compare/traditional-monitoring" className="block rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary">
            <h3 className="font-semibold">vs Traditional monitoring</h3>
            <p className="mt-2 text-sm text-muted-foreground">Modern, multi-vendor and cloud-native, no SCADA lock-in.</p>
          </Link>
          <Link to="/compare/vendor-portals" className="block rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary">
            <h3 className="font-semibold">vs Vendor portals</h3>
            <p className="mt-2 text-sm text-muted-foreground">One platform across every inverter and battery brand.</p>
          </Link>
          <Link to="/compare/in-house-systems" className="block rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary">
            <h3 className="font-semibold">vs In-house systems</h3>
            <p className="mt-2 text-sm text-muted-foreground">Skip the build, get to portfolio insight in days.</p>
          </Link>
        </div>
      </Band>

      <Band tone="grey">
        <SectionHeading title="Frequently asked questions" center />
        <Faq items={faqs} />
      </Band>

      <PageCta />
    </>
  );
}
