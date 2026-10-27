import { SITE, withBase } from "../lib/site";
import type { Dictionary } from "../dictionaries";
import s from "./site.module.css";

export default function TutorialBanner({ dict }: { dict: Dictionary }) {
  return (
    <section id="tutorial" className={`glass-card ${s.section}`}>
      <div className={s.sectionHead}>
        <span className="eyebrow">{dict.tutorial.eyebrow}</span>
        <h2 className="section-title" style={{ marginTop: 12 }}>
          {dict.tutorial.title}
        </h2>
        <p className="section-sub">{dict.tutorial.sub}</p>
      </div>
      <div className={s.videoWrap}>
        <video
          className={s.videoPlayer}
          controls
          preload="none"
          playsInline
          poster={withBase(SITE.tutorialPoster)}
          src={withBase(SITE.tutorialVideo)}
        />
      </div>
    </section>
  );
}
