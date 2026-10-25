"use client";

import { Heart } from "lucide-react";
import { SITE } from "../lib/site";
import type { Dictionary } from "../dictionaries";
import s from "./site.module.css";

export default function DonateCard({ dict }: { dict: Dictionary }) {
  return (
    <div className={`glass-card ${s.card} ${s.donateCard}`}>
      <span className={s.cardIcon}>
        <Heart size={20} />
      </span>
      <h3>{dict.donate.cardTitle}</h3>
      <p>{dict.donate.cardBody}</p>
      <a
        className={`pill-btn pill-btn--primary ${s.dlBtn}`}
        href={SITE.donateUrl}
        target="_blank"
        rel="noreferrer"
      >
        {dict.donate.cta}
      </a>
    </div>
  );
}
