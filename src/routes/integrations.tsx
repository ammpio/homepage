import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bot, Cloud, HardDrive, Plug, Zap } from "lucide-react";
import { Band, PageHero, SectionHeading } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";

export const Route = createFileRoute("/integrations")({
  head: () => ({ meta: [
    { title: "Integrations & Add-ons — AMMP" },
    { name: "description", content: "Connect any device, any brand. AMMP integrates with leading manufacturers through cloud-to-cloud APIs, plus AMMP Edge for non-API equipment, giving your AI coworkers one grounded view of every system." },
    { property: "og:title", content: "Integrations & Add-ons — AMMP" },
    { property: "og:description", content: "30+ integrations across inverters, meters, batteries, EMS and data services." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});

const inverters = ["Solis", "Sungrow", "GoodWe", "Huawei", "SMA", "Fronius", "Victron", "SolarEdge", "Deye", "Growatt", "ATESS", "Phocos", "Solarman", "Solar-Log", "SunSynk", "SigEnergy"];
const meters = ["LiveWire", "Elmeasure"];
const batteries = ["Victron", "Huawei", "AlphaESS", "APSystems", "FreedomWon", "Ingeteam", "Ageto", "SolarMD", "AccuEnergy", "ATESS"];
const ems = ["Higeco", "Elum Energy", "Energitrack (former DataGuru)", "ComAp", "Encombi", "Polar Monitoring"];
const dataServices = ["Solcast", "SolarGIS"];

const softwareAddons = [
  { name: "Google Looker Studio", category: "Reporting", description: "Custom reporting and business intelligence dashboards" },
  { name: "Microsoft Power BI", category: "Reporting", description: "Advanced analytics and data visualization" },
  { name: "Slack / Microsoft Teams", category: "Notifications", description: "Real-time alert notifications in your team's chat" },
  { name: "SmartHelio", category: "Analytics", description: "AI-driven PV analytics for predictive maintenance and yield optimisation" },
  { name: "60Hertz", category: "Operations", description: "Maintenance management and work order tracking" },
];

const edgeFeatures = [
  { title: "Non-API Device Support", description: "Connect legacy equipment and devices without cloud APIs via Modbus, serial, or other protocols." },
  { title: "Fuel Level Sensors", description: "Monitor diesel tank levels for hybrid systems with real-time fuel consumption tracking." },
  { title: "Temperature Sensors", description: "Track ambient and equipment temperatures for performance optimisation." },
  { title: "Diesel Generator Controllers", description: "Integrate genset controllers for complete hybrid system visibility." },
  { title: "Smart Meters", description: "Connect utility meters for accurate grid import/export measurement." },
  { title: "Custom Sensors", description: "Support for custom I/O and sensor configurations for unique requirements." },
];

function BrandGroup({ title, brands }: { title: string; brands: string[] }) {
  if (brands.length === 0) return null;
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {brands.map((b) => <span key={b} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium">{b}</span>)}
      </div>
    </div>
  );
}

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Integrations"
        title="Every system feeds the same"
        highlight="grounded context."
        intro="Connect any device, any brand. AMMP integrates with leading manufacturers through cloud-to-cloud APIs, plus AMMP Edge for non-API equipment, so your AI coworkers and your team work from the same unified data, not fragmented vendor portals."
        primary={{ label: "Contact sales", to: "/contact" }}
        secondary={{ label: "Try the demo", to: "/demo" }}
      />

      <Band tone="grey">
        <div className="flex items-center gap-3"><Cloud className="size-6 text-primary" /><SectionHeading title="API integrations" intro="AMMP connects directly to manufacturer cloud platforms, pulling data automatically without additional hardware. Zero configuration at the site level." /></div>
        <div className="mt-10 space-y-10">
          <BrandGroup title="Inverters & Hybrid Systems" brands={inverters} />
          <BrandGroup title="Smart Meters" brands={meters} />
          <BrandGroup title="Battery Systems" brands={batteries} />
          <BrandGroup title="Energy Management Systems" brands={ems} />
          <BrandGroup title="Data Services" brands={dataServices} />
        </div>
        <p className="mt-8 text-sm text-muted-foreground">Don't see your equipment? <Link to="/contact" className="text-primary hover:underline">Contact us</Link>, we're adding new integrations regularly.</p>
      </Band>

      <Band>
        <div className="flex items-center gap-3"><Plug className="size-6 text-primary" /><SectionHeading title="Software add-ons & integrations" intro="Extend AMMP with specialized tools for analytics, maintenance, notifications, and reporting." /></div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {softwareAddons.map((addon) => (
            <div key={addon.name} className="rounded-xl border border-border bg-card p-6">
              <p className="text-xs font-medium text-primary">{addon.category}</p>
              <h3 className="mt-1 font-semibold">{addon.name}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{addon.description}</p>
            </div>
          ))}
        </div>
      </Band>

      <Band tone="grey">
        <div className="flex items-center gap-3"><HardDrive className="size-6 text-primary" /><SectionHeading title="AMMP Edge data logger" intro="AMMP Edge is a hardware gateway that interfaces with on-site devices and connects them to the AMMP platform." /></div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {edgeFeatures.map((f) => (
            <div key={f.title} className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-2"><Zap className="size-4 text-primary" /><h3 className="font-semibold">{f.title}</h3></div>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>
      </Band>

      <Band>
        <div className="mx-auto max-w-2xl text-center">
          <Bot className="mx-auto size-8 text-primary" />
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Ready to optimise your portfolio?</h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">Join hundreds of operators monitoring gigawatts of clean energy every day. No credit card required to start.</p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link to="/contact" className="button button-primary">Contact sales <ArrowRight className="size-4" /></Link>
            <Link to="/demo" className="button button-ghost">Try the demo</Link>
          </div>
        </div>
      </Band>

      <PageCta />
    </>
  );
}
