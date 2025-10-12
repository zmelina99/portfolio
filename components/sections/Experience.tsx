"use client";

import { Card } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { useLanguage } from "@/components/lang/LanguageProvider";

export default function Experience() {
  const { t } = useLanguage();
  
  const experiences = [
    {
      company: "Hive Power",
      roleKey: "experience.hive.role",
      typeKey: "experience.fullTime",
      durationKey: "experience.hive.duration",
      periodKey: "experience.hive.period",
      locationKey: "experience.remote",
      logo: "🔶",
      achievementKeys: [
        "experience.hive.achievement1",
        "experience.hive.achievement2",
        "experience.hive.achievement3",
        "experience.hive.achievement4"
      ],
      skills: ["React", "TypeScript", "Nx", "Ionic", "Capacitor", "UI Components"]
    },
    {
      company: "ClearMix",
      roleKey: "experience.clearmix.role",
      typeKey: "experience.fullTime",
      durationKey: "experience.clearmix.duration",
      periodKey: "experience.clearmix.period",
      locationKey: "experience.remote",
      logo: "🎬",
      achievementKeys: [
        "experience.clearmix.achievement1",
        "experience.clearmix.achievement2",
        "experience.clearmix.achievement3",
        "experience.clearmix.achievement4"
      ],
      skills: ["Next.js", "React", "Google Maps API", "Video Processing", "Unit Testing"]
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Bubbles */}
      <div className="bubbles opacity-20">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader 
          title={t("experience.title")}
          description={t("experience.description")}
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 border border-[#E2E8F0] !bg-white text-[#1E293B] rounded-2xl group"
            >
              <div className="relative">
                {/* Subtle decorative bubbles */}
                <div className="absolute top-4 right-4 opacity-10 pointer-events-none">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#009293] animate-pulse"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#009293] animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                    <div className="w-2 h-2 rounded-full bg-[#009293] animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 opacity-8 pointer-events-none">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#009293] animate-pulse" style={{ animationDelay: '0.9s' }}></div>
                </div>
                
                {/* Timeline connector */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-[52px] bottom-0 w-0.5 h-8 bg-gradient-to-b from-[#009293] to-transparent translate-y-full z-10" />
                )}

                <div className="p-6 sm:p-8">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6">
                    {/* Logo */}
                    <div className="flex-shrink-0 w-20 h-20 rounded-xl bg-gradient-to-br from-[#009293] to-[#00787A] flex items-center justify-center text-4xl shadow-lg group-hover:scale-105 transition-transform duration-300">
                      {exp.logo}
                    </div>

                    {/* Title and meta */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <h3 className="text-2xl font-medium text-[#1E293B] mb-1">
                            {t(exp.roleKey)}
                          </h3>
                          <p className="text-xl text-[#009293] font-medium">
                            {exp.company}
                          </p>
                        </div>
                        <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-[#009293] bg-[#009293]/5 border border-[#009293]/20 rounded-md">
                          {t(exp.typeKey)}
                        </span>
                      </div>

                      {/* Meta information */}
                      <div className="flex flex-wrap gap-4 text-sm text-[#475569]">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4 text-[#009293]" />
                          <span>{t(exp.durationKey)}</span>
                          <span className="text-[#009293]">• {t(exp.periodKey)}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="h-4 w-4 text-[#009293]" />
                          <span>{t(exp.locationKey)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-3 mb-6">
                    {exp.achievementKeys.map((achievementKey, achIndex) => (
                      <div
                        key={achIndex}
                        className="flex gap-3 group/item hover:translate-x-1 transition-transform duration-200"
                      >
                        <div className="flex-shrink-0 mt-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#009293] group-hover/item:bg-[#F8A58E] transition-colors" />
                        </div>
                        <p className="text-[#1E293B] leading-relaxed text-sm" style={{ lineHeight: '1.8' }}>
                          {t(achievementKey)}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Skills */}
                  <div className="border-t border-[#E2E8F0] pt-4">
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-[#475569] bg-[#F9FAFB] border border-[#E2E8F0] rounded-md hover:border-[#009293]/30 hover:bg-[#009293]/5 transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="mt-16 flex justify-center">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#009293] to-transparent opacity-60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
