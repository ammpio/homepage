import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageData } from "@/lib/site-pages";
export const Route = createFileRoute("/switch")({
  head: () => ({ meta: [
    { title: "Switch to AMMP — AMMP" }, { name: "description", content: "Bring your renewable energy portfolio onto one modern operating platform." },
    { property: "og:title", content: "Switch to AMMP — AMMP" }, { property: "og:description", content: "Bring your renewable energy portfolio onto one modern operating platform." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});
function Page(){ return <ContentPage {...pageData("product")} />; }
