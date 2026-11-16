import { PROFILE } from "../data/content";

export default function Footer() {
  return (
    <footer className="py-8 bg-obsidian border-t border-slate-800/80 text-center">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
        <p className="font-mono">
          Designed &amp; Built by <span className="text-teal-400 font-semibold">{PROFILE.name}</span>
        </p>
        <div className="flex items-center gap-5">
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">GitHub</a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">LinkedIn</a>
          <a href="#home" className="hover:text-teal-400 transition-colors flex items-center gap-1">
            Top <i className="fa-solid fa-arrow-up text-xs" />
          </a>
        </div>
      </div>
    </footer>
  );
}
