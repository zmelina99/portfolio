"use client";

import { useId } from "react";
import { useLanguage } from "@/components/lang/LanguageProvider";

/**
 * Conceptual illustration for the Hive Power role: one energy app with a few
 * translucent screens branching from it, framed by kelp and reef shapes.
 * Fictional UI, labelled as illustrative. Deliberately different from the
 * two branded phones in the whitelabel case study.
 */

const AREA_LINE =
  "M 24 268 C 40 262, 52 250, 66 252 C 80 254, 90 236, 104 232 C 118 228, 128 244, 142 236 C 154 229, 162 210, 166 204";
const BARS = [18, 26, 14, 30, 22, 36, 28, 40, 24, 32, 44, 30];

export default function HiveGrowthIllustration() {
  const { t } = useLanguage();
  const uid = useId().replace(/:/g, "");
  const glass = `${uid}-glass`;
  const screenClip = `${uid}-screen`;
  const area = `${uid}-area`;

  return (
    <figure className="relative">
      <figcaption className="uw-label mb-3">{t("experience.hive.visualLabel")}</figcaption>
      <svg viewBox="0 0 600 480" className="block h-auto w-full" aria-hidden="true">
        <defs>
          <linearGradient id={glass} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.62" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id={area} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1B7D82" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#1B7D82" stopOpacity="0.02" />
          </linearGradient>
          <clipPath id={screenClip}>
            <rect x="8" y="8" width="174" height="364" rx="25" />
          </clipPath>
        </defs>

        {/* kelp and reef framing the edges */}
        <g fill="#0E5D63">
          <path d="M14 480 C 4 420, 34 380, 20 320 C 10 270, 34 230, 26 170 C 24 156, 34 154, 36 168 C 46 230, 26 270, 36 320 C 50 382, 24 420, 30 480 Z" opacity="0.14" />
          <path d="M52 480 C 46 440, 62 404, 54 360 C 48 330, 60 300, 56 262 C 56 252, 64 252, 66 262 C 70 300, 58 330, 64 360 C 72 404, 58 440, 62 480 Z" opacity="0.1" />
          <path d="M586 480 C 596 430, 572 396, 584 340 C 592 300, 574 262, 580 214 C 582 202, 572 200, 570 212 C 562 262, 580 300, 572 340 C 562 396, 584 430, 574 480 Z" opacity="0.12" />
        </g>
        <path d="M430 480 C 440 452, 470 440, 500 446 C 520 420, 562 424, 580 444 C 594 440, 600 452, 600 480 Z" fill="#9C8FC9" opacity="0.22" />

        {/* branches from the app to the new screens */}
        <g fill="none" stroke="#0E5D63" strokeOpacity="0.45" strokeWidth="1.5" strokeDasharray="4 5" strokeLinecap="round">
          <path d="M 262 150 C 300 150, 300 108, 336 108" />
          <path d="M 262 236 C 310 236, 320 256, 364 256" />
          <path d="M 262 322 C 296 322, 296 392, 330 392" />
        </g>
        <g fill="#0E5D63" fillOpacity="0.6">
          <circle cx="262" cy="150" r="3" />
          <circle cx="262" cy="236" r="3" />
          <circle cx="262" cy="322" r="3" />
        </g>

        {/* translucent screens */}
        <g transform="rotate(-4 436 106)">
          <rect x="336" y="44" width="200" height="128" rx="14" fill={`url(#${glass})`} stroke="#FFFFFF" strokeOpacity="0.85" />
          <rect x="336" y="44" width="200" height="24" rx="12" fill="#7FC4BE" opacity="0.55" />
          <path d="M 352 150 C 372 140, 384 120, 404 124 C 424 128, 436 104, 456 102 C 476 100, 492 116, 518 92" fill="none" stroke="#0E5D63" strokeOpacity="0.55" strokeWidth="2" />
        </g>
        <g transform="rotate(2 458 256)">
          <rect x="364" y="196" width="190" height="118" rx="14" fill={`url(#${glass})`} stroke="#FFFFFF" strokeOpacity="0.85" />
          <rect x="364" y="196" width="190" height="24" rx="12" fill="#B7AADB" opacity="0.6" />
          <rect x="380" y="236" width="120" height="10" rx="5" fill="#6F62A6" opacity="0.35" />
          <rect x="380" y="256" width="150" height="10" rx="5" fill="#6F62A6" opacity="0.25" />
          <rect x="380" y="276" width="90" height="10" rx="5" fill="#6F62A6" opacity="0.3" />
        </g>
        <g transform="rotate(-2 430 392)">
          <rect x="330" y="338" width="200" height="108" rx="14" fill={`url(#${glass})`} stroke="#FFFFFF" strokeOpacity="0.85" />
          <rect x="330" y="338" width="200" height="24" rx="12" fill="#E2D2B0" opacity="0.7" />
          <rect x="346" y="376" width="52" height="52" rx="8" fill="#0E5D63" opacity="0.14" />
          <rect x="404" y="376" width="52" height="52" rx="8" fill="#9C8FC9" opacity="0.22" />
          <rect x="462" y="376" width="52" height="52" rx="8" fill="#C9A96E" opacity="0.22" />
        </g>

        {/* the energy app */}
        <g transform="translate(72 44)">
          <rect width="190" height="380" rx="32" fill="#1B2226" />
          <g clipPath={`url(#${screenClip})`}>
            <rect x="8" y="8" width="174" height="364" fill="#F7F9F8" />
            <rect x="8" y="8" width="174" height="64" fill="#0E5D63" />
            <circle cx="30" cy="50" r="7" fill="#F3FAF5" opacity="0.85" />
            <rect x="44" y="46" width="56" height="8" rx="4" fill="#F3FAF5" opacity="0.7" />
            <rect x="150" y="44" width="16" height="2" rx="1" fill="#F3FAF5" />
            <rect x="150" y="49" width="16" height="2" rx="1" fill="#F3FAF5" />
            <rect x="150" y="54" width="16" height="2" rx="1" fill="#F3FAF5" />

            <text x="24" y="102" fontSize="15" fill="#162126" style={{ fontFamily: "var(--font-playfair), serif" }}>
              {t("caseStudies.hive.mock.title")}
            </text>
            <text x="24" y="136" fontSize="26" fill="#162126" style={{ fontFamily: "var(--font-playfair), serif" }}>
              12.4 kWh
            </text>

            {/* hour / day / week / month */}
            <rect x="24" y="152" width="142" height="22" rx="11" fill="#E4ECEA" />
            <rect x="61" y="154" width="34" height="18" rx="9" fill="#0E5D63" />
            {["H", "D", "W", "M"].map((l, i) => (
              <text
                key={l}
                x={42 + i * 36}
                y="167"
                fontSize="10"
                textAnchor="middle"
                fill={i === 1 ? "#F3FAF5" : "#56656B"}
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                {l}
              </text>
            ))}

            <path d={`${AREA_LINE} L 166 284 L 24 284 Z`} fill={`url(#${area})`} />
            <path d={AREA_LINE} fill="none" stroke="#0E5D63" strokeWidth="2" />
            <circle cx="104" cy="232" r="4" fill="#0E5D63" stroke="#F7F9F8" strokeWidth="2" />

            {BARS.map((h, i) => (
              <rect key={i} x={24 + i * 12} y={350 - h} width="8" height={h} rx="2" fill={i % 3 === 1 ? "#A9CDC6" : "#5E9C93"} />
            ))}
            <line x1="24" x2="166" y1="300" y2="300" stroke="#DDE3E1" />
          </g>
          <rect x="68" y="8" width="54" height="14" rx="7" fill="#1B2226" />
        </g>
      </svg>
      <p className="sr-only">{t("experience.hive.visualAlt")}</p>
    </figure>
  );
}
