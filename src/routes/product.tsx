import { assetUrl } from "@/lib/assets";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Activity, ArrowRight, BarChart2, Bell, Code, FileText, Kanban, Plug, Receipt, Settings2, Shield, Sparkles, TrendingUp, Zap } from "lucide-react";
import { Band, PageHero, SectionHeading, SplitFeature } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";
import { HeroVideo } from "@/components/site/RaySections";
import overviewVideo from "@/assets/ray-by-ammp-overview.mp4.asset.json";
import overviewPoster from "@/assets/ray-by-ammp-overview-poster.jpg.asset.json";
import overviewPt from "@/assets/Ray_by_AMMP_overview_PT-BR.mp4.asset.json";
import overviewEs from "@/assets/Ray_by_AMMP_overview_ES.mp4.asset.json";
import { useLanguage } from "@/i18n/LanguageContext";

function LocalizedOverviewVideo() {
  const { language } = useLanguage();
  const src = language === "pt" ? assetUrl(overviewPt) : language === "es" ? assetUrl(overviewEs) : assetUrl(overviewVideo);
  return <HeroVideo key={src} src={src} poster={assetUrl(overviewPoster)} />;
}
import energyMix from "@/assets/energy-mix.png";
import performanceAnalytics from "@/assets/performance-analytics.png";
import ticketingImage from "@/assets/ticketing.png";
import alertsDashboard from "@/assets/alerts-dashboard.png";
import pdfReportsNew from "@/assets/pdf-reports-new.png";
import energySavingsHub from "@/assets/energy-savings-hub.png";
import integrationsImage from "@/assets/integrations.png";
import customDashboardsImg from "@/assets/customisations-dashboards.jpg";
import financialImpactReport from "@/assets/financial-impact-report.png";

const categoryIds = ["monitoring", "ticketing", "alerting", "reporting", "commercials", "integrations", "customizations", "api"] as const;
type CategoryId = (typeof categoryIds)[number];

export const Route = createFileRoute("/product")({
  staticData: { sitemap: true },
  validateSearch: (search: Record<string, unknown>): { tab?: CategoryId | undefined } => ({
    tab: categoryIds.includes(search["tab"] as CategoryId) ? (search["tab"] as CategoryId) : undefined,
  }),
  head: () => ({ meta: [
    { title: "AMMP Product Overview — robust data meets collaborative intelligence" },
    { name: "description", content: "AMMP unifies live portfolio data, monitoring, alerting, ticketing, reporting and Ray, your AI coworker, with the right interface for every workflow." },
    { property: "og:title", content: "AMMP Product Overview — robust data meets collaborative intelligence" },
    { property: "og:description", content: "One system for renewable energy portfolios: live data, operations and AI collaboration." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});

const categories = [
  { id: "monitoring", label: "Monitoring", icon: Activity },
  { id: "ticketing", label: "Ticketing", icon: Kanban },
  { id: "alerting", label: "Alerting", icon: Bell },
  { id: "reporting", label: "Reporting", icon: FileText },
  { id: "commercials", label: "Commercials", icon: TrendingUp },
  { id: "integrations", label: "Integrations", icon: Plug },
  { id: "customizations", label: "Customizations", icon: Settings2 },
  { id: "api", label: "API & MCP", icon: Code },
] as const;

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
      <SplitFeature eyebrow="Real-time dashboards" title="Live visibility across your portfolio" text="Customizable portfolio and site-level dashboards give people and Ray the same grounded view of every site — power flows, battery states and grid interactions on one screen." image={energyMix} imageAlt="Portfolio dashboard showing live power flows, battery state and grid interaction" />
      <SplitFeature reverse eyebrow="Performance analytics" title="Know which sites need attention" text="Track KPIs, identify underperformers, and benchmark across your portfolio. Understand exactly which sites need attention and why." image={performanceAnalytics} imageAlt="Performance analytics chart benchmarking sites and flagging underperformers" />
    </div>
  ),
  ticketing: (
    <div className="space-y-16">
      <SplitFeature eyebrow="Workflows" title="Work orders your team and Ray both act on" text="Integrated ticketing workflows track every issue from detection to resolution and keep your team aligned and accountable." image={ticketingImage} imageAlt="Ticketing board tracking work orders from alert to resolution" bullets={["Create tickets directly from alerts", "SLA tracking across every site"]} />
      <div className="glass rounded-2xl p-6">
        <div className="flex items-center gap-3"><Kanban className="size-5 text-primary" /><h3 className="text-lg font-semibold">monday.com integration</h3></div>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">Sync AMMP tickets with your monday.com boards so O&M teams can triage, assign and close work in the tool they already use. Currently in alpha, available through AMMP Labs.</p>
        <Link to="/beta" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">View in AMMP Labs <ArrowRight className="size-4" /></Link>
      </div>
    </div>
  ),
  alerting: (
    <SplitFeature eyebrow="Smart alerts" title="Catch issues before they get costly" text="Configurable rules-based alerting with escalation paths and acknowledgment workflows, so small issues are caught before they become costly problems." image={alertsDashboard} imageAlt="Alerts dashboard with rule-based alarms and escalation status" />
  ),
  reporting: (
    <div className="space-y-16">
      <SplitFeature eyebrow="Automated PDF reports" title="Reports your stakeholders trust" text="Schedule recurring performance reports for investors and clients — professional documents delivered on time, every time." image={pdfReportsNew} imageAlt="Automated PDF performance report prepared for investors" />
      <SplitFeature reverse eyebrow="Stakeholder Portal" title="Give clients real-time access" text="White-label dashboards giving clients real-time access to their system data. Boost transparency and client confidence." image={financialImpactReport} imageAlt="White-label stakeholder portal showing a financial impact report" />
    </div>
  ),
  commercials: (
    <div className="space-y-16">
      <SplitFeature eyebrow="Cost Savings Hub" title="Prove the financial story of your portfolio" text="Tariff engine with time-of-use calculations showing real cost savings per site, with PPA and lease tracking and real-time visibility for end-clients, so you can demonstrate ROI with hard numbers." image={energySavingsHub} imageAlt="Cost Savings Hub showing time-of-use tariff savings per site" />
      <div className="grid gap-5 md:grid-cols-2">
        <Card icon={TrendingUp} title="AMMP Finance">Financial performance reports alongside technical metrics for investors. Tell the complete story of your portfolio's value.</Card>
        <Card icon={Receipt} title="Billing Data Integration">Automated billing data extraction for streamlined PPA invoicing. Reduce manual work and billing errors.</Card>
      </div>
    </div>
  ),
  integrations: (
    <div className="space-y-16">
      <SplitFeature eyebrow="APIs" title="Connect every system you already run" text="Connect Solis, Sungrow, Huawei, SMA, and more, no hardware required at most sites. Automatic data syncing keeps your portfolio up to date." image={integrationsImage} imageAlt="Integrations overview connecting inverter brands to AMMP OS" />
      <div className="grid gap-5 md:grid-cols-2">
        <Card icon={Plug} title="AMMP Edge">Hardware gateway for non-API equipment: fuel sensors, generators, legacy inverters. Full visibility even for older or proprietary systems.</Card>
        <Card icon={BarChart2} title="Third-party tools">Integrate with ticketing, billing, CRM, and business intelligence tools. AMMP fits seamlessly into your existing workflows.</Card>
      </div>
      <Link to="/integrations" className="button button-ghost">View all integrations <ArrowRight className="size-4" /></Link>
    </div>
  ),
  customizations: (
    <div>
      <SplitFeature title="Built around your portfolio, not a template" text="Bespoke dashboards designed around your portfolio, your KPIs, and how your team actually works." image={customDashboardsImg} imageAlt="Custom dashboard built around a portfolio's own KPIs" bullets={["Custom integrations for niche inverters, meters, ERP or billing systems", "Custom KPIs: performance ratios, SLA thresholds, financial benchmarks", "Custom alerts matched to your O&M processes and contracts"]} />
      <Link to="/customization" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">See tailored solutions <ArrowRight className="size-4" /></Link>
    </div>
  ),
  api: (
    <div className="space-y-10">
      <SectionHeading title="Build on the same data Ray uses" intro="One source for the dashboards your team reads, the answers Ray gives and the agents you build yourself." />
      <div className="grid gap-5 md:grid-cols-2">
      <div className="rounded-xl border border-border bg-card p-6"><Code className="size-5 text-primary" /><h3 className="mt-4 text-lg font-semibold">AMMP Data API</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Connect to performance and generation data across your entire portfolio through a single, standardized access point, no need to integrate with multiple vendors individually.</p><a href="https://data-api.ammp.io/docs" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">Explore API docs <ArrowRight className="size-4" /></a></div>
      <div className="rounded-xl border border-border bg-card p-6"><Sparkles className="size-5 text-primary" /><h3 className="mt-4 text-lg font-semibold">AMMP MCP Server</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Give your own AI assistants and agents secure, structured access to your portfolio data. The MCP server exposes the same evidence Ray works from, so tools like Claude or your internal copilots can query sites, KPIs and alerts directly.</p><Link to="/mcp" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">Learn about the MCP server <ArrowRight className="size-4" /></Link></div>
      <Card icon={Zap} title="Faster time-to-market">Skip end-to-end development involving multiple integrations. Bring your products to market well ahead of the competition.</Card>
        <Card icon={Shield} title="Reliable & maintained">No unexpected breaking changes, expired certificates, or rate limits. Focus on building products on a rock-solid foundation.</Card>
      </div>
    </div>
  ),
};

function Page() {
  const { tab } = Route.useSearch();
  const [active, setActive] = useState<CategoryId>(tab ?? "monitoring");

  useEffect(() => {
    if (tab) {
      setActive(tab);
      requestAnimationFrame(() =>
        document.getElementById("category-content")?.scrollIntoView({ behavior: "smooth", block: "start" })
      );
    }
  }, [tab]);

  return (
    <>
      <PageHero
        eyebrow="Product overview"
        title="Where robust data meets"
        highlight="collaborative intelligence."
        intro="AMMP brings live portfolio data, core operations and AI collaboration into a single system. From multi-vendor telemetry and automated ticketing to proactive triage in Slack and Teams, AMMP delivers the right interface for every workflow."
        primary={{ label: "See the demo", to: "/demo" }}
        secondary={{ label: "Meet Ray", to: "/ray" }}
      />

      <Band tone="white">
        <div className="mx-auto max-w-5xl">
          <LocalizedOverviewVideo />
        </div>
      </Band>

      <Band tone="white">
        <SectionHeading eyebrow="How AMMP works" title="One source of truth, two ways to work" />
        <div className="mx-auto mt-10 max-w-4xl space-y-3">
          <Link to="/ray" className="glass glass-lift flex flex-col gap-4 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex min-w-0 items-start gap-4">
              <Sparkles className="mt-1 size-5 shrink-0 text-primary" />
              <div className="min-w-0">
                <p className="eyebrow">Collaborative intelligence</p>
                <h3 className="mt-1 text-lg font-semibold">Ray, your AI coworker</h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">Morning fleet triage, root-cause answers with cited evidence and drafted stakeholder updates, right in Slack, Microsoft Teams or the AMMP workspace.</p>
              </div>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-primary">Meet Ray <ArrowRight className="size-4" /></span>
          </Link>
          <div className="flex justify-center"><span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">Unified on one platform and data foundation</span></div>
          <div className="glass-strong rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <Activity className="mt-1 size-5 shrink-0 text-primary" />
              <div className="min-w-0">
                <p className="eyebrow">Operational workflows</p>
                <h3 className="mt-1 text-lg font-semibold">AMMP OS, the core management platform</h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">Live data from 30+ vendor systems, SLA-tracked ticketing, rules-based alerting, reporting, commercial tracking, plus the Data API and MCP server.</p>
              </div>
            </div>
          </div>
        </div>
      </Band>

      <Band tone="grey">
        <SectionHeading eyebrow="Platform capabilities" title="Functionality and interfaces for every workflow" intro="Whether it's an engineer in a deep-dive dashboard, an O&M lead on the go, a CFO assessing contractor efficiency or an investor reading a scheduled report, AMMP gives every person the right way to get work done." />
        <div className="-mx-4 mt-10 overflow-x-auto px-4 [scrollbar-width:none] md:mx-0 md:overflow-visible md:px-0" role="tablist" aria-label="AMMP OS modules">
          <div className="glass-strong flex w-max gap-1 rounded-2xl p-1.5 md:w-full md:flex-wrap">
            {categories.map(({ id, label, icon: Icon }) => (
              <button key={id} type="button" role="tab" aria-selected={active === id} onClick={() => setActive(id)}
                className={`inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl px-3 py-2 text-sm font-medium transition-colors md:flex-1 ${active === id ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:bg-white/50 hover:text-foreground"}`}>
                <Icon className="size-4" />{label}
              </button>
            ))}
          </div>
        </div>

        <div id="category-content" key={active} className="mt-12 scroll-mt-24">
          {panels[active]}
        </div>
      </Band>

      <PageCta />
    </>
  );
}
