"use client";

import { withBase } from "../lib/site";

export default function Background() {
  const day = withBase("/day-background.png");
  const night = withBase("/night-background.png");
  return (
    <div className="app-background" aria-hidden>
      <div className="app-background-layer app-background-layer--day" style={{ backgroundImage: `url("${day}")` }} />
      <div className="app-background-layer app-background-layer--night" style={{ backgroundImage: `url("${night}")` }} />
      <div className="app-background-overlay" />
    </div>
  );
}
