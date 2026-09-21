import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageData } from "@/lib/site-pages";
export const Route = createFileRoute("/faq")({
  head: () => ({ meta: [
    { title: "AMMP Frequently Asked Questions — AMMP" }, { name: "description", content: "Answers about AMMP OS, integrations, implementation and AI coworkers." },
    { property: "og:title", content: "AMMP Frequently Asked Questions — AMMP" }, { property: "og:description", content: "Answers about AMMP OS, integrations, implementation and AI coworkers." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});
function Page(){ return <ContentPage {...pageData("product")} />; }
