import { createIsomorphicFn } from "@tanstack/react-start";
import { notFound } from "@tanstack/react-router";

// Docs data for route loaders. On the server (first page load) it reads the bundled markdown directly;
// on client navigation it fetches same-origin JSON routes. No /_serverFn calls, so the docs never
// depend on a separately hosted server-function endpoint.

export type DocSummary = { slug: string; title: string; description: string; category: string; updated: string };
export type DocHeading = { id: string; text: string; depth: 2 | 3 };
export type DocPageData = { doc: DocSummary; html: string; headings: DocHeading[]; nav: DocSummary[] };

export const loadDocsIndex = createIsomorphicFn()
  .server(async (): Promise<DocSummary[]> => {
    const { docsIndexData } = await import("./docs.server");
    return docsIndexData();
  })
  .client(async (): Promise<DocSummary[]> => {
    const res = await fetch("/product/documentation/index.json");
    if (!res.ok) throw new Error(`Docs index failed: ${res.status}`);
    return res.json();
  });

export const loadDocPage = createIsomorphicFn()
  .server(async (slug: string): Promise<DocPageData> => {
    const { docPageData } = await import("./docs.server");
    const data = docPageData(slug);
    if (!data) throw notFound();
    return data as DocPageData;
  })
  .client(async (slug: string): Promise<DocPageData> => {
    const res = await fetch(`/product/documentation/${encodeURIComponent(slug)}.json`);
    if (res.status === 404) throw notFound();
    if (!res.ok) throw new Error(`Docs page failed: ${res.status}`);
    return res.json();
  });
