"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { SITE, withBase } from "../lib/site";
import type { Dictionary } from "../dictionaries";
import s from "./site.module.css";

export default function TutorialBanner({ dict }: { dict: Dictionary }) {
  const [started, setStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const startPlayback = () => {
    setStarted(true);
    videoRef.current?.play();
  };

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
          ref={videoRef}
          className={s.videoPlayer}
          controls
          preload="none"
          playsInline
          poster={withBase(SITE.tutorialPoster)}
          src={withBase(SITE.tutorialVideo)}
          onPlay={() => setStarted(true)}
        />
        {!started && (
          <button className={s.videoPlay} onClick={startPlayback} aria-label={dict.tutorial.cta}>
            <Play />
          </button>
        )}
      </div>
    </section>
  );
}
