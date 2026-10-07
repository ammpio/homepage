import { RayDay } from "@/components/site/RaySections";
import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, Building2, FileText, Bell, CheckCircle2 } from "lucide-react";
import { Band, PageHero, SectionHeading, FeatureGrid } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";

export const Route = createFileRoute("/use-cases/asset-managers")({
  staticData: { sitemap: true },
  head: () => ({ meta: [
    { title: "AMMP for Asset Managers — AMMP" },
    { name: "description", content: "Ray and AMMP OS give asset managers total visibility and complete control over a renewable energy portfolio." },
    { property: "og:title", content: "AMMP for Asset Managers — AMMP" },
    { property: "og:description", content: "Total visibility. Complete control. Ray, grounded in your portfolio data." },
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


function Page() {
  return (
    <>
      <PageHero
        eyebrow="For Asset Managers"
        title="Total visibility."
        highlight="Complete control."
        intro="Ray, AMMP's AI coworker, works on top of AMMP OS, giving asset managers unified oversight of their entire distributed portfolio, making it easy to optimize performance and demonstrate value to stakeholders."
        primary={{ label: "Try demo", to: "/demo" }}
        secondary={{ label: "Explore features", to: "/product" }}
      />

      <Band tone="grey">
        <SectionHeading title="Ray watches every underperforming site" intro="Instead of scanning spreadsheets, Ray flags the sites drifting from expected yield, explains why, and drafts the stakeholder note before you ask." />
        <div className="mt-10"><RayDay only="plan" /></div>
      </Band>

      <Band>
        <SectionHeading title="Complete portfolio visibility" intro="Stop juggling spreadsheets and siloed systems. AMMP brings all your sites together." />
        <FeatureGrid features={features} columns={4} />
      </Band>

      <Band tone="grey">
        <SectionHeading title="Data-driven decisions at scale" intro="AMMP provides the insights you need to optimize your renewable portfolio and maximize returns on your energy investments." />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {benefits.map((b) => (
            <li key={b} className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 text-base text-muted-foreground">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />{b}
            </li>
          ))}
        </ul>
      </Band>


      <PageCta />
    </>
  );
}
