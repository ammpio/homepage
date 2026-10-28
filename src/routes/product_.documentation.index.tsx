import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { DocCards, DocsSearchInput, filterDocs } from "@/components/docs/Docs";
import { groupByCategory } from "@/lib/docs-core";
import { loadDocsIndex } from "@/lib/docs-data";
import { pageHead } from "@/lib/page-head";

const TITLE = "AMMP Documentation — guides for AMMP OS and AMMP AI";
const DESCRIPTION = "Product documentation for AMMP OS Platform and AMMP AI: getting started, modules, settings and how-to guides.";

export const Route = createFileRoute("/product_/documentation/")({
  // Added dynamically by the sitemap handler only when current docs exist.
  staticData: { sitemap: false },
  loader: () => loadDocsIndex(),
  head: ({ loaderData }) => {
    const head = pageHead({ path: "/product/documentation", title: TITLE, description: DESCRIPTION });
    return { ...head, meta: [...head.meta, ...(!loaderData?.length ? [{ name: "robots", content: "noindex" }] : [])] };
  },
  component: DocsIndex,
});

function DocsIndex() {
  const docs = Route.useLoaderData();
  const [q, setQ] = useState("");
  const groups = useMemo(() => groupByCategory(filterDocs(docs, q)), [docs, q]);
  return (
    <section className="luminous-band py-14 md:py-20">
      <div className="site-container">
        <p className="eyebrow">Product</p>
        <h1 className="mt-3 font-display text-4xl font-medium tracking-[-0.02em] sm:text-5xl">Documentation</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">{docs.length ? "Guides for AMMP OS Platform and AMMP AI." : "Documentation is coming soon"}</p>
        {docs.length > 0 && <DocsSearchInput value={q} onChange={setQ} className="mt-8 max-w-md" />}
        <div className="mt-10 space-y-12">
          {docs.length > 0 && groups.length === 0 && <p className="text-muted-foreground">No pages match your search.</p>}
          {groups.map((g) => (
            <div key={g.category}>
              <h2 className="mb-5 font-display text-2xl font-medium">{g.category}</h2>
              <DocCards docs={g.docs} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
