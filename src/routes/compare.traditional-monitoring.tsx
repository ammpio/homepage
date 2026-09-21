import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageData } from "@/lib/site-pages";
export const Route = createFileRoute("/compare/traditional-monitoring")({
  head: () => ({ meta: [
    { title: "AMMP vs Traditional Monitoring — AMMP" }, { name: "description", content: "Compare a portfolio operating system with traditional renewable energy monitoring." },
    { property: "og:title", content: "AMMP vs Traditional Monitoring — AMMP" }, { property: "og:description", content: "Compare a portfolio operating system with traditional renewable energy monitoring." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});
function Page(){ return <ContentPage {...pageData("product")} />; }
