# Muhammad Amir Khasru - Developer Portfolio

A dark-themed, responsive personal portfolio built with **React 18**, **TypeScript**, **Vite** and **Tailwind CSS**.
It presents my journey from Network Engineering / IT NOC to Full-Stack (MERN) web development, along with skills, projects, milestones and contact details.

## Features

- Typing effect for rotating role titles in the hero section
- Animated network-node canvas background
- Skills section with category filter tabs (All / Frontend / Backend & DB / Tools / Core & Networking)
- Featured project cards with live-demo links and a details modal
- Journey timeline: training, work experience, education, leadership roles
- Resume summary modal with one-click `.txt` download
- Contact section with copy-email button and a validated contact form
- Toast notifications, scroll-reveal animations and a mobile navigation menu
- Keyboard support: `Esc` closes any open modal
- Respects `prefers-reduced-motion`

## Tech Stack

| Area      | Tools                               |
| --------- | ----------------------------------- |
| UI        | React 18, TypeScript (strict mode)  |
| Styling   | Tailwind CSS 3, custom CSS          |
| Build     | Vite 5                              |
| Icons     | Font Awesome 6 (CDN)                |
| Fonts     | Inter, Fira Code (Google Fonts)     |
| Hosting   | Netlify (or any static host)        |

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm (comes with Node.js)



## Project Structure

```
portfolio-ts/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.ts
├── postcss.config.js
└── src/
    ├── main.tsx              # App entry point
    ├── App.tsx               # Page layout and modal state
    ├── index.css             # Tailwind layers + custom styles
    ├── types.ts              # Shared TypeScript interfaces
    ├── data/
    │   └── content.ts        # Profile, skills, projects, resume text
    ├── hooks/
    │   ├── useTypewriter.ts  # Typing effect
    │   ├── useReveal.ts      # Scroll-reveal via IntersectionObserver
    │   └── useToast.tsx      # Toast context + provider
    └── components/
        ├── Header.tsx
        ├── Hero.tsx
        ├── NetworkCanvas.tsx
        ├── About.tsx
        ├── Skills.tsx
        ├── Projects.tsx
        ├── Experience.tsx
        ├── Contact.tsx
        ├── Footer.tsx
        ├── ProjectModal.tsx
        ├── ResumeModal.tsx
        ├── Reveal.tsx
        └── SectionHeading.tsx
```



