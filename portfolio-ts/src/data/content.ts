import type { NavLink, Project, SkillGroup } from "../types";

export const PROFILE = {
  name: "Muhammad Amir Khasru",
  email: "muhammadamirkhasru@gmail.com",
  github: "https://github.com/AmeerKhasru",
  linkedin: "https://www.linkedin.com/in/mohammad-amir-khasru-8b3400336/",
  location: "Chittagong, Bangladesh",
} as const;

export const ROLES: readonly string[] = [
  "Full-Stack Web Developer (MERN)",
  "React & TypeScript Enthusiast",
  "Network Engineer turned Software Engineer",
];

export const NAV_LINKS: readonly NavLink[] = [
  { href: "#about", label: "About", mobileLabel: "About & Advantage" },
  { href: "#skills", label: "Skills", mobileLabel: "Technical Skills" },
  { href: "#projects", label: "Projects", mobileLabel: "Featured Projects" },
  { href: "#experience", label: "Journey", mobileLabel: "Experience & Timeline" },
  { href: "#contact", label: "Contact", mobileLabel: "Contact" },
];

export const SKILL_GROUPS: readonly SkillGroup[] = [
  {
    category: "frontend",
    title: "Frontend Development",
    subtitle: "Responsive, component-driven UI architecture",
    icon: "fa-solid fa-code",
    iconBox: "bg-cyan-500/15 text-cyan-400",
    items: [
      { label: "React.js", icon: "fa-brands fa-react text-cyan-400" },
      { label: "TypeScript", badge: { text: "TS", className: "text-blue-400 font-mono font-bold text-xs" } },
      { label: "JavaScript (ES6+)", icon: "fa-brands fa-js text-yellow-400" },
      { label: "Tailwind CSS", icon: "fa-solid fa-wind text-teal-400" },
      { label: "HTML5", icon: "fa-brands fa-html5 text-orange-500" },
      { label: "CSS3", icon: "fa-brands fa-css3-alt text-blue-500" },
    ],
  },
  {
    category: "backend",
    title: "Backend & Database",
    subtitle: "Scalable APIs, data modeling & secure auth",
    icon: "fa-solid fa-server",
    iconBox: "bg-emerald-500/15 text-emerald-400",
    items: [
      { label: "Node.js", icon: "fa-brands fa-node-js text-emerald-400" },
      { label: "Express.js", badge: { text: "EX", className: "text-slate-300 font-mono font-bold text-xs" } },
      { label: "MongoDB", icon: "fa-solid fa-database text-green-500" },
      { label: "JWT Authentication", icon: "fa-solid fa-key text-amber-400" },
      { label: "REST APIs", icon: "fa-solid fa-plug text-teal-400" },
    ],
  },
  {
    category: "tools",
    title: "Tools & Deployment",
    subtitle: "Version control, bundling & cloud hosting",
    icon: "fa-solid fa-wrench",
    iconBox: "bg-indigo-500/15 text-indigo-400",
    items: [
      { label: "Git", icon: "fa-brands fa-git-alt text-orange-500" },
      { label: "GitHub", icon: "fa-brands fa-github text-white" },
      { label: "VS Code", icon: "fa-solid fa-laptop-code text-blue-400" },
      { label: "Vite", icon: "fa-solid fa-bolt text-purple-400" },
      { label: "Netlify", icon: "fa-solid fa-cloud-arrow-up text-teal-400" },
    ],
  },
  {
    category: "core",
    title: "Core Engineering & Networking",
    subtitle: "Problem solving & infrastructure reliability",
    icon: "fa-solid fa-shield-halved",
    iconBox: "bg-teal-500/15 text-teal-400",
    items: [
      { label: "CRUD Operations" },
      { label: "Problem Solving" },
      { label: "Responsive Design" },
      { label: "TCP/IP & Routing" },
      { label: "DNS & HTTP/S" },
      { label: "Network Troubleshooting" },
    ],
  },
];

export const PROJECTS: readonly Project[] = [
  {
    key: "cinetrack",
    title: "CineTrack",
    icon: "🎬",
    live: "https://cine-track-by-khasru.netlify.app",
    category: "Entertainment & Tracking",
    categoryClass: "text-teal-400",
    banner: "from-slate-900 via-indigo-950 to-teal-950",
    iconBox: "bg-teal-500/20 border-teal-400/30",
    description:
      "A dedicated movie wishlist and tracking application featuring dynamic routing, clean modal logic, and intuitive client-side state management.",
    tags: [
      { label: "React", className: "text-teal-300" },
      { label: "Tailwind CSS", className: "text-cyan-300" },
      { label: "JavaScript", className: "text-yellow-300" },
    ],
    detail: {
      title: "CineTrack — Movie Wishlist & Tracker",
      stack: ["React", "Tailwind CSS", "JavaScript (ES6+)", "React Router"],
      highlights: [
        "Dynamic client-side routing for seamless navigation between movie collections and details.",
        "Reusable modal components with clean state management for adding/removing wishlist items.",
        "Fully responsive mobile-first layout optimized for quick browsing.",
      ],
    },
  },
  {
    key: "bookvibes",
    title: "Book Vibes",
    icon: "📚",
    live: "https://bookvibe-by-khasru.netlify.app",
    category: "Personal Library Manager",
    categoryClass: "text-emerald-400",
    banner: "from-slate-900 via-emerald-950 to-slate-900",
    iconBox: "bg-emerald-500/20 border-emerald-400/30",
    description:
      "A modern book tracking application built with React, ensuring seamless LocalStorage persistence, reading list categorization, and clean UI components.",
    tags: [
      { label: "React", className: "text-teal-300" },
      { label: "Tailwind CSS", className: "text-cyan-300" },
      { label: "LocalStorage", className: "text-emerald-300" },
    ],
    detail: {
      title: "Book Vibes — Modern Reading Tracker",
      stack: ["React", "Tailwind CSS", "LocalStorage API", "Component Architecture"],
      highlights: [
        "Persistent browser storage using LocalStorage so user reading lists remain intact across sessions.",
        "Clean UI cards with rating tags, page counts, and wishlist sorting.",
        "Modular React components ensuring maintainable and scalable code.",
      ],
    },
  },
  {
    key: "heroio",
    title: "Hero-io",
    icon: "🦸",
    live: "https://hero-io-by-khasru.netlify.app/",
    category: "App Store Showcase",
    categoryClass: "text-indigo-400",
    banner: "from-slate-900 via-purple-950 to-indigo-950",
    iconBox: "bg-indigo-500/20 border-indigo-400/30",
    description:
      "A modern web application inspired by app stores, featuring dynamic content filtering, interactive UI components, and optimized Vite deployment.",
    tags: [
      { label: "React", className: "text-teal-300" },
      { label: "Tailwind CSS", className: "text-cyan-300" },
      { label: "Vite", className: "text-purple-300" },
    ],
    detail: {
      title: "Hero-io — Interactive App Store Web App",
      stack: ["React", "Tailwind CSS", "Vite", "Netlify CI/CD"],
      highlights: [
        "Inspired by modern app marketplaces with instant search and category filtering.",
        "Fast bundle builds powered by Vite and continuous deployment on Netlify.",
        "Interactive UI feedback states and accessible touch targets.",
      ],
    },
  },
];

export const RESUME_TEXT = `MUHAMMAD AMIR KHASRU
Full-Stack Web Developer (MERN) | Software Engineer
Location: Chittagong, Bangladesh
Email: muhammadamirkhasru@gmail.com
GitHub: https://github.com/AmeerKhasru
LinkedIn: https://www.linkedin.com/in/mohammad-amir-khasru-8b3400336/

SUMMARY
Computer Science & Engineering graduate transitioning into Software Engineering after 2+ years of experience in Network Engineering & IT NOC. Skilled in building responsive, scalable web applications using React, TypeScript, Node.js, Express.js, and MongoDB.

TECHNICAL SKILLS
- Frontend: React.js, TypeScript, JavaScript (ES6+), Tailwind CSS, HTML5, CSS3
- Backend & Database: Node.js, Express.js, MongoDB, JWT Authentication, REST APIs
- Tools: Git, GitHub, VS Code, Vite, Netlify
- Networking & Core: TCP/IP, DNS, HTTP/HTTPS, Network Troubleshooting, CRUD, Problem Solving

FEATURED PROJECTS
1. CineTrack (https://cine-track-by-khasru.netlify.app) - Movie wishlist & tracking web app built with React & Tailwind CSS.
2. Book Vibes (https://bookvibe-by-khasru.netlify.app) - Book tracking app with LocalStorage persistence.
3. Hero-io (https://hero-io-by-khasru.netlify.app/) - App store inspired web app with dynamic filtering.

EXPERIENCE & ACHIEVEMENTS
- Network Engineer & IT NOC (DDN - 2+ Years)
- ICPC Dhaka Regional 2018 On-site Contestant
- B.Sc. in CSE, BGC Trust University Bangladesh (2020)
- Publicity & Publication Secretary, BGCTUB CSE Alumni Association
- Financial Secretary, Rotaract Club Metrocity Chittagong
`;
