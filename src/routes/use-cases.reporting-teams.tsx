import { createFileRoute } from "@tanstack/react-router";
import { FileText, ClipboardList, CheckCircle2, Database, ShieldCheck } from "lucide-react";
import { Band, PageHero, SectionHeading, FeatureGrid } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";
import { RayIcon } from "@/components/site/RayIcon";

export const Route = createFileRoute("/use-cases/reporting-teams")({
  head: () => ({ meta: [
    { title: "AMMP for Reporting Teams — AMMP" },
    { name: "description", content: "Ray and AMMP OS turn standardised portfolio data into clear, reviewable reporting outputs for reporting teams." },
    { property: "og:title", content: "AMMP for Reporting Teams — AMMP" },
    { property: "og:description", content: "Standardised data in. Clear, reviewable reports out. Ray on top of AMMP OS." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});

const features = [
  { icon: Database, title: "Standardised data, always", text: "Every site reports into the same data model, so reports start from consistent, comparable inputs instead of cleaned-up spreadsheets." },
  { icon: FileText, title: "Report templates", text: "Build the technical performance, savings and stakeholder reports your audiences expect, then generate them on schedule." },
  { icon: ClipboardList, title: "Reviewable outputs", text: "Every figure traces back to the underlying site data, so reviewers can verify numbers instead of re-deriving them." },
  { icon: ShieldCheck, title: "Governance built in", text: "Shared workspace with full visibility of what was requested, what was produced and who approved it." },
];

const benefits = [
  "One source of truth across every site and stakeholder",
  "Reports generated on schedule, not on demand at midnight",
  "Every number traceable back to source data",
  "Less time assembling, more time analysing",
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="For Reporting Teams"
        title="Standardised data in."
        highlight={"\nClear reports out."}
        intro="Ray, AMMP's AI coworker, works on top of AMMP OS, turning standardised portfolio data into clear, reviewable reporting outputs — so reporting teams produce trusted numbers without the manual assembly."
        primary={{ label: "Try demo", to: "/demo" }}
        secondary={{ label: "Explore features", to: "/product" }}
      />

      <Band tone="grey">
        <SectionHeading eyebrow="AI + AMMP OS" title="Ray, on every reporting cycle" intro="Instead of chasing site data and reconciling spreadsheets, Ray pulls the standardised numbers, drafts the report, and shows the evidence behind every figure before you publish." />
        <div className="mt-8 flex items-start gap-3 rounded-xl border border-border bg-card p-6">
          <RayIcon className="size-10 shrink-0 ring-2 ring-primary/20" />
          <p className="text-sm leading-6 text-muted-foreground">Ask "prepare this month's investor performance pack" and get a draft built from the same portfolio data everyone else works from — ready for review, not rebuilt from scratch.</p>
        </div>
      </Band>

      <Band>
        <SectionHeading title="Reporting without the assembly work" intro="AMMP standardises the data underneath every report, so outputs are consistent across sites, months and audiences." />
        <FeatureGrid features={features} />
      </Band>

      <Band tone="grey">
        <SectionHeading title="Trusted numbers, delivered faster" intro="The workflow stays reviewable end to end: what was requested, what was produced, and what the evidence shows." />
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
          <article className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-start gap-4">
              <FileText className="mt-1 size-8 shrink-0 text-primary" />
              <div>
                <h3 className="text-lg font-semibold">AMMP Insight</h3>
                <p className="mt-1 text-sm text-muted-foreground">Every kWh counts. Management-grade performance reporting.</p>
              </div>
            </div>
            <ul className="mt-5 space-y-2">
              {["Loss Waterfall visualization", "IEC 61724 PR options", "Customizable reporting engine", "Stakeholder dashboards / portal"].map((i) => (
                <li key={i} className="flex items-start gap-2 text-sm"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />{i}</li>
              ))}
            </ul>
            <p className="mt-5 text-sm italic text-muted-foreground">Built for reporting teams who need consistent, management-grade outputs across their portfolio.</p>
          </article>
          <article className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-start gap-4">
              <ClipboardList className="mt-1 size-8 shrink-0 text-primary" />
              <div>
                <h3 className="text-lg font-semibold">Automated delivery</h3>
                <p className="mt-1 text-sm text-muted-foreground">Schedule professional reports for technical performance and savings data.</p>
              </div>
            </div>
            <ul className="mt-5 space-y-2">
              {["Scheduled report delivery", "Customizable reporting engine", "Tariff-aware savings data", "Stakeholder dashboards / portal"].map((i) => (
                <li key={i} className="flex items-start gap-2 text-sm"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />{i}</li>
              ))}
            </ul>
            <p className="mt-5 text-sm italic text-muted-foreground">Reports go out on schedule with the numbers already assembled and traceable.</p>
          </article>
        </div>
      </Band>

      <PageCta />
    </>
  );
}
