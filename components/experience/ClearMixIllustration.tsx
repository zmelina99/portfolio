"use client";

import { useId } from "react";
import { useLanguage } from "@/components/lang/LanguageProvider";

/**
 * Compact conceptual illustration for the ClearMix role: overlapping film
 * frames with a subtle route line running across them.
 */

const FRAMES = [
  { x: 36, y: 86, rotate: -8, from: "#7FC4BE", to: "#2F8C8E" },
  { x: 134, y: 44, rotate: 3, from: "#CFC5EA", to: "#8E80C2" },
  { x: 232, y: 98, rotate: 9, from: "#EADCC0", to: "#C2A167" },
];

const W = 172;
const H = 118;

export default function ClearMixIllustration() {
  const { t } = useLanguage();
  const uid = useId().replace(/:/g, "");

  return (
    <figure className="relative mx-auto w-full max-w-md lg:mx-0">
      <figcaption className="uw-label mb-3">{t("experience.clearmix.visualLabel")}</figcaption>
      <svg viewBox="0 0 440 280" className="block h-auto w-full" aria-hidden="true">
        <defs>
          {FRAMES.map((f, i) => (
            <linearGradient key={i} id={`${uid}-f${i}`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={f.from} />
              <stop offset="100%" stopColor={f.to} />
            </linearGradient>
          ))}
        </defs>

        {/* route line, behind the frames */}
        <path
          d="M 22 252 C 90 236, 110 190, 170 196 C 236 202, 250 132, 312 120 C 360 110, 392 64, 420 34"
          fill="none"
          stroke="#0E5D63"
          strokeOpacity="0.45"
          strokeWidth="2"
          strokeDasharray="2 7"
          strokeLinecap="round"
        />

        {FRAMES.map((f, i) => (
          <g key={i} transform={`rotate(${f.rotate} ${f.x + W / 2} ${f.y + H / 2})`}>
            <rect x={f.x} y={f.y} width={W} height={H} rx="6" fill="#1F2A2E" opacity="0.92" />
            {/* sprocket holes */}
            {Array.from({ length: 10 }, (_, k) => (
              <g key={k} fill="#F2EFE8" opacity="0.8">
                <rect x={f.x + 8 + k * 16} y={f.y + 4} width="8" height="6" rx="1.5" />
                <rect x={f.x + 8 + k * 16} y={f.y + H - 10} width="8" height="6" rx="1.5" />
              </g>
            ))}
            <rect x={f.x + 8} y={f.y + 15} width={W - 16} height={H - 30} rx="3" fill={`url(#${uid}-f${i})`} />
            {/* a soft horizon in each frame */}
            <path
              d={`M ${f.x + 8} ${f.y + 70} C ${f.x + 50} ${f.y + 58}, ${f.x + 100} ${f.y + 78}, ${f.x + W - 8} ${f.y + 62} L ${f.x + W - 8} ${f.y + H - 15} L ${f.x + 8} ${f.y + H - 15} Z`}
              fill="#FFFFFF"
              opacity="0.18"
            />
          </g>
        ))}

        {/* route stops */}
        <g fill="#0E5D63">
          <circle cx="22" cy="252" r="5" fillOpacity="0.75" />
          <circle cx="22" cy="252" r="10" fillOpacity="0.12" />
          <path d="M 420 18 C 410 18, 404 26, 404 33 C 404 44, 420 56, 420 56 C 420 56, 436 44, 436 33 C 436 26, 430 18, 420 18 Z" fillOpacity="0.8" />
          <circle cx="420" cy="33" r="5" fill="#F2FBFA" />
        </g>
      </svg>
      <p className="sr-only">{t("experience.clearmix.visualAlt")}</p>
    </figure>
  );
}
