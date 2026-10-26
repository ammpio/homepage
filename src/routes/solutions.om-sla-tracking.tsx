import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, FileCheck, Gauge, ScrollText, UserCheck } from "lucide-react";
import { Band, PageHero, SectionHeading, FeatureGrid, Faq } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";
import { pageHead } from "@/lib/page-head";

const FAQ = [
  { q: "What does AMMP check against O&M contracts?", a: "Contractor availability and response times against the terms in the contract, and PPA performance guarantees across the portfolio." },
  { q: "Does Ray file claims on its own?", a: "No. Ray drafts the claim with the evidence behind it. People review it and decide whether to send it." },
  { q: "Does this work with mixed-brand portfolios?", a: "Yes. AMMP connects 30+ integrations, so the same contract checks run across every site regardless of hardware." },
];

export const Route = createFileRoute("/solutions/om-sla-tracking")({
  staticData: { sitemap: true },
  head: () => pageHead({
    path: "/solutions/om-sla-tracking",
    title: "O&M SLA and performance guarantee tracking — AMMP",
    description: "Track O&M availability and response times against contract terms and PPA guarantees. Ray drafts claims with evidence; your team reviews.",
    faq: FAQ,
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="O&M SLA tracking"
        title="Hold every contract to its terms,"
        highlight="with the evidence ready."
        intro="AMMP tracks O&M contractor availability and response times against contract terms, and PPA performance guarantees across your commercial and industrial (C&I) portfolio. Ray drafts claims with evidence; people review."
        primary={{ label: "Talk to our team", to: "/contact" }}
        secondary={{ label: "Meet Ray", to: "/ray" }}
      />
      <Band tone="grey">
        <SectionHeading title="What gets tracked" />
        <FeatureGrid columns={3} features={[
          { icon: Gauge, title: "Availability", text: "Contractor availability measured site by site, against the figure in the contract." },
          { icon: Clock, title: "Response times", text: "How long each issue took from alert to fix, compared with the agreed response time." },
          { icon: ScrollText, title: "PPA guarantees", text: "Performance guarantees checked across the portfolio, so shortfalls are visible before the period closes." },
        ]} />
      </Band>
      <Band>
        <SectionHeading title="Ray drafts, people decide" intro="Ray, the AI coworker, checks SLAs and contracts with evidence. When a site falls short, he prepares the claim with the data behind each number." />
        <FeatureGrid columns={2} features={[
          { icon: FileCheck, title: "Claims with evidence", text: "Every figure in a draft claim links back to the measurements it came from." },
          { icon: UserCheck, title: "Human review", text: "Your team reviews and sends. Ray never decides on its own." },
        ]} />
        <div className="mt-8 flex flex-wrap gap-6">
          <Link to="/use-cases/asset-managers" className="inline-flex items-center gap-1 text-sm font-medium hover:underline">For asset managers <ArrowRight className="size-4" /></Link>
          <Link to="/use-cases/om-providers" className="inline-flex items-center gap-1 text-sm font-medium hover:underline">For O&M providers <ArrowRight className="size-4" /></Link>
        </div>
      </Band>
      <Band tone="grey">
        <SectionHeading title="Questions about SLA tracking" />
        <Faq items={FAQ} />
      </Band>
      <PageCta />
    </>
  );
}
