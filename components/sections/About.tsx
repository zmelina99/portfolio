import { Card } from "@/components/ui/card";
import { Code, Palette, Rocket, Users } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description:
        "I care about writing code that’s clear, efficient, and built to last.",
    },
    {
      icon: Palette,
      title: "Design Focus",
      description:
        "Good design makes everything easier — I aim for interfaces that feel natural and effortless.",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description:
        "I move fast without cutting corners, focusing on impact and quality.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "I enjoy leading through teamwork — helping others grow while building great products together.",
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Bubbles */}
      <div className="bubbles opacity-30">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-[#faf7f5]">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#f1c6d9] via-[#c4b5fd] to-[#a8dadc] mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Description */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I’m a Swiss-Argentinian frontend engineer passionate about
              building clean, intuitive interfaces for fast-moving, remote
              teams. Since 2021, I’ve worked with startups — including a
              YC-backed media company and a Swiss energy scale-up — developing
              React, TypeScript, and Next.js applications used by thousands. I
              focus on frontend, bridging design and performance while exploring
              how AI can improve development workflows. Having lived in
              Argentina, Switzerland, and Spain, I bring strong communication,
              adaptability, and a global mindset.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently at Hive Power, I build and maintain large-scale web and
              mobile apps within an Nx monorepo, collaborating across teams to
              deliver high-quality, scalable solutions.
            </p>
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-3">Quick Facts:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#f1c6d9] rounded-full animate-pulse" />
                  💼 4 years of frontend development experience
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#f1c6d9] rounded-full animate-pulse" />
                  🚀 Currently at Hive Power (2+ years)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#f1c6d9] rounded-full animate-pulse" />
                  🌍 Remote work specialist
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#f1c6d9] rounded-full animate-pulse" />
                  ⚡ Expert in React, TypeScript & Nx
                </li>
              </ul>
            </div>
          </div>

          {/* Right side - Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg hover:shadow-[#f1c6d9]/20 transition-all duration-300 hover:-translate-y-1 border-2 border-[#a8dadc]/20 bg-card/80 backdrop-blur-sm"
              >
                <highlight.icon className="h-10 w-10 text-[#f1c6d9] mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-[#faf7f5]">
                  {highlight.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {highlight.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
