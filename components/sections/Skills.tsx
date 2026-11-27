"use client";

import type { CSSProperties } from "react";
import { useLanguage } from "@/components/lang/LanguageProvider";
import Image from "next/image";

// One watercolour strip spans the three columns on desktop; on phones each
// stage gets its own crop of the same artwork above its text.
const STAGES = [
  { key: "stage1", image: "/skills/workflow-stage-1.jpg" },
  { key: "stage2", image: "/skills/workflow-stage-2.jpg" },
  { key: "stage3", image: "/skills/workflow-stage-3.jpg" },
] as const;

// Soft filtered light; the page-wide bubbles already rise along the outer margins.
const RAYS = [
  { left: "10%", width: 110, rotate: 16, dur: 21, delay: -7, opacity: 0.34 },
  { left: "58%", width: 90, rotate: -6, dur: 24, delay: -13, opacity: 0.28 },
  { left: "82%", width: 120, rotate: -15, dur: 19, delay: -4, opacity: 0.32 },
];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" aria-labelledby="skills-title" className="relative overflow-hidden py-20 sm:py-28">
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

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="skills-title"
          className="max-w-4xl font-serif text-5xl font-normal leading-[1.02] tracking-[-0.02em] text-[var(--uw-ink)] sm:text-7xl lg:text-[5.5rem]"
        >
          {t("skills.heading")}
        </h2>

        <div className="relative mt-14 hidden aspect-[2000/667] overflow-hidden rounded-[8px] sm:mt-20 md:block">
          <Image
            src="/skills/workflow-strip.webp"
            alt={t("skills.artwork.alt")}
            fill
            sizes="(min-width: 1152px) 1088px, 100vw"
            className="object-cover"
          />
        </div>

        <ol className="mt-14 grid gap-14 sm:mt-20 md:mt-8 md:grid-cols-3 md:gap-8 lg:gap-10">
          {STAGES.map(({ key, image }) => (
            <li key={key} className="flex flex-col">
              <div className="relative aspect-[680/667] overflow-hidden rounded-[8px] md:hidden">
                <Image src={image} alt={t(`skills.${key}.imageAlt`)} fill sizes="100vw" className="object-cover" />
              </div>
              <h3 className="mt-6 md:mt-0 font-serif text-3xl font-normal leading-tight tracking-[-0.01em] text-[var(--uw-ink)] lg:text-[2rem]">
                {t(`skills.${key}.title`)}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[var(--uw-body)] sm:text-lg">{t(`skills.${key}.copy`)}</p>
              <p className="mt-3 text-sm text-[var(--uw-muted)]">{t(`skills.${key}.tools`)}</p>
            </li>
          ))}
        </ol>

        <p className="mt-16 border-t border-[var(--uw-line)] pt-6 text-sm text-[var(--uw-body)] sm:text-base">
          <span className="uw-label mr-3 text-[var(--uw-ink)]">{t("skills.languages.title")}</span>
          {t("skills.languages.content")}
        </p>
      </div>
    </section>
  );
}
