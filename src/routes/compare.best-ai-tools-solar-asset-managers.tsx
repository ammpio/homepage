import { createFileRoute, Link } from "@tanstack/react-router";
import { Band, PageHero, SectionHeading, FeatureGrid, Faq } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";
import { AlternativesList } from "@/components/site/AlternativesList";
import { LivePostLink } from "@/components/site/LivePostLink";
import { AI_AMMP_FIT, AI_CATEGORIES, AI_CRITERIA, AI_FAQ } from "@/data/batch5";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/compare/best-ai-tools-solar-asset-managers")({
  staticData: { sitemap: true },
  head: () => pageHead({
    path: "/compare/best-ai-tools-solar-asset-managers",
    title: "Best AI tools for solar asset managers (2026) — AMMP",
    description: "Four kinds of AI tool for solar asset managers, and five criteria to judge them: live data, evidence per finding, human approval, permissions and where it runs.",
    faq: AI_FAQ,
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Platform comparison"
        title="Best AI tools for solar asset managers"
        highlight="(2026)."
        intro="Not a ranking. AI tools for solar portfolios fall into four kinds, each good at different jobs. Here is what each kind does, and five criteria to judge any of them."
        primary={{ label: "Talk to our team", to: "/contact" }}
        secondary={{ label: "Meet Ray", to: "/ray" }}
      />
      <Band tone="grey">
        <SectionHeading title="Four kinds of AI tool" />
        <AlternativesList items={AI_CATEGORIES} />
      </Band>
      <Band>
        <SectionHeading title="Five criteria" />
        <FeatureGrid columns={3} features={AI_CRITERIA} />
      </Band>
      <Band tone="grey">
        <SectionHeading title="How AMMP covers the criteria" />
        <FeatureGrid columns={3} features={AI_AMMP_FIT} />
        <p className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm leading-6">
          <Link to="/ray" className="font-medium underline underline-offset-4">Meet Ray</Link>
          <Link to="/mcp" className="font-medium underline underline-offset-4">MCP server and Data API</Link>
          <LivePostLink slug="can-claude-chatgpt-analyse-solar-monitoring-data" label="Can Claude or ChatGPT analyse solar monitoring data?" />
        </p>
      </Band>
      <Band>
        <SectionHeading title="Frequently asked questions" />
        <Faq items={AI_FAQ} />
      </Band>
      <PageCta />
    </>
  );
}
