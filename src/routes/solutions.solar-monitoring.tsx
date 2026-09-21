import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageData } from "@/lib/site-pages";
export const Route = createFileRoute("/solutions/solar-monitoring")({
  head: () => ({ meta: [
    { title: "Solar Monitoring Software — AMMP" }, { name: "description", content: "Monitor solar portfolios, prioritise issues and coordinate action in AMMP." },
    { property: "og:title", content: "Solar Monitoring Software — AMMP" }, { property: "og:description", content: "Monitor solar portfolios, prioritise issues and coordinate action in AMMP." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});
function Page(){ return <ContentPage {...pageData("product")} />; }
