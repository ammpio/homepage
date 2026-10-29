import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Alternative } from "@/data/alternatives";

export function AlternativesList({ items }: { items: Alternative[] }) {
  return (
    <div className="mt-10 grid gap-4 md:grid-cols-2">
      {items.map((alt) => (
        <div key={alt.name} className="glass-soft rounded-2xl p-6">
          <h3 className="text-lg font-semibold">{alt.name}</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{alt.description}</p>
          <p className="mt-3 text-sm leading-6"><span className="font-medium">Fits best: </span><span className="text-muted-foreground">{alt.fits}</span></p>
          {alt.to && (
            <Link to={alt.to} className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground hover:underline">
              {alt.linkLabel ?? (String(alt.to).startsWith("/compare") ? `AMMP vs ${alt.name}` : "Learn more")} <ArrowRight className="size-4" />
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}
