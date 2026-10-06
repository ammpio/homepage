import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Band, PageHero } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";
import { blogPosts, blogCategories, type BlogCategory } from "@/data/blog-posts";

export const Route = createFileRoute("/blog/")({
  head: () => ({ meta: [
    { title: "AMMP Insights — AMMP" },
    { name: "description", content: "Ideas and practical guidance for renewable energy portfolio operations, customer stories and product news from AMMP." },
    { property: "og:title", content: "AMMP Insights — AMMP" },
    { property: "og:description", content: "Ideas and practical guidance for renewable energy portfolio operations." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: BlogIndexPage,
});

type Filter = "All" | BlogCategory;

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function BlogIndexPage() {
  const [activeCategory, setActiveCategory] = useState<Filter>("All");
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
        <div className="mx-auto max-w-3xl">
          <Link to="/blog/$slug" params={{ slug: featured.slug }} className="group block">
            <p className="text-sm text-muted-foreground">Featured · {featured.readTime}</p>
            <h2 className="mt-3 font-display text-3xl font-medium leading-tight tracking-[-0.015em] transition-colors group-hover:text-muted-foreground sm:text-4xl">{featured.title}</h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">{featured.excerpt}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-all group-hover:gap-3">
              Read the article <ArrowRight className="size-4" />
            </span>
          </Link>

          <div className="mt-16 flex flex-wrap gap-x-6 gap-y-2 border-b border-border/50 pb-3">
            {(["All", ...blogCategories] as Filter[]).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`-mb-[13px] border-b-2 pb-3 text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === category ? "border-foreground text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="divide-y divide-border/50">
            {filtered.map((post) => (
              <Link key={post.slug} to="/blog/$slug" params={{ slug: post.slug }} className="group block py-8">
                <p className="text-xs text-muted-foreground">{formatDate(post.date)} · {post.category} · {post.readTime}</p>
                <h2 className="mt-2 text-xl font-medium leading-snug transition-colors group-hover:text-muted-foreground">{post.title}</h2>
                <p className="mt-2 text-[15px] leading-7 text-muted-foreground">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </Band>

      <PageCta />
    </>
  );
}
