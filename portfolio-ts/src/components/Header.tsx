import { useState } from "react";
import { NAV_LINKS } from "../data/content";

interface HeaderProps {
  onOpenResume: () => void;
}

export default function Header({ onOpenResume }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-obsidian/80 backdrop-blur-md border-b border-slate-800/80 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal-400 to-indigo-600 flex items-center justify-center text-obsidian font-mono font-bold text-lg shadow-lg group-hover:scale-105 transition-transform">
              AK
            </div>
            <span className="font-mono font-semibold text-slate-100 tracking-tight text-sm sm:text-base">
              Amir<span className="text-teal-400"> Khasru</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-teal-400 transition-colors">
                {l.label}
              </a>
            ))}
            <button
              onClick={onOpenResume}
              className="px-4 py-2 rounded-lg bg-teal-500/10 border border-teal-500/40 text-teal-300 hover:bg-teal-500 hover:text-obsidian font-semibold transition-all duration-200 flex items-center gap-2"
            >
              <i className="fa-regular fa-file-lines" /> Resume
            </button>
          </nav>

          <button
            aria-label="Toggle Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-teal-400 hover:bg-slate-800/60 transition-colors"
          >
            <i className="fa-solid fa-bars text-xl" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-slateDark border-b border-slate-800 px-4 pt-2 pb-5 space-y-2">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-teal-400"
            >
              {l.mobileLabel}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 rounded-lg bg-teal-500 text-obsidian font-semibold flex items-center justify-center gap-2"
            >
              <i className="fa-regular fa-file-lines" /> View Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
