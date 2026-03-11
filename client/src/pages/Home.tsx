import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { GalaxyBackground } from "@/components/ui/GalaxyBackground";

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-primary/30 relative overflow-x-hidden">
      <GalaxyBackground />

      <div className="relative z-20">
        <Navbar />

        <main>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}