import {
  Library,
  BookOpen,
  Languages,
  MessagesSquare,
  ScanEye,
  FileEdit,
  KeyRound,
  ShieldCheck,
  FileText,
  ScanText,
  Layers,
  CheckCircle2,
} from "lucide-react";
import { SITE, type Lang } from "../lib/site";
import type { Dictionary } from "../dictionaries";
import DownloadSection from "./DownloadSection";
import AppScreenshots from "./AppScreenshots";
import DonateCard from "./DonateCard";
import s from "./site.module.css";

const featureIcons = [Library, BookOpen, Languages, MessagesSquare, ScanEye, FileEdit, KeyRound, ShieldCheck];

export function Hero({ lang, dict }: { lang: Lang; dict: Dictionary }) {
  return (
    <section className={`glass-card ${s.hero}`}>
      <div>
        <span className="eyebrow">{dict.hero.badge}</span>
        <h1>
          <span>{dict.hero.titleA}</span>
          <em>{dict.hero.titleB}</em>
        </h1>
        <p>{dict.hero.sub}</p>
        <div className={s.heroCtas}>
          <a className="pill-btn pill-btn--primary" href="#download">
            {dict.hero.ctaPrimary}
          </a>
          <a className="pill-btn pill-btn--ghost" href="#translate">
            {dict.hero.ctaSecondary}
          </a>
        </div>
        <div className={s.metaRow}>
          <span className={s.metaChip}>{dict.hero.formats}</span>
          <span className={s.metaChip}>{dict.hero.offline}</span>
        </div>
      </div>
      <AppScreenshots lang={lang} alt={lang === "fa" ? "نمای واقعی برنامه ریدلینکس" : "Real ReadLynx app"} />
    </section>
  );
}

export function Download({ lang, dict }: { lang: Lang; dict: Dictionary }) {
  return <DownloadSection lang={lang} dict={dict} />;
}

export function Features({ dict }: { dict: Dictionary }) {
  return (
    <section id="features" className={`glass-card ${s.section}`}>
      <div className={s.sectionHead}>
        <span className="eyebrow">{dict.features.eyebrow}</span>
        <h2 className="section-title" style={{ marginTop: 12 }}>
          {dict.features.title}
        </h2>
        <p className="section-sub">{dict.features.sub}</p>
      </div>
      <div className={s.cards4}>
        {dict.features.cards.map((c, i) => {
          const Icon = featureIcons[i % featureIcons.length];
          return (
            <div key={c.title} className={`glass-card ${s.card}`}>
              <span className={s.cardIcon}>
                <Icon size={20} />
              </span>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function Modes({ dict }: { dict: Dictionary }) {
  return (
    <section id="translate" className={`glass-card ${s.section}`}>
      <div className={s.sectionHead}>
        <span className="eyebrow">{dict.modes.eyebrow}</span>
        <h2 className="section-title" style={{ marginTop: 12 }}>
          {dict.modes.title}
        </h2>
        <p className="section-sub">{dict.modes.sub}</p>
      </div>
      <div className={s.cards2}>
        <div className={`glass-card ${s.card}`}>
          <span className={s.cardIcon}>
            <ScanText size={20} />
          </span>
          <h3>{dict.modes.pdfOcr}</h3>
          <p>{dict.modes.pdfOcrBody}</p>
        </div>
        <div className={`glass-card ${s.card}`}>
          <span className={s.cardIcon}>
            <ScanEye size={20} />
          </span>
          <h3>{dict.modes.pdfVision}</h3>
          <p>{dict.modes.pdfVisionBody}</p>
        </div>
        <div className={`glass-card ${s.card}`}>
          <span className={s.cardIcon}>
            <FileText size={20} />
          </span>
          <h3>{dict.modes.epubMd}</h3>
          <p>{dict.modes.epubMdBody}</p>
        </div>
        <div className={`glass-card ${s.card}`}>
          <span className={s.cardIcon}>
            <Layers size={20} />
          </span>
          <h3>{dict.modes.epubHtml}</h3>
          <p>{dict.modes.epubHtmlBody}</p>
        </div>
      </div>
      <div className={s.chips}>
        {dict.modes.chips.map((c) => (
          <span key={c} className={s.metaChip}>
            {c}
          </span>
        ))}
      </div>
    </section>
  );
}

export function Guide({ dict }: { dict: Dictionary }) {
  return (
    <section id="guide" className={`glass-card ${s.section}`}>
      <div className={s.sectionHead}>
        <span className="eyebrow">{dict.guide.eyebrow}</span>
        <h2 className="section-title" style={{ marginTop: 12 }}>
          {dict.guide.title}
        </h2>
        <p className="section-sub">{dict.guide.sub}</p>
      </div>
      <div className={s.steps}>
        {dict.guide.steps.map((st) => (
          <div key={st.title} className={`glass-card ${s.step}`}>
            <h3>{st.title}</h3>
            <p>{st.body}</p>
          </div>
        ))}
      </div>
      <p className={s.tip}>{dict.guide.tip}</p>
      <div className={s.reqList} style={{ marginTop: 20 }}>
        {dict.req.items.map((it) => (
          <div key={it} className={s.reqItem}>
            <CheckCircle2 size={18} style={{ flexShrink: 0, marginTop: 3 }} />
            <span>{it}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Faq({ dict }: { dict: Dictionary }) {
  return (
    <section id="faq" className={`glass-card ${s.section}`}>
      <div className={s.sectionHead}>
        <span className="eyebrow">{dict.faq.eyebrow}</span>
        <h2 className="section-title" style={{ marginTop: 12 }}>
          {dict.faq.title}
        </h2>
      </div>
      <div className={s.faq}>
        {dict.faq.items.map((f) => (
          <details key={f.q}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function Donate({ dict }: { dict: Dictionary }) {
  return (
    <section id="donate" className={`glass-card ${s.section}`}>
      <div className={s.sectionHead}>
        <span className="eyebrow">{dict.donate.eyebrow}</span>
        <h2 className="section-title" style={{ marginTop: 12 }}>
          {dict.donate.title}
        </h2>
        <p className="section-sub">{dict.donate.sub}</p>
      </div>
      <div className={s.donateSingle}>
        <DonateCard dict={dict} />
      </div>
      <p className={s.tip}>{dict.donate.note}</p>
    </section>
  );
}

export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className={`glass-card ${s.footer}`}>
      <span>
        <strong>ReadLynx</strong> · {dict.footer.tag}
      </span>
      <nav>
        <a href={SITE.appRepo} target="_blank" rel="noreferrer">
          {dict.footer.app}
        </a>
        <a href={SITE.releasesLatest} target="_blank" rel="noreferrer">
          {dict.footer.releases}
        </a>
        <a href={SITE.orgHome} target="_blank" rel="noreferrer">
          {dict.footer.website}
        </a>
      </nav>
      <span>© {new Date().getFullYear()} {dict.footer.rights}</span>
    </footer>
  );
}
