import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bell, Gauge, Layers, MessageSquare, Plug, Ticket } from "lucide-react";
import { Band, PageHero, SectionHeading, FeatureGrid, Faq } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";
import { pageHead } from "@/lib/page-head";

const FAQ = [
  { q: "Which solar brands can AMMP monitor in one portal?", a: "AMMP connects 30+ integrations via cloud API or the AMMP Edge datalogger, including Huawei, SMA, SolarEdge, Sungrow, Fronius, Victron, GoodWe, Solis, Deye, Growatt, AlphaESS and SigEnergy." },
  { q: "Where do alerts go?", a: "Alerts arrive in Microsoft Teams, Slack and AMMP OS, so your team sees them where it already works." },
  { q: "Do we have to replace our monitoring hardware?", a: "No. AMMP reads data from your existing equipment through cloud APIs, and the AMMP Edge datalogger covers equipment without one." },
];

export const Route = createFileRoute("/solutions/solar-monitoring")({
  staticData: { sitemap: true },
  head: () => pageHead({
    path: "/solutions/solar-monitoring",
    title: "Multi-brand solar monitoring in one portal — AMMP",
    description: "Monitor Huawei, SMA, Sungrow and 30+ other integrations in one portal, with alerts in Microsoft Teams and Slack. One source of truth for every site.",
    faq: FAQ,
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Solar monitoring"
        title="Every solar brand in your portfolio,"
        highlight="in one portal."
        intro="AMMP OS Platform brings Huawei, SMA, Sungrow and 30+ other integrations into one view for commercial and industrial (C&I) solar portfolios, with consistent KPIs and alerts in Microsoft Teams and Slack."
        primary={{ label: "Talk to our team", to: "/contact" }}
        secondary={{ label: "See integrations", to: "/integrations" }}
      />
      <Band tone="grey">
        <SectionHeading title="Huawei, SMA, Sungrow and the rest, side by side" intro="Every manufacturer has its own portal: FusionSolar, Sunny Portal, iSolarCloud. Mixed commercial and industrial portfolios end up switching between them and rebuilding reports by hand. AMMP reads them all into one place." />
        <FeatureGrid columns={3} features={[
          { icon: Plug, title: "30+ integrations", text: "Cloud API connections to the major inverter brands, and the AMMP Edge datalogger for equipment without one." },
          { icon: Gauge, title: "One way to measure", text: "Performance ratio, availability and yield calculated the same way across every brand." },
          { icon: Layers, title: "10,000+ sites, 30+ countries", text: "The same platform already runs portfolios of every size." },
        ]} />
      </Band>
      <Band>
        <SectionHeading title="Alerts where your team already works" intro="Alerts go to Microsoft Teams first, and to Slack and AMMP OS too. Ray, the AI coworker, checks every site daily and ranks issues by operational and commercial impact." />
        <FeatureGrid columns={3} features={[
          { icon: MessageSquare, title: "Microsoft Teams and Slack", text: "Get alerts and ask Ray questions in the chat tools you already use." },
          { icon: Bell, title: "Tuned per site", text: "Set thresholds that fit each site, so the team only hears about what matters." },
          { icon: Ticket, title: "From alert to ticket", text: "Turn an alert into a ticket and track it until it is closed." },
        ]} />
        <div className="mt-8 flex flex-wrap gap-6">
          <Link to="/integrations" className="inline-flex items-center gap-1 text-sm font-medium hover:underline">All integrations <ArrowRight className="size-4" /></Link>
          <Link to="/compare/vendor-portals" className="inline-flex items-center gap-1 text-sm font-medium hover:underline">AMMP vs manufacturer portals <ArrowRight className="size-4" /></Link>
        </div>
      </Band>
      <Band tone="grey">
        <SectionHeading title="Questions about multi-brand monitoring" />
        <Faq items={FAQ} />
      </Band>
      <PageCta />
    </>
  );
}
