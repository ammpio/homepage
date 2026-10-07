import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Activity, ArrowRight, BarChart2, Bell, Code, FileText, Kanban, Plug, Receipt, Settings2, Shield, Sparkles, TrendingUp, Zap } from "lucide-react";
import { Band, PageHero, SectionHeading, SplitFeature } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";
import { HeroVideo } from "@/components/site/RaySections";
import overviewVideo from "@/assets/ray-by-ammp-overview.mp4.asset.json";
import overviewPoster from "@/assets/ray-by-ammp-overview-poster.jpg.asset.json";
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
  validateSearch: (search: Record<string, unknown>): { tab?: CategoryId } => ({
    tab: categoryIds.includes(search.tab as CategoryId) ? (search.tab as CategoryId) : undefined,
  }),
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
  { id: "customizations", label: "Customizations", icon: Settings2, title: "Built around your portfolio, not a template" },
  { id: "api", label: "API & MCP", icon: Code, title: "Build on the same data Ray uses" },
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
      <Link to="/customization" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">See tailored solutions <ArrowRight className="size-4" /></Link>
    </div>
  ),
  api: (
    <div className="grid gap-5 md:grid-cols-2">
      <div className="rounded-xl border border-border bg-card p-6"><Code className="size-5 text-primary" /><h3 className="mt-4 text-lg font-semibold">AMMP Data API</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Connect to performance and generation data across your entire portfolio through a single, standardized access point, no need to integrate with multiple vendors individually.</p><a href="https://data-api.ammp.io/docs" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">Explore API docs <ArrowRight className="size-4" /></a></div>
      <div className="rounded-xl border border-border bg-card p-6"><Sparkles className="size-5 text-primary" /><h3 className="mt-4 text-lg font-semibold">AMMP MCP Server</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Give your own AI assistants and agents secure, structured access to your portfolio data. The MCP server exposes the same evidence Ray works from, so tools like Claude or your internal copilots can query sites, KPIs and alerts directly.</p><Link to="/mcp" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">Learn about the MCP server <ArrowRight className="size-4" /></Link></div>
      <Card icon={Zap} title="Faster time-to-market">Skip end-to-end development involving multiple integrations. Bring your products to market well ahead of the competition.</Card>
      <Card icon={Shield} title="Reliable & maintained">No unexpected breaking changes, expired certificates, or rate limits. Focus on building products on a rock-solid foundation.</Card>
    </div>
  ),
};

function Page() {
  const { tab } = Route.useSearch();
  const [active, setActive] = useState<CategoryId>(tab ?? "monitoring");
  const current = categories.find((c) => c.id === active)!;

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
        eyebrow="Product"
        title="The foundation where Ray"
        highlight="and your team work together."
        intro="AMMP OS combines technical monitoring, commercial tracking, and stakeholder reporting into a single platform designed for distributed renewable portfolios. Ray, your AI coworker, works from the same live data your team already trusts, so every answer and action is grounded in your portfolio."
        primary={{ label: "See the demo", to: "/demo" }}
        secondary={{ label: "See AI at AMMP", to: "/ai" }}
      />

      <Band tone="white">
        <div className="mx-auto max-w-5xl">
          <HeroVideo src={overviewVideo.url} poster={overviewPoster.url} />
        </div>
      </Band>

      <Band tone="grey">
        <div className="-mx-4 overflow-x-auto px-4 [scrollbar-width:none] md:mx-0 md:overflow-visible md:px-0" role="tablist" aria-label="Product categories">
          <div className="glass-strong flex w-max gap-1 rounded-2xl p-1.5 md:w-full md:flex-wrap">
            {categories.map(({ id, label, icon: Icon }) => (
              <button key={id} type="button" role="tab" aria-selected={active === id} onClick={() => setActive(id)}
                className={`inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl px-3 py-2 text-sm font-medium transition-colors md:flex-1 ${active === id ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:bg-white/50 hover:text-foreground"}`}>
                <Icon className="size-4" />{label}
              </button>
            ))}
          </div>
        </div>

        <div id="category-content" className="mt-12 scroll-mt-24">
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
