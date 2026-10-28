import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bell, CheckCircle2, ClipboardCheck, FileBarChart, Gauge, Plug, Wrench } from "lucide-react";
import { Band, PageHero, SectionHeading, FeatureGrid, Faq } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";
import { pageHead } from "@/lib/page-head";

const FAQ = [
  { q: "What should an EPC look for in solar monitoring software?", a: "Support for every inverter and battery brand you install, through cloud APIs or an on-site datalogger; checks that new sites report every device correctly from day one; performance guarantee and availability tracking; alerts in Microsoft Teams, Slack, email or webhooks; ticketing for your O&M team; and client reports with your branding." },
  { q: "Can EPCs give clients access to their own sites?", a: "Yes. The AMMP stakeholder portal gives clients real-time access to their own systems, and reports can carry your branding." },
  { q: "Can AMMP monitor sites with different inverter brands?", a: "Yes. AMMP has 30+ integrations and runs on 10,000+ sites in 30+ countries. Equipment without a cloud API can be read on site with the AMMP Edge datalogger." },
];

export const Route = createFileRoute("/use-cases/epcs")({
  staticData: { sitemap: true },
  head: () => pageHead({
    path: "/use-cases/epcs",
    title: "Monitoring for EPCs and installers — AMMP",
    description: "Monitoring for EPCs and ESCOs that stay responsible after handover: multi-brand sites, performance guarantees, O&M ticketing and branded client reports.",
    faq: FAQ,
  }),
  component: Page,
});

const problems = [
  "Every project uses different inverter and battery brands, each with its own portal.",
  "Clients expect proof of performance after commissioning, not just at handover.",
  "Warranty and performance guarantee periods need evidence, site by site.",
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="For EPCs and installers"
        title="Monitoring for EPCs"
        highlight="and installers."
        intro="For EPCs and ESCOs that build commercial and industrial (C&I) solar and battery systems and stay responsible for them after handover, through O&M contracts, performance guarantees and client reporting."
        primary={{ label: "Talk to our team", to: "/contact" }}
        secondary={{ label: "Book a demo", to: "/demo" }}
      />

      <Band tone="grey">
        <SectionHeading title="The EPC problem" intro="Building the system is only part of the job. After handover, you still answer for how it performs." />
        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {problems.map((p) => (
            <li key={p} className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 text-base text-muted-foreground">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />{p}
            </li>
          ))}
        </ul>
      </Band>

      <Band>
        <SectionHeading title="What to look for in monitoring as an EPC" />
        <FeatureGrid columns={3} features={[
          { icon: Plug, title: "Multi-brand support", text: "Every brand you install in one portal, through cloud APIs or the AMMP Edge datalogger. AMMP has 30+ integrations." },
          { icon: ClipboardCheck, title: "Commissioning and handover checks", text: "Check that new sites report every device correctly from day one and that the expected yield baseline is set at handover. AMMP onboards new sites with data quality checks." },
          { icon: Gauge, title: "Guarantee and availability tracking", text: "Performance guarantees and availability tracked against contract terms, with the evidence behind each figure." },
          { icon: Bell, title: "Alerts where your team works", text: "Alerts routed to Microsoft Teams, Slack, email or webhooks." },
          { icon: Wrench, title: "Ticketing for your O&M team", text: "Turn alerts into tickets and follow each issue through to the fix." },
          { icon: FileBarChart, title: "Client reports and portal access", text: "Client-facing reports with your branding, and stakeholder portal access so clients can see their own sites." },
        ]} />
      </Band>

      <Band tone="grey">
        <SectionHeading title="How AMMP fits" intro="AMMP OS Platform covers monitoring, alerting, ticketing and reporting across every brand. Ray, the AI coworker, works on top of it." />
        <FeatureGrid columns={3} features={[
          { icon: Gauge, title: "Daily triage", text: "Ray ranks issues across your clients' sites by commercial impact, so your team starts with the ones that matter." },
          { icon: ClipboardCheck, title: "Guarantee and SLA checks", text: "Ray checks guarantees and SLAs with evidence, so you can show clients how each site performed." },
          { icon: FileBarChart, title: "Drafted client reports", text: "Ray drafts client reports from the same data; your team reviews and sends." },
        ]} />
        <div className="mt-8 flex flex-wrap gap-6">
          <Link to="/solutions/om-sla-tracking" className="inline-flex items-center gap-1 text-sm font-medium hover:underline">O&M SLA tracking <ArrowRight className="size-4" /></Link>
          <Link to="/solutions/investor-reporting" className="inline-flex items-center gap-1 text-sm font-medium hover:underline">Investor and client reporting <ArrowRight className="size-4" /></Link>
          <Link to="/integrations" className="inline-flex items-center gap-1 text-sm font-medium hover:underline">Integrations <ArrowRight className="size-4" /></Link>
          <Link to="/ray" className="inline-flex items-center gap-1 text-sm font-medium hover:underline">Meet Ray <ArrowRight className="size-4" /></Link>
        </div>
      </Band>

      <Band>
        <SectionHeading title="Questions from EPCs" />
        <Faq items={FAQ} />
      </Band>

      <PageCta />
    </>
  );
}
