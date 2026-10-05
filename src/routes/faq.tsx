import { createFileRoute } from "@tanstack/react-router";
import { Band, PageHero, SectionHeading, Faq } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";

export const Route = createFileRoute("/faq")({
  head: () => ({ meta: [
    { title: "FAQ — AMMP OS and an AI coworker for renewable energy" },
    { name: "description", content: "Answers about AMMP OS: monitoring, integrations, reporting, security and switching, plus how AI coworker build on that data." },
    { property: "og:title", content: "FAQ — AMMP OS and an AI coworker for renewable energy" },
    { property: "og:description", content: "Everything you need to know about AMMP OS, from platform capabilities to getting started with AI coworker." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked"
        highlight="questions."
        intro="Everything you need to know about AMMP OS, from platform capabilities to getting started with an AI coworker built on top of it."
        primary={{ label: "Contact us", to: "/contact" }}
        secondary={{ label: "Try demo", to: "/demo" }}
      />

      <Band tone="white">
        <SectionHeading eyebrow="Product & Platform" title="How AMMP OS works" />
        <Faq items={[
          { q: "What is AMMP OS?", a: "AMMP OS is a cloud-based monitoring, reporting, and analytics platform purpose-built for operators of distributed C&I solar and battery portfolios. It unifies data from all your sites and equipment brands into a single operational hub." },
          { q: "What types of energy systems does AMMP support?", a: "AMMP supports C&I solar PV, battery energy storage systems (BESS), hybrid systems, and mini-grids. Whether you operate rooftop solar, ground-mount installations, or off-grid systems, AMMP can monitor and manage them." },
          { q: "Can I monitor multiple equipment brands in one platform?", a: "Yes. AMMP integrates with 30+ equipment manufacturers including inverters, meters, batteries, and environmental sensors. You get a single view across your entire portfolio regardless of hardware brand." },
          { q: "Is AMMP cloud-based or on-premise?", a: "AMMP is a cloud-based SaaS platform. There's nothing to install or maintain on your side. You access everything through a web browser, and our team handles all infrastructure, updates, and security." },
          { q: "What dashboards and views are available?", a: "AMMP provides portfolio-level overviews, site-level dashboards, a NOC (Network Operations Centre) view for O&M teams, and a stakeholder portal for investors and clients. Each view is tailored to the needs of its audience." },
        ]} />
      </Band>

      <Band tone="grey">
        <SectionHeading eyebrow="Data & Integrations" title="Connecting your equipment" />
        <Faq items={[
          { q: "How does AMMP connect to my equipment?", a: "AMMP primarily connects through APIs to supported equipment manufacturers' cloud platforms, no additional hardware needed. For sites where cloud connectivity isn't available or direct local communication is required, the AMMP Edge gateway can be deployed to collect data over Modbus, Sunspec, or other protocols and send it securely to the cloud." },
          { q: "Does AMMP offer an API?", a: "Yes. AMMP provides a REST API that gives you programmatic access to your monitoring data. You can use it to build custom integrations, feed data into your own tools, or automate workflows." },
          { q: "Can I integrate AMMP with other tools like Power BI or Slack?", a: "Yes. AMMP integrates with tools like Power BI for custom analytics dashboards, Slack for alert notifications, and other platforms via the API. This lets you fit AMMP into your existing operational workflows." },
        ]} />
      </Band>

      <Band tone="white">
        <SectionHeading eyebrow="Reporting" title="Automated, white-labelled reports" />
        <Faq items={[
          { q: "What kind of reports can I generate?", a: "AMMP generates automated PDF reports, financial impact reports, and performance analytics summaries. Reports can be scheduled monthly or on-demand, and cover metrics like energy yield, availability, performance ratio, and savings." },
          { q: "Can reports be white-labeled?", a: "Yes. Reports can be customised with your company's branding, logo, and colour scheme. This is especially useful for O&M providers and asset managers who share reports with their own clients and investors." },
        ]} />
      </Band>

      <Band tone="grey">
        <SectionHeading eyebrow="Security & Reliability" title="Built to be trusted with your data" />
        <Faq items={[
          { q: "Is AMMP secure?", a: "Yes. AMMP Technologies is ISO/IEC 27001:2022 certified, which means our information security management system meets international standards. Data is encrypted in transit and at rest, and we follow strict access control policies." },
          { q: "What uptime does AMMP provide?", a: "AMMP is cloud-hosted with high-availability infrastructure. Our platform is designed for continuous uptime with redundancy and automated failover, so your monitoring data is always accessible." },
        ]} />
      </Band>

      <Band tone="white">
        <SectionHeading eyebrow="Switching & Getting Started" title="Moving to AMMP" />
        <Faq items={[
          { q: "How long does setup take?", a: "About a month. Our team handles onboarding, integration, and data migration." },
          { q: "Do I need to replace my existing hardware?", a: "No. AMMP connects to equipment you already have from 30+ manufacturers." },
          { q: "What if I'm under contract with another monitoring provider?", a: "We can start with a low-touch dry run during the handover period, then move everything over quickly after initial setup." },
          { q: "Is there a free trial?", a: "We offer a discounted 6-month trial period that includes a pilot phase. This lets you validate AMMP with a subset of your portfolio before committing to a full rollout." },
          { q: "Can I run AMMP alongside my current monitoring setup?", a: "Yes. During the trial period, you can run AMMP side-by-side with your existing tools. This lets you compare performance and build confidence before transitioning fully." },
          { q: "How does pricing work?", a: "Based on MWp and the modules you choose. See the pricing page for details." },
        ]} />
      </Band>

      <PageCta />
    </>
  );
}
