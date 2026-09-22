import type { Brand } from "@/data/integrations";

function BrandCard({ name, logo, className }: Brand & { className?: string }) {
  return (
    <div className={`flex min-h-[100px] flex-col items-center justify-center rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/50 ${className ?? ""}`}>
      <div className="mb-2 flex w-full items-center justify-center">
        {logo
          ? <img src={logo} alt={name} className="max-h-8 max-w-full object-contain" loading="lazy" />
          : <span className="text-xl font-bold text-primary/60">{name.charAt(0)}</span>}
      </div>
      <span className="text-center text-sm font-medium text-foreground">{name}</span>
    </div>
  );
}

export function BrandGrid({ title, brands }: { title: string; brands: Brand[] }) {
  if (brands.length === 0) return null;
  return (
    <div>
      <h3 className="mb-4 text-center text-lg font-semibold">{title}</h3>
      <div className="flex flex-wrap justify-center gap-3">
        {brands.map((brand) => (
          <BrandCard key={`${title}-${brand.name}`} {...brand}
            className="w-[calc(33.333%-8px)] sm:w-[calc(25%-9px)] md:w-[calc(16.6667%-10px)]" />
        ))}
      </div>
    </div>
  );
}
