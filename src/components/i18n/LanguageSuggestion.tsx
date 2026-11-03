import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { X } from "lucide-react";
import { useLanguage, STORAGE_KEY, hrefForLanguage } from "@/i18n/LanguageContext";
import { availableLanguages } from "@/i18n/available";
import type { Language } from "@/i18n/translations";

const DISMISS_KEY = "ammp-lang-suggestion-dismissed";
const COPY: Record<"es" | "pt", { text: string; cta: string; close: string }> = {
  es: { text: "Esta página está disponible en español.", cta: "Ver en español", close: "Cerrar" },
  pt: { text: "Esta página está disponível em português.", cta: "Ver em português", close: "Fechar" },
};

// Suggests the visitor's language on English pages. Never redirects, so crawlers reach every version.
export function LanguageSuggestion() {
  const { language } = useLanguage();
  const location = useRouterState({ select: (s) => s.location });
  const [suggest, setSuggest] = useState<"es" | "pt" | null>(null);

  useEffect(() => {
    if (language !== "en" || localStorage.getItem(DISMISS_KEY)) return setSuggest(null);
    const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
    const browser = navigator.language?.toLowerCase() ?? "";
    const wanted = saved === "es" || saved === "pt" ? saved : saved === "en" ? null : browser.startsWith("es") ? "es" : browser.startsWith("pt") ? "pt" : null;
    setSuggest(wanted && availableLanguages(location.pathname).includes(wanted) ? wanted : null);
  }, [language, location.pathname]);

  if (!suggest) return null;
  const copy = COPY[suggest];
  return (
    <div data-no-translate lang={suggest === "pt" ? "pt-BR" : "es"} className="fixed inset-x-3 bottom-3 z-50 mx-auto flex max-w-xl items-center gap-3 rounded-2xl glass-soft px-4 py-3 text-sm text-foreground shadow-lg">
      <span className="flex-1">{copy.text}</span>
      <a hrefLang={suggest === "pt" ? "pt-BR" : "es"} href={hrefForLanguage(location.pathname, suggest)} className="button button-ghost h-9 px-3">{copy.cta}</a>
      <button type="button" aria-label={copy.close} className="rounded-full p-1 text-muted-foreground hover:text-foreground" onClick={() => { localStorage.setItem(DISMISS_KEY, "1"); setSuggest(null); }}>
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
