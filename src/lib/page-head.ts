import { SITE } from "@/data/ammp-facts";
import { faqPageJsonLd, type FaqItem } from "@/data/faq";

/** Head for a content page: title/description/OG plus WebPage JSON-LD (and FAQPage when an FAQ is given). Canonical/og:url come from __root. */
export function pageHead({ path, title, description, faq }: { path: string; title: string; description: string; faq?: FaqItem[] }) {
  const scripts = [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: title,
        description,
        url: `${SITE}${path}`,
        isPartOf: { "@type": "WebSite", url: SITE },
        publisher: { "@id": `${SITE}/#organization` },
      }),
    },
  ];
  if (faq?.length) scripts.push({ type: "application/ld+json", children: JSON.stringify(faqPageJsonLd(faq)) });
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts,
  };
}
