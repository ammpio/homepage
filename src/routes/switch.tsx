import { createFileRoute, Link } from "@tanstack/react-router";
import { AlertTriangle, ArrowRight, BarChart3, Briefcase, ChevronRight, Clock, DollarSign, Wrench } from "lucide-react";
import { Band, PageHero, FeatureGrid, StatStrip, StepList, Faq } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";
import daystarLogo from "@/assets/partners/daystar-power-logo.png";
import solarsaverLogo from "@/assets/partners/solarsaver-logo.png";
import broadreachLogo from "@/assets/partners/broadreach-logo.png";

export const Route = createFileRoute("/switch")({
  head: () => ({ meta: [
    { title: "Why C&I solar companies switch to AMMP" },
    { name: "description", content: "Operators managing distributed solar and battery portfolios need more than vendor portals. AMMP gives you unified visibility, an AI coworker and automated reporting." },
    { property: "og:title", content: "Why C&I solar companies switch to AMMP" },
    { property: "og:description", content: "Unified visibility, automated reporting, and a platform that scales." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});

const personas = [
  { icon: Briefcase, title: "Pitching to the CEO / Managing Director", objection: "\u201COur current monitoring setup works fine.\u201D", reframe: "Your team is spending hours every month compiling reports from scattered portals. That's invisible cost. AMMP consolidates everything—your team gets time back, and you get reliable data for investor reporting.", impact: "SolarSaver cut reporting time from 1 month to 1 day. Broadreach unified 170+ sites into a single view.", leadWith: ["Total cost of manual reporting", "Risk of missed faults affecting revenue", "Investor confidence from automated, professional reports"] },
  { icon: Wrench, title: "Pitching to the Head of O&M / Technical Director", objection: "\u201CSwitching monitoring platforms mid-operation is too risky.\u201D", reframe: "AMMP connects to 30+ equipment brands with no hardware changes. You can run it alongside your current setup during the trial. Setup takes about a month, and we handle integration and data migration.", impact: "No hardware replacement. 6-month discounted trial. Side-by-side operation during transition.", leadWith: ["Equipment compatibility", "Low-touch trial approach", "Unified alerting across all brands"] },
  { icon: BarChart3, title: "Pitching to the Asset Manager / Portfolio Manager", objection: "\u201CI already get the data I need from vendor portals and spreadsheets.\u201D", reframe: "Vendor portals give you site-level data, but not portfolio-level insight. AMMP gives you cross-portfolio performance comparison, automated anomaly detection, and investor-ready reports without the spreadsheet wrangling.", impact: null, leadWith: ["Portfolio-level dashboards", "Automated PDF reports", "Financial impact visibility across all sites"] },
  { icon: DollarSign, title: "Pitching to the CFO / Finance Lead", objection: "\u201CHow much does this cost, and what's the ROI?\u201D", reframe: "Pricing is based on MWp and the modules you choose—it scales with your portfolio. The ROI comes from reduced O&M costs, reduced reporting overhead, and better investor relationships through professional, automated reporting.", impact: null, leadWith: ["MWp-based pricing that scales with your portfolio", "SolarSaver reporting time reduction", "Cost of undetected underperformance"] },
];

const faqs = [
  { q: "How long does setup take?", a: "About a month. Our team handles onboarding, integration, and data migration." },
  { q: "Do I need to replace my existing hardware?", a: "No. AMMP connects to equipment you already have from 30+ manufacturers." },
  { q: "What if I'm under contract with another monitoring provider?", a: "We can start with a low-touch dry run during the handover period, then move everything over quickly after initial setup." },
  { q: "How does pricing work?", a: "Based on MWp and the modules you choose. See the pricing page for details." },
];

function Page() {
  return (
    <>
      <PageHero eyebrow="Switching" title="Why C&I solar companies" highlight="switch to AMMP" intro="Operators managing distributed solar and battery portfolios need more than vendor portals. AMMP gives you unified visibility, AI coworker, automated reporting, and a platform that scales." primary={{ label: "Try the demo", to: "/demo" }} secondary={{ label: "Talk to sales", to: "/contact" }} />

      <Band tone="grey">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-center">What's happening</h2>
        <p className="mt-3 text-center text-lg text-muted-foreground">The C&I solar industry is shifting. Portfolios are growing, but the tools haven't kept up.</p>
        <FeatureGrid columns={3} features={[
          { icon: AlertTriangle, title: "Vendor fragmentation is growing", text: "Every new brand in your portfolio means another portal, another login, another data silo. Visibility gets harder as you scale." },
          { icon: Clock, title: "Manual reporting is unsustainable", text: "Compiling monthly reports from spreadsheets and screenshots costs your team hours, and the data is stale before it's sent." },
          { icon: Wrench, title: "Reactive maintenance costs more", text: "Without unified alerting, faults go unnoticed for days. By the time you find them, the revenue impact has already compounded." },
        ]} />
      </Band>

      <Band tone="white">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-center">Three things that make AMMP different</h2>
        <div className="mx-auto mt-10 max-w-3xl space-y-10">
          <div>
            <h3 className="text-2xl font-semibold">Teams actually use it</h3>
            <p className="mt-3 text-lg text-muted-foreground">AMMP is built for operators, not just dashboards. Your O&M team, asset managers, and clients all get views that make sense for them.</p>
            <blockquote className="mt-4 border-l-4 border-primary pl-4 italic text-foreground/80">"AMMP has become an integral part of our daily operations. The team actually uses it every day, that's the best proof it works."<footer className="mt-2 text-sm not-italic text-muted-foreground">— Adam Bekker, Broadreach Energy</footer></blockquote>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Works with your existing equipment</h3>
            <p className="mt-3 text-lg text-muted-foreground">Connect inverters, meters, batteries, and sensors from 30+ manufacturers. No hardware swaps, no vendor lock-in.</p>
            <Link to="/integrations" className="button button-ghost mt-4">View all integrations <ArrowRight className="size-4" /></Link>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Reporting that proves your value</h3>
            <p className="mt-3 text-lg text-muted-foreground">Automated PDF reports, stakeholder portals, and financial impact dashboards. Give your investors and clients the confidence they expect.</p>
            <blockquote className="mt-4 border-l-4 border-primary pl-4 italic text-foreground/80">"We went from spending a month on reporting to generating everything in a day. It completely changed how we present to investors."<footer className="mt-2 text-sm not-italic text-muted-foreground">— Chris Robinson, SolarSaver</footer></blockquote>
          </div>
        </div>
      </Band>

      <Band tone="grey">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-center">Who else switched</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {[{ logo: daystarLogo, name: "Daystar Power", stat: "400+ sites across West Africa" }, { logo: solarsaverLogo, name: "SolarSaver", stat: "Reporting cut from 1 month to 1 day" }, { logo: broadreachLogo, name: "Broadreach Energy", stat: "170+ sites unified in one view" }].map((c) => (
            <div key={c.name} className="flex flex-col items-center gap-4 rounded-xl border border-border bg-card p-6 text-center">
              <img src={c.logo} alt={c.name} className="h-10 object-contain" />
              <p className="text-sm text-muted-foreground">{c.stat}</p>
            </div>
          ))}
        </div>
      </Band>

      <Band tone="white">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-center">How it works</h2>
        <StepList steps={[
          { title: "Explore the demo", text: "Try the interactive demo and browse our examples. See what AMMP looks like for a portfolio like yours." },
          { title: "Talk to our team", text: "Contact sales and define your needs together. We'll map your equipment, integrations, and reporting requirements." },
          { title: "Start a discounted trial", text: "Sign up for a 6-month trial at a discounted price, including a pilot phase to validate AMMP before a full rollout." },
        ]} />
      </Band>

      <Band tone="grey">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-center">How to pitch AMMP internally</h2>
        <p className="mt-3 text-center text-lg text-muted-foreground">Different stakeholders care about different things. Here's how to frame the conversation for each.</p>
        <div className="mx-auto mt-10 max-w-3xl space-y-4">
          {personas.map((p) => (
            <details key={p.title} className="group rounded-lg border border-border bg-card p-6">
              <summary className="flex cursor-pointer list-none items-center gap-3 text-left marker:hidden">
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/10"><p.icon className="size-5 text-primary" /></span>
                <span className="text-lg font-semibold">{p.title}</span>
              </summary>
              <div className="mt-4 space-y-4 text-sm">
                <div><p className="font-medium uppercase tracking-wide text-muted-foreground">Their likely objection</p><p className="mt-1 italic text-foreground/80">{p.objection}</p></div>
                <div><p className="font-medium uppercase tracking-wide text-muted-foreground">How to reframe it</p><p className="mt-1 text-foreground/90">{p.reframe}</p></div>
                {p.impact && <div><p className="font-medium uppercase tracking-wide text-muted-foreground">Proof points</p><p className="mt-1 text-foreground/90">{p.impact}</p></div>}
                <div>
                  <p className="font-medium uppercase tracking-wide text-muted-foreground">Lead with</p>
                  <ul className="mt-1 space-y-1">{p.leadWith.map((l) => <li key={l} className="ml-5 list-disc text-foreground/90">{l}</li>)}</ul>
                </div>
              </div>
            </details>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-3xl rounded-lg border border-primary/20 bg-primary/5 p-6 text-center text-sm text-muted-foreground">These conversations plant the seed. A trial is what makes it real. Run AMMP alongside your current tools, and let the results speak for themselves.</p>
      </Band>

      <Band tone="white">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-center">Frequently asked questions</h2>
        <div className="mx-auto max-w-3xl"><Faq items={faqs} /></div>
      </Band>

      <PageCta />
    </>
  );
}
