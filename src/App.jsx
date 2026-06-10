import ScrollProgress from "./components/ScrollProgress";
import ParticlesBackground from "./components/ParticlesBackground";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

function App() {
  return (
    <div
      className="
        bg-white
        text-black
        dark:bg-[#020617]
        dark:text-white
        overflow-hidden
        relative
        transition-colors
        duration-500
      "
    >
      {/* Animated Background */}
      <ParticlesBackground />

      {/* Scroll Progress */}
      <ScrollProgress />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />

        <About />

        <Skills />

        <Projects />

        <Experience />

        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
