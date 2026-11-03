// Custom JSX runtime: renders translated text for the current URL language on the server and the client,
// so Spanish/Portuguese pages carry translated HTML before JavaScript runs.
// Every string child of a host element becomes <Tx>, which reads the language from context.
import { createContext, createElement, useContext, type ReactNode } from "react";
import { translateText } from "../translate";
import { localizePath } from "../locale";
import type { Language } from "../translations";

export const LocaleContext = createContext<Language>("en");
const NoTranslateContext = createContext(false);

const BLOCKED = new Set(["script", "style", "code", "pre", "textarea", "option", "title"]);
const ATTRS = ["placeholder", "aria-label", "title", "alt"] as const;

function Tx({ s }: { s: string }) {
  const lang = useContext(LocaleContext);
  const off = useContext(NoTranslateContext);
  return off ? s : translateText(lang, s);
}

type Real = (type: unknown, props: Record<string, unknown>, key?: unknown, ...rest: unknown[]) => unknown;

function wrapChildren(children: unknown): unknown {
  if (typeof children === "string") return /[A-Za-z]/.test(children) ? createElement(Tx, { s: children }) : children;
  if (Array.isArray(children)) {
    let changed = false;
    const out = children.map((c, i) => {
      if (typeof c === "string" && /[A-Za-z]/.test(c)) {
        changed = true;
        return createElement(Tx, { s: c, key: `__tx${i}` });
      }
      return c;
    });
    return changed ? out : children;
  }
  return children;
}

/** Host element whose attributes need the language: translated attributes and same-language internal links. */
function LocalizedHost(props: Record<string, unknown>) {
  const lang = useContext(LocaleContext);
  const off = useContext(NoTranslateContext);
  const { __type, __real, ...rest } = props as { __type: string; __real: Real } & Record<string, unknown>;
  if (lang !== "en") {
    if (!off) for (const a of ATTRS) if (typeof rest[a] === "string") rest[a] = translateText(lang, rest[a] as string);
    if (__type === "a" && typeof rest["href"] === "string" && rest["hrefLang"] === undefined) rest["href"] = localizePath(rest["href"] as string, lang);
  }
  return __real(__type, rest) as ReactNode;
}

function NoTranslate({ children }: { children?: ReactNode }) {
  return createElement(NoTranslateContext.Provider, { value: true }, children);
}

export function transform(real: Real, type: unknown, props: Record<string, unknown>, key: unknown, rest: unknown[]): unknown {
  if (typeof type !== "string" || !props) return real(type, props, key, ...rest);
  if (BLOCKED.has(type) || props["data-no-translate"] !== undefined && props["data-no-translate"] !== false) {
    const el = real(type, props, undefined, ...rest);
    return real(NoTranslate, { children: el }, key, ...rest);
  }
  let next = props;
  if ("children" in props) {
    const wrapped = wrapChildren(props["children"]);
    if (wrapped !== props["children"]) next = { ...props, children: wrapped };
  }
  const needsHost =
    (type === "a" && typeof next["href"] === "string" && (next["href"] as string).startsWith("/")) ||
    ATTRS.some((a) => typeof next[a] === "string" && /[A-Za-z]/.test(next[a] as string));
  if (needsHost) return real(LocalizedHost, { ...next, __type: type, __real: (t: unknown, p: Record<string, unknown>) => real(t, p, undefined, ...rest) }, key, ...rest);
  return real(type, next, key, ...rest);
}
