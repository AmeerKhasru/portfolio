import { useTypewriter } from "../hooks/useTypewriter";
import { PROFILE, ROLES } from "../data/content";
import NetworkCanvas from "./NetworkCanvas";

interface HeroProps {
  onOpenResume: () => void;
}

const SOCIAL = "w-10 h-10 rounded-lg bg-slate-800/80 hover:bg-teal-500/20 border border-slate-700 hover:border-teal-400 flex items-center justify-center text-slate-300 hover:text-teal-300 transition-all";

export default function Hero({ onOpenResume }: HeroProps) {
  const role = useTypewriter(ROLES);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      <NetworkCanvas />
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-teal-500/30 text-teal-300 text-xs sm:text-sm font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
            <span>Available for Software Engineering Opportunities</span>
          </div>

          <p className="text-slate-400 font-mono text-sm sm:text-base mb-2">Hi there, I&rsquo;m</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            Muhammad Amir{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-300 to-indigo-400">Khasru</span>
          </h1>

          <div className="text-lg sm:text-2xl font-mono text-slate-200 mb-6 min-h-[2.2rem] flex items-center">
            <span className="text-teal-400 font-semibold">{role}</span>
            <span className="cursor-blink text-teal-400 ml-1">|</span>
          </div>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
            Transitioning from <span className="text-white font-medium">2+ years of Network Engineering &amp; IT NOC</span> into building
            scalable, high-performance web applications with{" "}
            <span className="text-teal-300 font-medium">React, TypeScript, Node.js, and MongoDB</span>.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#projects"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-obsidian font-bold text-sm sm:text-base shadow-lg shadow-teal-500/20 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>View Projects</span>
              <i className="fa-solid fa-arrow-right" />
            </a>
            <a
              href="#contact"
              className="px-6 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 border border-slate-700 text-white font-semibold text-sm sm:text-base transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <i className="fa-regular fa-paper-plane text-teal-400" />
              <span>Contact Me</span>
            </a>
            <button
              onClick={onOpenResume}
              className="px-5 py-3.5 rounded-xl border border-teal-500/40 hover:bg-teal-500/10 text-teal-300 font-semibold text-sm sm:text-base transition-all flex items-center gap-2"
            >
              <i className="fa-solid fa-download" />
              <span>Resume</span>
            </button>
          </div>

          <div className="flex items-center gap-4 pt-2 border-t border-slate-800/80 max-w-md">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Connect:</span>
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={SOCIAL}>
              <i className="fa-brands fa-github text-lg" />
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={SOCIAL}>
              <i className="fa-brands fa-linkedin-in text-lg" />
            </a>
            <a href={`mailto:${PROFILE.email}`} aria-label="Email" className={SOCIAL}>
              <i className="fa-regular fa-envelope text-lg" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
