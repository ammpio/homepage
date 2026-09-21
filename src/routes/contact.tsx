import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageData } from "@/lib/site-pages";
export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact AMMP — AMMP" }, { name: "description", content: "Talk with AMMP about your renewable energy portfolio and operating needs." },
    { property: "og:title", content: "Contact AMMP — AMMP" }, { property: "og:description", content: "Talk with AMMP about your renewable energy portfolio and operating needs." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});
function Page(){ return <ContentPage {...pageData("contact")} />; }
