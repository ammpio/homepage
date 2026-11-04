// All exact-match Spanish/Portuguese dictionaries, in priority order (first wins).
// Loaded lazily by loadDictionaries() in ./translate — never import this module statically from app code.
import { runtimeTranslations } from "./runtime-translations";
import { docsTranslations } from "./docs-translations";
import { loadSheddingTranslations } from "./loadshedding-translations";
import { blogBatch4Translations } from "./blog-batch4-translations";
import { epcTranslations } from "./epc-translations";
import { compareOmEpcTranslations } from "./compare-om-epc-translations";
import { productRuntimeTranslations } from "./product-runtime-translations";
import { localizedGapTranslations } from "./localized-gap-translations";
import { howToTranslations } from "./howto-translations";

export const sources = [
  docsTranslations,
  epcTranslations,
  compareOmEpcTranslations,
  loadSheddingTranslations,
  blogBatch4Translations,
  productRuntimeTranslations,
  runtimeTranslations,
  localizedGapTranslations,
  howToTranslations,
];
