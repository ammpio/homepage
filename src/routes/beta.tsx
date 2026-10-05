import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, DollarSign, FlaskConical, Kanban, Plug } from "lucide-react";
import { Band, PageHero, FeatureGrid } from "@/components/site/sections";

export const Route = createFileRoute("/beta")({
  head: () => ({ meta: [
    { title: "AMMP Labs — Experimental features" },
    { name: "description", content: "Early access to experimental AMMP features: billing integration, AI + MCP server, and monday.com sync." },
    { property: "og:title", content: "AMMP Labs" },
    { property: "og:description", content: "Explore experimental tools and help shape the future of energy monitoring and AI coworker." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="AMMP Labs · Experimental features" title="Early access to what your" highlight="AI coworker will do next." intro="Welcome to AMMP Labs, where we test and refine new features before they're ready for prime time. Explore our experimental tools and help shape the future of energy monitoring." />

      <Band tone="grey">
        <h2 className="text-2xl font-semibold">Active experiments</h2>
        <FeatureGrid columns={3} features={[
          { icon: DollarSign, title: "Billing Integration (Alpha)", text: "Explore automated invoicing and payment tracking for energy contracts." },
          { icon: Plug, title: "AMMP AI + MCP Server (Beta)", text: "Connect any MCP-compatible AI assistant (Claude, Cursor, your own agent) to AMMP, or use AMMP's own AI agent \u201cRay\u201d, to query assets, KPIs, alerts and raw time-series in natural language." },
          { icon: Kanban, title: "monday.com integration (Alpha)", text: "Two-way sync between AMMP tickets and monday.com boards, so O&M teams can triage, assign and close work in the tool they already use every day." },
        ]} />
      </Band>

      <Band tone="white">
        <div className="mx-auto max-w-2xl rounded-xl border border-border bg-card p-8 text-center">
          <FlaskConical className="mx-auto size-8 text-primary" />
          <h3 className="mt-4 text-xl font-semibold">Have feedback?</h3>
          <p className="mt-2 text-muted-foreground">We'd love to hear your thoughts on these experimental features.</p>
          <Link to="/contact" className="button button-ghost mt-6">Share your feedback <ArrowUpRight className="size-4" /></Link>
        </div>
      </Band>
    </>
  );
}
