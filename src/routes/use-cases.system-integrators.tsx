import { createFileRoute } from "@tanstack/react-router";
import { Plug, Cpu, FileText, Bell, Bot, CheckCircle2 } from "lucide-react";
import { Band, PageHero, SectionHeading, FeatureGrid } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";

export const Route = createFileRoute("/use-cases/system-integrators")({
  head: () => ({ meta: [
    { title: "AMMP for System Integrators — AMMP" },
    { name: "description", content: "AI coworkers plus AMMP OS help system integrators hand over monitoring-ready sites with less custom integration work." },
    { property: "og:title", content: "AMMP for System Integrators — AMMP" },
    { property: "og:description", content: "Ship monitoring-ready sites faster with an open API and AI coworkers grounded in live commissioning data." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});

const features = [
  { icon: Cpu, title: "Multi-inverter support", text: "30+ inverter, meter and BMS brands integrated out of the box, normalised into a single data model." },
  { icon: Plug, title: "Open REST API", text: "Push commissioning and telemetry data into the tools you already use. Your data, your workflows." },
  { icon: Bell, title: "Smart alerting", text: "Configurable rules with Slack, Microsoft Teams, WhatsApp and email delivery, no alert fatigue at handover." },
  { icon: FileText, title: "Commissioning reports", text: "Automated, white-label PDF and API reports to prove performance at handover and beyond." },
];

const benefits = [
  "Hand over monitoring-ready sites, not spreadsheets",
  "Cut custom integration work with 30+ brands supported",
  "Give clients a branded, professional dashboard on day one",
  "Reduce post-handover support tickets",
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="For System Integrators"
        title="Hand over sites that are"
        highlight="already monitoring-ready."
        intro="AMMP AI coworkers sit on top of AMMP OS, so system integrators can commission a hybrid PV + BESS site once and hand clients a live, multi-vendor monitoring platform, not a pile of separate vendor logins."
        primary={{ label: "Try demo", to: "/demo" }}
        secondary={{ label: "Explore features", to: "/product" }}
      />

      <Band tone="grey">
        <SectionHeading eyebrow="AI + AMMP OS" title="Coworkers that catch commissioning issues early" intro="Before handover, a coworker checks live telemetry against expected performance and flags wiring, string or configuration issues while the crew is still on site." />
        <div className="mt-8 flex items-start gap-3 rounded-xl border border-border bg-card p-6">
          <Bot className="mt-0.5 size-5 shrink-0 text-primary" />
          <p className="text-sm leading-6 text-muted-foreground">Fewer callbacks after handover, because the evidence behind every anomaly is captured and shared with the client from day one.</p>
        </div>
      </Band>

      <Band>
        <SectionHeading title="Built for multi-vendor installs" intro="Stop stitching together separate vendor portals for every project. AMMP normalises the data model for you." />
        <FeatureGrid features={features} />
      </Band>

      <Band tone="grey">
        <SectionHeading title="Faster handover, fewer support tickets" intro="AMMP gives integrators a repeatable way to deliver monitoring-ready sites across solar, storage and hybrid installs." />
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
