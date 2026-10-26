import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { getBlogPost } from "@/data/blog-posts";

/** Links to a blog post only once it is live (scheduled posts render nothing before their go-live moment). */
export function LivePostLink({ slug, label, className = "" }: { slug: string; label: string; className?: string }) {
  if (!getBlogPost(slug)) return null;
  return (
    <Link to="/blog/$slug" params={{ slug }} className={`inline-flex items-center gap-1 text-sm font-medium text-foreground hover:underline ${className}`}>
      {label} <ArrowRight className="size-4" />
    </Link>
  );
}
