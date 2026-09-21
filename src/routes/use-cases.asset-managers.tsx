import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, Building2, FileText, Bell, Bot, CheckCircle2, DollarSign } from "lucide-react";
import { Band, PageHero, SectionHeading, FeatureGrid } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";

export const Route = createFileRoute("/use-cases/asset-managers")({
  head: () => ({ meta: [
    { title: "AMMP for Asset Managers — AMMP" },
    { name: "description", content: "AI coworkers plus AMMP OS give asset managers total visibility and complete control over a distributed C&I portfolio." },
    { property: "og:title", content: "AMMP for Asset Managers — AMMP" },
    { property: "og:description", content: "Total visibility. Complete control. AI coworkers grounded in your portfolio data." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});

const features = [
  { icon: BarChart3, title: "Performance benchmarking", text: "Compare sites against expected yields. Spot trends and identify underperformers early." },
  { icon: Building2, title: "PPA/Lease tracking", text: "Monitor contracts with our tariff engine and cost savings algorithms." },
  { icon: FileText, title: "Automated reporting", text: "Generate professional reports for technical performance and savings data. Schedule automated delivery." },
  { icon: Bell, title: "Smart alerting", text: "Configurable alert rules ensure you only get notified about what impacts billing and SLAs." },
];

const benefits = [
  "Single pane of glass for all PPA sites",
  "Identify underperforming assets quickly",
  "Reduce manual reporting effort by 80%",
  "Make data-driven decisions",
];

const modules = [
  { icon: FileText, name: "AMMP Insight", desc: "Every kWh counts. Management-grade performance reporting.",
    items: ["Loss Waterfall visualization", "IEC 61724 PR options", "Customizable reporting engine", "Stakeholder dashboards / portal"],
    note: "Built for asset managers who need management-grade performance insights across their portfolio." },
  { icon: DollarSign, name: "AMMP Finance", desc: "Automated, tariff-aware financial reporting for stakeholders.",
    items: ["Automated energy savings calculations", "Tariff-structure compatibility", "Customizable reporting engine", "Stakeholder dashboards / portal"],
    note: "Built for asset managers who need clear financial visibility across their portfolio." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="For Asset Managers"
        title="Total visibility."
        highlight="Complete control."
        intro="AMMP AI coworkers sit on top of AMMP OS, giving asset managers unified oversight of their entire distributed portfolio, making it easy to optimise performance and demonstrate value to stakeholders."
        primary={{ label: "Try demo", to: "/demo" }}
        secondary={{ label: "Explore features", to: "/product" }}
      />

      <Band tone="grey">
        <SectionHeading eyebrow="AI + AMMP OS" title="A coworker for every underperforming site" intro="Instead of scanning spreadsheets, an AI coworker flags the sites drifting from expected yield, explains why, and drafts the stakeholder note before you ask." />
        <div className="mt-8 flex items-start gap-3 rounded-xl border border-border bg-card p-6">
          <Bot className="mt-0.5 size-5 shrink-0 text-primary" />
          <p className="text-sm leading-6 text-muted-foreground">Ask "which PPA sites are at risk of missing guarantee this month?" and get an answer with the evidence behind it, not another dashboard to interpret.</p>
        </div>
      </Band>

      <Band>
        <SectionHeading title="Complete portfolio visibility" intro="Stop juggling spreadsheets and siloed systems. AMMP brings all your C&I sites together." />
        <FeatureGrid features={features} />
      </Band>

      <Band tone="grey">
        <SectionHeading title="Data-driven decisions at scale" intro="AMMP provides the insights you need to optimise your C&I portfolio and maximise returns on your energy investments." />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {benefits.map((b) => (
            <li key={b} className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 text-base">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />{b}
            </li>
          ))}
        </ul>
      </Band>

      <Band>
        <SectionHeading title="Recommended for you" intro="The AMMP OS modules built for your workflow." />
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {modules.map((m) => (
            <article key={m.name} className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <m.icon className="mt-1 size-8 shrink-0 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold">{m.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{m.desc}</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2">
                {m.items.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />{i}</li>
                ))}
              </ul>
              <p className="mt-5 text-sm italic text-muted-foreground">{m.note}</p>
            </article>
          ))}
        </div>
      </Band>

      <PageCta />
    </>
  );
}
