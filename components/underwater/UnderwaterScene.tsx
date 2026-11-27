"use client";

import { useId, type CSSProperties } from "react";

/**
 * Page-wide decorative backdrop: a rippling surface and sun shafts at the top
 * of the page, edges that deepen into teal further down, faint reef
 * silhouettes and a sparse, viewport-fixed layer of rising bubbles.
 * Everything is aria-hidden and ignores pointer events. Motion is CSS-only
 * (transform + opacity); see the "Underwater page" block in globals.css.
 */

type Bubble = {
  x: string; // horizontal position
  size: number; // px
  dur: number; // rise duration, s
  delay: number; // negative = already mid-flight on load
  drift: number; // sideways sway, px
  sway: number; // sway period, s
  rest: string; // where it sits when motion is reduced
};

// Ordered so the first five (outermost margins) are the ones kept on phones.
// Tracks are one viewport high, so these durations make for a slow rise.
const BUBBLES: Bubble[] = [
  { x: "3%", size: 10, dur: 17, delay: -4, drift: 10, sway: 5.5, rest: "62%" },
  { x: "95%", size: 14, dur: 20, delay: -11, drift: 12, sway: 6.5, rest: "48%" },
  { x: "7%", size: 6, dur: 15, delay: -8, drift: 7, sway: 4.2, rest: "78%" },
  { x: "91%", size: 8, dur: 16, delay: -2, drift: 9, sway: 5, rest: "70%" },
  { x: "1.5%", size: 18, dur: 23, delay: -16, drift: 14, sway: 7, rest: "36%" },
  // Wider screens: more bubbles, still kept to the margins
  { x: "97%", size: 5, dur: 13, delay: -6, drift: 6, sway: 3.8, rest: "84%" },
  { x: "10%", size: 12, dur: 21, delay: -14, drift: 11, sway: 6, rest: "54%" },
  { x: "88%", size: 22, dur: 25, delay: -19, drift: 16, sway: 8, rest: "30%" },
  { x: "13%", size: 7, dur: 18, delay: -9, drift: 9, sway: 4.8, rest: "88%" },
  { x: "85%", size: 6, dur: 15, delay: -4, drift: 8, sway: 4.4, rest: "74%" },
  { x: "5%", size: 9, dur: 19, delay: -12, drift: 10, sway: 5.2, rest: "22%" },
  { x: "93%", size: 11, dur: 22, delay: -17, drift: 12, sway: 6.2, rest: "90%" },
];

// Shafts fan out from a sun just left of centre, like the mockup.
const RAYS = [
  { left: "20%", width: 120, rotate: 24, dur: 17, delay: -3, opacity: 0.75 },
  { left: "29%", width: 70, rotate: 13, dur: 21, delay: -11, opacity: 0.6 },
  { left: "37%", width: 150, rotate: 3, dur: 19, delay: -7, opacity: 0.7 },
  { left: "46%", width: 90, rotate: -9, dur: 23, delay: -15, opacity: 0.5 },
  { left: "55%", width: 64, rotate: -20, dur: 18, delay: -5, opacity: 0.42 },
];

function Ripples({ id, seed, baseFrequency }: { id: string; seed: number; baseFrequency: string }) {
  return (
    <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <filter id={id} x="0" y="0" width="100%" height="100%" colorInterpolationFilters="sRGB">
        <feTurbulence type="turbulence" baseFrequency={baseFrequency} numOctaves={2} seed={seed} />
        {/* Bright where the noise creases (values near 0): a web of caustic lines */}
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1
                  0 0 0 0 1
                  0 0 0 0 1
                  -5.5 0 0 0 1.25"
        />
      </filter>
      <rect width="100%" height="100%" filter={`url(#${id})`} />
    </svg>
  );
}

function Reef() {
  return (
    <svg viewBox="0 0 420 560" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <g fill="currentColor">
        {/* rock base */}
        <path d="M0 560 C 20 500, 70 470, 120 478 C 160 440, 230 450, 262 470 C 300 448, 360 452, 420 480 L 420 560 Z" />
        {/* branching coral */}
        <path d="M150 482 C 146 420, 128 380, 104 340 C 98 330, 108 324, 114 334 C 130 360, 146 386, 154 420 C 156 370, 150 320, 136 270 C 132 258, 146 254, 150 266 C 164 312, 170 360, 168 410 C 178 380, 194 350, 214 326 C 222 318, 232 326, 224 336 C 200 366, 184 410, 178 482 Z" />
        <path d="M136 270 C 124 240, 110 226, 96 214 C 88 206, 96 198, 104 206 C 120 220, 134 238, 144 262 Z" />
        <path d="M150 266 C 156 236, 168 214, 184 196 C 190 188, 200 196, 194 204 C 180 222, 168 246, 160 272 Z" />
        {/* sea fan */}
        <path d="M300 470 C 296 420, 300 380, 312 340 C 260 330, 236 280, 250 230 C 262 190, 300 170, 334 176 C 380 184, 404 228, 396 276 C 388 320, 356 344, 322 344 C 314 382, 312 424, 314 470 Z" opacity="0.75" />
        {/* kelp strands */}
        <path d="M60 480 C 50 420, 76 380, 62 320 C 52 270, 74 230, 66 170 C 64 156, 74 154, 76 168 C 86 230, 66 270, 76 320 C 90 382, 66 420, 72 480 Z" opacity="0.8" />
        <path d="M36 490 C 30 440, 46 404, 38 360 C 32 330, 44 300, 40 260 C 40 250, 48 250, 50 260 C 54 300, 42 330, 48 360 C 56 404, 42 440, 46 490 Z" opacity="0.6" />
      </g>
    </svg>
  );
}

export default function UnderwaterScene() {
  const uid = useId().replace(/:/g, "");

  return (
    <div className="uw-scene" aria-hidden="true">
      {/* Calm, light area behind the copy, edges that deepen further down */}
      <div className="uw-calm" />
      <div className="uw-edges" />

      {/* Sun shafts entering from above */}
      <div className="uw-rays">
        {RAYS.map((ray, i) => (
          <span
            key={i}
            className="uw-ray"
            style={
              {
                left: ray.left,
                width: ray.width,
                "--r": `${ray.rotate}deg`,
                "--o": ray.opacity,
                animationDuration: `${ray.dur}s`,
                animationDelay: `${ray.delay}s`,
              } as CSSProperties
            }
          />
        ))}
      </div>

      {/* Rippling water surface */}
      <div className="uw-surface">
        <div className="uw-ripples uw-ripples--a">
          <Ripples id={`${uid}-ra`} seed={7} baseFrequency="0.0045 0.045" />
        </div>
        <div className="uw-ripples uw-ripples--b">
          <Ripples id={`${uid}-rb`} seed={23} baseFrequency="0.006 0.06" />
        </div>
      </div>

      {/* Reef silhouettes, off to the sides */}
      <div className="uw-reef uw-reef--right">
        <Reef />
      </div>
      <div className="uw-reef uw-reef--left">
        <Reef />
      </div>

      {/* Rising bubbles */}
      <div className="uw-bubbles">
        {BUBBLES.map((b, i) => (
          <span
            key={i}
            className="uw-bubble-track"
            style={
              {
                left: b.x,
                width: b.size,
                "--rest": b.rest,
                animationDuration: `${b.dur}s`,
                animationDelay: `${b.delay}s`,
              } as CSSProperties
            }
          >
            <span
              className="uw-bubble"
              style={
                {
                  width: b.size,
                  height: b.size,
                  "--drift": `${b.drift}px`,
                  animationDuration: `${b.sway}s`,
                  animationDelay: `${b.delay / 3}s`,
                } as CSSProperties
              }
            />
          </span>
        ))}
      </div>
    </div>
  );
}
