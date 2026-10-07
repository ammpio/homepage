import { RayDay } from "@/components/site/RaySections";
import { createFileRoute } from "@tanstack/react-router";
import { ClipboardCheck, Users, FileBarChart, Wrench, CheckCircle2 } from "lucide-react";
import { Band, PageHero, SectionHeading, FeatureGrid } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";

export const Route = createFileRoute("/use-cases/om-providers")({
  head: () => ({ meta: [
    { title: "AMMP for O&M Providers — AMMP" },
    { name: "description", content: "Ray and AMMP OS help O&M providers streamline workflows and track SLAs with precision." },
    { property: "og:title", content: "AMMP for O&M Providers — AMMP" },
    { property: "og:description", content: "Prove your value, every month, with Ray, grounded in real-time O&M data." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});

const features = [
  { icon: ClipboardCheck, title: "SLA tracking", text: "Monitor uptime and response times in real-time. Get ahead of issues before they impact SLAs." },
  { icon: Wrench, title: "Maintenance scheduling", text: "Plan preventive maintenance across your fleet. Never miss a service interval or warranty deadline." },
  { icon: FileBarChart, title: "Automated O&M reports", text: "Demonstrate your service value with comprehensive reports for clients and investors. Requires the AMMP Insight module." },
  { icon: Users, title: "Client dashboards", text: "Give asset owners visibility into their systems with branded, professional dashboards showing performance and savings." },
];

const benefits = [
  "Reduce truck rolls by 30% or more",
  "Improve first-time fix rates",
  "Exceed SLA commitments consistently",
  "Demonstrate clear value to asset owners",
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="For O&M Providers"
        title="Prove your value."
        highlight="Every month."
        intro="Ray, AMMP's AI coworker, works on top of AMMP OS, helping O&M providers streamline workflows and track SLAs with precision, reducing costs and keeping clients happy with transparent reporting."
        primary={{ label: "Try demo", to: "/demo" }}
        secondary={{ label: "Explore features", to: "/product" }}
      />

      <Band tone="grey">
        <SectionHeading eyebrow="AI + AMMP OS" title="Triage before it becomes a truck roll" intro="Ray ranks issues across every client site by operational and commercial impact, so field teams roll out for the ones that matter." />
        <div className="mt-10"><RayDay only="maint" /></div>
      </Band>

      <Band>
        <SectionHeading title="O&M tools that work" intro="Built for the realities of managing renewable assets for multiple clients." />
        <FeatureGrid features={features} columns={4} />
      </Band>

      <Band tone="grey">
        <SectionHeading title="More efficient O&M at every level" intro="From field technicians to account managers, AMMP streamlines O&M workflows and improves outcomes." />
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
