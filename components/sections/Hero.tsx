"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Subtle radial light behind heading */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,146,147,0.08)_0%,_transparent_60%)] pointer-events-none z-[1]" />

      {/* Dark overlay for mobile to improve text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1620]/60 via-[#0B1620]/40 to-transparent md:from-transparent md:via-transparent pointer-events-none z-[1]" />

      {/* Bubbles */}
      <div className="bubbles opacity-30 md:opacity-25">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="text-center space-y-5 animate-fade-in">
          {/* Greeting */}
          <div className="inline-block">
            <p className="text-base sm:text-lg text-[#A7B3C2] drop-shadow-[0_2px_4px_rgba(11,22,32,0.8)]">
              Hi there! 👋 I&apos;m
            </p>
          </div>

          {/* Name - tighter spacing */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold drop-shadow-[0_4px_8px_rgba(11,22,32,0.8)] -mt-2">
            <span className="bg-gradient-to-r from-[#009293] via-[#4DCCCC] to-[#009293] bg-clip-text text-transparent animate-shimmer">
              Meli
            </span>
          </h1>

          {/* Title - tighter spacing */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#E6EDF2] drop-shadow-[0_2px_6px_rgba(11,22,32,0.8)] -mt-1 mb-1">
            Frontend Engineer:
          </h2>
          <p className="text-base sm:text-lg text-[#A7B3C2] max-w-xl mx-auto drop-shadow-[0_2px_4px_rgba(11,22,32,0.8)] leading-relaxed pt-0 mt-0">
            Turning Complex UIs Into Clear Systems
          </p>

          {/* Description - improved readability */}
          <p className="text-base sm:text-base text-[#A7B3C2] max-w-xl mx-auto drop-shadow-[0_2px_4px_rgba(11,22,32,0.8)] leading-relaxed pt-2">
            I build performant, modular frontends using React, TypeScript, and
            Nx — creating interfaces that are stable, consistent, and easy to
            maintain.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              size="lg"
              onClick={() => scrollToSection("case-studies")}
              className="text-base px-8 group bg-[#009293] hover:bg-[#00787A] text-white border-0 shadow-lg shadow-black/20 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#14B8BA] focus-visible:ring-offset-2"
            >
              View Leadership Case Studies
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="text-base px-8 border border-[rgba(20,184,166,0.20)] text-[#E6EDF2] bg-transparent hover:bg-[#009293]/10 hover:border-[rgba(20,184,166,0.40)] backdrop-blur-sm transition-all duration-300"
            >
              Get in touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center pt-6">
            <Button
              size="icon"
              variant="ghost"
              className="rounded-full hover:bg-[#009293]/10 text-[#009293] hover:text-[#009293] hover:scale-110 transition-all duration-300"
              asChild
            >
              <a
                href="https://github.com/zmelina99"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="rounded-full hover:bg-[#009293]/10 text-[#009293] hover:text-[#009293] hover:scale-110 transition-all duration-300"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/melina-zellweger-"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="rounded-full hover:bg-[#009293]/10 text-[#009293] hover:text-[#009293] hover:scale-110 transition-all duration-300"
              asChild
            >
              <a href="mailto:zmelina@gmail.com" aria-label="Email">
                <Mail className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator with dive deeper text */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2 z-10">
        <span className="text-sm text-[#009293] font-medium tracking-wide drop-shadow-[0_2px_4px_rgba(11,22,32,0.8)]">
          Let's dive deeper
        </span>
        <ArrowDown className="h-6 w-6 text-[#009293] drop-shadow-[0_2px_4px_rgba(11,22,32,0.8)]" />
      </div>
    </section>
  );
}
