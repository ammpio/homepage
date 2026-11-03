import * as R from "react/jsx-runtime";
import { transform } from "./runtime-core";

type Real = (type: unknown, props: Record<string, unknown>, key?: unknown, ...rest: unknown[]) => unknown;
const realJsx = R.jsx as unknown as Real;
const realJsxs = R.jsxs as unknown as Real;

export const Fragment = R.Fragment;
export function jsx(type: unknown, props: Record<string, unknown>, key?: unknown) {
  return transform(realJsx, type, props, key, []);
}
export function jsxs(type: unknown, props: Record<string, unknown>, key?: unknown) {
  return transform(realJsxs, type, props, key, []);
}
