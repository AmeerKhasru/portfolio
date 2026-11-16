import { useEffect, useState } from "react";
import type { ProjectKey } from "./types";
import { ToastProvider } from "./hooks/useToast";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectModal from "./components/ProjectModal";
import ResumeModal from "./components/ResumeModal";

export default function App() {
  const [activeProject, setActiveProject] = useState<ProjectKey | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveProject(null);
        setResumeOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const openResume = () => setResumeOpen(true);

  return (
    <ToastProvider>
      <Header onOpenResume={openResume} />
      <main>
        <Hero onOpenResume={openResume} />
        <About />
        <Skills />
        <Projects onOpenDetails={setActiveProject} />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <ProjectModal projectKey={activeProject} onClose={() => setActiveProject(null)} />
      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </ToastProvider>
  );
}
