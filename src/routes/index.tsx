import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/HomeSections";
import { HOME_FAQ, faqPageJsonLd } from "@/data/faq";
import { softwareApplicationJsonLd } from "@/data/ammp-facts";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({ meta: [
    { title: "AMMP — Solar and renewable energy asset management software with AI" },
    { name: "description", content: "Monitor and manage solar and storage portfolios in one place. 30+ integrations, 10,000+ sites in 30+ countries, and Ray, your AI coworker." },
    { property: "og:title", content: "AMMP — Solar and renewable energy asset management software with AI" },
    { property: "og:description", content: "Monitor and manage solar and storage portfolios in one place. 30+ integrations, 10,000+ sites in 30+ countries, and Ray, your AI coworker." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    { property: "og:image", content: "https://www.ammp.io/og-home.jpg" }, { name: "twitter:image", content: "https://www.ammp.io/og-home.jpg" },
  ], scripts: [
    { type: "application/ld+json", children: JSON.stringify(softwareApplicationJsonLd()) },
    { type: "application/ld+json", children: JSON.stringify(faqPageJsonLd(HOME_FAQ)) },
  ]}), component: HomePage,
});

