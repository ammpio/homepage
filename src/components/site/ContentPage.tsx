import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, type LucideIcon } from "lucide-react";
import { PageCta } from "./SiteShell";

export type PageSection = { title: string; text: string; items?: string[]; icon?: LucideIcon };
export type ContentPageProps = { eyebrow: string; title: string; intro: string; sections: PageSection[]; cta?: string };

export function ContentPage({ eyebrow, title, intro, sections, cta = "Explore AMMP" }: ContentPageProps) {
  return <>
    <section className="technical-grid border-b border-border py-20 md:py-28"><div className="site-container"><p className="eyebrow">{eyebrow}</p><h1 className="mt-5 max-w-5xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">{title}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">{intro}</p><Link to="/demo" className="button button-primary mt-8">{cta}<ArrowRight className="size-4" /></Link></div></section>
    <section className="py-20 md:py-28"><div className="site-container grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">{sections.map(({title,text,items,icon:Icon}, index)=><article key={title} className="bg-card p-7 md:p-10">{Icon && <Icon className="size-6 text-primary" />}<span className="mt-8 block text-xs font-semibold text-muted-foreground">0{index+1}</span><h2 className="mt-3 text-2xl font-semibold">{title}</h2><p className="mt-4 leading-7 text-muted-foreground">{text}</p>{items && <ul className="mt-6 space-y-3">{items.map(item=><li key={item} className="flex gap-3 text-sm"><Check className="mt-0.5 size-4 shrink-0 text-signal" />{item}</li>)}</ul>}</article>)}</div></section>
    <PageCta />
  </>;
}
