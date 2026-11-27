"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { useLanguage } from "@/components/lang/LanguageProvider";
import { scrollToSection } from "@/lib/utils";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 relative z-10">
        <div className="text-center space-y-5 animate-fade-in">
          {/* Greeting */}
          <div className="inline-block">
            <p className="text-base sm:text-lg text-[var(--uw-body)]">
              {t("hero.greeting")} 👋
            </p>
          </div>

          {/* Name - tighter spacing */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold -mt-2">
            <span className="bg-gradient-to-r from-[#0A4E54] via-[#13858A] to-[#0A4E54] bg-clip-text text-transparent animate-shimmer">
              Meli
            </span>
          </h1>

          {/* Title - tighter spacing */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[var(--uw-ink)] -mt-1 mb-1">
            {t("hero.roleLabel")}
          </h2>
          <p className="text-base sm:text-lg text-[var(--uw-body)] max-w-xl mx-auto leading-relaxed pt-0 mt-0">
            {t("hero.title")}
          </p>

          {/* Description - improved readability */}
          <p className="text-base sm:text-base text-[var(--uw-body)] max-w-2xl mx-auto leading-relaxed pt-2">
            {t("hero.subtitle")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              size="lg"
              onClick={() => scrollToSection("case-studies")}
              className="text-base px-8 group bg-[#00787A] hover:bg-[#005E5F] text-white border-0 shadow-lg shadow-[#063238]/20 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#14B8BA] focus-visible:ring-offset-2"
            >
              {t("hero.cta.caseStudies")}
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="text-base px-8 border border-[rgba(10,74,82,0.30)] text-[var(--uw-ink)] bg-white/30 hover:bg-white/50 hover:border-[rgba(10,74,82,0.45)] backdrop-blur-sm transition-all duration-300"
            >
              {t("hero.cta.contact")}
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center pt-6">
            <Button
              size="icon"
              variant="ghost"
              className="rounded-full hover:bg-[#0A5A60]/10 text-[var(--uw-link)] hover:text-[var(--uw-ink)] hover:scale-110 transition-all duration-300"
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
              className="rounded-full hover:bg-[#0A5A60]/10 text-[var(--uw-link)] hover:text-[var(--uw-ink)] hover:scale-110 transition-all duration-300"
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
              className="rounded-full hover:bg-[#0A5A60]/10 text-[var(--uw-link)] hover:text-[var(--uw-ink)] hover:scale-110 transition-all duration-300"
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2 z-10 pointer-events-none">
        <span className="text-sm text-[var(--uw-link)] font-medium tracking-wide">
          {t("hero.cta.diveDeeper")}
        </span>
        <ArrowDown className="h-6 w-6 text-[var(--uw-link)]" />
      </div>
    </section>
  );
}
