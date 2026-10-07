import { RayDay } from "@/components/site/RaySections";
import { createFileRoute } from "@tanstack/react-router";
import { FileText, ClipboardList, CheckCircle2, Database, ShieldCheck } from "lucide-react";
import { Band, PageHero, SectionHeading, FeatureGrid } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";

export const Route = createFileRoute("/use-cases/reporting-teams")({
  head: () => ({ meta: [
    { title: "AMMP for Reporting Teams — AMMP" },
    { name: "description", content: "Ray and AMMP OS turn standardized portfolio data into clear, reviewable reporting outputs for reporting teams." },
    { property: "og:title", content: "AMMP for Reporting Teams — AMMP" },
    { property: "og:description", content: "Standardized data in. Clear, reviewable reports out. Ray on top of AMMP OS." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});

const features = [
  { icon: Database, title: "Standardized data, always", text: "Every site reports into the same data model, so reports start from consistent, comparable inputs instead of cleaned-up spreadsheets." },
  { icon: FileText, title: "Report templates", text: "Build the technical performance, savings and stakeholder reports your audiences expect, then generate them on schedule." },
  { icon: ClipboardList, title: "Reviewable outputs", text: "Every figure traces back to the underlying site data, so reviewers can verify numbers instead of re-deriving them." },
  { icon: ShieldCheck, title: "Governance built in", text: "Shared workspace with full visibility of what was requested, what was produced and who approved it." },
];

const benefits = [
  "One source of truth across every site and stakeholder",
  "Reports generated on schedule, not on demand at midnight",
  "Every number traceable back to source data",
  "Less time assembling, more time analyzing",
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="For Reporting Teams"
        title="Standardized data in."
        highlight={"\nClear reports out."}
        intro="Ray, AMMP's AI coworker, works on top of AMMP OS, turning standardized portfolio data into clear, reviewable reporting outputs — so reporting teams produce trusted numbers without the manual assembly."
        primary={{ label: "Try demo", to: "/demo" }}
        secondary={{ label: "Explore features", to: "/product" }}
      />

      <Band tone="grey">
        <SectionHeading title="Ray, on every reporting cycle" intro="Instead of chasing site data and reconciling spreadsheets, Ray pulls the standardized numbers, drafts the report, and shows the evidence behind every figure before you publish." />
        <div className="mt-10"><RayDay only="report" /></div>
      </Band>

      <Band>
        <SectionHeading title="Reporting without the assembly work" intro="AMMP standardizes the data underneath every report, so outputs are consistent across sites, months and audiences." />
        <FeatureGrid features={features} columns={4} />
      </Band>

      <Band tone="grey">
        <SectionHeading title="Trusted numbers, delivered faster" intro="The workflow stays reviewable end to end: what was requested, what was produced, and what the evidence shows." />
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
