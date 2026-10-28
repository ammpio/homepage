import { useEffect, useRef } from "react";
import { useLanguage } from "./LanguageContext";
import { runtimeTranslations } from "./runtime-translations";
import { docsTranslations } from "./docs-translations";
import { loadSheddingTranslations } from "./loadshedding-translations";
import { productRuntimeTranslations } from "./product-runtime-translations";

const blocked = new Set(["SCRIPT", "STYLE", "CODE", "PRE", "TEXTAREA", "INPUT", "OPTION"]);
const originals = new WeakMap<Text, string>();
const attributeOriginals = new WeakMap<Element, Map<string, string>>();
const translatedAttributes = ["placeholder", "aria-label", "title", "alt"] as const;

function translated(value: string, language: "en" | "es" | "pt") {
  if (language === "en") return value;
  const whitespace = value.match(/^\s*/)?.[0] ?? "";
  const ending = value.match(/\s*$/)?.[0] ?? "";
  const content = value.trim();
  if (!content) return value;
  return `${whitespace}${docsTranslations[language][content] ?? loadSheddingTranslations[language][content] ?? productRuntimeTranslations[language][content] ?? runtimeTranslations[language][content] ?? content}${ending}`;
}

function translateRoot(root: ParentNode, language: "en" | "es" | "pt") {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  while (walker.nextNode()) nodes.push(walker.currentNode as Text);
  for (const node of nodes) {
    const parent = node.parentElement;
    if (!parent || blocked.has(parent.tagName) || parent.closest("[data-no-translate], code, pre")) continue;
    const source = originals.get(node) ?? node.data;
    originals.set(node, source);
    node.data = translated(source, language);
  }
  const elements = root instanceof Element ? [root, ...root.querySelectorAll("*")] : [...root.querySelectorAll("*")];
  for (const element of elements) {
    if (element.closest("[data-no-translate], code, pre")) continue;
    let values = attributeOriginals.get(element);
    if (!values) { values = new Map(); attributeOriginals.set(element, values); }
    for (const attribute of translatedAttributes) {
      const current = element.getAttribute(attribute);
      if (!current) continue;
      const source = values.get(attribute) ?? current;
      values.set(attribute, source);
      element.setAttribute(attribute, translated(source, language));
    }
  }
}

export function AutoTranslate() {
  const { language } = useLanguage();
  const translating = useRef(false);
  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : language === "es" ? "es" : "en-US";
    const apply = () => { translating.current = true; translateRoot(document.body, language); translating.current = false; };
    apply();
    const observer = new MutationObserver(() => { if (!translating.current) queueMicrotask(apply); });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [language]);
  return null;
}
