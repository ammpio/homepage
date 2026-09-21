import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageData } from "@/lib/site-pages";
export const Route = createFileRoute("/integrations")({
  head: () => ({ meta: [
    { title: "Renewable Energy Integrations — AMMP" }, { name: "description", content: "Connect renewable energy technologies, tools and data in one portfolio view." },
    { property: "og:title", content: "Renewable Energy Integrations — AMMP" }, { property: "og:description", content: "Connect renewable energy technologies, tools and data in one portfolio view." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});
function Page(){ return <ContentPage {...pageData("integrations")} />; }
