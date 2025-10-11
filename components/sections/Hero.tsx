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
      {/* Dark overlay for mobile to improve text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1720]/70 via-[#0A1720]/50 to-transparent md:from-transparent md:via-transparent pointer-events-none z-[1]" />

      {/* Bubbles */}
      <div className="bubbles opacity-30 md:opacity-20">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Greeting */}
          <div className="inline-block">
            <p className="text-lg sm:text-xl text-[#94A3B8] mb-2 drop-shadow-[0_2px_4px_rgba(10,23,32,0.8)]">
              Hi there! 👋 I&apos;m
            </p>
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold drop-shadow-[0_4px_8px_rgba(10,23,32,0.8)]">
            <span className="bg-gradient-to-r from-[#009293] via-[#4DCCCC] to-[#009293] bg-clip-text text-transparent animate-shimmer">
              Meli{" "}
            </span>
          </h1>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#E6EDF2] drop-shadow-[0_2px_6px_rgba(10,23,32,0.8)]">
            Full Stack Developer
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-[#94A3B8] max-w-2xl mx-auto drop-shadow-[0_2px_4px_rgba(10,23,32,0.8)]">
            I craft beautiful, functional, and user-centered digital
            experiences. Passionate about clean code and innovative solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("experience")}
              className="text-lg px-8 group bg-[#009293] hover:bg-[#F8A58E] text-white border-0 shadow-lg shadow-black/20 transition-all duration-300"
            >
              View My Experience
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="text-lg px-8 border border-white/15 text-[#E6EDF2] bg-transparent hover:bg-[#009293]/10 hover:border-[#009293]/40 backdrop-blur-sm transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center pt-8">
            <Button
              size="icon"
              variant="ghost"
              className="rounded-full hover:bg-[#009293]/10 text-[#009293] hover:text-[#F8A58E] transition-all duration-300 hover:scale-110"
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
              className="rounded-full hover:bg-[#009293]/10 text-[#009293] hover:text-[#F8A58E] transition-all duration-300 hover:scale-110"
              asChild
            >
              <a
                href="www.linkedin.com/in/melina-zellweger-"
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
              className="rounded-full hover:bg-[#009293]/10 text-[#009293] hover:text-[#F8A58E] transition-all duration-300 hover:scale-110"
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
        <span className="text-sm text-[#009293] font-medium tracking-wide drop-shadow-[0_2px_4px_rgba(10,23,32,0.8)]">
          Let's dive deeper
        </span>
        <ArrowDown className="h-6 w-6 text-[#009293] drop-shadow-[0_2px_4px_rgba(10,23,32,0.8)]" />
      </div>
    </section>
  );
}
