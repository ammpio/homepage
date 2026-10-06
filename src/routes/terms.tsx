import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { Band, PageHero, Prose } from "@/components/site/sections";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [
    { title: "Terms of Service — AMMP Technologies B.V." },
    { name: "description", content: "The terms and conditions for using AMMP's platform and services. Download the full AMMP Terms of Service document." },
    { property: "og:title", content: "Terms of Service — AMMP Technologies B.V." },
    { property: "og:description", content: "AMMP Technologies B.V.'s Terms of Service governing use of the AMMP platform and services." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of"
        highlight="Service."
        intro="AMMP Technologies B.V. Terms of Service."
      />

      <Band tone="white">
        <Prose plain>
          <div className="text-center not-prose">
            <p className="text-muted-foreground mb-8">
              Our Terms of Service document outlines the terms and conditions for using AMMP's platform and services. Please download and review the document below.
            </p>
            <a
              href="/documents/AMMP-Terms-of-Service.pdf"
              download
              target="_blank"
              rel="noopener"
              className="button button-pink"
            >
              <Download className="size-4" />
              Download Terms of Service (PDF)
            </a>
            <p className="text-sm text-muted-foreground mt-6">Last updated: 2 February 2026</p>
          </div>
        </Prose>
      </Band>
    </>
  );
}
