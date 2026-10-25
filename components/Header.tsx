"use client";

import Link from "next/link";
import { Moon, Sun, Github } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { withBase, type Lang } from "../lib/site";
import type { Dictionary } from "../dictionaries";
import s from "./Header.module.css";

export default function Header({ lang, dict }: { lang: Lang; dict: Dictionary }) {
  const { theme, toggle } = useTheme();
  const other: Lang = lang === "en" ? "fa" : "en";
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.bar}>
          <Link className={s.brand} href={`/${lang}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={withBase("/app-icon.png")} alt="ReadLynx" width={32} height={32} />
            <span>ReadLynx</span>
          </Link>
          <nav className={s.links}>
            <a href="#features">{dict.nav.features}</a>
            <a href="#translate">{dict.nav.translate}</a>
            <a href="#guide">{dict.nav.guide}</a>
            <a href="#faq">{dict.nav.faq}</a>
            <a href="#donate">{dict.nav.donate}</a>
          </nav>
          <div className={s.controls}>
            <div className={s.langSeg} role="group" aria-label={dict.lang.label}>
              <Link href="/en" data-active={lang === "en"}>
                EN
              </Link>
              <Link href="/fa" data-active={lang === "fa"}>
                فا
              </Link>
            </div>
            <button className={s.iconBtn} onClick={toggle} aria-label={dict.theme.toggle} title={dict.theme.toggle}>
              {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <a className={s.iconBtn} href="https://github.com/Regestea/readlynx" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={17} />
            </a>
            <a className={s.cta} href="#download">
              {dict.nav.download}
            </a>
            <span style={{ display: "none" }}>{other}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
