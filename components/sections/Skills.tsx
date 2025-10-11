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

  return (
    <section id="skills" className="py-8 relative overflow-hidden">
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
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-medium mb-4 text-[#E6EDF2]">
            Skills & Technologies
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mx-auto mb-4" style={{ lineHeight: '1.8' }}>
            I specialize in scalable architectures, clean design systems, and efficient developer workflows.
          </p>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#009293]/40 to-transparent mx-auto" />
        </div>

        {/* Skills Groups */}
        <div className="max-w-3xl mx-auto space-y-6 mb-10">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Card */}
              <div className="p-6 bg-transparent border border-[#0F2330]/60 rounded-2xl hover:border-[#009293]/40 hover:bg-[#F8A58E]/5 transition-all duration-300">
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xl">{group.emoji}</span>
                    <h3 className="text-base font-medium text-[#009293]">
                      {group.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-400" style={{ lineHeight: '1.8' }}>
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
                          className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-[#E6EDF2] bg-transparent border border-[#0F2330]/60 rounded-md hover:bg-[#F8A58E]/10 hover:border-[#F8A58E]/40 transition-all duration-300 ease-out"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Subtle depth shadow */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A1720]/5 rounded-2xl -z-10 blur-sm" />
            </div>
          ))}
        </div>

        {/* Elegant Divider */}
        <div className="flex items-center justify-center my-4">
          <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-[#009293]/20 to-transparent" />
        </div>

        {/* Languages Section */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2.5 mb-3">
            <Globe className="h-4 w-4 text-[#009293]" />
            <h3 className="text-sm font-medium text-[#E6EDF2]">Languages</h3>
          </div>
          
          <p className="text-sm text-slate-300" style={{ lineHeight: '1.8' }}>
            🇪🇸 Spanish (Native) · 🇬🇧 English (C2) · 🇫🇷 French (B1)
          </p>
        </div>
      </div>
    </section>
  );
}
