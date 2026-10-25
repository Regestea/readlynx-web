export const SITE = {
  name: "ReadLynx",
  tagline: "Read anything. Translate everything. Keep the layout.",
  appRepo: "https://github.com/Regestea/readlynx",
  releasesLatest: "https://github.com/Regestea/readlynx/releases/latest",
  apiLatest: "https://api.github.com/repos/Regestea/readlynx/releases/latest",
  shaName: "SHA256SUMS.txt",
  donateUrl: "https://donofa.com/regestea",
  tutorialVideo: "/readlynx-total.mp4",
  tutorialPoster: "/readlynx-total-poster.jpg",
  orgHome: "https://readlynx-books.github.io/",
} as const;

export type Lang = "en" | "fa";
export const LANGS: Lang[] = ["en", "fa"];
export const DEFAULT_LANG: Lang = "en";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://regestea.github.io";

export function siteUrl(path: string): string {
  return `${SITE_URL}${withBase(path)}`;
}

export function basePath(): string {
  return process.env.NEXT_PUBLIC_BASE_PATH ?? "";
}

export function withBase(path: string): string {
  const b = basePath();
  if (!path.startsWith("/")) return path;
  return b ? `${b}${path}` : path;
}
