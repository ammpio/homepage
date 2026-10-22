import { formatDate } from "@/data/authors";

export function LastUpdated({ date }: { date: string }) {
  return (
    <p className="site-container py-6 text-center text-xs text-muted-foreground">
      Last updated <time dateTime={date}>{formatDate(date)}</time>
    </p>
  );
}
