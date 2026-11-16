import type { TimelineEntry } from "../types";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const ENTRIES: TimelineEntry[] = [
  {
    dotClass: "bg-teal-400",
    badge: "2024 – Present",
    badgeClass: "bg-teal-500/15 text-teal-300",
    meta: "Software Engineering Transition",
    title: "Full-Stack Web Development (MERN) & Training",
    body: (
      <>
        Focused intensively on modern frontend and backend engineering—building responsive React &amp; TypeScript applications, RESTful APIs
        with Node.js/Express, and MongoDB integrations. Completed the <strong className="text-white">Complete Web Development Course</strong>{" "}
        &amp; <strong className="text-white">Mission Restart Bootcamp</strong> at Programming Hero.
      </>
    ),
  },
  {
    dotClass: "bg-indigo-400",
    badge: "2+ Years Experience",
    badgeClass: "bg-indigo-500/15 text-indigo-300",
    meta: "DDN • Chittagong",
    title: "Network Engineer & IT NOC Specialist",
    body:
      "Managed enterprise network infrastructure, real-time NOC uptime monitoring, IP routing diagnostics, and IT-enabled service delivery. Developed strong incident-response discipline and root-cause analysis skills under production SLAs.",
  },
  {
    dotClass: "bg-cyan-400",
    badge: "Competitive Programming & Education",
    badgeClass: "bg-cyan-500/15 text-cyan-300",
    meta: "2016 – 2020",
    title: "B.Sc. in Computer Science & Engineering (CSE)",
    body: (
      <>
        Graduated from <strong className="text-white">BGC Trust University Bangladesh</strong> (2020). Represented the university as an{" "}
        <strong className="text-teal-300">On-Site Contestant at ICPC Dhaka Regional 2018</strong>, honing algorithmic problem-solving under
        pressure.
      </>
    ),
  },
];

const LEADERSHIP: { role: string; org: string }[] = [
  { role: "Publicity & Publication Secretary", org: "BGCTUB CSE Alumni Association (BCAA)" },
  { role: "Financial Secretary", org: "Rotaract Club Metrocity Chittagong" },
  { role: "Former Vice President", org: "Association of Computer Students (BGCTUB)" },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="04."
          title="Journey, Milestones & Leadership"
          description="My professional evolution from network operations to software engineering, alongside competitive programming and community leadership."
          spacing="mb-12"
        />

        <div className="relative border-l-2 border-slate-800 ml-3 sm:ml-6 space-y-10">
          {ENTRIES.map((e) => (
            <Reveal key={e.title} className="relative pl-8 sm:pl-10">
              <span className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full ring-4 ring-obsidian ${e.dotClass}`} />
              <div className="glass-card rounded-2xl p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className={`px-3 py-1 rounded-full font-mono text-xs font-semibold ${e.badgeClass}`}>{e.badge}</span>
                  {e.meta && <span className="text-xs font-mono text-slate-400">{e.meta}</span>}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{e.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{e.body}</p>
              </div>
            </Reveal>
          ))}

          <Reveal className="relative pl-8 sm:pl-10">
            <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-amber-400 ring-4 ring-obsidian" />
            <div className="glass-card rounded-2xl p-6">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 font-mono text-xs font-semibold">
                  Community &amp; Organizational Leadership
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Leadership Roles</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                {LEADERSHIP.map((l) => (
                  <li key={l.role} className="flex items-start gap-2.5">
                    <i className="fa-solid fa-award text-teal-400 mt-1" />
                    <span>
                      <strong className="text-white">{l.role}</strong> — {l.org}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
