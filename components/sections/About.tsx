"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { useLanguage } from "@/components/lang/LanguageProvider";

// Soft local light; the page-wide bubbles already rise along the outer margins.
const RAYS = [
  { left: "52%", width: 120, rotate: 14, dur: 20, delay: -6, opacity: 0.38 },
  { left: "70%", width: 80, rotate: -6, dur: 24, delay: -14, opacity: 0.3 },
  { left: "86%", width: 110, rotate: -16, dur: 18, delay: -3, opacity: 0.34 },
];

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" aria-labelledby="about-title" className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="uw-section-glow absolute inset-0" />
        <div className="uw-rays uw-rays--local">
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
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 lg:px-8">
        <div>
          <p className="font-serif text-lg italic text-[var(--uw-ink)] sm:text-xl">{t("about.title")}</p>
          <h2
            id="about-title"
            className="mt-4 font-serif text-4xl font-normal leading-[1.06] tracking-[-0.015em] text-[var(--uw-ink)] sm:text-5xl lg:text-[3.5rem]"
          >
            {t("about.headline")}
          </h2>
          <div className="mt-7 max-w-md space-y-5 text-lg leading-relaxed text-[var(--uw-body)]">
            <p>{t("about.body1")}</p>
            <p>{t("about.body2")}</p>
          </div>
        </div>

        <figure>
          {/* Phones: a 4:5 crop that moves in on the face and keeps some water.
              Larger screens: the full 4:3 frame with the bubble trail. */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-[8px] shadow-[0_28px_50px_-26px_rgba(6,40,46,0.55)] sm:aspect-[4/3]">
            <Image
              src="/about-dive.jpg"
              alt={t("about.photoAlt")}
              fill
              quality={85}
              sizes="(min-width: 1152px) 640px, (min-width: 1024px) 56vw, 100vw"
              className="object-cover object-[64%_50%] sm:object-center"
            />
          </div>
          <figcaption className="mt-3 font-serif text-sm italic text-[var(--uw-muted)]">
            {t("about.caption")}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
