import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, Code, Database, Layout } from "lucide-react";
import { Band, PageHero, SectionHeading, FeatureGrid, CompareTable } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";

export const Route = createFileRoute("/compare/data-first-vs-ui-first")({
  head: () => ({ meta: [
    { title: "Data-First vs UI-First Platforms — AMMP" },
    { name: "description", content: "What matters more: powerful analytics or a polished interface? With AMMP, you do not have to choose." },
    { property: "og:title", content: "Data-First vs UI-First Platforms — AMMP" },
    { property: "og:description", content: "What matters more: powerful analytics or a polished interface? With AMMP, you do not have to choose." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Page,
});

const rows = [
  { feature: "Full API access", ammp: true, other: "Partial" },
  { feature: "Raw data export", ammp: true, other: "Partial" },
  { feature: "Granular data (1-min resolution)", ammp: true, other: "Partial" },
  { feature: "Historical data retention", ammp: true, other: "Partial" },
  { feature: "Custom calculations", ammp: true, other: false },
  { feature: "Portfolio benchmarking", ammp: true, other: "Partial" },
  { feature: "Predictive analytics", ammp: true, other: "Partial" },
  { feature: "Financial modeling", ammp: true, other: false },
  { feature: "Programmable reports", ammp: true, other: false },
  { feature: "Automated delivery", ammp: true, other: "Partial" },
  { feature: "Custom templates", ammp: true, other: "Partial" },
  { feature: "White-label exports", ammp: true, other: "Partial" },
  { feature: "REST API", ammp: true, other: "Partial" },
  { feature: "Webhook notifications", ammp: true, other: false },
  { feature: "Third-party integrations", ammp: true, other: "Partial" },
  { feature: "BI tool connectivity", ammp: true, other: "Partial" },
  { feature: "Modern, responsive UI", ammp: true, other: true },
  { feature: "Customizable dashboards", ammp: true, other: true },
  { feature: "Mobile app", ammp: true, other: true },
  { feature: "Role-based access", ammp: true, other: true },
];

const differentiators = [
  { icon: Database, title: "Data Ownership", text: "Your data is always accessible via API. Export anytime, integrate anywhere, no vendor lock-in." },
  { icon: BarChart3, title: "Deep Analytics", text: "Beyond pretty charts, financial modelling, portfolio benchmarking, and predictive maintenance." },
  { icon: Code, title: "Programmable Platform", text: "API-first design means you can build custom workflows, automate reports, and integrate with your tools." },
  { icon: Layout, title: "Beautiful UI Too", text: "Data-first does not mean ugly. AMMP combines powerful analytics with an intuitive, modern interface." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Approach comparison"
        title="Data-First vs UI-First Platforms"
        intro="What matters more: powerful analytics or a polished interface? With AMMP, you do not have to choose."
        primary={{ label: "Book a demo", to: "/demo" }}
        primaryVariant="pink"
        secondary={{ label: "Talk to sales", to: "/contact" }}
      />
      <Band tone="grey">
        <SectionHeading eyebrow="Overview" title="Where the approaches differ" />
        <div className="mt-6 max-w-3xl space-y-4 text-base leading-7 text-muted-foreground">
          <p>Some monitoring platforms prioritise visual polish, beautiful dashboards that impress in demos but limit what you can actually do with your data. Others focus on data access but feel clunky and outdated.</p>
          <p>AMMP takes a data-first approach without sacrificing user experience. Full API access, programmable reports, and raw data exports, combined with an AI coworker and a modern, intuitive interface your team will actually enjoy using.</p>
        </div>
      </Band>
      <Band tone="white">
        <SectionHeading eyebrow="Feature comparison" title={`AMMP vs ${"UI-First"}`} />
        <CompareTable otherLabel="UI-First" rows={rows} />
      </Band>
      <Band tone="grey">
        <SectionHeading eyebrow="Why AMMP" title="Why AMMP's approach?" center />
        <FeatureGrid columns={4} features={differentiators} />
      </Band>
      <PageCta />
    </>
  );
}
