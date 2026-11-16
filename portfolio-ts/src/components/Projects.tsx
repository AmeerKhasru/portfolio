import { PROFILE, PROJECTS } from "../data/content";
import type { ProjectKey } from "../types";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

interface ProjectsProps {
  onOpenDetails: (key: ProjectKey) => void;
}

export default function Projects({ onOpenDetails }: ProjectsProps) {
  return (
    <section id="projects" className="py-20 bg-slateDark/50 border-y border-slate-800/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="03."
          title="Featured Projects"
          description="Selected web applications demonstrating state management, dynamic routing, clean UI architecture, and responsive design."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {PROJECTS.map((p) => (
            <Reveal key={p.key} as="article" className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group">
              <div>
                <div className={`h-44 bg-gradient-to-br ${p.banner} p-6 flex flex-col justify-between relative overflow-hidden border-b border-slate-800`}>
                  <div className="flex items-center justify-between">
                    <span className={`w-11 h-11 rounded-xl border flex items-center justify-center text-2xl ${p.iconBox}`}>{p.icon}</span>
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${p.title} Live`}
                      className="w-9 h-9 rounded-lg bg-slate-900/80 hover:bg-teal-500 text-slate-300 hover:text-obsidian flex items-center justify-center transition-colors"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square text-sm" />
                    </a>
                  </div>
                  <div>
                    <span className={`text-xs font-mono ${p.categoryClass}`}>{p.category}</span>
                    <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors">{p.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-slate-300 text-sm leading-relaxed mb-5">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tags.map((t) => (
                      <span key={t.label} className={`px-2.5 py-1 rounded-md bg-slate-800 font-mono text-xs ${t.className}`}>
                        {t.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center gap-3 border-t border-slate-800/70">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-teal-500 hover:bg-teal-400 text-obsidian font-semibold text-xs sm:text-sm text-center transition-colors flex items-center justify-center gap-2"
                >
                  <span>Live Demo</span>
                  <i className="fa-solid fa-external-link-alt text-xs" />
                </a>
                <button
                  onClick={() => onOpenDetails(p.key)}
                  title="View Architecture Details"
                  className="py-2.5 px-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-medium transition-colors"
                >
                  Details
                </button>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 p-6 rounded-2xl bg-obsidian/90 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-white text-2xl shrink-0">
              <i className="fa-brands fa-github" />
            </div>
            <div>
              <h4 className="text-white font-semibold">Explore More Repositories &amp; Code</h4>
              <p className="text-slate-400 text-sm">
                Check out my ongoing MERN stack builds, contributions, and problem-solving repositories.
              </p>
            </div>
          </div>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-teal-500/40 hover:bg-teal-500 hover:text-obsidian text-teal-300 font-semibold text-sm text-center transition-all shrink-0"
          >
            Visit GitHub Profile
          </a>
        </Reveal>
      </div>
    </section>
  );
}
