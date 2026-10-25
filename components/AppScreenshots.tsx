"use client";

import { withBase, type Lang } from "../lib/site";
import s from "./site.module.css";

export default function AppScreenshots({ lang, alt }: { lang: Lang; alt: string }) {
  const light = withBase("/readlynx-light.png");
  const dark = withBase("/readlynx-dark.png");
  const darkLabel = lang === "fa" ? "تم تیره" : "Dark";
  const lightLabel = lang === "fa" ? "تم روشن" : "Light";

  return (
    <div className={s.shots} role="img" aria-label={alt}>
      <figure className={s.frame}>
        <div className={s.frameBar}>
          <span className={s.dot} />
          <span className={s.dot} />
          <span className={s.dot} />
          <span className={`${s.frameBadge} ${s.frameBadgeDark}`}>☾ {darkLabel}</span>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={dark} alt={`${alt} — ${darkLabel}`} className={s.frameImg} loading="eager" />
      </figure>
      <figure className={s.frame}>
        <div className={s.frameBar}>
          <span className={s.dot} />
          <span className={s.dot} />
          <span className={s.dot} />
          <span className={s.frameBadge}>☀ {lightLabel}</span>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={light} alt={`${alt} — ${lightLabel}`} className={s.frameImg} loading="eager" />
      </figure>
      <p className={s.shotsFoot}>{alt}</p>
    </div>
  );
}
