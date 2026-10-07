import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  Cpu,
  FileSpreadsheet,
  Gauge,
  Globe,
  Leaf,
  Map,
  PlugZap,
  Ticket,
  X,
} from "lucide-react";
import { Band, PageHero, SectionHeading, StepList } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";

export const Route = createFileRoute("/customization")({
  head: () => ({
    meta: [
      { title: "Tailored Solutions — Custom Integrations and Workflows | AMMP" },
      { name: "description", content: "AMMP adapts to your SCADA setups, contracts, tariffs and reporting, so Ray and your team work from data that fits how your portfolio operates." },
      { property: "og:title", content: "Tailored Solutions — Custom Integrations and Workflows | AMMP" },
      { property: "og:description", content: "Your portfolio isn't standard. AMMP OS adapts to it, and keeps it running." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const steps = [
  { title: "Map your setup", text: "We look at your sites, hardware, contracts and the reports your stakeholders expect." },
  { title: "Connect and model", text: "Your SCADA, loggers, tickets and tariffs flow into AMMP's standard data model." },
  { title: "Fit the workflows", text: "KPIs, alerts and reports are set up around how your team actually operates." },
  { title: "Kept running by AMMP", text: "Everything stays part of the maintained platform, used by Ray and your team alike." },
];

const buildItems = [
  { icon: Cpu, label: "Proprietary SCADA and datalogger connections" },
  { icon: PlugZap, label: "Niche inverters, meters and edge devices" },
  { icon: Ticket, label: "CMMS, ticketing and dispatch sync" },
  { icon: FileSpreadsheet, label: "PPA, lease and index-linked tariff formulas" },
  { icon: BarChart3, label: "Portfolio-specific KPIs and alert rules" },
  { icon: Building2, label: "Branded portals for owners and investors" },
  { icon: Globe, label: "Market data, ERP and billing pipelines" },
];

const cases = [
  { icon: Map, title: "Fleet map with urgent alerts", text: "A geospatial view that surfaces open, high-priority alerts across the fleet so dispatch teams see what needs attention first." },
  { icon: Leaf, title: "Environmental impact for end customers", text: "CO2 avoided and trees saved, branded for an O&M provider and shared directly with their end customer." },
  { icon: Gauge, title: "Site SCADA brought into the data model", text: "A site-level SCADA connection feeding the same dashboards, alerts and reports as every other site in the portfolio." },
];

const diy = [
  "Every vendor API change and broken connector lands on your team.",
  "Custom scripts live outside the platform, so AI and reports can't use them.",
  "Security, uptime and data retention become your problem.",
];

const ammp = [
  "Tailored pieces stay inside the platform and are maintained by AMMP.",
  "Ray and your team work from the same standardized data.",
  "ISO/IEC 27001-aligned infrastructure, with your data exportable at any time.",
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Tailored solutions"
        title="Your portfolio isn't standard."
        highlight="Your platform shouldn't be either."
        intro="Every portfolio has its own SCADA setups, contracts, tariffs and reporting needs. AMMP adapts the platform to them — custom integrations, KPIs and workflows — so Ray and your team work from data that fits how you actually operate, without you owning the upkeep."
        primary={{ label: "Send us your requirement", to: "/contact" }}
      />

      <Band tone="grey">
        <SectionHeading eyebrow="Process" title="How AMMP adapts to your portfolio" center />
        <StepList steps={steps} />
      </Band>

      <Band>
        <SectionHeading eyebrow="Scope" title="What we tailor" center />
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {buildItems.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-5 w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="size-5 text-primary" />
              </div>
              <span className="text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>
      </Band>

      <Band tone="grey">
        <SectionHeading eyebrow="Examples" title="Tailored for real portfolios" center />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {cases.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-xl border border-border bg-card p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <Icon className="size-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </Band>

      <Band>
        <SectionHeading eyebrow="Why inside the platform" title="Side scripts, or part of AMMP OS" center />
        <div className="mt-10 grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          <div className="rounded-xl border border-border bg-card p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-4">Side scripts and one-off builds</h3>
            <ul className="space-y-3">
              {diy.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                  <X className="h-5 w-5 shrink-0 mt-0.5 text-muted-foreground" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-primary/40 bg-card p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-4 text-primary">AMMP</h3>
            <ul className="space-y-3">
              {ammp.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                  <Check className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-10 text-center text-lg font-medium">Your specifics, on a platform you don&apos;t have to maintain.</p>
      </Band>

      <Band tone="grey">
        <div className="max-w-2xl mx-auto text-center">
          <SectionHeading title="Tell us what makes your portfolio different." intro="A short call is usually enough to see how AMMP would fit your setup." center />
          <Link to="/contact" className="button button-primary mt-8 inline-flex">
            Talk to our team
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </div>
      </Band>

      <PageCta />
    </>
  );
}
