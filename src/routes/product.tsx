import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Activity, ArrowRight, BarChart2, Bell, Code, FileText, Kanban, Plug, Receipt, Server, Settings2, Shield, Sparkles, TrendingUp, Zap } from "lucide-react";
import { Band, PageHero, SectionHeading, SplitFeature } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";
import energyMix from "@/assets/energy-mix.png";
import performanceAnalytics from "@/assets/performance-analytics.png";
import ticketingImage from "@/assets/ticketing.png";
import alertsDashboard from "@/assets/alerts-dashboard.png";
import pdfReportsNew from "@/assets/pdf-reports-new.png";
import energySavingsHub from "@/assets/energy-savings-hub.png";
import integrationsImage from "@/assets/integrations.png";
import customDashboardsImg from "@/assets/customisations-dashboards.jpg";
import rayVideo from "@/assets/ray-overview.mp4.asset.json";
import rayPoster from "@/assets/ray-video-poster.jpg";
import financialImpactReport from "@/assets/financial-impact-report.png";

export const Route = createFileRoute("/product")({
  head: () => ({ meta: [
    { title: "AMMP OS — the platform your AI coworker run on" },
    { name: "description", content: "Monitoring, ticketing, alerting, reporting, commercials and integrations in one platform, with an AI coworker grounded in the same data." },
    { property: "og:title", content: "AMMP OS — the platform your AI coworker run on" },
    { property: "og:description", content: "One platform for your entire renewable energy portfolio: monitoring, alerting, reporting, commercials and AI." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});

const categories = [
  { id: "monitoring", label: "Monitoring", icon: Activity, title: "Live visibility, before your colleagues even ask", intro: "Dashboards give an AI coworker and people the same grounded view of every site." },
  { id: "ticketing", label: "Ticketing", icon: Kanban, title: "Work orders your team and Ray both act on" },
  { id: "alerting", label: "Alerting", icon: Bell, title: "Catch issues before they get costly" },
  { id: "reporting", label: "Reporting", icon: FileText, title: "Reports your stakeholders trust" },
  { id: "commercials", label: "Commercials", icon: TrendingUp, title: "Prove the financial story of your portfolio" },
  { id: "integrations", label: "Integrations", icon: Plug, title: "Connect every system you already run" },
  { id: "customizations", label: "Customisations", icon: Settings2, title: "Built around your portfolio, not a template" },
  { id: "api", label: "API", icon: Code, title: "Build on the same data Ray uses" },
  { id: "ai", label: "AI", icon: Sparkles, title: "Where Ray comes in", intro: "Ray, the AI coworker, is built directly on top of AMMP OS, so it sees exactly what your dashboards see." },
] as const;

type CategoryId = (typeof categories)[number]["id"];

function Card({ icon: Icon, title, children }: { icon: typeof Zap; title: string; children: ReactNode }) {
  return (
    <div className="glass glass-lift rounded-2xl p-6">
      <Icon className="size-5 text-primary" />
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <div className="mt-2 text-sm leading-6 text-muted-foreground">{children}</div>
    </div>
  );
}

const panels: Record<CategoryId, ReactNode> = {
  monitoring: (
    <div className="space-y-16">
      <SplitFeature eyebrow="Real-time dashboards" title="Every site, one screen" text="Live visibility into all your sites with customizable portfolio and site-level views. Monitor power flows, battery states, and grid interactions from a single screen." image={energyMix} imageAlt="Real-time dashboards" />
      <SplitFeature reverse eyebrow="Performance analytics" title="Know which sites need attention" text="Track KPIs, identify underperformers, and benchmark across your portfolio. Understand exactly which sites need attention and why." image={performanceAnalytics} imageAlt="Performance analytics" />
    </div>
  ),
  ticketing: (
    <div className="space-y-16">
      <SplitFeature eyebrow="Workflows" title="Track issues from detection to resolution" text="Track and manage issues from detection to resolution. Integrated ticketing workflows keep your team aligned and accountable." image={ticketingImage} imageAlt="Ticketing" bullets={["Create tickets directly from alerts", "SLA tracking across every site"]} />
      <div className="glass rounded-2xl p-6">
        <div className="flex items-center gap-3"><Kanban className="size-5 text-primary" /><h3 className="text-lg font-semibold">monday.com integration</h3></div>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">Sync AMMP tickets with your monday.com boards so O&M teams can triage, assign and close work in the tool they already use. Currently in alpha, available through AMMP Labs.</p>
        <Link to="/beta" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">View in AMMP Labs <ArrowRight className="size-4" /></Link>
      </div>
    </div>
  ),
  alerting: (
    <SplitFeature eyebrow="Smart alerts" text="Configurable rules-based alerting with escalation paths and acknowledgment workflows. Get notified before small issues become costly problems." image={alertsDashboard} imageAlt="Smart alerts" />
  ),
  reporting: (
    <div className="space-y-16">
      <SplitFeature eyebrow="Automated PDF reports" title="Recurring reports, delivered on time" text="Schedule recurring performance reports for investors and clients. Professional documents delivered on time, every time." image={pdfReportsNew} imageAlt="Automated PDF reports" />
      <SplitFeature reverse eyebrow="Stakeholder Portal" title="Give clients real-time access" text="White-label dashboards giving clients real-time access to their system data. Boost transparency and client confidence." image={financialImpactReport} imageAlt="Stakeholder Portal" />
    </div>
  ),
  commercials: (
    <div className="space-y-16">
      <SplitFeature eyebrow="Cost Savings Hub" title="Real cost savings, per site" text="Tariff engine with time-of-use calculations showing real cost savings per site. Real-time savings visibility for end-clients with PPA and lease tracking. Demonstrate ROI to clients with hard numbers." image={energySavingsHub} imageAlt="Cost Savings Hub" />
      <div className="grid gap-5 md:grid-cols-2">
        <Card icon={TrendingUp} title="AMMP Finance">Financial performance reports alongside technical metrics for investors. Tell the complete story of your portfolio's value.</Card>
        <Card icon={Receipt} title="Billing Data Integration">Automated billing data extraction for streamlined PPA invoicing. Reduce manual work and billing errors.</Card>
      </div>
    </div>
  ),
  integrations: (
    <div className="space-y-16">
      <SplitFeature eyebrow="APIs" title="30+ vendors, no hardware required" text="Connect Solis, Sungrow, Huawei, SMA, and more, no hardware required at most sites. Automatic data syncing keeps your portfolio up to date." image={integrationsImage} imageAlt="APIs" />
      <div className="grid gap-5 md:grid-cols-2">
        <Card icon={Plug} title="AMMP Edge">Hardware gateway for non-API equipment: fuel sensors, generators, legacy inverters. Full visibility even for older or proprietary systems.</Card>
        <Card icon={BarChart2} title="Third-party tools">Integrate with ticketing, billing, CRM, and business intelligence tools. AMMP fits seamlessly into your existing workflows.</Card>
      </div>
      <Link to="/integrations" className="button button-ghost">View all integrations <ArrowRight className="size-4" /></Link>
    </div>
  ),
  customizations: (
    <div>
      <SplitFeature text="Bespoke dashboards designed around your portfolio, your KPIs, and how your team actually works, not a one-size-fits-all template." image={customDashboardsImg} imageAlt="Custom dashboards" bullets={["Custom integrations for niche inverters, meters, ERP or billing systems", "Custom KPIs: performance ratios, SLA thresholds, financial benchmarks", "Custom alerts matched to your O&M processes and contracts"]} />
      <Link to="/customization" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">See how tailoring works <ArrowRight className="size-4" /></Link>
    </div>
  ),
  api: (
    <div className="grid gap-5 md:grid-cols-3">
      <div className="rounded-xl border border-border bg-card p-6"><Code className="size-5 text-primary" /><h3 className="mt-4 text-lg font-semibold">AMMP Data API</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Connect to performance and generation data across your entire portfolio through a single, standardized access point, no need to integrate with multiple vendors individually.</p><a href="https://data-api.ammp.io/docs" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">Explore API docs <ArrowRight className="size-4" /></a></div>
      <Card icon={Zap} title="Faster time-to-market">Skip end-to-end development involving multiple integrations. Bring your products to market well ahead of the competition.</Card>
      <Card icon={Shield} title="Reliable & maintained">No unexpected breaking changes, expired certificates, or rate limits. Focus on building products on a rock-solid foundation.</Card>
    </div>
  ),
  ai: (
    <div>
      <div className="grid gap-5 md:grid-cols-3">
        <Card icon={Sparkles} title="AMMP Intelligence">AI-powered insights that analyze patterns across your portfolio to predict issues, prioritize tickets, and recommend actions before problems escalate.</Card>
        <Card icon={Server} title="MCP Server">A Model Context Protocol server, so any MCP-compatible AI assistant can securely query your assets, KPIs, alerts and raw time-series in natural language, within your existing access controls.</Card>
        <Card icon={Bell} title="AI Agents">A team of agents on top of the MCP server: Ray, an in-platform coworker, plus visualisation, QA and monitoring agents that proactively check data, dashboards and portfolio health.</Card>
      </div>
      <div className="glass-strong mt-8 overflow-hidden rounded-2xl p-2"><video src={rayVideo.url} poster={rayPoster} controls preload="metadata" className="w-full rounded-xl" /></div>
      <Link to="/ai" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">Learn more about AI at AMMP <ArrowRight className="size-4" /></Link>
    </div>
  ),
};

function Page() {
  const [active, setActive] = useState<CategoryId>("monitoring");
  const current = categories.find((c) => c.id === active)!;

  return (
    <>
      <PageHero
        eyebrow="Product"
        title="Your AI coworker need somewhere to work."
        highlight="AMMP OS is that platform."
        intro="AMMP OS combines technical monitoring, commercial tracking, and stakeholder reporting into a single platform designed for distributed renewable portfolios. AI coworker sit on top of it, reading the same live data your team already trusts."
        primary={{ label: "Try the demo", to: "/demo" }}
        secondary={{ label: "See AI at AMMP", to: "/ai" }}
      />

      <Band tone="grey">
        <div className="md:hidden">
          <label htmlFor="product-category" className="eyebrow">Category</label>
          <select id="product-category" value={active} onChange={(e) => setActive(e.target.value as CategoryId)}
            className="mt-2 h-11 w-full rounded-md border border-border bg-card px-3 text-sm">
            {categories.map((c) => <option key={c.id} value={c.id}>{c.label}</option>)}
          </select>
        </div>

        <div className="glass-strong hidden flex-wrap gap-1 rounded-2xl p-1.5 md:flex">
          {categories.map(({ id, label, icon: Icon }) => (
            <button key={id} type="button" onClick={() => setActive(id)}
              className={`inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition-colors ${active === id ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:bg-white/50 hover:text-foreground"}`}>
              <Icon className="size-4" />{label}
            </button>
          ))}
        </div>

        <div className="mt-12">
          {"intro" in current
            ? <SectionHeading eyebrow={current.label} title={current.title} intro={current.intro} eyebrowClassName="hidden md:block" />
            : <SectionHeading eyebrow={current.label} title={current.title} eyebrowClassName="hidden md:block" />}
          <div className="mt-10">{panels[active]}</div>
        </div>
      </Band>

      <PageCta />
    </>
  );
}
