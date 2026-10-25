"use client";

import { useEffect, useState } from "react";
import { MonitorDown, Apple, Terminal, FileCheck, Github } from "lucide-react";
import { fetchLatestRelease, type LatestRelease } from "../lib/github";
import { SITE, type Lang } from "../lib/site";
import type { Dictionary } from "../dictionaries";
import s from "./site.module.css";

export default function DownloadSection({ lang, dict }: { lang: Lang; dict: Dictionary }) {
  const [rel, setRel] = useState<LatestRelease | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    fetchLatestRelease().then((r) => {
      if (alive) {
        setRel(r);
        setLoading(false);
      }
    });
    return () => {
      alive = false;
    };
  }, []);

  void lang;

  const winHref = rel?.windows?.browser_download_url ?? SITE.releasesLatest;
  const macHref = rel?.macDmg?.browser_download_url ?? rel?.macZip?.browser_download_url ?? SITE.releasesLatest;
  const linHref = rel?.linuxAppImage?.browser_download_url ?? rel?.linuxDeb?.browser_download_url ?? SITE.releasesLatest;
  const shaHref = rel?.sha?.browser_download_url ?? SITE.releasesLatest;

  return (
    <section id="download" className={`glass-card ${s.section}`}>
      <div className={s.sectionHead}>
        <span className="eyebrow">{dict.download.eyebrow}</span>
        <h2 className="section-title" style={{ marginTop: 12 }}>
          {dict.download.title}
        </h2>
        <p className="section-sub">{dict.download.sub}</p>
        <p className={s.ver} style={{ marginTop: 12 }}>
          {loading ? dict.hero.versionLoading : rel ? `${dict.hero.versionLatest} ${rel.tag}` : ""}
        </p>
      </div>
      <div className={s.dlGrid}>
        <div className={`glass-card ${s.dlCard}`}>
          <span className={s.cardIcon}>
            <MonitorDown size={20} />
          </span>
          <h3>{dict.download.windows}</h3>
          <p>{dict.download.windowsSub}</p>
          <a className="pill-btn pill-btn--primary dlBtn" href={winHref} target="_blank" rel="noreferrer">
            {dict.download.button} · .exe
          </a>
        </div>
        <div className={`glass-card ${s.dlCard}`}>
          <span className={s.cardIcon}>
            <Apple size={20} />
          </span>
          <h3>{dict.download.mac}</h3>
          <p>{dict.download.macSub}</p>
          <a className="pill-btn pill-btn--primary dlBtn" href={macHref} target="_blank" rel="noreferrer">
            {dict.download.button} · .dmg
          </a>
        </div>
        <div className={`glass-card ${s.dlCard}`}>
          <span className={s.cardIcon}>
            <Terminal size={20} />
          </span>
          <h3>{dict.download.linux}</h3>
          <p>{dict.download.linuxSub}</p>
          <a className="pill-btn pill-btn--primary dlBtn" href={linHref} target="_blank" rel="noreferrer">
            {dict.download.button} · AppImage
          </a>
        </div>
      </div>
      <div className={s.dlFoot}>
        <a href={SITE.releasesLatest} target="_blank" rel="noreferrer">
          <Github size={14} style={{ verticalAlign: -2 }} /> {dict.download.allReleases}
        </a>
        <span>·</span>
        <a href={shaHref} target="_blank" rel="noreferrer">
          <FileCheck size={14} style={{ verticalAlign: -2 }} /> {dict.download.verify}
        </a>
      </div>
      <p className={s.tip}>{dict.download.note}</p>
    </section>
  );
}
