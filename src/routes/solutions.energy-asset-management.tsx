import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageData } from "@/lib/site-pages";
export const Route = createFileRoute("/solutions/energy-asset-management")({
  head: () => ({ meta: [
    { title: "Energy Asset Management Software — AMMP" }, { name: "description", content: "Operate diverse renewable energy assets from one trusted portfolio platform." },
    { property: "og:title", content: "Energy Asset Management Software — AMMP" }, { property: "og:description", content: "Operate diverse renewable energy assets from one trusted portfolio platform." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});
function Page(){ return <ContentPage {...pageData("product")} />; }
