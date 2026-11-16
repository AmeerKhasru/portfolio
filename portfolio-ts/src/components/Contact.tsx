import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { PROFILE } from "../data/content";
import { useToast } from "../hooks/useToast";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Feedback =
  | { kind: "error"; text: string }
  | { kind: "success"; name: string; email: string }
  | null;

const EMPTY_FORM: FormValues = { name: "", email: "", subject: "", message: "" };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const INPUT =
  "w-full px-4 py-3 rounded-xl bg-obsidian/90 border border-slate-700 focus:border-teal-400 focus:outline-none text-white text-sm placeholder-slate-500 transition-colors";

async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const input = document.createElement("input");
    input.value = text;
    document.body.appendChild(input);
    input.select();
    try {
      return document.execCommand("copy");
    } catch {
      return false;
    } finally {
      document.body.removeChild(input);
    }
  }
}

export default function Contact() {
  const { showToast } = useToast();
  const [form, setForm] = useState<FormValues>(EMPTY_FORM);
  const [feedback, setFeedback] = useState<Feedback>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopy = async () => {
    const ok = await copyText(PROFILE.email);
    showToast(ok ? "Email copied to clipboard!" : `Could not copy automatically. Email: ${PROFILE.email}`);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      setFeedback({ kind: "error", text: "Please fill in your name, email address, and message." });
      return;
    }
    if (!EMAIL_PATTERN.test(email)) {
      setFeedback({ kind: "error", text: "Please enter a valid email address." });
      return;
    }
    setFeedback({ kind: "success", name, email });
    showToast("Message sent successfully!");
    setForm(EMPTY_FORM);
  };

  return (
    <section id="contact" className="py-20 bg-slateDark/50 border-t border-slate-800/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="05."
          title="Get In Touch"
          description="Looking for a dedicated Full-Stack or Frontend Developer who brings both modern MERN expertise and strong infrastructure instincts? Let's talk!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <Reveal className="lg:col-span-5 space-y-4">
            <div className="glass-card rounded-2xl p-5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-teal-500/15 text-teal-400 flex items-center justify-center shrink-0">
                  <i className="fa-regular fa-envelope text-lg" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-slate-400 font-mono">Email Address</div>
                  <div className="text-sm sm:text-base font-medium text-white truncate">{PROFILE.email}</div>
                </div>
              </div>
              <button
                onClick={handleCopy}
                title="Copy Email"
                className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-teal-500 hover:text-obsidian text-teal-300 text-xs font-semibold transition-all shrink-0 flex items-center gap-1.5"
              >
                <i className="fa-regular fa-copy" /> Copy
              </button>
            </div>

            <div className="glass-card rounded-2xl p-5 flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center shrink-0">
                <i className="fa-solid fa-location-dot text-lg" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-mono">Location</div>
                <div className="text-sm sm:text-base font-medium text-white">{PROFILE.location} (Open to Remote &amp; On-site)</div>
              </div>
            </div>

            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-5 flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center shrink-0">
                  <i className="fa-brands fa-linkedin-in text-lg" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">LinkedIn</div>
                  <div className="text-sm sm:text-base font-medium text-white group-hover:text-teal-300 transition-colors">
                    Mohammad Amir Khasru
                  </div>
                </div>
              </div>
              <i className="fa-solid fa-arrow-up-right-from-square text-slate-500 group-hover:text-teal-400 transition-colors" />
            </a>
          </Reveal>

          <Reveal className="lg:col-span-7">
            <form onSubmit={handleSubmit} noValidate className="glass-card rounded-2xl p-6 sm:p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="sender-name" className="block text-xs font-mono text-slate-300 mb-2">Your Name *</label>
                  <input id="sender-name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="e.g. Sarah Ahmed" className={INPUT} />
                </div>
                <div>
                  <label htmlFor="sender-email" className="block text-xs font-mono text-slate-300 mb-2">Your Email *</label>
                  <input id="sender-email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="e.g. sarah@company.com" className={INPUT} />
                </div>
              </div>

              <div>
                <label htmlFor="sender-subject" className="block text-xs font-mono text-slate-300 mb-2">Subject</label>
                <input id="sender-subject" name="subject" type="text" value={form.subject} onChange={handleChange} placeholder="Frontend / Full-Stack Opportunity" className={INPUT} />
              </div>

              <div>
                <label htmlFor="sender-message" className="block text-xs font-mono text-slate-300 mb-2">Message *</label>
                <textarea id="sender-message" name="message" rows={4} required value={form.message} onChange={handleChange} placeholder="Tell me about your team, project, or opportunity..." className={`${INPUT} resize-none`} />
              </div>

              {feedback?.kind === "error" && (
                <div role="alert" className="rounded-xl p-3.5 text-sm bg-red-500/15 border border-red-500/40 text-red-300">
                  {feedback.text}
                </div>
              )}
              {feedback?.kind === "success" && (
                <div role="status" className="rounded-xl p-3.5 text-sm bg-teal-500/15 border border-teal-500/40 text-teal-300">
                  <i className="fa-solid fa-circle-check mr-1.5" /> Thank you, <strong>{feedback.name}</strong>! Your message has been
                  received. I will get back to you soon at <strong>{feedback.email}</strong>.
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-obsidian font-bold text-sm sm:text-base shadow-lg shadow-teal-500/20 transition-all flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-paper-plane" />
                <span>Send Message</span>
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
