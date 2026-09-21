import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BarChart2, Bell, Code, Kanban, Plug, Receipt, Server, Shield, Sparkles, TrendingUp, Zap } from "lucide-react";
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
import ammpIntelligence from "@/assets/ammp-intelligence.png";
import financialImpactReport from "@/assets/financial-impact-report.png";

export const Route = createFileRoute("/product")({
  head: () => ({ meta: [
    { title: "AMMP OS — the platform your AI coworkers run on" },
    { name: "description", content: "Monitoring, ticketing, alerting, reporting, commercials and integrations in one platform, with AI coworkers grounded in the same data." },
    { property: "og:title", content: "AMMP OS — the platform your AI coworkers run on" },
    { property: "og:description", content: "One platform for your entire renewable energy portfolio: monitoring, alerting, reporting, commercials and AI." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Product"
        title="Your AI coworkers need somewhere to work."
        highlight="AMMP OS is that platform."
        intro="AMMP OS combines technical monitoring, commercial tracking, and stakeholder reporting into a single platform designed for distributed renewable portfolios. AI coworkers sit on top of it, reading the same live data your team already trusts."
        primary={{ label: "Try the demo", to: "/demo" }}
        secondary={{ label: "See AI at AMMP", to: "/ai" }}
      />

      <Band tone="grey">
        <SectionHeading eyebrow="Monitoring & alerting" title="Live visibility, before your coworkers even ask" intro="Dashboards and alerts give AI coworkers and people the same grounded view of every site." />
        <div className="mt-10 space-y-16">
          <SplitFeature eyebrow="Real-time dashboards" title="Every site, one screen" text="Live visibility into all your sites with customizable portfolio and site-level views. Monitor power flows, battery states, and grid interactions from a single screen." image={energyMix} imageAlt="Real-time dashboards" />
          <SplitFeature reverse eyebrow="Performance analytics" title="Know which sites need attention" text="Track KPIs, identify underperformers, and benchmark across your portfolio. Understand exactly which sites need attention and why." image={performanceAnalytics} imageAlt="Performance analytics" />
          <SplitFeature eyebrow="Smart alerts" title="Catch issues before they get costly" text="Configurable rules-based alerting with escalation paths and acknowledgment workflows. Get notified before small issues become costly problems." image={alertsDashboard} imageAlt="Smart alerts" />
        </div>
      </Band>

      <Band>
        <SectionHeading eyebrow="Ticketing" title="Work orders your team and your coworkers both act on" />
        <div className="mt-10 space-y-16">
          <SplitFeature eyebrow="Ticketing" title="Track issues from detection to resolution" text="Track and manage issues from detection to resolution. Integrated ticketing workflows keep your team aligned and accountable." image={ticketingImage} imageAlt="Ticketing" bullets={["Create tickets directly from alerts", "SLA tracking across every site"]} />
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-3"><Kanban className="size-5 text-primary" /><h3 className="text-lg font-semibold">monday.com integration</h3></div>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">Sync AMMP tickets with your monday.com boards so O&M teams can triage, assign and close work in the tool they already use. Currently in alpha, available through AMMP Labs.</p>
            <Link to="/beta" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">View in AMMP Labs <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </Band>

      <Band tone="grey">
        <SectionHeading eyebrow="Reporting" title="Reports your stakeholders trust" />
        <div className="mt-10 space-y-16">
          <SplitFeature eyebrow="Automated PDF reports" title="Recurring reports, delivered on time" text="Schedule recurring performance reports for investors and clients. Professional documents delivered on time, every time." image={pdfReportsNew} imageAlt="Automated PDF reports" />
          <SplitFeature reverse eyebrow="Stakeholder Portal" title="Give clients real-time access" text="White-label dashboards giving clients real-time access to their system data. Boost transparency and client confidence." image={financialImpactReport} imageAlt="Stakeholder Portal" />
        </div>
      </Band>

      <Band>
        <SectionHeading eyebrow="Commercials" title="Prove the financial story of your portfolio" />
        <div className="mt-10 space-y-16">
          <SplitFeature eyebrow="Cost Savings Hub" title="Real cost savings, per site" text="Tariff engine with time-of-use calculations showing real cost savings per site. Real-time savings visibility for end-clients with PPA and lease tracking. Demonstrate ROI to clients with hard numbers." image={energySavingsHub} imageAlt="Cost Savings Hub" />
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-6"><TrendingUp className="size-5 text-primary" /><h3 className="mt-4 text-lg font-semibold">AMMP Finance</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Financial performance reports alongside technical metrics for investors. Tell the complete story of your portfolio's value.</p></div>
            <div className="rounded-xl border border-border bg-card p-6"><Receipt className="size-5 text-primary" /><h3 className="mt-4 text-lg font-semibold">Billing Data Integration</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Automated billing data extraction for streamlined PPA invoicing. Reduce manual work and billing errors.</p></div>
          </div>
        </div>
      </Band>

      <Band tone="grey">
        <SectionHeading eyebrow="Integrations" title="Connect every system you already run" />
        <div className="mt-10 space-y-16">
          <SplitFeature eyebrow="APIs" title="30+ vendors, no hardware required" text="Connect Solis, Sungrow, Huawei, SMA, and more, no hardware required at most sites. Automatic data syncing keeps your portfolio up to date." image={integrationsImage} imageAlt="APIs" />
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-6"><Plug className="size-5 text-primary" /><h3 className="mt-4 text-lg font-semibold">AMMP Edge</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Hardware gateway for non-API equipment: fuel sensors, generators, legacy inverters. Full visibility even for older or proprietary systems.</p></div>
            <div className="rounded-xl border border-border bg-card p-6"><BarChart2 className="size-5 text-primary" /><h3 className="mt-4 text-lg font-semibold">Third-party tools</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Integrate with ticketing, billing, CRM, and business intelligence tools. AMMP fits seamlessly into your existing workflows.</p></div>
          </div>
          <Link to="/integrations" className="button button-ghost">View all integrations <ArrowRight className="size-4" /></Link>
        </div>
      </Band>

      <Band>
        <SectionHeading eyebrow="Customisations" title="Built around your portfolio, not a template" />
        <div className="mt-10">
          <SplitFeature eyebrow="Custom dashboards" title="Designed around how your team works" text="Bespoke dashboards designed around your portfolio, your KPIs, and how your team actually works, not a one-size-fits-all template." image={customDashboardsImg} imageAlt="Custom dashboards" bullets={["Custom integrations for niche inverters, meters, ERP or billing systems", "Custom KPIs: performance ratios, SLA thresholds, financial benchmarks", "Custom alerts matched to your O&M processes and contracts"]} />
          <Link to="/customization" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">See how tailoring works <ArrowRight className="size-4" /></Link>
        </div>
      </Band>

      <Band tone="grey">
        <SectionHeading eyebrow="API" title="Build on the same data your coworkers use" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-6"><Code className="size-5 text-primary" /><h3 className="mt-4 text-lg font-semibold">AMMP Data API</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Connect to performance and generation data across your entire portfolio through a single, standardized access point, no need to integrate with multiple vendors individually.</p><a href="https://data-api.ammp.io/docs" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">Explore API docs <ArrowRight className="size-4" /></a></div>
          <div className="rounded-xl border border-border bg-card p-6"><Zap className="size-5 text-primary" /><h3 className="mt-4 text-lg font-semibold">Faster time-to-market</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Skip end-to-end development involving multiple integrations. Bring your products to market well ahead of the competition.</p></div>
          <div className="rounded-xl border border-border bg-card p-6"><Shield className="size-5 text-primary" /><h3 className="mt-4 text-lg font-semibold">Reliable & maintained</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">No unexpected breaking changes, expired certificates, or rate limits. Focus on building products on a rock-solid foundation.</p></div>
        </div>
      </Band>

      <Band>
        <SectionHeading eyebrow="AI" title="Where the coworkers come in" intro="AI coworkers are built directly on top of AMMP OS, so they see exactly what your dashboards see." />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-6"><Sparkles className="size-5 text-primary" /><h3 className="mt-4 text-lg font-semibold">AMMP Intelligence</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">AI-powered insights that analyze patterns across your portfolio to predict issues, prioritize tickets, and recommend actions before problems escalate.</p></div>
          <div className="rounded-xl border border-border bg-card p-6"><Server className="size-5 text-primary" /><h3 className="mt-4 text-lg font-semibold">MCP Server</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">A Model Context Protocol server, so any MCP-compatible AI assistant can securely query your assets, KPIs, alerts and raw time-series in natural language, within your existing access controls.</p></div>
          <div className="rounded-xl border border-border bg-card p-6"><Bell className="size-5 text-primary" /><h3 className="mt-4 text-lg font-semibold">AI Agents</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">A team of agents on top of the MCP server: Ray, an in-platform coworker, plus visualisation, QA and monitoring agents that proactively check data, dashboards and portfolio health.</p></div>
        </div>
        <div className="mt-8 overflow-hidden rounded-xl border border-border bg-card shadow-sm"><img src={ammpIntelligence} alt="AMMP Intelligence" className="w-full" loading="lazy" /></div>
        <Link to="/ai" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">Learn more about AI at AMMP <ArrowRight className="size-4" /></Link>
      </Band>

      <PageCta />
    </>
  );
}
