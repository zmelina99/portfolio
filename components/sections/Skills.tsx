import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "shadcn/ui",
        "Redux",
        "Zustand",
      ],
      color: "from-[#a8dadc] to-[#c4b5fd]",
    },
    {
      category: "Backend",
      skills: [
        "Node.js",
        "Express",
        "Python",
        "Django",
        "PostgreSQL",
        "MongoDB",
        "REST APIs",
        "GraphQL",
        "Firebase",
      ],
      color: "from-[#c4b5fd] to-[#f1c6d9]",
    },
    {
      category: "Tools & Others",
      skills: [
        "Git",
        "GitHub",
        "Docker",
        "AWS",
        "Vercel",
        "Figma",
        "VS Code",
        "Jest",
        "CI/CD",
      ],
      color: "from-[#ffa6b8] to-[#b8e6d5]",
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
    <section id="skills" className="py-16 relative overflow-hidden">
      {/* Bubbles */}
      <div className="bubbles opacity-30">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-[#faf7f5]">
            Skills & Technologies
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#f1c6d9] via-[#c4b5fd] to-[#a8dadc] mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-5 hover:shadow-lg hover:shadow-[#f1c6d9]/20 transition-all duration-300 border-[#a8dadc]/20 bg-card/80 backdrop-blur-sm"
            >
              <div className="mb-4">
                <div className={`inline-block bg-gradient-to-r ${category.color} px-3 py-2 rounded-lg mb-3`}>
                  <h3 className="text-lg font-bold text-[#faf7f5]">
                    {category.category}
                  </h3>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="text-xs py-1 px-2 hover:bg-[#f1c6d9]/20 transition-colors border-[#f1c6d9]/30"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Languages Section */}
        <div className="max-w-3xl mx-auto">
          <Card className="p-6 border-[#a8dadc]/20 bg-card/80 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Globe className="h-5 w-5 text-[#b8e0e5]" />
              <h3 className="text-xl font-bold text-[#faf7f5]">Languages</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {languages.map((lang, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-4 rounded-lg border border-[#b8e0e5]/20 hover:border-[#f1c6d9]/40 transition-all duration-300 hover:bg-[#f1c6d9]/5"
                >
                  <span className="text-3xl mb-2">{lang.icon}</span>
                  <h4 className="font-semibold text-[#fdfbf9] mb-1">{lang.language}</h4>
                  <p className="text-sm text-muted-foreground">{lang.level}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

