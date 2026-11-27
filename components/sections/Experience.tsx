"use client";

import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/lang/LanguageProvider";
import HiveGrowthIllustration from "@/components/experience/HiveGrowthIllustration";
import ClearMixIllustration from "@/components/experience/ClearMixIllustration";

// A few local sun shafts so the light carries on from Case Studies.
const RAYS = [
  { left: "8%", width: 110, rotate: 18, dur: 19, delay: -4, opacity: 0.4 },
  { left: "62%", width: 80, rotate: -10, dur: 23, delay: -12, opacity: 0.32 },
  { left: "78%", width: 130, rotate: -18, dur: 21, delay: -8, opacity: 0.36 },
];

function Meta({ company, dates }: { company: string; dates: string }) {
  return (
    <p className="uw-label text-[0.75rem] text-[var(--uw-ink)]">
      {company} <span aria-hidden="true">·</span>
      <span className="sr-only">,</span> <time>{dates}</time>
    </p>
  );
}

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" aria-labelledby="experience-title" className="relative overflow-hidden py-20 sm:py-28">
      {/* Atmosphere: soft filtered light and sea-glass / lavender tones at the edges */}
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
          id="experience-title"
          className="max-w-3xl font-serif text-5xl font-normal leading-[1.02] tracking-[-0.02em] text-[var(--uw-ink)] sm:text-7xl lg:text-[5.5rem]"
        >
          {t("experience.heading")}
        </h2>

        {/* Hive Power: the lead story */}
        <article
          aria-labelledby="xp-hive-title"
          className="mt-14 grid items-center gap-10 sm:mt-20 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14"
        >
          <div>
            <Meta company="Hive Power" dates={t("experience.hive.duration")} />
            <h3
              id="xp-hive-title"
              className="mt-4 font-serif text-4xl font-normal leading-[1.08] tracking-[-0.015em] text-[var(--uw-ink)] sm:text-5xl"
            >
              {t("experience.hive.headline")}
            </h3>
            <p className="mt-5 text-base font-medium text-[var(--uw-ink)] sm:text-lg">{t("experience.hive.role")}</p>
            <p className="mt-3 max-w-md text-lg leading-relaxed text-[var(--uw-body)]">{t("experience.hive.copy")}</p>
            <a href="#cs-hive" className="uw-link mt-7 text-base sm:text-lg">
              {t("experience.hive.link")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <HiveGrowthIllustration />
        </article>

        <hr className="my-16 border-0 border-t border-[var(--uw-line)] sm:my-20" />

        {/* ClearMix: shorter, reversed */}
        <article
          aria-labelledby="xp-clearmix-title"
          className="grid items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-14"
        >
          <div className="lg:order-last">
            <Meta company="ClearMix" dates={t("experience.clearmix.duration")} />
            <h3
              id="xp-clearmix-title"
              className="mt-4 font-serif text-3xl font-normal leading-tight tracking-[-0.01em] text-[var(--uw-ink)] sm:text-4xl"
            >
              {t("experience.clearmix.headline")}
            </h3>
            <p className="mt-4 text-base font-medium text-[var(--uw-ink)] sm:text-lg">{t("experience.clearmix.role")}</p>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-[var(--uw-body)] sm:text-lg">
              {t("experience.clearmix.copy")}
            </p>
          </div>
          <ClearMixIllustration />
        </article>
      </div>
    </section>
  );
}
