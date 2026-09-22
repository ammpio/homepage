import type { Brand } from "@/data/integrations";

function BrandCard({ name, logo }: Brand) {
  return (
    <div className="flex min-h-[100px] flex-col items-center justify-center rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/50">
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
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
        {brands.map((brand) => <BrandCard key={`${title}-${brand.name}`} {...brand} />)}
      </div>
    </div>
  );
}
