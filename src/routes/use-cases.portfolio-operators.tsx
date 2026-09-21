import { createFileRoute } from "@tanstack/react-router";
import { Layers3, Gauge, Bell, FileBarChart, Bot, CheckCircle2 } from "lucide-react";
import { Band, PageHero, SectionHeading, FeatureGrid } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";

export const Route = createFileRoute("/use-cases/portfolio-operators")({
  head: () => ({ meta: [
    { title: "AMMP for Portfolio Operators — AMMP" },
    { name: "description", content: "AI coworkers plus AMMP OS give portfolio operators one operating view across every site, vendor and technology." },
    { property: "og:title", content: "AMMP for Portfolio Operators — AMMP" },
    { property: "og:description", content: "Run the whole portfolio, not one site at a time, with AI coworkers grounded in operating data." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});

const features = [
  { icon: Layers3, title: "Unified fleet view", text: "Every site, vendor and technology in one operating environment, no juggling separate vendor portals." },
  { icon: Gauge, title: "Performance benchmarking", text: "Compare sites against expected yields. Spot trends and identify underperformers early." },
  { icon: Bell, title: "Smart alerting", text: "Configurable alert rules ensure your operations team only hears about what impacts uptime and billing." },
  { icon: FileBarChart, title: "Automated reporting", text: "Generate professional reports for technical performance and savings data. Schedule automated delivery." },
];

const benefits = [
  "Single pane of glass across the whole fleet",
  "Identify underperforming assets quickly",
  "Reduce manual reporting effort by 80%",
  "Coordinate operations without switching tools",
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="For Portfolio Operators"
        title="Run the whole fleet."
        highlight="Not one site at a time."
        intro="AMMP AI coworkers sit on top of AMMP OS, giving portfolio operators unified oversight of every site, vendor and technology, so the operations team can prioritise action instead of chasing dashboards."
        primary={{ label: "Try demo", to: "/demo" }}
        secondary={{ label: "Explore features", to: "/product" }}
      />

      <Band tone="grey">
        <SectionHeading eyebrow="AI + AMMP OS" title="One coworker watching the whole portfolio" intro="An alarm-triage coworker continuously scans the fleet and ranks issues by operational and commercial impact, before they become noise in someone's inbox." />
        <div className="mt-8 flex items-start gap-3 rounded-xl border border-border bg-card p-6">
          <Bot className="mt-0.5 size-5 shrink-0 text-primary" />
          <p className="text-sm leading-6 text-muted-foreground">Ask "which sites need attention today?" and get a prioritised list backed by evidence, not a list of every open alarm.</p>
        </div>
      </Band>

      <Band>
        <SectionHeading title="Complete portfolio visibility" intro="Stop juggling spreadsheets and siloed vendor systems. AMMP brings every site together." />
        <FeatureGrid features={features} />
      </Band>

      <Band tone="grey">
        <SectionHeading title="Data-driven operations at scale" intro="AMMP provides the insights operations teams need to run a growing, multi-vendor portfolio without adding headcount." />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {benefits.map((b) => (
            <li key={b} className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 text-base">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />{b}
            </li>
          ))}
        </ul>
      </Band>

      <PageCta />
    </>
  );
}
