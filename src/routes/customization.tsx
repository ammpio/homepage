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
import customDashboardsImg from "@/assets/customisations-dashboards.jpg";

export const Route = createFileRoute("/customization")({
  head: () => ({
    meta: [
      { title: "How Tailoring Works — Custom Integrations and Dashboards | AMMP" },
      { name: "description", content: "AMMP builds custom integrations, dashboards, KPIs and workflows on top of a maintained monitoring platform. Fixed-price quotes, live in two to six weeks." },
      { property: "og:title", content: "How Tailoring Works — Custom Integrations and Dashboards | AMMP" },
      { property: "og:description", content: "Your portfolio isn't standard. Your platform shouldn't be either — fixed-price custom builds on AMMP OS." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const steps = [
  { title: "Scope call", text: "We map your requirement in an initial call and tell you if it is a fit." },
  { title: "Fixed quote", text: "A fixed price and a delivery date. No open-ended consulting." },
  { title: "Build", text: "Typically two to six weeks, with visibility as it takes shape." },
  { title: "Live and maintained", text: "It becomes part of the platform. We own the upkeep, not you." },
];

const buildItems = [
  { icon: PlugZap, label: "Device and datalogger integrations" },
  { icon: Cpu, label: "SCADA integrations" },
  { icon: BarChart3, label: "Custom dashboards and KPIs" },
  { icon: Ticket, label: "Ticketing and CMMS integrations" },
  { icon: FileSpreadsheet, label: "Billing and financial reporting logic" },
  { icon: Building2, label: "Customer-facing branded portals" },
  { icon: Globe, label: "Market data and API integrations" },
];

const cases = [
  { icon: Map, title: "Custom map with urgent alerts", text: "A geospatial view that surfaces open, high-priority alerts across the fleet so dispatch teams see what needs attention first." },
  { icon: Leaf, title: "Environmental-impact dashboard, live in two weeks", text: "CO2 avoided and trees saved, branded for an O&M provider and shared directly with their end customer." },
  { icon: Gauge, title: "Custom SCADA integration for a C&I operator", text: "A site-level SCADA connection plus the operational dashboard built on top of it, delivered against a fixed quote." },
];

const diy = [
  "You own maintenance forever, including every vendor API change.",
  "One vendor API is a weekend. Thirty of them is a team.",
  "Security, uptime and data retention become your problem.",
];

const ammp = [
  "We own the upkeep as part of the platform.",
  "Integrations across 30+ manufacturers, already maintained.",
  "ISO 27001 certified infrastructure, with your data exportable at any time.",
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="How tailoring works"
        title="Your portfolio isn't standard."
        highlight="Your platform shouldn't be either."
        intro="AMMP builds custom integrations, dashboards, KPIs and workflows on top of a maintained monitoring platform — the same platform your AI coworkers run on. You get the specific thing your business needs, without owning the upkeep of a platform."
        primary={{ label: "Send us your requirement", to: "/contact" }}
      />

      <Band tone="grey">
        <SectionHeading eyebrow="Process" title="From requirement to live in four steps" center />
        <StepList steps={steps} />
      </Band>

      <Band>
        <SectionHeading eyebrow="Scope" title="What we build" center />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {buildItems.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 rounded-xl border border-border bg-card p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="size-5 text-primary" />
              </div>
              <span className="text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>
      </Band>

      <Band tone="grey">
        <SectionHeading eyebrow="Examples" title="Three things we tailored" center />
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
        <div className="mt-10 overflow-hidden rounded-xl border border-border bg-card shadow-sm">
          <img src={customDashboardsImg} alt="Custom dashboards" className="w-full" loading="lazy" />
        </div>
      </Band>

      <Band>
        <SectionHeading eyebrow="Build vs buy" title="Build it yourself, or let us run it" center />
        <div className="mt-10 grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          <div className="rounded-xl border border-border bg-card p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-4">Build it yourself with AI tools</h3>
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
        <p className="mt-10 text-center text-lg font-medium">Build the differentiating 10%. Let us run the other 90%.</p>
      </Band>

      <Band tone="grey">
        <div className="max-w-2xl mx-auto text-center">
          <SectionHeading title="Send us the requirement your current platform said no to." intro="An initial scope call is usually enough to tell you whether it is a fit, and what it would cost." center />
          <Link to="/contact" className="button button-primary mt-8 inline-flex">
            Book a scope call
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </div>
      </Band>

      <PageCta />
    </>
  );
}
