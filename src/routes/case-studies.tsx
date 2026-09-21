import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageData } from "@/lib/site-pages";
export const Route = createFileRoute("/case-studies")({
  head: () => ({ meta: [
    { title: "Customer Results — AMMP" }, { name: "description", content: "See results delivered by AMMP across live renewable energy portfolios." },
    { property: "og:title", content: "Customer Results — AMMP" }, { property: "og:description", content: "See results delivered by AMMP across live renewable energy portfolios." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});
function Page(){ return <ContentPage {...pageData("case-studies")} />; }
