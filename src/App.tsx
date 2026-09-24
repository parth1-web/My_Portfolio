import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { TechnicalPhilosophy } from "./components/TechnicalPhilosophy";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Architecture } from "./components/Architecture";
import { Journey } from "./components/Journey";
import { Learning } from "./components/Learning";
import { GithubSection } from "./components/GithubSection";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ScrollProgress } from "./components/ScrollProgress";
import { BackToTop } from "./components/BackToTop";

function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-blue-600 focus:text-white"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="main-content" className="pt-16 lg:pt-20 overflow-x-clip">
        <Hero />
        <About />
        <TechnicalPhilosophy />
        <Skills />
        <Projects />
        <Architecture />
        <Journey />
        <Learning />
        <GithubSection />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
