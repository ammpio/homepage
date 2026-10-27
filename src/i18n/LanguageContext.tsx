import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import { translations, type Language } from "./translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "ammp-lang";

function getInitialLanguage(): Language {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "es" || saved === "pt") return saved;

    // Auto-detect from browser language and persist
    const browserLang = navigator.language?.toLowerCase() ?? "";
    let detected: Language = "en";
    if (browserLang.startsWith("es")) detected = "es";
    else if (browserLang.startsWith("pt")) detected = "pt";
    localStorage.setItem(STORAGE_KEY, detected);
    return detected;
  }
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Match the English server render; read browser preferences only after hydration.
  const [language, setLanguageState] = useState<Language>("en");

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.lang = lang === "pt" ? "pt-BR" : lang;
    }
  }, []);

  // Sync on mount (for SSR hydration)
  useEffect(() => {
    if (typeof window !== "undefined") {
      setLanguageState(getInitialLanguage());
    }
  }, []);

  const t = useCallback(
    (key: string): string => {
      return translations[language]?.[key] ?? translations.en[key] ?? key;
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
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
