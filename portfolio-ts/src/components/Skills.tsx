import { useState } from "react";
import { SKILL_GROUPS } from "../data/content";
import type { SkillFilter } from "../types";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const FILTERS: { key: SkillFilter; label: string }[] = [
  { key: "all", label: "All Skills" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend & DB" },
  { key: "tools", label: "Tools & Platforms" },
  { key: "core", label: "Core & Networking" },
];

export default function Skills() {
  const [filter, setFilter] = useState<SkillFilter>("all");
  const visible = SKILL_GROUPS.filter((g) => filter === "all" || g.category === filter);

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="02."
          title="Technical Arsenal"
          description="Technologies, frameworks, and networking fundamentals I use to bring ideas to production."
          spacing="mb-8"
        />

        <Reveal className="flex flex-wrap gap-2 mb-8">
          {FILTERS.map((f) => {
            const active = f.key === filter;
            return (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                aria-pressed={active}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  active
                    ? "bg-teal-500 text-obsidian font-semibold"
                    : "bg-slate-800/80 text-slate-300 hover:text-white border border-slate-700"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </Reveal>

        <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visible.map((g) => (
            <div key={g.category} className="glass-card rounded-2xl p-6 transition-all">
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${g.iconBox}`}>
                  <i className={`${g.icon} text-lg`} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{g.title}</h3>
                  <p className="text-xs text-slate-400">{g.subtitle}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {g.items.map((item) => (
                  <span
                    key={item.label}
                    className="px-3.5 py-2 rounded-lg bg-slate-900/90 border border-slate-700/80 text-sm text-slate-200 flex items-center gap-2"
                  >
                    {item.icon && <i className={item.icon} />}
                    {item.badge && <span className={item.badge.className}>{item.badge.text}</span>}
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
