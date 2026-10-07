import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SampleReports, LiveDashboards } from "@/components/demo/DemoEmbeds";
import { ArrowRight, Calendar, Play, BarChart3, FileText } from "lucide-react";
import { Band, PageHero } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";
import { BookMeeting } from "@/components/site/BookMeeting";
import VimeoPlayer from "@/components/demo/VimeoPlayer";
import { HeroVideo } from "@/components/site/RaySections";
import overviewVideo from "@/assets/ray-by-ammp-overview.mp4.asset.json";
import overviewPoster from "@/assets/ray-by-ammp-overview-poster.jpg.asset.json";
import overviewPt from "@/assets/Ray_by_AMMP_overview_PT-BR.mp4.asset.json";
import overviewEs from "@/assets/Ray_by_AMMP_overview_ES.mp4.asset.json";
import { useLanguage } from "@/i18n/LanguageContext";
import demoVideoThumbnail from "@/assets/demo-video-thumbnail.jpg";
import energyMix from "@/assets/energy-mix.png";
import performanceAnalytics from "@/assets/performance-analytics.png";
import alertsDashboard from "@/assets/alerts-dashboard.png";
import pdfReportsNew from "@/assets/pdf-reports-new.png";
import energySavingsHub from "@/assets/energy-savings-hub.png";
import integrationsImage from "@/assets/integrations.png";

const demoFeatures = [
  { title: "Portfolio Monitoring", text: "Live performance and availability across every site.", image: energyMix, tab: "monitoring" },
  { title: "KPI Benchmarking", text: "Portfolio-wide KPI tracking and benchmarking.", image: performanceAnalytics, tab: "monitoring" },
  { title: "Smart Alerts", text: "Catch issues before they get costly.", image: alertsDashboard, tab: "alerting" },
  { title: "Automated Reporting", text: "Scheduled PDF reports for investors and clients.", image: pdfReportsNew, tab: "reporting" },
  { title: "Cost Tracking", text: "Energy savings and PPA billing visibility.", image: energySavingsHub, tab: "commercials" },
  { title: "Universal Integrations", text: "Connect Solis, Sungrow, Huawei, SMA and more.", image: integrationsImage, tab: "integrations" },
] as const;

const DEMO_CHAPTERS = [
  { time: 0, title: "Intro" },
  { time: 159, title: "Monitoring Dashboards" },
  { time: 673, title: "Alerts Center" },
  { time: 812, title: "Ticketing" },
  { time: 918, title: "Data Management / Admin" },
  { time: 1017, title: "Tariffs Management" },
  { time: 1080, title: "Historic Data / Reporting" },
  { time: 1290, title: "Stakeholder Portal" },
  { time: 1335, title: "Energy Savings Hub" },
  { time: 1450, title: "Billing Integration" },
  { time: 1625, title: "Automation / AI" },
];

export const Route = createFileRoute("/demo")({
  head: () => ({ meta: [
    { title: "Experience AMMP OS — Interactive Demo" },
    { name: "description", content: "See AMMP OS and its AI coworker in action: interactive demo, sample reports and live dashboards." },
    { property: "og:title", content: "Experience AMMP OS" },
    { property: "og:description", content: "See our renewable portfolio platform, reporting and an AI coworker in action." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});

// Set to true to bring back the Live Dashboards tab (hidden: embeds fail in private mode/some browsers).
const SHOW_LIVE_DASHBOARDS = false;

const allTabs = [
  { key: "interactive", label: "Interactive Demo", icon: Play },
  { key: "reports", label: "Sample Reports", icon: FileText },
  { key: "dashboards", label: "Live Dashboards", icon: BarChart3 },
] as const;
const tabs = allTabs.filter((t) => SHOW_LIVE_DASHBOARDS || t.key !== "dashboards");

function Page() {
  const [tab, setTab] = useState<(typeof tabs)[number]["key"]>("interactive");
  const { language } = useLanguage();
  return (
    <>
      <PageHero eyebrow="Live demo" title="Experience" highlight="AMMP OS" intro="See our platform for solar, storage and hybrid portfolios—and the AI coworker built on top of it—in action." />

      <Band tone="white">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-3xl font-medium tracking-tight">See how it works</h2>
          <HeroVideo key={language} src={language === "pt" ? overviewPt.url : language === "es" ? overviewEs.url : overviewVideo.url} poster={overviewPoster.url} />
        </div>
      </Band>

      <Band tone="grey">
        <div className="flex justify-center">
          <div className="glass-soft inline-flex flex-wrap justify-center gap-2 rounded-2xl p-1.5">

            {tabs.map(({ key, label, icon: Icon }) => (
              <button key={key} type="button" onClick={() => setTab(key)}
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium ${tab === key ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:bg-white/50 hover:text-foreground"}`}>
                <Icon className="size-4" />{label}
              </button>
            ))}
          </div>
        </div>

          {tab === "interactive" && (

            <div className="mt-8">
              <div className="mx-auto mb-8 max-w-3xl">
                <VimeoPlayer videoId="1201387112" title="AMMP OS product walkthrough" poster={demoVideoThumbnail} chapters={DEMO_CHAPTERS} />
              </div>
              <div className="space-y-6">
                <Link to="/ray" className="glass glass-lift group grid items-center gap-8 rounded-3xl p-6 sm:p-8 lg:grid-cols-2">
                  <div>
                    <p className="eyebrow">AMMP AI</p>
                    <h3 className="mt-2 text-2xl font-medium tracking-tight">Ray, your AI coworker</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">Investigate, prioritize and prepare work automatically — with the evidence behind every answer.</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground">See Ray in action <ArrowRight className="size-4" /></span>
                  </div>
                  <div className="rounded-2xl border border-border/60 bg-background/70 p-5">
                    <p className="text-xs text-muted-foreground">Fleet triage · ranked by daily impact</p>
                    <div className="mt-4 space-y-3">
                      <div className="flex items-start justify-between gap-4 rounded-xl border border-border/60 p-3">
                        <div className="flex gap-3">
                          <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" aria-hidden />
                          <div>
                            <p className="text-sm font-medium">Brightwater Solar · INV-03</p>
                            <p className="text-xs text-muted-foreground">−38% yield vs neighbors</p>
                          </div>
                        </div>
                        <span className="shrink-0 text-sm font-medium">−€420/day</span>
                      </div>
                      <div className="flex items-start justify-between gap-4 rounded-xl border border-border/60 p-3 opacity-80">
                        <div className="flex gap-3">
                          <span className="mt-1.5 size-2 shrink-0 rounded-full bg-muted-foreground/40" aria-hidden />
                          <div>
                            <p className="text-sm font-medium">Kalahari Solar · Tracker 02</p>
                            <p className="text-xs text-muted-foreground">Tracker stalled</p>
                          </div>
                        </div>
                        <span className="shrink-0 text-sm text-muted-foreground">−€35/day</span>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {demoFeatures.map(({ title, text, image, tab }) => (
                    <Link key={title} to="/product" search={{ tab }} hash="category-content" className="glass glass-lift group overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1">
                      <img src={image} alt={title} loading="lazy" className="aspect-[3/2] w-full object-cover object-top" />
                      <div className="p-5">
                        <h3 className="text-lg font-semibold">{title}</h3>
                        <p className="mt-1 text-sm leading-6 text-muted-foreground">{text}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
          {tab === "reports" && (
            <div className="glass-strong mt-8 rounded-2xl p-6">
              <p className="mb-6 text-center text-sm text-muted-foreground">Explore live examples of automated reports generated by AMMP OS for real-world solar and storage portfolios.</p>
              <SampleReports />
            </div>
          )}
          {tab === "dashboards" && (
            <div className="glass-strong mt-8 rounded-2xl p-6">
              <p className="mb-6 text-center text-sm text-muted-foreground">Real-time monitoring dashboards from live solar installations, updating automatically with current data.</p>
              <LiveDashboards />
            </div>
          )}
      </Band>


      <Band tone="white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">Want a guided demo?</h2>
          <p className="mt-4 text-lg text-muted-foreground">Pick a time that suits you and we'll set up a personalised walkthrough with your team.</p>
        </div>
        <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-border/50 bg-white">
          <div className="px-6 pt-6">
            <h2 className="flex items-center gap-2 text-lg font-semibold"><Calendar className="size-5 text-primary" />Book a meeting</h2>
            <p className="mt-3 text-sm text-muted-foreground">Schedule a time to walk through your portfolio monitoring and AI coworker needs with our team.</p>
          </div>
          <BookMeeting className="mt-6" />
        </div>
        <div className="mx-auto mt-8 max-w-2xl text-center">
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="button button-ghost">Contact us <ArrowRight className="size-4" /></Link>
            <Link to="/pricing" className="button button-ghost">View pricing</Link>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">Want to explore experimental features? <Link to="/beta" className="text-primary hover:underline">Visit AMMP Labs →</Link></p>
        </div>
      </Band>

      <PageCta />
    </>
  );
}
