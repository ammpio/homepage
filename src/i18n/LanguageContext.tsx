import { createContext, useContext, useCallback, type ReactNode } from "react";
import { useRouter } from "@tanstack/react-router";
import { translations, type Language } from "./translations";
import { LocaleContext } from "./jsx/runtime-core";
import { isLocalizablePath, localizePath } from "./locale";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const STORAGE_KEY = "ammp-lang";

/** Public URL of the current page in another language (falls back to that language's home page). */
export function hrefForLanguage(internalPath: string, lang: Language, suffix = ""): string {
  if (lang === "en") return `${internalPath}${suffix}`;
  return isLocalizablePath(internalPath) ? `${localizePath(internalPath, lang)}${suffix}` : `/${lang}`;
}

// The language comes from the URL (/es, /pt or English at the root), so server and client render the same.
export function LanguageProvider({ language, children }: { language: Language; children: ReactNode }) {
  const router = useRouter();

  const setLanguage = useCallback((lang: Language) => {
    if (typeof window === "undefined") return;
    localStorage.setItem(STORAGE_KEY, lang);
    if (lang === language) return;
    const loc = router.state.location;
    window.location.assign(hrefForLanguage(loc.pathname, lang, `${loc.searchStr ?? ""}${loc.hash ? `#${loc.hash}` : ""}`));
  }, [language, router]);

  const t = useCallback(
    (key: string): string => translations[language]?.[key] ?? translations.en[key] ?? key,
    [language]
  );

  return (
    <LocaleContext.Provider value={language}>
      <LanguageContext.Provider value={{ language, setLanguage, t }}>
        {children}
      </LanguageContext.Provider>
    </LocaleContext.Provider>
  );
}

// English fallback so a missing provider (e.g. after a hot reload swaps this module) never blanks the page.
const FALLBACK: LanguageContextType = {
  language: "en",
  setLanguage: () => {},
  t: (key) => translations.en[key] ?? key,
};

export function useLanguage() {
  return useContext(LanguageContext) ?? FALLBACK;
}
