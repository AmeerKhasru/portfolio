import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const ADVANTAGES: { title: string; text: string }[] = [
  { title: "Protocol Mastery:", text: "Deep grasp of HTTP/HTTPS, TCP/IP, DNS resolution, SSL/TLS handshakes, and CORS." },
  { title: "Latency & Performance:", text: "Optimizing API payloads, caching strategies, and asset delivery for low-bandwidth environments." },
  { title: "Security & Deployment:", text: "Strong intuition for firewall rules, JWT authentication flows, and reliable cloud deployments." },
];

const STATS: { value: string; label: string; color: string }[] = [
  { value: "2+", label: "Years IT NOC & Network Exp.", color: "text-teal-400" },
  { value: "ICPC", label: "Dhaka Regional On-Site Contestant", color: "text-indigo-400" },
  { value: "MERN", label: "Full-Stack Web Focus", color: "text-cyan-400" },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-slateDark/50 border-y border-slate-800/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="01."
          title="About Me & Domain Edge"
          description="Combining infrastructure reliability with modern full-stack software craftsmanship."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <Reveal className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed">
            <p>
              Hello! I&rsquo;m <strong className="text-white">Muhammad Amir Khasru</strong>, a Computer Science and Engineering (CSE) graduate from{" "}
              <strong className="text-teal-300">BGC Trust University Bangladesh</strong> (Class of 2020) based in Chittagong, Bangladesh.
            </p>
            <p>
              Over the past <strong className="text-white">2+ years</strong>, I worked as a{" "}
              <strong className="text-white">Network Engineer &amp; IT NOC Professional</strong> at DDN, managing mission-critical connectivity,
              troubleshooting complex infrastructure issues, and ensuring high system uptime. While solving real-world infrastructure challenges,
              my passion for building interactive user-facing products led me to transition full-time into{" "}
              <strong className="text-teal-300">Full-Stack Software Engineering</strong>.
            </p>
            <p>
              Today, I specialize in the <strong className="text-white">MERN Stack (MongoDB, Express.js, React, Node.js)</strong> and{" "}
              <strong className="text-white">TypeScript</strong>—writing clean, modular code and building responsive applications from the ground
              up. Beyond code, I actively contribute to tech and youth communities as Publicity &amp; Publication Secretary of the{" "}
              <span className="text-slate-200">BGCTUB CSE Alumni Association</span> and Financial Secretary of{" "}
              <span className="text-slate-200">Rotaract Club Metrocity Chittagong</span>.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4">
              {STATS.map((s) => (
                <div key={s.value} className="p-4 rounded-xl bg-obsidian/80 border border-slate-800">
                  <div className={`text-2xl sm:text-3xl font-bold font-mono ${s.color}`}>{s.value}</div>
                  <div className="text-xs sm:text-sm text-slate-400 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5">
            <div className="glass-card rounded-2xl p-6 sm:p-7 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-bl-full pointer-events-none" />
              <div className="w-12 h-12 rounded-xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-teal-400 text-xl mb-5">
                <i className="fa-solid fa-network-wired" />
              </div>
              <div className="inline-block px-2.5 py-1 rounded bg-indigo-500/20 text-indigo-300 font-mono text-xs mb-3">
                UNIQUE DOMAIN ADVANTAGE
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Networking + Web Engineering</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-5">
                Unlike developers who view the network as a black box, my NOC and Network Engineering background gives me an architectural edge
                across the entire request-response lifecycle:
              </p>
              <ul className="space-y-3 text-sm text-slate-300">
                {ADVANTAGES.map((a) => (
                  <li key={a.title} className="flex items-start gap-3">
                    <i className="fa-solid fa-circle-check text-teal-400 mt-1" />
                    <span>
                      <strong className="text-white">{a.title}</strong> {a.text}
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
