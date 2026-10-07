import { Fragment, useState, type ComponentType } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronDown, Code, LayoutDashboard, Minus, Server, Sparkles } from "lucide-react";
import { Band, Faq, PageHero, SectionHeading } from "@/components/site/sections";

export const Route = createFileRoute("/pricing")({
  head: () => ({ meta: [
    { title: "Pricing — flexible, modular plans | AMMP" },
    { name: "description", content: "Two modules priced per MWp/year: AMMP AI with Ray and full data access, and AMMP OS Platform for monitoring, alerting and reporting." },
    { property: "og:title", content: "Pricing — flexible, modular plans | AMMP" },
    { property: "og:description", content: "Two modules: AMMP AI and AMMP OS Platform, with MCP and Data API add-ons." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});

type Mod = { name: string; icon: ComponentType<{ className?: string }>; description: string; highlights: string[]; note?: string };

const aiModule: Mod = {
  name: "AMMP AI", icon: Sparkles,
  description: "Ray with full access to your portfolio data. Investigates, prioritizes and prepares the work for your team.",
  highlights: ["Ray in Slack, Microsoft Teams and AMMP OS", "Full data access: assets, KPIs, alerts, raw time-series", "Root-cause diagnosis and alarm triage by commercial impact", "SLA and contract checks with evidence", "Drafted reports, notes and exports"],
  note: "Runs on top of AMMP OS, or on your existing infrastructure such as Meteocontrol or Power Factors.",
};
const osModule: Mod = {
  name: "AMMP OS Platform", icon: LayoutDashboard,
  description: "Dashboards for monitoring, alerting and reporting across every site, inverter brand and datalogger.",
  highlights: ["Real-time portfolio, site and device dashboards", "KPI-based alerting with noise reduction", "Ticketing and work orders", "Performance analysis (PR, availability, loss waterfall)", "Automated technical and financial PDF reports"],
};
const addOns = [
  { name: "MCP server", icon: Server, text: "Connect Claude, Copilot or your own agent to your portfolio through the open Model Context Protocol." },
  { name: "Data API", icon: Code, text: "All your energy data through a single RESTful API, no custom data plumbing needed." },
];

function ModuleCard({ mod, popular = false }: { mod: Mod; popular?: boolean }) {
  const Icon = mod.icon;
  return (
    <div className={`glass glass-lift relative flex h-full flex-col rounded-3xl p-8 ${popular ? "border-primary/50 shadow-lg" : ""}`}>
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10"><Icon className="size-7 text-primary" /></div>
      <h3 className="mt-5 text-2xl font-medium">{mod.name}</h3>
      <p className="mt-2 text-muted-foreground">{mod.description}</p>
      <ul className="mt-6 flex-1 space-y-3">
        {mod.highlights.map((h) => <li key={h} className="flex items-start gap-2 text-sm"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{h}</li>)}
      </ul>
      {mod.note && <p className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm">{mod.note}</p>}
      <Link to="/contact" className="button button-pink mt-6 w-full justify-center">Contact sales <ArrowRight className="size-4" /></Link>
    </div>
  );
}

type CV = boolean | "add-on";
type Row = { category?: string; feature: string; ai: CV; os: CV };
const comparisonData: Row[] = [
  { category: "AI agents", feature: "Ray in Slack, Teams and AMMP OS", ai: true, os: false },
  { feature: "Root-cause diagnosis", ai: true, os: false },
  { feature: "Alarm triage by commercial impact", ai: true, os: false },
  { feature: "SLA and contract checks", ai: true, os: false },
  { feature: "Drafted reports and notes", ai: true, os: false },
  { feature: "Works on existing systems (Meteocontrol, Power Factors)", ai: true, os: false },
  { category: "Data & connectivity", feature: "OEM API integrations (inverters, meters, loggers)", ai: true, os: true },
  { feature: "AMMP Edge (hardware gateway)", ai: true, os: true },
  { feature: "Weather data integration", ai: true, os: true },
  { category: "Monitoring & alerting", feature: "Portfolio, site and device dashboards", ai: false, os: true },
  { feature: "KPI-based alerts and noise reduction", ai: true, os: true },
  { feature: "Email / Teams / webhook notifications", ai: true, os: true },
  { feature: "Ticketing and work orders", ai: false, os: true },
  { category: "Reporting", feature: "Performance analysis (PR, availability, loss waterfall)", ai: true, os: true },
  { feature: "PDF report engine and templates", ai: false, os: true },
  { feature: "Financial and savings reports", ai: false, os: true },
  { feature: "White-label stakeholder portal", ai: false, os: true },
  { category: "Add-ons", feature: "MCP server", ai: "add-on", os: "add-on" },
  { feature: "Data API", ai: "add-on", os: "add-on" },
];

function Cell({ v }: { v: CV }) {
  if (v === true) return <Check className="mx-auto size-4 text-primary" />;
  if (v === "add-on") return <span className="text-xs font-medium text-muted-foreground">Add-on</span>;
  return <Minus className="mx-auto size-4 text-muted-foreground/40" />;
}

const pricingFaqs = [
  { q: "How is AMMP priced?", a: "Both modules are priced per megawatt-peak (MWp) of capacity, billed annually. Take one module or both." },
  { q: "Do I need AMMP OS to use AMMP AI?", a: "No. Ray can work on top of AMMP OS or directly on your existing monitoring infrastructure, such as Meteocontrol or Power Factors." },
  { q: "Is there a minimum contract?", a: "A minimum annual fee applies to ensure quality support and service for all customers, regardless of portfolio size." },
  { q: "What are the add-ons?", a: "The MCP server and the Data API can be added to either module when you want your own tools or assistants to access your portfolio data." },
  { q: "Are volume discounts available?", a: "Yes, discounts are available for larger portfolios and when combining both modules. Contact us for a tailored proposal." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Flexible, modular pricing"
        intro="Two modules, priced per MWp/year: AMMP AI puts Ray to work on your data, AMMP OS Platform gives you the dashboards."
        primary={{ label: "Contact sales", to: "/contact" }}
        secondary={{ label: "Try the demo", to: "/demo" }}
      />

      <Band tone="grey" className="pt-8! md:pt-12!">
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
          <ModuleCard mod={aiModule} popular />
          <ModuleCard mod={osModule} />
        </div>
        <div className="mx-auto mt-8 max-w-5xl">
          <p className="text-center text-xs font-semibold uppercase tracking-wide text-muted-foreground">Add-ons</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {addOns.map(({ name, icon: Icon, text }) => (
              <div key={name} className="glass-soft flex items-start gap-3 rounded-2xl p-5"><Icon className="mt-0.5 size-5 shrink-0 text-primary" /><div><p className="font-medium">{name}</p><p className="mt-1 text-sm text-muted-foreground">{text}</p></div></div>
            ))}
          </div>
        </div>
      </Band>

      <Band tone="grey">
        <FeatureCompare />
      </Band>

      <Band>
        <SectionHeading center title="How pricing works" intro="Simple, transparent pricing that scales with your portfolio." />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-6"><h3 className="text-lg font-semibold">Per MWp/Year billing</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Each module is priced per megawatt-peak (MWp) of monitored capacity, billed annually. You only pay for what you use.</p></div>
          <div className="rounded-xl border border-border bg-card p-6"><h3 className="text-lg font-semibold">Volume & multi-bundle discounts</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Discounts are available for larger portfolios and when subscribing to multiple modules. Contact us for details.</p></div>
          <div className="rounded-xl border border-border bg-card p-6"><h3 className="text-lg font-semibold">Contract flexibility</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Multi-year contract options are available for customers looking for long-term commitment and additional savings.</p></div>
        </div>
      </Band>

      <Band tone="grey">
        <SectionHeading center title="Frequently asked questions" />
        <Faq items={pricingFaqs} />
      </Band>

      <Band>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">Get a custom proposal</h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">Tell us about your portfolio and requirements. We'll put together a tailored proposal that fits your needs and budget.</p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link to="/contact" className="button button-pink">Contact sales <ArrowRight className="size-4" /></Link>
            <Link to="/demo" className="button button-ghost">Try the demo</Link>
          </div>
        </div>
      </Band>

    </>
  );
}

function Status({ v }: { v: CV }) {
  if (v === true) return <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"><Check className="size-3.5" /><span className="hidden sm:inline">Included</span></span>;
  if (v === "add-on") return <span className="inline-flex items-center rounded-full border border-border bg-background/70 px-2.5 py-1 text-xs font-medium text-muted-foreground">+ Add-on</span>;
  return <Minus className="mx-auto size-4 text-muted-foreground/30" aria-label="Not included" />;
}

function FeatureCompare() {
  const [open, setOpen] = useState(false);
  const cols = [
    { name: "AMMP AI", icon: Sparkles, note: "Ray, your AI coworker" },
    { name: "AMMP OS Platform", icon: LayoutDashboard, note: "Monitoring and reporting" },
  ];
  return (
    <>
      <SectionHeading center title="Compare all features" />
      <div className="mt-8 text-center">
        <button type="button" onClick={() => setOpen((v) => !v)} className="button button-ghost" aria-expanded={open}>
          {open ? "Hide comparison" : "Show full comparison"}
          <ChevronDown className={`size-4 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
      </div>
      {open && (
        <div className="glass-strong mx-auto mt-10 max-w-5xl overflow-x-auto rounded-3xl">
          <table className="w-full min-w-[560px] table-fixed text-left text-sm">
            <colgroup><col /><col className="w-36 sm:w-56" /><col className="w-36 sm:w-56" /></colgroup>
            <thead>
              <tr>
                <th className="sticky top-16 z-10 border-b border-border/60 bg-background/95 p-5 align-bottom text-xs font-semibold uppercase tracking-wide text-muted-foreground backdrop-blur">Feature</th>
                {cols.map(({ name, icon: Icon, note }) => (
                  <th key={name} className="sticky top-16 z-10 border-b border-border/60 bg-background/95 p-5 text-center align-bottom backdrop-blur">
                    <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10"><Icon className="size-5 text-primary" /></div>
                    <p className="mt-2 text-sm font-medium">{name}</p>
                    <p className="mt-0.5 hidden text-xs font-normal text-muted-foreground sm:block">{note}</p>
                    <Link to="/contact" className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline">Contact sales <ArrowRight className="size-3" /></Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, i) => (
                <Fragment key={i}>
                  {row.category && (
                    <tr><td colSpan={3} className="px-5 pb-2 pt-7 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{row.category}</td></tr>
                  )}
                  <tr className="border-t border-border/40 transition-colors hover:bg-primary/5">
                    <td className="px-5 py-3.5 font-medium">{row.feature}</td>
                    <td className="px-5 py-3.5 text-center"><Status v={row.ai} /></td>
                    <td className="px-5 py-3.5 text-center"><Status v={row.os} /></td>
                  </tr>
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
