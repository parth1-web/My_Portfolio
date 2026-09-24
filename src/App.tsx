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

function App() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-16">
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
    </>
  );
}

export default App;