import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Parcours from "@/components/portfolio/Parcours";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Contact from "@/components/portfolio/Contact";
import SiteFooter from "@/components/portfolio/SiteFooter";

const Index = () => {
  return (
    <main className="min-h-screen bg-background pt-16">
      <Navbar />
      <Hero />
      <About />
      <Parcours />
      <Skills />
      <Projects />
      <Contact />
      <SiteFooter />
    </main>
  );
};

export default Index;
