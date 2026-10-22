import { createFileRoute } from "@tanstack/react-router";
import { Band, PageHero, SectionHeading, Faq } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";
import { FAQ_GROUPS, faqPageJsonLd } from "@/data/faq";

const FAQ_JSON_LD = faqPageJsonLd(FAQ_GROUPS.flatMap((g) => g.items));

export const Route = createFileRoute("/faq")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "FAQ — AMMP OS and an AI coworker for renewable energy" },
      { name: "description", content: "Answers to common questions about AMMP: what AMMP OS Platform and Ray do, integrations, pricing, security, reporting and switching from another platform." },
      { property: "og:title", content: "FAQ — AMMP OS and an AI coworker for renewable energy" },
      { property: "og:description", content: "Common questions about AMMP OS Platform and Ray, your AI coworker: integrations, pricing, security and getting started." },
      { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(FAQ_JSON_LD) }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked"
        highlight="questions."
        intro="Everything you need to know about AMMP OS, from platform capabilities to getting started with an AI coworker built on top of it."
        primary={{ label: "Contact us", to: "/contact" }}
        secondary={{ label: "Try demo", to: "/demo" }}
      />

      {FAQ_GROUPS.map((group) => (
        <Band key={group.eyebrow} tone={group.tone}>
          <SectionHeading eyebrow={group.eyebrow} title={group.title} />
          <Faq items={group.items} />
        </Band>
      ))}

      <PageCta />
    </>
  );
}
