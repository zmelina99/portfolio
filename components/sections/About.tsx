"use client";

import { Card } from "@/components/ui/card";
import { Code, Palette, Rocket, Users } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { useLanguage } from "@/components/lang/LanguageProvider";

export default function About() {
  const { t } = useLanguage();
  
  const highlights = [
    {
      icon: Code,
      titleKey: "about.highlight1.title",
      descKey: "about.highlight1.desc",
    },
    {
      icon: Palette,
      titleKey: "about.highlight2.title",
      descKey: "about.highlight2.desc",
    },
    {
      icon: Rocket,
      titleKey: "about.highlight3.title",
      descKey: "about.highlight3.desc",
    },
    {
      icon: Users,
      titleKey: "about.highlight4.title",
      descKey: "about.highlight4.desc",
    },
  ];

  return (
    <section id="about" className="section-major relative overflow-hidden">
      {/* Bubbles */}
      <div className="bubbles opacity-20">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>

      <div className="container-standard relative z-10">
        <SectionHeader title={t("about.title")} />

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left side - Description */}
          <div className="space-y-5 max-w-2xl">
            <p className="text-base text-[#A7B3C2] leading-relaxed">
              {t("about.intro")}
            </p>
            <p className="text-lg text-[#A7B3C2] leading-relaxed mb-1 font-bold">
              {t("about.howIWork")}
            </p>
            <ul className="space-y-2 text-sm text-[#A7B3C2]">
              <li className="list-disc list-inside">
                {t("about.work1")}
              </li>
              <li className="list-disc list-inside">
                {t("about.work2")}
              </li>
              <li className="list-disc list-inside">
                {t("about.work3")}
              </li>
              <li className="list-disc list-inside">
                {t("about.work4")}
              </li>
            </ul>

            <div className="pt-3">
              <p className="text-lg text-[#A7B3C2] leading-relaxed mb-1 font-bold">
                {t("about.quickFacts")}
              </p>
              <ul className="space-y-2 text-sm text-[#A7B3C2]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#009293] rounded-full" />
                  {t("about.fact1")}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#009293] rounded-full" />
                  {t("about.fact2")}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#009293] rounded-full" />
                  {t("about.fact3")}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#009293] rounded-full" />
                  {t("about.fact4")}
                </li>
              </ul>
            </div>
          </div>

          {/* Right side - Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <highlight.icon className="h-8 w-8 text-[#009293] mb-0" />
                <h3 className="font-medium text-base mb-0 text-[#E6EDF2]">
                  {t(highlight.titleKey)}
                </h3>
                <p className="text-sm text-[#A7B3C2] leading-relaxed">
                  {t(highlight.descKey)}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
