import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageData } from "@/lib/site-pages";
export const Route = createFileRoute("/compare/meteocontrol")({
  head: () => ({ meta: [
    { title: "AMMP vs Meteocontrol — AMMP" }, { name: "description", content: "Compare approaches to renewable energy portfolio monitoring and operations." },
    { property: "og:title", content: "AMMP vs Meteocontrol — AMMP" }, { property: "og:description", content: "Compare approaches to renewable energy portfolio monitoring and operations." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});
function Page(){ return <ContentPage {...pageData("product")} />; }
