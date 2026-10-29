import { createFileRoute, Link } from "@tanstack/react-router";
import { Band, PageHero, SectionHeading, FeatureGrid, Faq } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";
import { AlternativesList } from "@/components/site/AlternativesList";
import { OM_AMMP_FIT, OM_CRITERIA, OM_EPC_PLATFORMS, OM_FAQ } from "@/data/om-epc-compare";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/compare/best-solar-om-platforms")({
  staticData: { sitemap: true },
  head: () => pageHead({
    path: "/compare/best-solar-om-platforms",
    title: "Best solar and battery O&M platforms compared — AMMP",
    description: "Criteria for O&M teams running multi-brand commercial and industrial portfolios: SLA tracking, preventive maintenance, ticketing, alerts, reporting and data access.",
    faq: OM_FAQ,
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Platform comparison"
        title="Best solar and battery"
        highlight="O&M platforms compared."
        intro="For O&M teams running multi-brand commercial and industrial (C&I) portfolios. This page sets out seven criteria for choosing a platform and a fair description of the main options. AMMP is one of them, not the only good one."
        primary={{ label: "Talk to our team", to: "/contact" }}
        secondary={{ label: "For O&M providers", to: "/use-cases/om-providers" }}
      />
      <Band tone="grey">
        <SectionHeading title="Seven criteria for O&M teams" />
        <FeatureGrid columns={3} features={OM_CRITERIA} />
      </Band>
      <Band>
        <SectionHeading title="The platforms" intro="Short, neutral descriptions based on our published comparisons, with where each fits best." />
        <AlternativesList items={OM_EPC_PLATFORMS} />
      </Band>
      <Band tone="grey">
        <SectionHeading title="How AMMP covers the criteria" />
        <FeatureGrid columns={3} features={OM_AMMP_FIT} />
        <p className="mt-8 text-sm leading-6">
          <Link to="/solutions/om-sla-tracking" className="font-medium underline underline-offset-4">O&M SLA tracking</Link>
          <span className="text-muted-foreground"> · </span>
          <Link to="/use-cases/om-providers" className="font-medium underline underline-offset-4">AMMP for O&M providers</Link>
          <span className="text-muted-foreground"> · </span>
          <Link to="/blog/$slug" params={{ slug: "rank-solar-alarms-by-revenue-risk" }} className="font-medium underline underline-offset-4">How to rank solar alarms by revenue risk</Link>
        </p>
      </Band>
      <Band>
        <SectionHeading title="Pairing a CMMS or work-order tool with a monitoring platform" intro="A monitoring platform detects and prioritises problems. A CMMS or work-order tool plans technicians, parts and visits. Many O&M teams use both." />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            { title: "Decide where tickets live", text: "Pick one system as the place work is assigned and closed, so technicians are not working from two lists." },
            { title: "Connect the two", text: "Check that alerts or tickets can pass between them through an API or webhooks." },
            { title: "Use the same IDs", text: "Both tools should use the same site and asset IDs, so a fault, its ticket and its fix can be traced end to end." },
          ].map((c) => (
            <div key={c.title} className="glass-soft rounded-2xl p-6">
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{c.text}</p>
            </div>
          ))}
        </div>
      </Band>
      <Band tone="grey">
        <SectionHeading title="Frequently asked questions" />
        <Faq items={OM_FAQ} />
      </Band>
      <PageCta />
    </>
  );
}
