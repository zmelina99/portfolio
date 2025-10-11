import { Card } from "@/components/ui/card";
import { Globe } from "lucide-react";

export default function Skills() {
  const skillGroups = [
    {
      emoji: "🧭",
      title: "Frontend & Systems",
      subtitle: "Building modular architectures and design systems for web and mobile.",
      technologies: [
        ["React", "Next.js", "TypeScript", "Ionic / Capacitor"],
        ["Nx", "Redux", "SCSS", "Design Systems", "Component Libraries"],
      ],
    },
    {
      emoji: "⚙️",
      title: "Backend & Tooling",
      subtitle: "Creating reliable APIs, testing frameworks, and efficient developer workflows.",
      technologies: [
        ["Node.js", "Express", "PostgreSQL", "Firebase"],
        ["REST APIs", "CI/CD", "GitHub", "Jest", "Cypress"],
      ],
    },
  ];

  const languages = [
    {
      language: "Spanish",
      level: "Native",
      icon: "🇪🇸",
    },
    {
      language: "English",
      level: "C2 - Bilingual",
      icon: "🇬🇧",
    },
    {
      language: "French",
      level: "B1 - Intermediate",
      icon: "🇫🇷",
    },
  ];

  return (
    <section id="skills" className="py-12 relative overflow-hidden">
      {/* Bubbles */}
      <div className="bubbles opacity-20">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold mb-4 text-slate-100">
            Skills & Technologies
          </h2>
          <p className="text-slate-400 text-base leading-relaxed max-w-2xl mx-auto mb-4">
            I specialize in scalable architectures, clean design systems, and efficient developer workflows.
          </p>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#009293]/40 to-transparent mx-auto" />
        </div>

        {/* Skills Groups */}
        <div className="max-w-3xl mx-auto space-y-8 mb-14">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Card */}
              <div className="p-8 bg-transparent border border-slate-700/30 rounded-2xl hover:border-teal-700/40 transition-all duration-300">
                {/* Header */}
                <div className="mb-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{group.emoji}</span>
                    <h3 className="text-lg font-semibold text-teal-400">
                      {group.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed" style={{ lineHeight: '1.75' }}>
                    {group.subtitle}
                  </p>
                </div>

                {/* Technologies Grid */}
                <div className="space-y-3">
                  {group.technologies.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex flex-wrap gap-3">
                      {row.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-slate-200 bg-transparent border border-slate-700/40 rounded-md hover:bg-teal-500/10 hover:border-teal-700/50 transition-all duration-300 ease-out"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Subtle depth shadow */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/5 rounded-2xl -z-10 blur-sm" />
            </div>
          ))}
        </div>

        {/* Elegant Divider */}
        <div className="flex items-center justify-center my-10">
          <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-[#F5EFE7]/15 to-transparent" />
        </div>

        {/* Languages Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2.5 mb-2">
              <Globe className="h-4 w-4 text-teal-400" />
              <h3 className="text-lg font-semibold text-slate-100">Languages</h3>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {languages.map((lang, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-5 rounded-xl border border-slate-700/30 hover:border-teal-700/40 transition-all duration-300 hover:bg-teal-500/5 bg-transparent backdrop-blur-sm"
              >
                <span className="text-2xl mb-3">{lang.icon}</span>
                <h4 className="font-medium text-slate-200 text-sm mb-1">
                  {lang.language}
                </h4>
                <p className="text-xs text-slate-400" style={{ lineHeight: '1.75' }}>
                  {lang.level}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
