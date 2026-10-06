import { createFileRoute } from "@tanstack/react-router";
import { DollarSign, Rocket, Target, Users } from "lucide-react";
import { Band, PageHero, SectionHeading, FeatureGrid, CompareTable } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";

export const Route = createFileRoute("/compare/univers")({
  head: () => ({ meta: [
    { title: "Focused C&I Platform vs Enterprise Scale — AMMP" },
    { name: "description", content: "Univers operates a massive IoT and AI platform managing 845GW of energy assets. AMMP offers a focused, accessible solution for commercial and industrial distributed energy." },
    { property: "og:title", content: "Focused C&I Platform vs Enterprise Scale — AMMP" },
    { property: "og:description", content: "Univers operates a massive IoT and AI platform managing 845GW of energy assets. AMMP offers a focused, accessible solution for commercial and industrial distributed energy." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Page,
});

const rows = [
  { feature: "Multi-vendor equipment support", ammp: true, other: true },
  { feature: "C&I solar focus", ammp: true, other: "No — EnOS targets utility & enterprise scale" },
  { feature: "AI-powered analytics", ammp: true, other: true },
  { feature: "Battery storage monitoring", ammp: true, other: true },
  { feature: "IoT device management", ammp: true, other: true },
  { feature: "Grid-scale asset support", ammp: false, other: true },
  { feature: "Customizable alert rules", ammp: true, other: true },
  { feature: "Slack/Teams integration", ammp: true, other: "Partial" },
  { feature: "WhatsApp alerts", ammp: true, other: false },
  { feature: "Predictive maintenance", ammp: true, other: true },
  { feature: "Automated PDF reports", ammp: true, other: true },
  { feature: "White-label reports", ammp: true, other: true },
  { feature: "Carbon tracking", ammp: true, other: true },
  { feature: "ESG reporting", ammp: true, other: true },
  { feature: "Cloud-native platform", ammp: true, other: true },
  { feature: "REST API access", ammp: true, other: true },
  { feature: "Self-service onboarding", ammp: true, other: "No — Enterprise sales process required" },
  { feature: "Quick deployment (<1 week)", ammp: true, other: false },
];

const differentiators = [
  { icon: Target, title: "Purpose-Built for C&I", text: "While Univers manages 845GW across utilities and enterprises, AMMP focuses on the unique needs of commercial and industrial solar portfolios." },
  { icon: Rocket, title: "Simple Deployment", text: "No enterprise sales cycles or complex implementation projects. Start monitoring your assets within days of signing up." },
  { icon: DollarSign, title: "Transparent Pricing", text: "Clear, portfolio-based pricing without enterprise licensing negotiations. Know exactly what you will pay as you scale." },
  { icon: Users, title: "Focused Expertise", text: "Our team specialises in C&I solar and storage, delivering deep domain expertise rather than broad enterprise capabilities." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="AMMP vs Univers (EnOS)"
        title="Focused C&I Platform vs Enterprise Scale"
        intro="Univers operates a massive IoT and AI platform managing 845GW of energy assets. AMMP offers a focused, accessible solution for commercial and industrial distributed energy."
        primary={{ label: "Book a demo", to: "/demo" }}
        primaryVariant="pink"
        secondary={{ label: "Talk to sales", to: "/contact" }}
      />
      <Band tone="grey">
        <SectionHeading eyebrow="Overview" title="Where the approaches differ" />
        <div className="mt-6 max-w-3xl space-y-4 text-base leading-7 text-muted-foreground">
          <p>Univers (formerly Envision Digital) operates EnOS, one of the world's largest energy IoT platforms. Their platform manages over 845GW of renewable energy assets globally, serving major utilities, enterprises, and governments with AI-powered optimisation and carbon management.</p>
          <p>AMMP takes a fundamentally different approach, with an AI coworker on AMMP OS focused specifically on the needs of C&I solar and storage portfolios. This specialisation means faster deployment, simpler operations, and pricing accessible to growing renewable energy businesses, not just enterprise giants.</p>
        </div>
      </Band>
      <Band tone="white">
        <SectionHeading eyebrow="Feature comparison" title={`AMMP vs ${"Univers (EnOS)"}`} />
        <CompareTable otherLabel="Univers (EnOS)" rows={rows} />
      </Band>
      <Band tone="grey">
        <SectionHeading eyebrow="Why AMMP" title="Why choose AMMP?" center />
        <FeatureGrid columns={4} features={differentiators} />
      </Band>
      <PageCta />
    </>
  );
}
