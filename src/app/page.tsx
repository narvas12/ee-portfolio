import About from "@/components/About";
import Contact from "@/components/Contact";
import Contracts from "@/components/Contracts";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export default function Home() {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-accent-ink"
      >
        Skip to content
      </a>

      <SiteHeader />

      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Contracts />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </main>

      <SiteFooter />
      <WhatsAppWidget />
    </>
  );
}
