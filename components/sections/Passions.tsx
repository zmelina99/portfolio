"use client";

import Image from "next/image";
import { useLanguage } from "@/components/lang/LanguageProvider";
import LiftVideo from "@/components/beyond-work/LiftVideo";

const ENTRIES = [
  { key: "skiing", src: "/skiing.JPG", position: "object-[50%_45%]" },
  { key: "panchin", src: "/panchin.PNG", position: "object-[55%_40%]" },
] as const;

export default function Passions() {
  const { t } = useLanguage();

  return (
    <section id="passions" aria-labelledby="passions-title" className="relative overflow-hidden py-20 sm:py-28">
      <div className="uw-section-glow pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-x-16 lg:px-8 [grid-template-areas:'head'_'video'_'more'] lg:[grid-template-areas:'video_head'_'video_more']">
        <div className="[grid-area:head] lg:self-end">
          <h2 id="passions-title" className="font-serif text-lg italic text-[var(--uw-ink)] sm:text-xl">
            {t("passions.title")}
          </h2>
          <h3 className="mt-4 font-serif text-5xl font-normal leading-[1.02] tracking-[-0.02em] text-[var(--uw-ink)] sm:text-6xl lg:text-7xl">
            {t("passions.lifting")}
          </h3>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-[var(--uw-body)]">{t("passions.lifting.copy")}</p>
        </div>

        <div className="[grid-area:video] mx-auto w-full max-w-[22rem] lg:mx-0 lg:max-w-none">
          <LiftVideo />
        </div>

        <ul className="[grid-area:more] grid grid-cols-2 gap-5 border-t border-[var(--uw-line)] pt-8 sm:gap-8 lg:self-start">
          {ENTRIES.map((entry) => (
            <li key={entry.key}>
              <figure>
                <div className="relative aspect-[4/5] overflow-hidden rounded-[8px]">
                  <Image
                    src={entry.src}
                    alt={t(`passions.${entry.key}.alt`)}
                    fill
                    sizes="(min-width: 1024px) 300px, 45vw"
                    className={`object-cover ${entry.position}`}
                  />
                </div>
                <figcaption className="mt-3">
                  <span className="block font-serif text-lg text-[var(--uw-ink)] sm:text-xl">
                    {t(`passions.${entry.key}.heading`)}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-[var(--uw-body)]">
                    {t(`passions.${entry.key}.caption`)}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
