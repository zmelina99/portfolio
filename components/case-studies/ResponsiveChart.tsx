"use client";

import { useCallback, useId, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { useLanguage } from "@/components/lang/LanguageProvider";

/**
 * Oversized illustrative live chart. The highlighted marker follows the
 * pointer or a finger, and can also be moved with the arrow keys. On touch
 * devices that support it, each new point gives a tiny haptic tick — a nod
 * to the case study itself. The story never depends on interacting with it.
 */

const W = 400;
const H = 300;
const PAD_TOP = 24;
const PAD_BOTTOM = 18;
const COUNT = 48;
const DEFAULT_INDEX = 34;

const VALUES = Array.from({ length: COUNT }, (_, i) =>
  20 + i * 1.25 + 6 * Math.sin(i * 0.7) + 4 * Math.sin(i * 1.9 + 1) + 2.5 * Math.sin(i * 3.1)
);
const MIN = Math.min(...VALUES);
const MAX = Math.max(...VALUES);

const POINTS = VALUES.map((v, i) => ({
  x: (i / (COUNT - 1)) * W,
  y: PAD_TOP + (1 - (v - MIN) / (MAX - MIN)) * (H - PAD_TOP - PAD_BOTTOM),
}));

function smoothPath(points: { x: number; y: number }[]) {
  return points.reduce((d, p, i, arr) => {
    if (i === 0) return `M ${p.x} ${p.y}`;
    const prev = arr[i - 1];
    const cx = (prev.x + p.x) / 2;
    return `${d} C ${cx} ${prev.y}, ${cx} ${p.y}, ${p.x} ${p.y}`;
  }, "");
}

const LINE = smoothPath(POINTS);
const AREA = `${LINE} L ${W} ${H} L 0 ${H} Z`;

function label(index: number) {
  const minutes = 12 * 60 + index;
  const hh = String(Math.floor(minutes / 60)).padStart(2, "0");
  const mm = String(minutes % 60).padStart(2, "0");
  const kw = (VALUES[index] / 20).toFixed(2);
  return { time: `${hh}:${mm}`, value: `${kw} kW` };
}

export default function ResponsiveChart() {
  const { t } = useLanguage();
  const [index, setIndex] = useState(DEFAULT_INDEX);
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const gradientId = useId().replace(/:/g, "");

  const indexRef = useRef(DEFAULT_INDEX);

  const moveTo = useCallback((next: number, haptic = false) => {
    const clamped = Math.max(0, Math.min(COUNT - 1, next));
    if (clamped === indexRef.current) return;
    indexRef.current = clamped;
    setIndex(clamped);
    if (haptic && typeof navigator !== "undefined" && "vibrate" in navigator) {
      navigator.vibrate(4);
    }
  }, []);

  const onPointer = (e: PointerEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const ratio = (e.clientX - rect.left) / rect.width;
    moveTo(Math.round(ratio * (COUNT - 1)), e.pointerType === "touch");
    setActive(true);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const step = e.shiftKey ? 8 : 1;
    const keys: Record<string, number> = {
      ArrowRight: index + step,
      ArrowUp: index + step,
      ArrowLeft: index - step,
      ArrowDown: index - step,
      Home: 0,
      End: COUNT - 1,
    };
    if (e.key in keys) {
      e.preventDefault();
      moveTo(keys[e.key]);
    }
  };

  const point = POINTS[index];
  const { time, value } = label(index);
  const tipLeft = (point.x / W) * 100;

  return (
    <figure className="uw-panel h-full">
      <figcaption className="uw-label px-5 pt-4">{t("caseStudies.charts.visualLabel")}</figcaption>
      <div
        ref={ref}
        role="slider"
        tabIndex={0}
        aria-label={t("caseStudies.charts.sliderLabel")}
        aria-valuemin={0}
        aria-valuemax={COUNT - 1}
        aria-valuenow={index}
        aria-valuetext={`${time}, ${value}`}
        onPointerMove={onPointer}
        onPointerDown={onPointer}
        onPointerLeave={() => setActive(false)}
        onKeyDown={onKeyDown}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        className="relative mt-2 cursor-crosshair touch-pan-y select-none outline-none focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#0A5A60]"
      >
        <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full" aria-hidden="true">
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1B7D82" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#1B7D82" stopOpacity="0.02" />
            </linearGradient>
          </defs>
          {[1, 2, 3].map((i) => (
            <line key={`h${i}`} x1="0" x2={W} y1={(H / 4) * i} y2={(H / 4) * i} stroke="#0A4A52" strokeOpacity="0.09" />
          ))}
          {[1, 2, 3].map((i) => (
            <line key={`v${i}`} y1="0" y2={H} x1={(W / 4) * i} x2={(W / 4) * i} stroke="#0A4A52" strokeOpacity="0.09" />
          ))}
          <path d={AREA} fill={`url(#${gradientId})`} />
          <path d={LINE} fill="none" stroke="#0E5D63" strokeWidth="2.25" strokeLinejoin="round" />
          <line x1={point.x} x2={point.x} y1={point.y} y2={H} stroke="#0E5D63" strokeDasharray="3 4" strokeOpacity="0.7" />
          <circle cx={point.x} cy={point.y} r="11" fill="#0E5D63" fillOpacity={active ? 0.16 : 0.1} />
          <circle cx={point.x} cy={point.y} r="6" fill="#0E5D63" stroke="#F4FBFA" strokeWidth="2.5" />
        </svg>

        {/* Readout */}
        <div
          className="pointer-events-none absolute top-2 -translate-x-1/2 whitespace-nowrap rounded-sm border border-[rgba(10,74,82,0.16)] bg-[rgba(246,252,251,0.92)] px-2.5 py-1 text-xs tabular-nums text-[var(--uw-ink)] shadow-sm"
          style={{ left: `clamp(3.5rem, ${tipLeft}%, calc(100% - 3.5rem))` }}
          aria-hidden="true"
        >
          <span className="text-[var(--uw-muted)]">{time}</span> · <span className="font-medium">{value}</span>
        </div>
      </div>
      <p className="px-5 pb-3 pt-2 text-xs text-[var(--uw-muted)]">{t("caseStudies.charts.visualHint")}</p>
    </figure>
  );
}
