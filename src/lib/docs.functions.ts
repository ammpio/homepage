import { createServerFn } from "@tanstack/react-start";
import { notFound } from "@tanstack/react-router";
import { z } from "zod";

export type DocSummary = { slug: string; title: string; description: string; category: string; updated: string };

const summary = (d: DocSummary): DocSummary => ({ slug: d.slug, title: d.title, description: d.description, category: d.category, updated: d.updated });

/** Titles/descriptions only, for the index, sidebar and search. Public: docs are public content. */
export const getDocsIndex = createServerFn({ method: "GET" }).handler(async () => {
  const { allDocs } = await import("./docs.server");
  return allDocs().map(summary);
});

export const getDocPage = createServerFn({ method: "GET" })
  .validator(z.object({ slug: z.string().min(1).max(120) }))
  .handler(async ({ data }) => {
    const { allDocs, getDoc, renderDoc } = await import("./docs.server");
    const doc = getDoc(data.slug);
    if (!doc) throw notFound();
    const { html, headings } = renderDoc(doc);
    return { doc: summary(doc), html, headings, nav: allDocs().map(summary) };
  });
