import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Band, Prose } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";
import { HeroVideo } from "@/components/site/RaySections";
import { blogPosts, getBlogPost, type BlogBlock } from "@/data/blog-posts";
import rayAvatar from "@/assets/ray-avatar.png";
import rayPoster from "@/assets/ray-video-poster.jpg";

const SITE = "https://www.ammp.io";

export const Route = createFileRoute("/blog/$slug")({
  staticData: { sitemap: true },
  head: ({ params }) => {
    const post = getBlogPost(params.slug);
    const title = post ? (post.seoTitle ?? `${post.title} — AMMP Blog`) : "Article not found — AMMP Blog";
    const description = post?.excerpt ?? "This article could not be found. Browse the AMMP blog for the latest on an AI coworker and renewable energy operations.";
    const url = `${SITE}/blog/${params.slug}`;
    const image = post?.heroVideoPoster ? `${SITE}${rayPoster}` : undefined;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
        ...(image ? [{ property: "og:image", content: image }, { name: "twitter:image", content: image }] : []),
        ...(post ? [] : [{ name: "robots", content: "noindex" }]),
      ],

      scripts: post
        ? [{
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: post.title,
              description,
              datePublished: post.date,
              author: { "@type": "Person", name: post.author ?? "AMMP" },
              publisher: { "@type": "Organization", name: "AMMP", url: SITE },
              url,
              mainEntityOfPage: url,
              ...(image ? { image } : {}),
            }),
          }]
        : [],
    };
  },
  component: ArticlePage,
});

function ChatSnippet({ block }: { block: Extract<BlogBlock, { type: "chat" }> }) {
  return (
    <figure className="not-prose my-8">
      <div className="rounded-2xl border border-border/60 bg-background/70 p-6">
        <p className="text-xs text-muted-foreground">{block.channel}</p>
        <div className="mt-4 space-y-5">
          {block.lines.map((l, i) => (
            <div key={i} className="flex gap-3">
              {l.from === "ray" ? (
                <img src={rayAvatar} alt="" className="size-9 shrink-0 rounded-full object-cover ring-2 ring-primary/20" />
              ) : (
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-semibold text-muted-foreground">{l.name.charAt(0)}</div>
              )}
              <div className="min-w-0">
                <p className="text-sm font-semibold text-foreground">{l.name}</p>
                <p className="mt-1 text-[15px] leading-relaxed text-foreground/85">{l.text}</p>
                {l.sources && <p className="mt-2 text-xs text-muted-foreground">Sources: {l.sources.join(" · ")}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
      {block.caption && <figcaption className="mt-3 text-center text-sm text-muted-foreground">{block.caption}</figcaption>}
    </figure>
  );
}

function ArticlePage() {
  const { slug } = Route.useParams();
  const post = getBlogPost(slug);

  if (!post) {
    return (
      <>
        <Band>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">Article not found</h1>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">We couldn't find that article. It may have moved or been renamed.</p>
            <Link to="/blog" className="button button-primary mt-8"><ArrowLeft className="size-4" />Back to the blog</Link>
          </div>
        </Band>
        <PageCta />
      </>
    );
  }

  const more = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const date = post.displayDate ?? new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  const hasCta = post.body.some((b) => b.type === "cta");

  return (
    <>
      <section className="luminous-hero relative overflow-hidden py-16 md:py-20">
        <div aria-hidden className="glow-orb orb-drift absolute -right-32 -top-48 size-[30rem] bg-glow-magenta/30" />
        <div className="site-container relative mx-auto max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"><ArrowLeft className="size-4" />All articles</Link>
          <p className="eyebrow mt-8">{post.category}</p>
          <h1 className="mt-4 font-display text-4xl font-medium leading-[1.1] tracking-[-0.018em] sm:text-5xl">{post.title}</h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">{post.excerpt}</p>
          <p className="mt-6 text-sm text-muted-foreground">{post.author ? `${post.author} · ` : ""}{date} · {post.readTime}</p>
        </div>
      </section>

      <Band className="!pt-4 md:!pt-6">
        <Prose plain>
          {post.body.map((block, i) => {
            if (block.type === "heading") return <h2 key={i}>{block.text}</h2>;
            if (block.type === "list") return <ul key={i} className="space-y-2">{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
            if (block.type === "video") return <div key={i} className="not-prose my-8"><HeroVideo /></div>;
            if (block.type === "chat") return <ChatSnippet key={i} block={block} />;
            if (block.type === "cta") return (
              <div key={i} className="not-prose mt-10 flex justify-center">
                <Link to={block.to} className="button button-pink">{block.label}<ArrowRight className="size-4" /></Link>
              </div>
            );
            if (block.type === "postLink") return (
              <p key={i}><Link to="/blog/$slug" params={{ slug: block.slug }} className="font-medium text-foreground underline underline-offset-4">{block.label}</Link></p>
            );
            if (block.type === "quote") return (
              <figure key={i} className="rounded-xl border border-border bg-card p-6">
                <blockquote className="text-lg font-medium leading-relaxed text-foreground">“{block.text}”</blockquote>
                {block.author && <figcaption className="mt-3 text-sm text-muted-foreground">{block.author}</figcaption>}
              </figure>
            );
            return <p key={i}>{block.text}</p>;
          })}
        </Prose>
      </Band>

      {post.related ? (
        <Band>
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">Related</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {post.related.map((r) => (
              <Link key={r.to} to={r.to} className="glass glass-lift rounded-2xl p-6">
                <h3 className="text-lg font-semibold leading-snug">{r.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{r.text}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground">Read more <ArrowRight className="size-4" /></span>
              </Link>
            ))}
          </div>
        </Band>
      ) : (
        <Band>
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">More from the blog</h2>
            <Link to="/blog" className="inline-flex items-center gap-1 text-sm font-medium text-primary">All articles <ArrowRight className="size-4" /></Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {more.map((p) => (
              <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="glass glass-lift rounded-2xl p-6">
                <p className="text-xs font-semibold text-primary">{p.category}</p>
                <h3 className="mt-3 text-lg font-semibold leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </Band>
      )}

      {!hasCta && <PageCta />}
    </>
  );
}
