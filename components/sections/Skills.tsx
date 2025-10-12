"use client";

import { Badge } from "@/components/ui/badge";
import { Globe } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { useLanguage } from "@/components/lang/LanguageProvider";

export default function Skills() {
  const { t } = useLanguage();
  
  const skillGroups = [
    {
      emoji: "🧭",
      titleKey: "skills.frontend.title",
      subtitleKey: "skills.frontend.subtitle",
      technologies: ["React", "Next.js", "TypeScript", "Ionic", "Capacitor", "Nx", "Redux", "SCSS", "Design Systems", "Component Libraries"],
    },
    {
      emoji: "⚙️",
      titleKey: "skills.backend.title",
      subtitleKey: "skills.backend.subtitle",
      technologies: ["Node.js", "Express", "PostgreSQL", "Firebase", "REST APIs", "CI/CD", "GitHub", "Jest", "Cypress"],
    },
  ];

  return (
    <section id="skills" className="section-major relative overflow-hidden">
      {/* Bubbles */}
      <div className="bubbles opacity-12">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <SectionHeader 
          title={t("skills.title")}
          description={t("skills.description")}
        />

        {/* Skills Groups */}
        <div className="space-y-8 mb-12">
          {skillGroups.map((group, index) => (
            <div key={index}>
              {/* Header */}
              <div className="mb-4">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="text-lg">{group.emoji}</span>
                  <h3 className="text-base font-medium text-[#E6EDF2]">
                    {t(group.titleKey)}
                  </h3>
                </div>
                <p className="text-sm text-[#7B8A9A] leading-relaxed">
                  {t(group.subtitleKey)}
                </p>
              </div>

              {/* Technologies Grid */}
              <div className="flex flex-wrap gap-2">
                {group.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Elegant Divider */}
        <div className="flex items-center justify-center my-8">
          <div className="h-px w-full max-w-xs bg-gradient-to-r from-transparent via-[rgba(20,184,166,0.20)] to-transparent" />
        </div>

        {/* Languages Section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 mb-3">
            <Globe className="h-4 w-4 text-[#009293]" />
            <h3 className="text-m font-medium text-[#E6EDF2]">{t("skills.languages.title")}</h3>
          </div>
          
          <p className="text-sm text-[#7B8A9A] leading-relaxed">
            {t("skills.languages.content")}
          </p>
        </div>
      </div>
    </section>
  );
}
