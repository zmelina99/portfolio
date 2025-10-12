"use client";

import Navigation from "@/components/Navigation";
import DiveDepthIndicator from "@/components/DiveDepthIndicator";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Passions from "@/components/sections/Passions";
import Experience from "@/components/sections/Experience";
import CaseStudies from "@/components/sections/CaseStudies";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import { useLanguage } from "@/components/lang/LanguageProvider";

export default function Home() {
  const { t } = useLanguage();
  
  return (
    <main className="min-h-screen">
      <Navigation />
      <DiveDepthIndicator />
      {/* Bubble game hidden by default - uncomment to enable */}
      {/* <BubbleGame /> */}
      <Hero />
      <About />
      <Experience />
      <CaseStudies />
      <Skills />
      {/* <Projects /> */}
      <Passions />

      <Contact />

      {/* Footer */}
      <footer className="bg-[rgba(17,36,48,0.30)] py-8 border-t border-[rgba(20,184,166,0.15)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2">
            <p className="text-sm text-[#7B8A9A]">
              {t("footer.designedBy")}
            </p>
            <p className="text-xs text-[#7B8A9A]">
              {t("footer.builtWith")}
            </p>
            <p className="text-xs text-[#7B8A9A]">
              © {new Date().getFullYear()} Meli. {t("footer.rights")}
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
