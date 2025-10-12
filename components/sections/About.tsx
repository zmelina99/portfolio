import { Card } from "@/components/ui/card";
import { Code, Palette, Rocket, Users } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

export default function About() {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing code that's clear, efficient, and built to last.",
    },
    {
      icon: Palette,
      title: "Design Focus",
      description: "Creating interfaces that feel natural and effortless.",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Moving fast without cutting corners, focusing on impact.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Leading through teamwork and building great products together.",
    },
  ];

  return (
    <section id="about" className="section-major relative overflow-hidden">
      {/* Bubbles */}
      <div className="bubbles opacity-20">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>

      <div className="container-standard relative z-10">
        <SectionHeader title="About Me" />

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left side - Description */}
          <div className="space-y-5 max-w-2xl">
            <p className="text-base text-[#A7B3C2] leading-relaxed">
              I’m a frontend engineer focused on writing scalable, maintainable
              code for modern web and mobile applications. I work mainly with
              React, TypeScript, and Nx, translating design systems and product
              logic into clear, reusable components.
            </p>
            <p className=" text-lg text-[#A7B3C2] leading-relaxed mb-1 font-bold">
              How I Work:
            </p>
            <ul className="space-y-2 text-sm text-[#A7B3C2]">
              <li className="list-disc list-inside">
                Refactor and simplify complex codebases for clarity and
                performance.
              </li>
              <li className="list-disc list-inside">
                Create shared libraries that reduce duplication and speed up
                development.
              </li>
              <li className="list-disc list-inside">
                Collaborate closely with backend and design teams to keep
                systems aligned.
              </li>
              <li className="list-disc list-inside">
                Prioritize code that’s readable, predictable, and easy to
                extend.
              </li>
            </ul>

            <div className="pt-3">
              <p className="text-lg text-[#A7B3C2] leading-relaxed mb-1 font-bold">
                Quick Facts:
              </p>
              <ul className="space-y-2 text-sm text-[#A7B3C2]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#009293] rounded-full" />
                  💼 4 years of frontend development experience
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#009293] rounded-full" />
                  🚀 Currently at Hive Power (2+ years)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#009293] rounded-full" />
                  🌍 Remote work specialist
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#009293] rounded-full" />⚡
                  Expert in React, TypeScript & Nx
                </li>
              </ul>
            </div>
          </div>

          {/* Right side - Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <highlight.icon className="h-8 w-8 text-[#009293] mb-0" />
                <h3 className="font-medium text-base mb-0 text-[#E6EDF2]">
                  {highlight.title}
                </h3>
                <p className="text-sm text-[#A7B3C2] leading-relaxed">
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
