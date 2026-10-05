import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  Database,
  KeyRound,
  Map,
  ShieldCheck,
  Timer,
  Users,
} from "lucide-react";
import { Band, PageHero, SectionHeading } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";

export const Route = createFileRoute("/security")({
  head: () => ({
    meta: [
      { title: "Security & Trust — ISO 27001 Certified Monitoring | AMMP" },
      { name: "description", content: "How AMMP protects your portfolio data: ISO/IEC 27001:2022 certification, hosting and data residency, uptime, encryption, access control and data export." },
      { property: "og:title", content: "Security & Trust — ISO 27001 Certified Monitoring | AMMP" },
      { property: "og:description", content: "How AMMP protects your portfolio data, from the platform to the AI coworker built on top of it." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const sections = [
  { icon: Building2, title: "Infrastructure and data residency", text: "AMMP runs on managed cloud infrastructure with your portfolio data hosted in the European Union. A US region is on the roadmap for customers with a domestic residency requirement. Tell us your residency constraint and we will confirm what is possible today." },
  { icon: Timer, title: "Uptime and service levels", text: "The platform is built for continuous operation, with redundancy and automated failover across availability zones. Service level commitments, including the target availability figure and support response times, are agreed in your contract." },
  { icon: Database, title: "Your data is yours", text: "You own the data you send to AMMP. Everything is available through our REST API and bulk export in open formats, during the contract and on exit. We do not sell customer data, and we do not use it to train third-party models." },
  { icon: KeyRound, title: "Access control and encryption", text: "Data is encrypted in transit and at rest. Access follows least privilege, with role-based permissions in the product, single sign-on options, and audited internal access limited to the engineers who need it to run the service." },
  { icon: Users, title: "Subprocessors", text: "A current list of subprocessors, the service each provides and its processing location is available on request. We will publish the full list here once it has been reviewed." },
  { icon: Map, title: "On the roadmap", text: "SOC 2 Type II is under consideration in response to demand from US procurement teams. If it is a gating requirement for your evaluation, tell us and we will share where the work stands." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Security and trust"
        title="How we protect"
        highlight="your portfolio data."
        intro="AMMP is the system of record for thousands of solar and storage sites, and the platform your AI coworker run on. This page sets out how that data is stored, protected and returned to you."
      />

      <Band>
        <div className="mx-auto max-w-3xl rounded-xl border border-border bg-card p-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <ShieldCheck className="h-6 w-6 text-primary" />
          </div>
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">ISO/IEC 27001:2022</p>
          <h2 className="mt-2 text-2xl font-semibold">ISO/IEC 27001:2022 certified</h2>
          <p className="mt-4 text-muted-foreground">
            AMMP Technologies operates an independently audited information security management system, certified to ISO/IEC 27001:2022. The scope covers the AMMP platform, its supporting cloud infrastructure, and the processes our team follows to build and operate it.
          </p>
          <Link to="/contact" className="button button-ghost mt-6 inline-flex">
            Request our certificate
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </div>
      </Band>

      <Band tone="grey">
        <SectionHeading eyebrow="Details" title="What that covers" center />
        <div className="mt-10 grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {sections.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-xl border border-border bg-card p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h2 className="font-semibold mb-2">{title}</h2>
              <p className="text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </Band>

      <Band>
        <div className="max-w-2xl mx-auto text-center">
          <SectionHeading title="Security questions before you buy?" intro="Send us your security questionnaire or vendor assessment. We answer them ourselves, without a sales layer in between." center />
          <Link to="/contact" className="button button-primary mt-8 inline-flex">
            Contact our team
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </div>
      </Band>

      <PageCta />
    </>
  );
}
