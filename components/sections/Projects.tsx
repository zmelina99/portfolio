import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
      image: "bg-gradient-to-br from-[#c4b5fd] to-[#a8dadc]",
    },
    {
      title: "ClearMix Logistics Platform",
      description: "Scheduling application with Google Maps integration for booking studio equipment delivery locations and times.",
      tags: ["Next.js", "Google Maps API", "TypeScript", "Scheduling"],
      github: "",
      demo: "",
      image: "bg-gradient-to-br from-[#f1c6d9] to-[#ffa6b8]",
    },
    {
      title: "Hive Power Applications",
      description: "Multiple web and mobile apps in a large-scale Nx monorepo with reusable UI components and cross-platform support.",
      tags: ["React", "Ionic", "Capacitor", "Nx Monorepo", "TypeScript"],
      github: "",
      demo: "",
      image: "bg-gradient-to-br from-[#a8dadc] to-[#b8e6d5]",
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Bubbles */}
      <div className="bubbles opacity-35">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#faf7f5]">
            Key Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#f1c6d9] via-[#c4b5fd] to-[#a8dadc] mx-auto rounded-full mb-4" />
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Notable applications I've built and contributed to
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl hover:shadow-[#f1c6d9]/20 transition-all duration-300 hover:-translate-y-2 flex flex-col border-[#a8dadc]/20 bg-card/80 backdrop-blur-sm"
            >
              {/* Project Image Placeholder */}
              <div className={`h-48 ${project.image} flex items-center justify-center`}>
                <div className="text-white text-xl font-semibold opacity-80">
                  {project.title}
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
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
                    <Button size="sm" className="flex-1" asChild>
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

