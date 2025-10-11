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

export default function Home() {
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
      <footer className="bg-[#112B3C]/30 py-8 border-t border-white/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-[#94A3B8]">
            <p className="mb-2">
              Built with ❤️ using Next.js, TypeScript, Tailwind CSS, and
              shadcn/ui
            </p>
            <p className="text-sm">
              © {new Date().getFullYear()} Meli. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
