import { PROFILE, RESUME_TEXT } from "../data/content";
import { useToast } from "../hooks/useToast";

interface ResumeModalProps {
  open: boolean;
  onClose: () => void;
}

function downloadTextFile(filename: string, content: string): void {
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export default function ResumeModal({ open, onClose }: ResumeModalProps) {
  const { showToast } = useToast();
  if (!open) return null;

  const handleDownload = () => {
    downloadTextFile("Muhammad_Amir_Khasru_Resume.txt", RESUME_TEXT);
    showToast("Resume summary downloaded!");
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Resume summary"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-slateDark border border-slate-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative"
      >
        <button
          onClick={onClose}
          aria-label="Close resume modal"
          className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center"
        >
          <i className="fa-solid fa-xmark" />
        </button>

        <div className="border-b border-slate-800 pb-4 mb-5">
          <span className="text-xs font-mono text-teal-400 uppercase tracking-wider">Curriculum Vitae Snapshot</span>
          <h3 className="text-2xl font-bold text-white mt-1">{PROFILE.name}</h3>
          <p className="text-sm text-slate-400">Full-Stack Web Developer (MERN) | B.Sc. in CSE | Ex-Network Engineer (NOC)</p>
        </div>

        <div className="space-y-4 text-sm text-slate-300">
          <div>
            <h4 className="font-bold text-white mb-1">Core Technical Stack</h4>
            <p>React.js, TypeScript, JavaScript (ES6+), Tailwind CSS, Node.js, Express.js, MongoDB, JWT, REST APIs, Git/GitHub, TCP/IP, DNS.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-1">Experience Highlights</h4>
            <ul className="list-disc list-inside space-y-1 text-slate-300">
              <li><strong>Full-Stack Developer (Projects):</strong> Built CineTrack, Book Vibes, and Hero-io with React, Tailwind, and modern state management.</li>
              <li><strong>Network Engineer &amp; IT NOC (DDN — 2+ Years):</strong> Network troubleshooting, server uptime monitoring, and infrastructure support.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-1">Education &amp; Honors</h4>
            <p>B.Sc. in Computer Science &amp; Engineering, BGC Trust University Bangladesh (2020) • ICPC Dhaka Regional 2018 On-site Contestant.</p>
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-slate-800 flex flex-wrap gap-3 justify-end">
          <button
            onClick={handleDownload}
            className="px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-obsidian font-bold text-sm flex items-center gap-2 transition-colors"
          >
            <i className="fa-solid fa-download" /> Download CV Summary (.txt)
          </button>
          <a
            href={`mailto:${PROFILE.email}?subject=Request%20for%20Full%20PDF%20Resume`}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm flex items-center gap-2 transition-colors"
          >
            <i className="fa-regular fa-envelope" /> Request Full PDF via Email
          </a>
        </div>
      </div>
    </div>
  );
}
