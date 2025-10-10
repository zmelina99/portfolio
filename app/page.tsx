import Navigation from "@/components/Navigation";
import DiveDepthIndicator from "@/components/DiveDepthIndicator";
import BubbleGame from "@/components/BubbleGame";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Passions from "@/components/sections/Passions";
import Experience from "@/components/sections/Experience";
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
      <Skills />
      {/* <Projects /> */}
      <Passions />

      <Contact />

      {/* Footer */}
      <footer className="bg-[#2d3b5f]/30 py-8 border-t border-[#a8dadc]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-muted-foreground">
            <p className="mb-2">
              Built with ❤️ using Next.js, TypeScript, Tailwind CSS, and
              shadcn/ui
            </p>
            <p className="text-sm">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
