import { PROJECTS } from "../data/content";
import type { ProjectKey } from "../types";

interface ProjectModalProps {
  projectKey: ProjectKey | null;
  onClose: () => void;
}

export default function ProjectModal({ projectKey, onClose }: ProjectModalProps) {
  const project = PROJECTS.find((p) => p.key === projectKey);
  if (!project) return null;
  const { detail } = project;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={detail.title}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-slateDark border border-slate-700 rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl relative"
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center"
        >
          <i className="fa-solid fa-xmark" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">{project.icon}</span>
          <h3 className="text-xl font-bold text-white pr-6">{detail.title}</h3>
        </div>
        <div className="flex flex-wrap gap-2 mb-5">
          {detail.stack.map((tech) => (
            <span key={tech} className="px-2.5 py-1 rounded bg-slate-800 text-teal-300 font-mono text-xs">{tech}</span>
          ))}
        </div>
        <h4 className="text-sm font-semibold text-slate-200 mb-2">Key Engineering Highlights:</h4>
        <ul className="space-y-2 text-sm text-slate-300 mb-6">
          {detail.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2">
              <i className="fa-solid fa-check text-teal-400 mt-1" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-obsidian font-bold text-sm flex items-center justify-center gap-2 transition-colors"
        >
          <span>Launch Live Application</span>
          <i className="fa-solid fa-arrow-up-right-from-square" />
        </a>
      </div>
    </div>
  );
}
