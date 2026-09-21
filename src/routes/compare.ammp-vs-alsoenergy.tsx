import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageData } from "@/lib/site-pages";
export const Route = createFileRoute("/compare/ammp-vs-alsoenergy")({
  head: () => ({ meta: [
    { title: "AMMP vs AlsoEnergy — AMMP" }, { name: "description", content: "Compare renewable energy portfolio operating platforms." },
    { property: "og:title", content: "AMMP vs AlsoEnergy — AMMP" }, { property: "og:description", content: "Compare renewable energy portfolio operating platforms." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});
function Page(){ return <ContentPage {...pageData("product")} />; }
