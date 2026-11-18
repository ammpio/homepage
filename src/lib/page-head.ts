import { SITE } from "@/data/ammp-facts";
import { faqPageJsonLd, type FaqItem } from "@/data/faq";
import type { Author } from "@/data/authors";

/** Head for a content page: title/description/OG plus WebPage JSON-LD (and FAQPage when an FAQ is given). Canonical/og:url come from __root. */
/** With `article`, also emits Article JSON-LD with the byline and dates. */
export function pageHead({ path, title, description, faq, article }: { path: string; title: string; description: string; faq?: FaqItem[]; article?: { author: Author; published: string; modified?: string } }) {
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
  if (article) scripts.push({
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description,
      url: `${SITE}${path}`,
      mainEntityOfPage: `${SITE}${path}`,
      datePublished: article.published,
      dateModified: article.modified ?? article.published,
      author: { "@type": "Person", name: article.author.name, jobTitle: article.author.jobTitle, url: article.author.url },
      publisher: { "@id": `${SITE}/#organization` },
    }),
  });
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
