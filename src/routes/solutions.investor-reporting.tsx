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
];

export const Route = createFileRoute("/solutions/investor-reporting")({
  staticData: { sitemap: true },
  head: () => pageHead({
    path: "/solutions/investor-reporting",
    title: "Investor and PPA reporting from one source — AMMP",
    description: "Investor, PPA billing and savings reports from one source. Scheduled delivery, Word, PowerPoint or PDF, white-label branding on every report.",
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
          { icon: Paintbrush, title: "White-label branding", text: "Your logo and colours on every report." },
        ]} />
        <div className="mt-8 flex flex-wrap gap-6">
          <Link to="/use-cases/reporting-teams" className="inline-flex items-center gap-1 text-sm font-medium hover:underline">How reporting teams use AMMP <ArrowRight className="size-4" /></Link>
          <LivePostLink slug="solar-investor-reports-with-ai" label="Read: solar investor reports with AI" />
        </div>
      </Band>
      <Band>
        <SectionHeading title="Questions about investor reporting" />
        <Faq items={FAQ} />
      </Band>
      <PageCta />
    </>
  );
}
