"use client";

import Image from "next/image";
import { useLanguage } from "@/components/lang/LanguageProvider";

/**
 * Real screenshot of the Bilingue coaching page (working preview, EN),
 * cropped 4:3 around the hero so it reads at column size. Bilingue's own
 * cream-and-ink styling shows inside the portfolio's sea-glass panel.
 */
export default function BilingueVisual() {
  const { t } = useLanguage();
  return (
    <figure className="uw-panel h-full">
      <figcaption className="uw-label px-5 pt-4">{t("caseStudies.bilingue.visualLabel")}</figcaption>
      <div className="relative mt-2 aspect-[4/3] w-full border-t border-[rgba(10,44,53,0.12)] bg-[#F7F5F1]">
        <Image
          src="/case-studies/bilingue-coaching-hero.jpg"
          alt={t("caseStudies.bilingue.visualAlt")}
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    </figure>
  );
}
