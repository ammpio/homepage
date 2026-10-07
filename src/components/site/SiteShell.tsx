import { Link, Outlet } from "@tanstack/react-router";
import { ArrowUpRight, ChevronDown, Linkedin, ShieldCheck } from "lucide-react";
import ammpLogo from "@/assets/ammp-logo.png";
import { LanguageSelector } from "@/components/i18n/LanguageSelector";
import { useLanguage } from "@/i18n/LanguageContext";

type NavLink = readonly [string, string];
type NavItem = { label: string; to?: string; children?: readonly NavLink[] };

const nav: readonly NavItem[] = [
  {
    label: "Product",
    to: "/product",
    children: [
      ["Product overview", "/product"],
      ["AI coworker", "/ai"],
      ["Integrations", "/integrations"],
      ["Security", "/security"],
    ],
  },
  {
    label: "Use cases",
    children: [
      ["Asset managers", "/use-cases/asset-managers"],
      ["O&M providers", "/use-cases/om-providers"],
      ["Reporting teams", "/use-cases/reporting-teams"],
    ],
  },
  { label: "Case studies", to: "/case-studies" },
  { label: "Pricing", to: "/pricing" },
];

const navLinkClass =
  "rounded-md whitespace-nowrap px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground";

function NavDropdown({ item }: { item: NavItem }) {
  return (
    <div className="group relative">
      <Link
        to={item.to ?? item.children![0]![1]}
        className={`${navLinkClass} inline-flex items-center gap-1`}
        activeProps={{ className: "text-foreground" }}
      >
        {item.label}
        <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
      </Link>
      <div className="invisible absolute left-0 top-full z-50 w-60 pt-2 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="glass-strong rounded-xl p-2 shadow-xl">
          {item.children!.map(([label, to]) => (
            <Link key={to} to={to} className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground">
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SiteShell() {
  const { t } = useLanguage();
  const translatedNav = nav.map((item) => ({
    ...item,
    label: t(`nav.${item.label}`),
    children: item.children?.map(([label, to]) => [t(`nav.${label}`), to] as const),
  }));
  return <div className="site-luminous canvas-porcelain relative min-h-screen text-foreground">
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="glow-orb orb-drift absolute -left-48 top-[4%] size-[34rem] bg-glow-amber/45" />
      <div className="glow-orb orb-drift absolute -right-52 top-[34%] size-[38rem] bg-glow-magenta/35 [animation-delay:-9s] [animation-duration:27s]" />
      <div className="glow-orb orb-drift absolute left-1/3 top-[76%] size-[30rem] bg-glow-amber/30 [animation-delay:-17s] [animation-duration:31s]" />
    </div>
    <header className="glass-nav sticky top-0 z-50 border-b border-border/70">
      <div className="site-container flex h-16 items-center justify-between gap-8">
        <Link to="/" aria-label="AMMP home" className="cursor-pointer select-none"><img src={ammpLogo} alt="AMMP" draggable={false} className="h-7 w-auto cursor-pointer" /></Link>
        <nav className="hidden flex-1 items-center gap-1 lg:flex" aria-label="Main navigation">
          {translatedNav.map((item) => item.children
            ? <NavDropdown key={item.label} item={item} />
            : <Link key={item.label} to={item.to!} className={navLinkClass} activeProps={{ className: "text-foreground" }}>{item.label}</Link>)}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a href="https://os.ammp.io" target="_blank" rel="noreferrer" className="whitespace-nowrap text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">{t("nav.Log in")}</a>
          <LanguageSelector />
          
          <Link to="/contact" className="button button-primary h-10 whitespace-nowrap">{t("nav.Contact sales")}</Link>
        </div>
        <details className="relative lg:hidden">
          <summary className="glass-soft cursor-pointer list-none rounded-md px-3 py-2 text-sm font-semibold">Menu</summary>
          <div className="glass-strong absolute right-0 top-12 w-72 rounded-xl p-3 shadow-xl">
            {translatedNav.map((item) => item.children
              ? <div key={item.label} className="mb-2">
                  <p className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{item.label}</p>
                  {item.children.map(([label, to]) => <Link key={to} to={to} className="block rounded px-3 py-2 text-sm hover:bg-secondary">{label}</Link>)}
                </div>
              : <Link key={item.label} to={item.to!} className="block rounded px-3 py-2.5 text-sm hover:bg-secondary">{item.label}</Link>)}
            <div className="mt-2 grid gap-2 border-t border-border pt-3"><LanguageSelector variant="outline" /><Link to="/contact" className="button button-primary">{t("nav.Contact sales")}</Link></div>
          </div>
        </details>
      </div>
    </header>
    <main className="relative z-10"><Outlet /></main>
    <footer className="relative z-10">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="glow-orb orb-drift absolute -left-40 bottom-[-12rem] size-[26rem] bg-glow-magenta/25 [animation-delay:-5s] [animation-duration:29s]" />
        <div className="glow-orb orb-drift absolute -right-44 bottom-[-9rem] size-[28rem] bg-glow-amber/30 [animation-delay:-13s] [animation-duration:33s]" />
      </div>
      <div className="glass-footer relative border-t border-border/50">
      <div className="site-container py-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
          <div className="col-span-2 md:col-span-1"><Link to="/" aria-label="AMMP home" className="inline-block"><img src={ammpLogo} alt="AMMP" className="h-7 w-auto" /></Link><p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">Put AI to work across your renewable energy portfolio</p><a href="https://linkedin.com/company/ammptechnologies" className="mt-5 inline-flex text-muted-foreground" aria-label="AMMP on LinkedIn"><Linkedin className="size-5" /></a></div>
          <FooterColumn title="Platform" links={[["Product","/product"],["Integrations","/integrations"],["Pricing","/pricing"],["AI coworker","/ai"],["Tailored solutions","/customization"],["Security","/security"]]} />
          <FooterColumn title="Solutions" links={[["Asset managers","/use-cases/asset-managers"],["O&M providers","/use-cases/om-providers"],["Reporting teams","/use-cases/reporting-teams"],["Case studies","/case-studies"],["Switch to AMMP","/switch"]]} />
          <div>
            <FooterColumn title="Compare" links={[["vs In-House Systems","/compare/in-house-systems"],["vs Traditional Monitoring","/compare/traditional-monitoring"],["vs Meteocontrol","/compare/meteocontrol"],["vs Vendor Portals","/compare/vendor-portals"],["vs AlsoEnergy","/compare/ammp-vs-alsoenergy"],["vs PV Operation","/compare/pv-operation"]]} />
            <Link to="/blog" search={{ category: "Compare" }} reloadDocument className="mt-3 inline-block text-sm font-medium text-foreground hover:underline">View all comparisons →</Link>
          </div>
          <FooterColumn title="Company" links={[["About","/about"],["Blog","/blog"],["Careers","/careers"],["Contact","/contact"],["FAQ","/faq"]]} />
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><span>© 2026 AMMP Technologies</span><Link to="/security" className="inline-flex items-center gap-1.5 hover:text-foreground"><ShieldCheck className="size-4" />ISO/IEC 27001:2022</Link><div className="flex gap-5"><Link to="/privacy">Privacy</Link><Link to="/terms">Terms</Link><Link to="/security">Security</Link></div></div>
      </div>
      </div>
    </footer>
  </div>;
}

function FooterColumn({ title, links }: { title: string; links: readonly (readonly [string,string])[] }) {
  return <div><h2 className="text-sm font-semibold">{title}</h2><ul className="mt-4 space-y-3">{links.map(([label,to]) => <li key={to}><Link to={to} className="text-sm text-muted-foreground hover:text-foreground">{label}</Link></li>)}</ul></div>;
}

export function PageCta({ eyebrow = "Move from visibility to action", title = "Ready to put your portfolio data to work?", intro }: { eyebrow?: string; title?: string; intro?: string }) {
  return <section className="relative z-10 py-16 md:py-20"><div className="site-container"><div className="glass-strong mx-auto max-w-4xl rounded-3xl px-6 py-12 text-center sm:px-12"><p className="eyebrow">{eyebrow}</p><h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">{title}</h2>{intro && <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted-foreground">{intro}</p>}<div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"><Link to="/contact" className="button button-pink">Talk to our team <ArrowUpRight className="size-4" /></Link></div></div></div></section>;
}
