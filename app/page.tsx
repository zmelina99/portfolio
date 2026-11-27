"use client";

import Navigation from "@/components/Navigation";
import DiveDepthIndicator from "@/components/DiveDepthIndicator";
import UnderwaterScene from "@/components/underwater/UnderwaterScene";
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
    <main className="uw-page min-h-screen">
      <UnderwaterScene />
      <Navigation />
      <DiveDepthIndicator />
      {/* Bubble game hidden by default - uncomment to enable */}
      {/* <BubbleGame /> */}
      <Hero />
      <CaseStudies />
      <About />
      <Experience />
      <Skills />
      {/* <Projects /> */}
      <Passions />

      <Contact />

      {/* Footer */}
      <footer className="deep-footer relative py-8 border-t border-[rgba(244,239,227,0.12)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2">
            <p className="text-sm text-[#C9C3B3]">
              {t("footer.designedBy")}
            </p>
            <p className="text-xs text-[#C9C3B3]">
              {t("footer.builtWith")}
            </p>
            <p className="text-xs text-[#C9C3B3]">
              © {new Date().getFullYear()} Meli. {t("footer.rights")}
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
