import { createFileRoute } from "@tanstack/react-router";
import { FileWarning, Map, LayoutDashboard, Repeat, LineChart, BadgeDollarSign } from "lucide-react";
import { Band, PageHero, SectionHeading, FeatureGrid, CompareTable, StepList, QuoteBand, Faq } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";

export const Route = createFileRoute("/compare/ammp-vs-alsoenergy")({
  head: () => ({ meta: [
    { title: "AMMP vs AlsoEnergy / PowerTrack — AMMP" },
    { name: "description", content: "Looking for an AlsoEnergy alternative or a PowerTrack alternative? Compare AMMP and AlsoEnergy on customization, integrations, support and BESS depth." },
    { property: "og:title", content: "AMMP vs AlsoEnergy / PowerTrack — AMMP" },
    { property: "og:description", content: "Looking for an AlsoEnergy alternative or a PowerTrack alternative? Compare AMMP and AlsoEnergy on customization, integrations, support and BESS depth." },
    { property: "og:type", content: "article" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Page,
});

const chooseThem = [
  "You want the largest installed base in the US market.",
  "A standardized feature set covers what your team needs.",
  "You are running utility-scale assets with an established track record behind the platform.",
];

const chooseUs = [
  "You need custom integrations built for your specific vendors and dataloggers.",
  "Your KPIs and dashboards don't match anyone's default template.",
  "Your portfolio is storage-heavy or hybrid, not PV only.",
  "You want direct access to the engineers who build the platform.",
  "Your business model needs its own workflows: billing, financing verification, customer-facing reporting.",
];

const rows = [
  { feature: "Customization model", ammp: "Custom integrations, KPIs and workflows built for you on a maintained platform.", other: "Configuration within a standardized, widely deployed feature set." },
  { feature: "Integration approach", ammp: "API-first: we connect to vendor clouds and APIs, with an edge gateway only where needed.", other: "Gateway-focused: data collection centerd on their own hardware and dataloggers." },
  { feature: "Support model", ammp: "Direct access to platform engineers, not a first-line queue.", other: "Tiered ticket queues with escalation paths." },
  { feature: "BESS and hybrid depth", ammp: "Built for PV, BESS, generators and hybrid sites, including high-datapoint storage systems.", other: "Strong PV heritage, storage supported as part of the standard product." },
  { feature: "Reporting flexibility", ammp: "Programmable, white-labeled reporting and customer-facing portals.", other: "Comprehensive report library with configurable templates." },
  { feature: "Time to ship a custom requirement", ammp: "Typically 2 to 6 weeks, against a fixed-price quote.", other: "Depends on the product roadmap for anything outside the standard set." },
  { feature: "Contract flexibility", ammp: "Modular pricing by MWp and modules, with a discounted trial period.", other: "Subscription tied to hardware and platform packages." },
];

const scenarios = [
  { icon: FileWarning, title: "The multi-vendor fleet", text: "Some platforms support certain inverter brands only via scheduled file push. The moment a file is late or malformed, you get gaps in exactly the fleet you needed to report on. An API-first integration keeps the same data model across every brand." },
  { icon: Map, title: "The urgent-alert map", text: "Dispatch teams need to see on a fleet-wide map what is urgent right now. Standard portals give you a list of alerts, not a geospatial view that orders the day's work." },
  { icon: LayoutDashboard, title: "The branded customer dashboard", text: "An O&M provider needs environmental-impact dashboards, CO2 avoided and trees saved, under their own brand for their end customers. Standard portals rarely bend that far." },
];

const switchSteps = [
  { icon: Repeat, title: "Run in parallel", text: "During the handover period both platforms collect data side by side, so nothing is lost while dashboards are rebuilt." },
  { icon: LineChart, title: "Rebuild your reporting", text: "We rebuild your dashboards and reports in AMMP, matched against what you already have in AlsoEnergy." },
  { icon: BadgeDollarSign, title: "Switch off once it matches", text: "You only turn off the old system once the numbers match and your team is comfortable with the new one." },
];

const faqs = [
  { q: "How does migration from AlsoEnergy work?", a: "We run in parallel. During the handover period both platforms collect data side by side, we rebuild your dashboards and reports in AMMP, and you only switch off the old system once the numbers match and your team is comfortable." },
  { q: "How does AMMP price its platform?", a: "Pricing is based on installed capacity in MWp and the modules you choose, with no hardware lock-in. Custom work is quoted at a fixed price before we start. A discounted six-month trial period is available for a subset of your portfolio." },
  { q: "Who owns the data, and can I export it?", a: "You own your data. Everything in AMMP is available through our REST API and bulk export, in an open format, for as long as you are a customer and on exit." },
  { q: "Is AMMP certified for information security?", a: "Yes. AMMP Technologies is ISO/IEC 27001:2022 certified. Data is encrypted in transit and at rest, with strict access control policies." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Platform comparison"
        title="AMMP vs AlsoEnergy / PowerTrack"
        intro="AlsoEnergy and its PowerTrack platform, now part of Stem, are a fine choice if you want the largest installed base and a standard feature set. If your portfolio has requirements that don't fit the template, keep reading."
        primary={{ label: "Book a demo", to: "/demo" }}
        primaryVariant="pink"
        secondary={{ label: "See how tailoring works", to: "/customization" }}
      />
      <Band tone="grey">
        <SectionHeading eyebrow="Which one fits your portfolio?" title="Which one fits your portfolio?" center />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-xl border border-border bg-card p-6 md:p-8">
            <h3 className="text-xl font-semibold">Choose AlsoEnergy if</h3>
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
        <SectionHeading eyebrow="Approach comparison" title="AMMP vs AlsoEnergy / PowerTrack" />
        <CompareTable otherLabel="AlsoEnergy / PowerTrack" rows={rows} />
        <p className="mt-4 text-center text-sm text-muted-foreground">AlsoEnergy information is based on publicly available documentation as of August 2026. Tell us if anything is out of date and we will correct it.</p>
      </Band>
      <Band tone="grey">
        <SectionHeading eyebrow="When the template breaks" title="When the template breaks" intro="Three situations we are asked about most often. None of them are unique to one vendor." center />
        <FeatureGrid columns={3} features={scenarios} />
      </Band>
      <Band tone="white">
        <SectionHeading eyebrow="Switching from AlsoEnergy / PowerTrack" title="How a switch actually happens" intro="Our AI coworker run on top of AMMP OS, so migrating dashboards and alert logic is a rebuild, not a rewrite of your operating model." center />
        <StepList steps={switchSteps} />
      </Band>
      <Band tone="grey">
        <QuoteBand quote="AMMP has become an integral part of our daily operations. The team actually uses it every day, that's the best proof it works." author="Adam Bekker, Broadreach Energy" />
      </Band>
      <Band tone="white">
        <SectionHeading eyebrow="FAQ" title="Frequently asked questions" center />
        <Faq items={faqs} />
      </Band>
      <PageCta />
    </>
  );
}
