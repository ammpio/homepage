import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarClock, Database, FileText, Paintbrush, Receipt } from "lucide-react";
import { Band, PageHero, SectionHeading, FeatureGrid, Faq } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";
import { LivePostLink } from "@/components/site/LivePostLink";
import { pageHead } from "@/lib/page-head";

const FAQ = [
  { q: "Which reports can AMMP produce?", a: "Investor reports and PPA billing and savings reports, all from the same portfolio data." },
  { q: "Which formats are supported?", a: "Ray drafts reports in Word, PowerPoint or PDF. Reports can be delivered on a schedule and carry your own branding." },
  { q: "Who checks the numbers?", a: "Every number links to its source, and your team reviews the report before it goes out." },
  { q: "What should a monthly solar investor report include?", a: "Generation against budget, performance ratio (IEC 61724), availability, energy losses by cause, savings and PPA revenue, commentary on variances, notes on any estimated values, and the same structure every month." },
  { q: "How are estimated values handled in reports?", a: "AMMP OS uses built-in data quality checks, configurable estimation rules, and backup satellite irradiance data when a site sensor is missing. A good report says which values were estimated and why." },
];

export const Route = createFileRoute("/solutions/investor-reporting")({
  staticData: { sitemap: true },
  head: () => pageHead({
    path: "/solutions/investor-reporting",
    title: "Investor and PPA reporting from one source — AMMP",
    description: "Investor, PPA billing and savings reports from one source. Scheduled delivery, Word, PowerPoint or PDF, your branding on reports.",
    faq: FAQ,
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Investor reporting"
        title="Investor and PPA reports"
        highlight="from one source."
        intro="AMMP produces investor reports and PPA billing and savings reports for commercial and industrial (C&I) portfolios from the same data, delivered on a schedule in Word, PowerPoint or PDF with your branding."
        primary={{ label: "Talk to our team", to: "/contact" }}
        secondary={{ label: "For reporting teams", to: "/use-cases/reporting-teams" }}
      />
      <Band tone="grey">
        <SectionHeading title="One source, every report" />
        <FeatureGrid columns={3} features={[
          { icon: Database, title: "One source of truth", text: "Investor, billing and savings figures all come from the same portfolio data, so they never disagree." },
          { icon: Receipt, title: "PPA billing and savings", text: "Billing and savings calculated per contract, ready for the off-taker." },
          { icon: CalendarClock, title: "Scheduled delivery", text: "Reports go out on the schedule you set, without anyone rebuilding them each month." },
          { icon: FileText, title: "Word, PowerPoint or PDF", text: "Ray drafts the report in the format your investors expect, with every number linked to its source." },
          { icon: Paintbrush, title: "Your branding on reports", text: "Your logo and colours on every report." },
        ]} />
        <div className="mt-8 flex flex-wrap gap-6">
          <Link to="/use-cases/reporting-teams" className="inline-flex items-center gap-1 text-sm font-medium hover:underline">How reporting teams use AMMP <ArrowRight className="size-4" /></Link>
          <LivePostLink slug="solar-investor-reports-with-ai" label="Read: solar investor reports with AI" />
        </div>
      </Band>
      <Band>
        <SectionHeading title="What investors expect in a performance report" intro="The same items, in the same order, every month." />
        <ul className="mt-8 grid gap-3 md:grid-cols-2">
          {[
            ["Generation vs budget", "Actual generation against the budgeted figure, per site and for the portfolio."],
            ["Performance ratio (IEC 61724)", "PR calculated the same way for every site and brand."],
            ["Availability", "How much of the time each site was able to produce."],
            ["Energy losses by cause", "A loss waterfall that splits lost energy by cause, such as downtime, curtailment or soiling."],
            ["Savings and PPA revenue", "What the energy earned or saved, from the same data as the billing."],
            ["Variance commentary", "A short explanation of why each site was above or below plan."],
            ["Data quality notes", "Which values were estimated, and why."],
            ["Consistent monthly delivery", "The report arrives on the same day each month, in the same format."],
          ].map(([title, text]) => (
            <li key={title} className="glass-soft rounded-2xl p-5">
              <p className="font-medium">{title === "Performance ratio (IEC 61724)" ? <Link to="/product/documentation/$slug" params={{ slug: "kpi-calculations" }} className="underline underline-offset-4">{title}</Link> : title}</p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">{text}</p>
            </li>
          ))}
        </ul>
      </Band>
      <Band tone="grey">
        <SectionHeading title="Questions about investor reporting" />
        <Faq items={FAQ} />
      </Band>
      <PageCta />
    </>
  );
}
