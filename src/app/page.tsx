import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
      <div className="min-h-screen bg-secondary" id="home">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
  );
}
