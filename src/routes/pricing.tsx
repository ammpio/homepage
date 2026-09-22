import { Fragment, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bell, Check, ChevronDown, DollarSign, FileText, LayoutDashboard, Minus } from "lucide-react";
import { Band, Faq, PageHero, SectionHeading } from "@/components/site/sections";

export const Route = createFileRoute("/pricing")({
  head: () => ({ meta: [
    { title: "Pricing — flexible, modular plans | AMMP" },
    { name: "description", content: "Choose the AMMP OS modules you need. Pay per MWp/year. Scale as your portfolio grows, and add AI coworkers on top." },
    { property: "og:title", content: "Pricing — flexible, modular plans | AMMP" },
    { property: "og:description", content: "Modular pricing per MWp/year across Detect, Operate, Insight and Finance." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});

type Mod = { name: string; icon: typeof Bell; description: string; highlights: string[]; includesModule?: string; isAddOn?: boolean; isStandalone?: boolean };

const detect: Mod = { name: "AMMP Detect", icon: Bell, description: "Your centralized alert hub. Catch issues early with intelligent, KPI-driven alerts, without the noise.", highlights: ["All alerts in one place", "KPI-based alert detection", "Alert noise reduction", "Email / Teams / Webhook notifications"] };
const operate: Mod = { name: "AMMP Operate", icon: LayoutDashboard, description: "Live monitoring meets smart operations. Real-time dashboards, ticketing, and alerting in one place.", includesModule: "AMMP Detect", highlights: ["Real-time dashboards & KPIs", "Ticketing / work orders", "Create tickets from alerts", "Custom & KPI-based alert rules"] };
const insight: Mod = { name: "AMMP Insight", icon: FileText, description: "Deep performance analytics and automated PDF reporting. Know exactly how your assets are performing.", highlights: ["Loss Waterfall visualization", "IEC 61724 PR options", "Customizable reporting engine", "Stakeholder dashboards / portal"] };
const finance: Mod = { name: "AMMP Finance", icon: DollarSign, description: "Automated financial reports and billing-ready PDFs. Tariff-aware savings calculations for every stakeholder.", highlights: ["Automated energy savings calculations", "Tariff-structure compatibility", "Customizable reporting engine", "Stakeholder dashboards / portal"] };
const apiModule: Mod = { name: "AMMP Data API", icon: DollarSign, description: "All your energy data through a single RESTful API. No custom data plumbing needed.", isAddOn: true, highlights: ["RESTful API with all main inverter OEMs", "Access Alerts / Performance / Financial data", "No custom data plumbing needed"] };
const tariffDbModule: Mod = { name: "South Africa Tariff Database API", icon: DollarSign, description: "A standalone API for up-to-date South African tariff structures. Accurate grid tariffs, ready to integrate.", isStandalone: true, highlights: ["Eskom & municipal tariff structures", "Time-of-use rate schedules", "Automatic tariff updates"] };

function ModuleCard({ mod, popular = false }: { mod: Mod; popular?: boolean }) {
  const Icon = mod.icon;
  return (
    <div className={`glass glass-lift relative flex h-full flex-col rounded-2xl p-6 ${mod.isStandalone ? "bg-secondary/30" : popular ? "border-primary/50 shadow-lg" : ""}`}>
      {mod.isAddOn && <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">Add-on</div>}
      {mod.isStandalone && <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">Standalone API</div>}
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10"><Icon className="size-6 text-primary" /></div>
      <h3 className="mt-4 text-lg font-semibold">{mod.name}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{mod.description}</p>
      {mod.isAddOn && <p className="mt-2 text-xs italic text-muted-foreground">Requires a base module subscription</p>}
      <div className="flex-1">
        {mod.includesModule && (
          <div className="mt-4 flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/5 p-3"><Bell className="size-4 text-primary" /><span className="text-sm font-medium">Includes {mod.includesModule}</span></div>
        )}
        {mod.includesModule && <p className="mb-3 mt-3 text-xs uppercase tracking-wide text-muted-foreground">Plus</p>}
        <ul className="mt-4 space-y-3">
          {mod.highlights.map((h) => <li key={h} className="flex items-start gap-2 text-sm"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{h}</li>)}
        </ul>
      </div>
      <Link to="/contact" className={`button ${popular && !mod.isStandalone ? "button-primary" : "button-ghost"} mt-6 w-full justify-center`}>Contact sales <ArrowRight className="size-4" /></Link>
    </div>
  );
}

type CV = true | false | "add-on";
type Row = { category?: string; feature: string; detect: CV; operate: CV; insight: CV; finance: CV };
const comparisonData: Row[] = [
  { category: "Data & Connectivity", feature: "OEM API integrations (inverters, meters, loggers)", detect: true, operate: true, insight: true, finance: true },
  { feature: "AMMP Edge (hardware gateway)", detect: true, operate: true, insight: true, finance: true },
  { feature: "Weather data integration", detect: false, operate: false, insight: true, finance: false },
  { feature: "RESTful Data API", detect: "add-on", operate: "add-on", insight: "add-on", finance: "add-on" },
  { category: "Alerting", feature: "OEM alert forwarding", detect: true, operate: true, insight: false, finance: false },
  { feature: "Standard alert rules", detect: true, operate: true, insight: false, finance: false },
  { feature: "Custom alert rules", detect: true, operate: true, insight: false, finance: false },
  { feature: "KPI-based alerts", detect: true, operate: true, insight: false, finance: false },
  { feature: "Alert noise reduction", detect: true, operate: true, insight: false, finance: false },
  { feature: "Email notifications", detect: true, operate: true, insight: false, finance: false },
  { feature: "Slack / Teams integration", detect: true, operate: true, insight: false, finance: false },
  { feature: "Webhook notifications", detect: true, operate: true, insight: false, finance: false },
  { category: "Monitoring & Dashboards", feature: "Portfolio dashboards", detect: false, operate: true, insight: false, finance: false },
  { feature: "Site-level dashboards", detect: false, operate: true, insight: false, finance: false },
  { feature: "Device-level dashboards", detect: false, operate: true, insight: false, finance: false },
  { feature: "Real-time KPIs", detect: false, operate: true, insight: false, finance: false },
  { feature: "Technical KPIs", detect: false, operate: true, insight: true, finance: false },
  { feature: "Commercial KPIs", detect: false, operate: false, insight: false, finance: true },
  { category: "Operations", feature: "Ticketing / work orders", detect: false, operate: true, insight: false, finance: false },
  { feature: "Create tickets from alerts", detect: false, operate: true, insight: false, finance: false },
  { feature: "SLA tracking", detect: false, operate: true, insight: false, finance: false },
  { category: "Performance Analysis", feature: "Performance Ratio (PR)", detect: false, operate: false, insight: true, finance: false },
  { feature: "Weather-corrected PR", detect: false, operate: false, insight: true, finance: false },
  { feature: "IEC 61724 PR options", detect: false, operate: false, insight: true, finance: false },
  { feature: "Loss Waterfall analysis", detect: false, operate: false, insight: true, finance: false },
  { feature: "Availability calculations", detect: false, operate: false, insight: true, finance: false },
  { category: "Reporting", feature: "PDF report engine", detect: false, operate: false, insight: true, finance: true },
  { feature: "Custom report templates", detect: false, operate: false, insight: true, finance: true },
  { feature: "Scheduled report delivery", detect: false, operate: false, insight: true, finance: true },
  { feature: "White-label branding", detect: false, operate: false, insight: true, finance: true },
  { feature: "Stakeholder Portal", detect: false, operate: false, insight: true, finance: true },
  { category: "Financial", feature: "Tariff database", detect: false, operate: false, insight: false, finance: true },
  { feature: "Energy savings calculations", detect: false, operate: false, insight: false, finance: true },
  { feature: "Cost savings calculations", detect: false, operate: false, insight: false, finance: true },
  { feature: "Billing-ready reports", detect: false, operate: false, insight: false, finance: true },
];

function Cell({ v }: { v: CV }) {
  if (v === true) return <Check className="mx-auto size-4 text-primary" />;
  if (v === "add-on") return <span className="text-xs font-medium text-muted-foreground">Add-on</span>;
  return <Minus className="mx-auto size-4 text-muted-foreground/40" />;
}

const pricingFaqs = [
  { q: "How is AMMP OS priced?", a: "AMMP OS is priced per megawatt-peak (MWp) of monitored capacity, billed annually. You choose the modules you need and pay only for what you use." },
  { q: "Is there a minimum contract?", a: "A minimum annual fee applies to ensure quality support and service for all customers, regardless of portfolio size." },
  { q: "Can I add modules later?", a: "Yes, AMMP OS is fully modular. You can start with core monitoring and add reporting, financial, or API modules as your needs grow." },
  { q: "What modules are available?", a: "AMMP OS offers AMMP Detect, AMMP Operate, AMMP Insight, AMMP Finance, and the AMMP Data API. Each can be selected independently." },
  { q: "Are volume discounts available?", a: "Yes, discounts are available for larger portfolios and when subscribing to multiple modules. Contact us for a tailored proposal." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Flexible, modular pricing"
        intro="Choose the AMMP OS modules you need. Pay per MWp/year. Scale as your portfolio grows — and add AI coworkers on top once your data is grounded in AMMP."
        primary={{ label: "Contact sales", to: "/contact" }}
        secondary={{ label: "Try the demo", to: "/demo" }}
      />

      <Band tone="grey">
        <SectionHeading title="Choose your modules" intro="Most customers start with AMMP Operate and AMMP Insight together." />
        <div className="mt-10 grid gap-6 lg:grid-cols-4">
          <ModuleCard mod={detect} />
          <div className="glass-strong relative rounded-3xl border-primary/30 p-4 lg:col-span-2">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">Recommended combination</div>
            <div className="mt-2 grid gap-4 sm:grid-cols-2">
              <ModuleCard mod={operate} popular />
              <ModuleCard mod={insight} popular />
            </div>
          </div>
          <ModuleCard mod={finance} />
        </div>
      </Band>

      <Band>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
          <ModuleCard mod={apiModule} />
          <ModuleCard mod={tariffDbModule} />
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
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Get a custom proposal</h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">Tell us about your portfolio and requirements. We'll put together a tailored proposal that fits your needs and budget.</p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link to="/contact" className="button button-primary">Contact sales <ArrowRight className="size-4" /></Link>
            <Link to="/demo" className="button button-ghost">Try the demo</Link>
          </div>
        </div>
      </Band>

    </>
  );
}

function FeatureCompare() {
  const [open, setOpen] = useState(false);
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
        <>
          <div className="glass-strong mt-10 overflow-x-auto rounded-2xl">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="border-b border-border/60 bg-white/35">
                <tr><th className="p-4 font-semibold">Feature</th><th className="p-4 text-center font-semibold">Detect</th><th className="p-4 text-center font-semibold">Operate</th><th className="p-4 text-center font-semibold">Insight</th><th className="p-4 text-center font-semibold">Finance</th></tr>
              </thead>
              <tbody className="divide-y divide-border">
                {comparisonData.map((row, i) => (
                  <Fragment key={i}>
                    {row.category && <tr className="bg-secondary/30"><td colSpan={5} className="p-3 text-sm font-semibold">{row.category}</td></tr>}
                    <tr><td className="p-4 font-medium">{row.feature}</td><td className="p-4 text-center"><Cell v={row.detect} /></td><td className="p-4 text-center"><Cell v={row.operate} /></td><td className="p-4 text-center"><Cell v={row.insight} /></td><td className="p-4 text-center"><Cell v={row.finance} /></td></tr>
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-sm text-muted-foreground">Included · Not included · Add-on = available as add-on</p>
        </>
      )}
    </>
  );
}
