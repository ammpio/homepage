import * as R from "react/jsx-dev-runtime";
import { transform } from "./runtime-core";

type Real = (type: unknown, props: Record<string, unknown>, key?: unknown, ...rest: unknown[]) => unknown;
const realDev = R.jsxDEV as unknown as Real;

export const Fragment = R.Fragment;
export function jsxDEV(type: unknown, props: Record<string, unknown>, key: unknown, isStatic: unknown, source: unknown, self: unknown) {
  return transform(realDev, type, props, key, [isStatic, source, self]);
}
