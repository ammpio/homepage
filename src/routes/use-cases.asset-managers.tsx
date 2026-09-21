import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageData } from "@/lib/site-pages";
export const Route = createFileRoute("/use-cases/asset-managers")({
  head: () => ({ meta: [
    { title: "AMMP for Asset Managers — AMMP" }, { name: "description", content: "Turn renewable energy portfolio performance into commercial and operational decisions." },
    { property: "og:title", content: "AMMP for Asset Managers — AMMP" }, { property: "og:description", content: "Turn renewable energy portfolio performance into commercial and operational decisions." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});
function Page(){ return <ContentPage {...pageData("product")} />; }
