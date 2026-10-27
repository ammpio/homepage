import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { DocsSidebar, DocsToc, EnglishOnlyNote, formatDocDate } from "@/components/docs/Docs";
import { getDocPage } from "@/lib/docs.functions";
import { pageHead } from "@/lib/page-head";
import { SITE } from "@/data/ammp-facts";

export const Route = createFileRoute("/product_/documentation/$slug")({
  staticData: { sitemap: true },
  loader: ({ params }) => getDocPage({ data: { slug: params.slug } }),
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Documentation page unavailable | AMMP" }, { name: "robots", content: "noindex" }] };
    const { doc } = loaderData;
    const path = `/product/documentation/${params.slug}`;
    const head = pageHead({ path, title: `${doc.title} | AMMP Documentation`, description: doc.description });
    head.scripts.push({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Product", item: `${SITE}/product` },
          { "@type": "ListItem", position: 2, name: "Documentation", item: `${SITE}/product/documentation` },
          { "@type": "ListItem", position: 3, name: doc.title, item: `${SITE}${path}` },
        ],
      }),
    });
    return {
      ...head,
      meta: [...head.meta, { property: "article:modified_time", content: doc.updated }],
      links: [{ rel: "alternate", type: "text/markdown", href: `${path}.md` }],
    };
  },
  component: DocPage,
});

function DocPage() {
  const { doc, html, headings, nav } = Route.useLoaderData();
  return (
    <section className="luminous-band py-10 md:py-14">
      <div className="site-container grid gap-10 lg:grid-cols-[15rem_minmax(0,1fr)_13rem]">
        <aside className="lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:self-start lg:overflow-y-auto">
          <DocsSidebar docs={nav} current={doc.slug} />
        </aside>
        <article className="min-w-0">
          <EnglishOnlyNote />
          <nav aria-label="Breadcrumb" data-no-translate className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
            <Link to="/product" className="hover:text-foreground">Product</Link>
            <ChevronRight className="size-3.5" />
            <Link to="/product/documentation" className="hover:text-foreground">Documentation</Link>
            <ChevronRight className="size-3.5" />
            <span>{doc.category}</span>
            <ChevronRight className="size-3.5" />
            <span aria-current="page" className="text-foreground">{doc.title}</span>
          </nav>
          <h1 data-no-translate className="mt-4 font-display text-4xl font-medium tracking-[-0.02em]">{doc.title}</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Last updated <time dateTime={doc.updated}>{formatDocDate(doc.updated)}</time>
            {" · "}
            <a href={`/product/documentation/${doc.slug}.md`} className="underline-offset-4 hover:underline">View as markdown</a>
          </p>
          <div data-no-translate className="docs-prose mt-8" dangerouslySetInnerHTML={{ __html: html }} />
        </article>
        <aside className="hidden lg:sticky lg:top-24 lg:block lg:self-start">
          <DocsToc headings={headings} />
        </aside>
      </div>
    </section>
  );
}
