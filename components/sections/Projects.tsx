import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

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
    <section id="projects" className="section-major relative overflow-hidden">
      {/* Bubbles */}
      <div className="bubbles opacity-20">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>

      <div className="container-standard relative z-10">
        <SectionHeader 
          title="Key Projects"
          description="Notable applications I've built and contributed to"
        />

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Project Image Placeholder */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} opacity-80 flex items-center justify-center`}>
                <div className="text-white text-lg font-medium opacity-90 px-4 text-center">
                  {project.title}
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-lg text-[#E6EDF2]">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2 text-[#A7B3C2] leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              {(project.github || project.demo) && (
                <CardFooter className="gap-2">
                  {project.github && (
                    <Button variant="outline" size="sm" className="flex-1" asChild>
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
                    <Button size="sm" className="flex-1 bg-[#009293] hover:bg-[#00787A] text-white" asChild>
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
