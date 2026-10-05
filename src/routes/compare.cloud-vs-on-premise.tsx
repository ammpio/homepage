import { createFileRoute } from "@tanstack/react-router";
import { Cloud, GitBranch, Shield, Zap } from "lucide-react";
import { Band, PageHero, SectionHeading, FeatureGrid, CompareTable } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";

export const Route = createFileRoute("/compare/cloud-vs-on-premise")({
  head: () => ({ meta: [
    { title: "Cloud-Native vs On-Premise Monitoring — AMMP" },
    { name: "description", content: "Explore the tradeoffs between cloud-native platforms like AMMP and traditional on-premise monitoring solutions." },
    { property: "og:title", content: "Cloud-Native vs On-Premise Monitoring — AMMP" },
    { property: "og:description", content: "Explore the tradeoffs between cloud-native platforms like AMMP and traditional on-premise monitoring solutions." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Page,
});

const rows = [
  { feature: "Access from anywhere", ammp: true, other: false },
  { feature: "Mobile app access", ammp: true, other: false },
  { feature: "No VPN required", ammp: true, other: false },
  { feature: "Multi-user access", ammp: true, other: "Partial" },
  { feature: "Add sites instantly", ammp: true, other: false },
  { feature: "Automatic resource scaling", ammp: true, other: false },
  { feature: "No hardware limits", ammp: true, other: false },
  { feature: "Global deployment", ammp: true, other: false },
  { feature: "Automatic software updates", ammp: true, other: false },
  { feature: "No on-site server maintenance", ammp: true, other: false },
  { feature: "Managed security patches", ammp: true, other: false },
  { feature: "24/7 infrastructure monitoring", ammp: true, other: "Partial" },
  { feature: "Redundant data storage", ammp: true, other: "Partial" },
  { feature: "Automatic failover", ammp: true, other: "Partial" },
  { feature: "Disaster recovery", ammp: true, other: "Partial" },
  { feature: "SOC 2 compliance", ammp: true, other: "Partial" },
  { feature: "Encrypted data transfer", ammp: true, other: true },
  { feature: "Regular security audits", ammp: true, other: "Partial" },
  { feature: "No upfront hardware cost", ammp: true, other: false },
  { feature: "Predictable monthly pricing", ammp: true, other: false },
  { feature: "No IT staff required", ammp: true, other: false },
];

const differentiators = [
  { icon: Cloud, title: "Best of Both Worlds", text: "AMMP Edge provides local data buffering while cloud delivers accessibility and scale." },
  { icon: Shield, title: "Enterprise Security", text: "ISO 27001 certified with SOC 2 compliance, regular audits, and encrypted communications." },
  { icon: Zap, title: "Instant Scalability", text: "Add hundreds of sites without procurement cycles, server rooms, or capacity planning." },
  { icon: GitBranch, title: "Continuous Innovation", text: "New features and improvements deployed automatically, no upgrade projects required." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Approach comparison"
        title="Cloud-Native vs On-Premise Monitoring"
        intro="Explore the tradeoffs between cloud-native platforms like AMMP and traditional on-premise monitoring solutions."
        primary={{ label: "Book a demo", to: "/demo" }}
        secondary={{ label: "Talk to sales", to: "/contact" }}
      />
      <Band tone="grey">
        <SectionHeading eyebrow="Overview" title="Where the approaches differ" />
        <div className="mt-6 max-w-3xl space-y-4 text-base leading-7 text-muted-foreground">
          <p>On-premise monitoring was the default for industrial systems, local servers, site-specific installations, complete control within your firewall. But managing distributed solar portfolios with on-premise tools means multiplied complexity.</p>
          <p>AMMP offers a different approach: AI coworker running on cloud-native AMMP OS give you centralised management, automatic scaling, and access from anywhere. With AMMP Edge, you get the best of both, local data buffering for reliability with cloud accessibility and analytics.</p>
        </div>
      </Band>
      <Band tone="white">
        <SectionHeading eyebrow="Feature comparison" title={`AMMP vs ${"On-Premise"}`} />
        <CompareTable otherLabel="On-Premise" rows={rows} />
      </Band>
      <Band tone="grey">
        <SectionHeading eyebrow="Why AMMP" title="Why cloud-native with AMMP?" center />
        <FeatureGrid columns={4} features={differentiators} />
      </Band>
      <PageCta />
    </>
  );
}
