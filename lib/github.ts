export type ReleaseAsset = {
  name: string;
  browser_download_url: string;
  size: number;
};

export type LatestRelease = {
  tag: string;
  name: string;
  htmlUrl: string;
  publishedAt: string;
  windows?: ReleaseAsset;
  macDmg?: ReleaseAsset;
  macZip?: ReleaseAsset;
  linuxAppImage?: ReleaseAsset;
  linuxDeb?: ReleaseAsset;
  sha?: ReleaseAsset;
  all: ReleaseAsset[];
};

const APP_REPO = "https://github.com/Regestea/readlynx";
const API_LATEST = "https://api.github.com/repos/Regestea/readlynx/releases/latest";

function pick(assets: ReleaseAsset[], pred: (n: string) => boolean): ReleaseAsset | undefined {
  return assets.find((a) => pred(a.name.toLowerCase()));
}

export async function fetchLatestRelease(): Promise<LatestRelease | null> {
  try {
    const res = await fetch(API_LATEST, { headers: { Accept: "application/vnd.github+json" } });
    if (!res.ok) return null;
    const j = await res.json();
    const assets: ReleaseAsset[] = (j.assets ?? []).map((a: { name: string; browser_download_url: string; size: number }) => ({
      name: a.name,
      browser_download_url: a.browser_download_url,
      size: a.size,
    }));
    return {
      tag: String(j.tag_name ?? ""),
      name: String(j.name ?? j.tag_name ?? ""),
      htmlUrl: String(j.html_url ?? `${APP_REPO}/releases/latest`),
      publishedAt: String(j.published_at ?? ""),
      windows: pick(assets, (n) => n.endsWith(".exe")),
      macDmg: pick(assets, (n) => n.endsWith(".dmg")),
      macZip: pick(assets, (n) => n.endsWith(".zip") && n.includes("mac")),
      linuxAppImage: pick(assets, (n) => n.endsWith(".appimage")),
      linuxDeb: pick(assets, (n) => n.endsWith(".deb")),
      sha: pick(assets, (n) => n.toLowerCase().includes("sha256")),
      all: assets,
    };
  } catch {
    return null;
  }
}

export function fallbackDownloadLinks(tagHint?: string) {
  const base = `${APP_REPO}/releases/latest/download`;
  // Shown when API is unreachable; GitHub resolves /latest/download only with exact names,
  // so we link to the release page + API as primary.
  return {
    page: `${APP_REPO}/releases/latest`,
    api: API_LATEST,
    tagHint: tagHint ?? "",
    base,
  };
}
