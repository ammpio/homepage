import { commonTranslations } from "./translations/common";
import { productTranslations } from "./translations/product";
import { pricingTranslations } from "./translations/pricing";
import { aboutTranslations } from "./translations/about";
import { contactTranslations } from "./translations/contact";
import { integrationsTranslations } from "./translations/integrations";
import { useCasesTranslations } from "./translations/useCases";
import { switchTranslations } from "./translations/switch";
import { caseStudiesTranslations } from "./translations/caseStudies";
import { miscTranslations } from "./translations/misc";
import { homeTranslations } from "./translations/home";
import { compareTranslations } from "./translations/compare";
import { blogTranslations } from "./translations/blog";
import { usMarketTranslations } from "./translations/usMarket";
import { securityTranslations } from "./translations/security";
import { aiTranslations } from "./translations/ai";


export type Language = "en" | "es" | "pt";

type TranslationModule = Record<Language, Record<string, string>>;

const modules: TranslationModule[] = [
  commonTranslations,
  productTranslations,
  pricingTranslations,
  aboutTranslations,
  contactTranslations,
  integrationsTranslations,
  useCasesTranslations,
  switchTranslations,
  caseStudiesTranslations,
  miscTranslations,
  homeTranslations,
  compareTranslations,
  blogTranslations,
  usMarketTranslations,
  securityTranslations,
  aiTranslations,

];

function mergeAll(lang: Language): Record<string, string> {
  const merged: Record<string, string> = {};
  for (const mod of modules) {
    Object.assign(merged, mod[lang]);
  }
  return merged;
}

export const translations: Record<Language, Record<string, string>> = {
  en: mergeAll("en"),
  es: mergeAll("es"),
  pt: mergeAll("pt"),
};
