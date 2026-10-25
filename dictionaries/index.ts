import en from "./en";
import fa from "./fa";
import type { Lang } from "../lib/site";

export function getDict(lang: Lang) {
  return lang === "fa" ? fa : en;
}

export type { Lang };
export type Dictionary = typeof en;
