import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { ArrowRight, Check } from "lucide-react";
import { subscribeNewsletter } from "@/lib/newsletter.functions";

export function NewsletterSignup({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const subscribe = useServerFn(subscribeNewsletter);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");
    try {
      const res = await subscribe({ data: { email } });
      setState(res.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "done") {
    return <p className="flex items-center gap-2 text-sm text-muted-foreground"><Check className="size-4 text-primary" />Thanks — you're subscribed.</p>;
  }

  return (
    <form onSubmit={onSubmit} className="w-full">
      <div className={`flex gap-2 ${compact ? "max-w-sm" : ""}`}>
        <label htmlFor={compact ? "nl-footer" : "nl-contact"} className="sr-only">Email</label>
        <input id={compact ? "nl-footer" : "nl-contact"} type="email" required placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)}
          className={`min-w-0 flex-1 rounded-md border border-border bg-background px-3 text-sm outline-none focus:border-primary ${compact ? "h-9" : "h-10"}`} />
        <button type="submit" disabled={state === "sending"} aria-label="Subscribe" className={`button button-primary shrink-0 ${compact ? "h-9 px-3" : "h-10"}`}>
          {compact ? <ArrowRight className="size-4" /> : state === "sending" ? "Subscribing…" : "Subscribe"}
        </button>
      </div>
      {state === "error" && <p className="mt-2 text-xs text-destructive">Something went wrong. Please try again.</p>}
    </form>
  );
}
