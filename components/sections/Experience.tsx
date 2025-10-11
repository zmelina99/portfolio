import { Card } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "Hive Power",
      role: "Frontend Developer",
      type: "Full-time",
      duration: "Feb 2023 - Present",
      period: "2 yrs 9 mos",
      location: "Remote",
      logo: "🔶",
      achievements: [
        "Build and maintain multiple web and mobile applications within a large-scale Nx monorepo, using React, Ionic/Capacitor, and TypeScript.",
        "Develop and refactor reusable, modular UI components, ensuring design consistency and scalability across projects.",
        "Collaborate with cross-functional teams to improve developer experience, optimize performance, and reduce technical debt.",
        "Work in a fast-paced, startup-like environment with shifting priorities, tight deadlines, and high autonomy."
      ],
      skills: ["React", "TypeScript", "Nx", "Ionic", "Capacitor", "UI Components"]
    },
    {
      company: "ClearMix",
      role: "Frontend Engineer",
      type: "Full-time",
      duration: "Jul 2021 - Dec 2022",
      period: "1 yr 6 mos",
      location: "Remote",
      logo: "🎬",
      achievements: [
        "Frontend lead for ClearMix Logistics platform. Planned and engineered a scheduling app where the user can schedule a recording time and select a location to receive a studio-in-a-box. This is a NextJs project which was handled with an integration of the Google Maps API.",
        "Architected, developed, and maintained ClearMix's flagship virtual studio application, facilitating remote communication and high-quality video recordings stored locally and uploaded to the cloud in real-time – lowering internal costs and increasing the company's quarter-over-quarter revenue.",
        "Contributed to the development of the ClearMix Intros feature, allowing users to upload content to the platform and seamlessly preface it with personalized video introductions as well as track external engagement – creating product lead growth for ClearMix and driving both increased interest and new business for the company.",
        "Participated in routine peer reviews to advocate for consistent code quality spanning the stack. Wrote and maintained unit tests for frontend functionality across the platform."
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
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-medium mb-4 text-[#E6EDF2]">
            Work Experience
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-[#009293] to-[#00787A] opacity-40 mx-auto rounded-full mb-4" />
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
            Building impactful solutions and leading frontend development
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl hover:shadow-black/20 transition-all duration-300 border border-white/15 bg-[#112B3C]/60 backdrop-blur-sm rounded-2xl group"
            >
              <div className="relative">
                {/* Timeline connector */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-[52px] bottom-0 w-0.5 h-8 bg-gradient-to-b from-[#009293] to-transparent translate-y-full z-10" />
                )}

                <div className="p-6 sm:p-8">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6">
                    {/* Logo */}
                    <div className="flex-shrink-0 w-20 h-20 rounded-xl bg-gradient-to-br from-[#009293] to-[#00787A] opacity-80 flex items-center justify-center text-4xl shadow-lg group-hover:scale-105 transition-transform duration-300">
                      {exp.logo}
                    </div>

                    {/* Title and meta */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <h3 className="text-2xl font-medium text-[#E6EDF2] mb-1">
                            {exp.role}
                          </h3>
                          <p className="text-xl text-[#009293] font-medium">
                            {exp.company}
                          </p>
                        </div>
                        <span className="chip-outline text-xs px-3 py-1">
                          {exp.type}
                        </span>
                      </div>

                      {/* Meta information */}
                      <div className="flex flex-wrap gap-4 text-sm text-[#94A3B8]">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4 text-[#009293]" />
                          <span>{exp.duration}</span>
                          <span className="text-[#009293]">• {exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="h-4 w-4 text-[#009293]" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-3 mb-6">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div
                        key={achIndex}
                        className="flex gap-3 group/item hover:translate-x-1 transition-transform duration-200"
                      >
                        <div className="flex-shrink-0 mt-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#009293] group-hover/item:bg-[#F8A58E] transition-colors" />
                        </div>
                        <p className="text-[#E6EDF2] leading-relaxed">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Skills */}
                  <div className="border-t border-white/10 pt-4">
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="chip-outline text-xs py-1.5 px-3"
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
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#009293] to-transparent opacity-60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
