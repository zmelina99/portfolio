import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "ClearMix Virtual Studio",
      description: "Flagship application enabling remote video recording and communication with real-time cloud uploads and local storage.",
      tags: ["React", "Video Processing", "Cloud Integration", "WebRTC"],
      github: "",
      demo: "",
      gradient: "from-[#009293] to-[#00787A]",
    },
    {
      title: "ClearMix Logistics Platform",
      description: "Scheduling application with Google Maps integration for booking studio equipment delivery locations and times.",
      tags: ["Next.js", "Google Maps API", "TypeScript", "Scheduling"],
      github: "",
      demo: "",
      gradient: "from-[#00787A] to-[#005E5F]",
    },
    {
      title: "Hive Power Applications",
      description: "Multiple web and mobile apps in a large-scale Nx monorepo with reusable UI components and cross-platform support.",
      tags: ["React", "Ionic", "Capacitor", "Nx Monorepo", "TypeScript"],
      github: "",
      demo: "",
      gradient: "from-[#009293] to-[#4DCCCC]",
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
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
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-medium mb-4 text-[#E6EDF2]">
            Key Projects
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-[#009293] to-[#00787A] opacity-40 mx-auto rounded-full mb-4" />
          <p className="text-base text-[#94A3B8] max-w-2xl mx-auto">
            Notable applications I've built and contributed to
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl hover:shadow-black/20 transition-all duration-300 hover:-translate-y-2 flex flex-col border border-white/15 bg-[#112B3C]/60 backdrop-blur-sm rounded-2xl"
            >
              {/* Project Image Placeholder */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} opacity-80 flex items-center justify-center`}>
                <div className="text-white text-xl font-medium opacity-90 px-4 text-center">
                  {project.title}
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-[#E6EDF2]">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2 text-[#94A3B8]">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="chip-outline text-xs py-1 px-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>

              {(project.github || project.demo) && (
                <CardFooter className="gap-2">
                  {project.github && (
                    <Button variant="outline" size="sm" className="flex-1 border-white/15 hover:bg-[#009293]/10 hover:border-[#009293]/40" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button size="sm" className="flex-1 bg-[#009293] hover:bg-[#F8A58E] text-white transition-colors duration-300" asChild>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
