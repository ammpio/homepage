import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageData } from "@/lib/site-pages";
export const Route = createFileRoute("/careers")({
  head: () => ({ meta: [
    { title: "Careers at AMMP — AMMP" }, { name: "description", content: "Join AMMP in building the operating layer for the renewable energy transition." },
    { property: "og:title", content: "Careers at AMMP — AMMP" }, { property: "og:description", content: "Join AMMP in building the operating layer for the renewable energy transition." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});
function Page(){ return <ContentPage {...pageData("about")} />; }
