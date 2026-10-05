import { createFileRoute } from "@tanstack/react-router";
import { ClipboardCheck, Users, FileBarChart, Wrench, CheckCircle2, LayoutDashboard } from "lucide-react";
import { Band, PageHero, SectionHeading, FeatureGrid } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";
import { RayIcon } from "@/components/site/RayIcon";

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
  { icon: FileBarChart, title: "Automated O&M reports", text: "Demonstrate your service value with comprehensive reports for C&I clients and investors. Requires the AMMP Insight module." },
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
        <div className="mt-8 flex items-start gap-3 rounded-xl border border-border bg-card p-6">
          <RayIcon className="size-10 shrink-0 ring-2 ring-primary/20" />
          <p className="text-sm leading-6 text-muted-foreground">Ray prepares the client-ready SLA narrative each month, complete with the evidence, so your account managers walk in with answers already prepared.</p>
        </div>
      </Band>

      <Band>
        <SectionHeading title="O&M tools that work" intro="Built for the realities of managing C&I solar assets for multiple clients." />
        <FeatureGrid features={features} columns={4} />
      </Band>

      <Band tone="grey">
        <SectionHeading title="More efficient O&M at every level" intro="From field technicians to account managers, AMMP streamlines C&I solar O&M workflows and improves outcomes." />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {benefits.map((b) => (
            <li key={b} className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 text-base">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />{b}
            </li>
          ))}
        </ul>
      </Band>

      <Band>
        <SectionHeading title="Recommended for you" intro="The AMMP OS module built for your workflow." />
        <div className="mx-auto mt-8 max-w-2xl rounded-xl border border-border bg-card p-6">
          <div className="flex items-start gap-4">
            <LayoutDashboard className="mt-1 size-8 shrink-0 text-primary" />
            <div>
              <h3 className="text-lg font-semibold">AMMP Operate</h3>
              <p className="mt-1 text-sm text-muted-foreground">Complete operations toolkit for daily portfolio management.</p>
              <span className="mt-2 inline-block rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">Includes AMMP Detect</span>
            </div>
          </div>
          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {["Real-time dashboards & KPIs", "Ticketing / work orders", "Create tickets from alerts", "Custom & KPI-based alert rules"].map((i) => (
              <li key={i} className="flex items-start gap-2 text-sm"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />{i}</li>
            ))}
          </ul>
          <p className="mt-5 text-sm italic text-muted-foreground">Purpose-built for O&M teams who need real-time visibility and streamlined ticketing across client sites.</p>
        </div>
      </Band>

      <PageCta />
    </>
  );
}
