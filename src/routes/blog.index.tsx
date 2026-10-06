import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Band, PageHero, SectionHeading } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";
import { blogPosts, blogCategories, type BlogCategory } from "@/data/blog-posts";
import { comparisons } from "@/data/comparisons";

type Filter = "All" | BlogCategory | "Compare";

export const Route = createFileRoute("/blog/")({
  validateSearch: (search: Record<string, unknown>): { category?: Filter } => {
    const c = search.category;
    return typeof c === "string" && (c === "Compare" || (blogCategories as string[]).includes(c)) ? { category: c as Filter } : {};
  },
  head: () => ({ meta: [
    { title: "AMMP Insights — AMMP" },
    { name: "description", content: "Ideas and practical guidance for renewable energy portfolio operations, customer stories and product news from AMMP." },
    { property: "og:title", content: "AMMP Insights — AMMP" },
    { property: "og:description", content: "Ideas and practical guidance for renewable energy portfolio operations." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: BlogIndexPage,
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function BlogIndexPage() {
  const search = Route.useSearch();
  const [activeCategory, setActiveCategory] = useState<Filter>(search.category ?? "All");
  const sorted = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));
  const featured = sorted[0]!;
  const rest = sorted.slice(1);
  const filtered = activeCategory === "All" ? rest : rest.filter((post) => post.category === activeCategory);

  return (
    <>
      <PageHero
        eyebrow="AMMP Insights"
        title="Ideas and practical guidance for"
        highlight="portfolio operations."
        intro="Customer stories, product news, industry perspectives and comparisons for teams running distributed renewable energy portfolios."
      />

      <Band tone="white">
        <Link
          to="/blog/$slug"
          params={{ slug: featured.slug }}
          className="glass glass-lift group mx-auto flex max-w-3xl flex-col rounded-2xl p-8 md:p-10"
        >
          <SectionHeading eyebrow="Featured" title={featured.title} intro={featured.excerpt} />
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
            Read the article <ArrowRight className="size-4" />
          </span>
        </Link>
      </Band>

      <Band tone="grey">
        <div className="flex flex-wrap gap-2">
          {(["All", ...blogCategories, "Compare"] as Filter[]).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "glass-soft text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
              {category !== "All" && (
                <span className="ml-1.5 text-xs opacity-70">
                  ({category === "Compare" ? comparisons.length : blogPosts.filter((p) => p.category === category).length})
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {activeCategory === "Compare" ? comparisons.map((c) => (
            <Link key={c.to} to={c.to} className="glass glass-lift group flex flex-col rounded-2xl p-6">
              <h2 className="text-lg font-semibold leading-snug group-hover:text-primary transition-colors">{c.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground line-clamp-3">{c.excerpt}</p>
              <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                See the comparison <ArrowRight className="size-4" />
              </span>
            </Link>
          )) : filtered.map((post) => (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="glass glass-lift group flex flex-col rounded-2xl p-6"
            >
              <span className="eyebrow">{post.category}</span>
              <h2 className="mt-3 text-lg font-semibold leading-snug group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground line-clamp-3">{post.excerpt}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                <span>{formatDate(post.date)}</span>
                <span>{post.readTime}</span>
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                Read more <ArrowRight className="size-4" />
              </span>
            </Link>
          ))}
        </div>
      </Band>

      <PageCta />
    </>
  );
}
