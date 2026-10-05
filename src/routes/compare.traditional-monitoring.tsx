import { createFileRoute } from "@tanstack/react-router";
import { Bell, Cloud, Smartphone, TrendingUp } from "lucide-react";
import { Band, PageHero, SectionHeading, FeatureGrid, CompareTable } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";

export const Route = createFileRoute("/compare/traditional-monitoring")({
  head: () => ({ meta: [
    { title: "AMMP vs Traditional Monitoring — AMMP" },
    { name: "description", content: "Compare modern cloud-based monitoring with traditional SCADA systems, local loggers, and spreadsheet-based tracking." },
    { property: "og:title", content: "AMMP vs Traditional Monitoring — AMMP" },
    { property: "og:description", content: "Compare modern cloud-based monitoring with traditional SCADA systems, local loggers, and spreadsheet-based tracking." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Page,
});

const rows = [
  { feature: "Cloud-based access", ammp: true, other: false },
  { feature: "Mobile app", ammp: true, other: false },
  { feature: "Access from anywhere", ammp: true, other: false },
  { feature: "No VPN required", ammp: true, other: false },
  { feature: "Automated alerts", ammp: true, other: "Partial — Often requires manual checking" },
  { feature: "Email notifications", ammp: true, other: "Partial" },
  { feature: "Slack/Teams integration", ammp: true, other: false },
  { feature: "Escalation rules", ammp: true, other: false },
  { feature: "Automatic data backup", ammp: true, other: false },
  { feature: "Historical data storage", ammp: true, other: "Partial — Often limited by local storage" },
  { feature: "Data export/API", ammp: true, other: "Partial" },
  { feature: "Automated reports", ammp: true, other: false },
  { feature: "Custom report builder", ammp: true, other: false },
  { feature: "Scheduled delivery", ammp: true, other: false },
  { feature: "Automatic software updates", ammp: true, other: false },
  { feature: "No on-site server maintenance", ammp: true, other: false },
  { feature: "24/7 system monitoring", ammp: true, other: false },
  { feature: "Multi-site portfolio view", ammp: true, other: false },
  { feature: "Unlimited historical data", ammp: true, other: false },
  { feature: "Easy site onboarding", ammp: true, other: false },
];

const differentiators = [
  { icon: Cloud, title: "Always Accessible", text: "Access your data from anywhere, office, home, or on-site, without VPNs or special network configuration." },
  { icon: Bell, title: "Proactive Alerting", text: "Stop manually checking systems. AI coworker surface instant alerts when issues arise, with smart escalation rules." },
  { icon: Smartphone, title: "Modern Experience", text: "Mobile apps, Slack integration, and a responsive web interface designed for how you work today." },
  { icon: TrendingUp, title: "Zero Maintenance", text: "No servers to maintain, no software to update. Focus on your sites, not your monitoring infrastructure." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Approach comparison"
        title="AMMP vs Traditional Monitoring"
        intro="Compare modern cloud-based monitoring with traditional SCADA systems, local loggers, and spreadsheet-based tracking."
        primary={{ label: "Book a demo", to: "/demo" }}
        secondary={{ label: "Talk to sales", to: "/contact" }}
      />
      <Band tone="grey">
        <SectionHeading eyebrow="Overview" title="Where the approaches differ" />
        <div className="mt-6 max-w-3xl space-y-4 text-base leading-7 text-muted-foreground">
          <p>Traditional monitoring approaches, SCADA systems, local data loggers, manual spreadsheet tracking, served their purpose but were not designed for today's distributed solar portfolios. They require on-site access, manual data collection, and constant maintenance.</p>
          <p>AMMP brings solar monitoring into the modern era with AI coworker running on cloud-native AMMP OS. Access your entire portfolio from anywhere, receive instant alerts, and let automated systems handle the data collection while you focus on optimising performance.</p>
        </div>
      </Band>
      <Band tone="white">
        <SectionHeading eyebrow="Feature comparison" title={`AMMP vs ${"Traditional"}`} />
        <CompareTable otherLabel="Traditional" rows={rows} />
      </Band>
      <Band tone="grey">
        <SectionHeading eyebrow="Why AMMP" title="Why modernize with AMMP?" center />
        <FeatureGrid columns={4} features={differentiators} />
      </Band>
      <PageCta />
    </>
  );
}
