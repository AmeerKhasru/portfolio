# Muhammad Amir Khasru — Portfolio (React + TypeScript)

Vite + React 18 + TypeScript + Tailwind CSS.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build -> dist/
npm run preview
```

## Structure

```
src/
  data/content.ts      # all text/data (skills, projects, resume) — edit here
  types.ts             # shared interfaces
  hooks/               # useTypewriter, useReveal, useToast
  components/          # Header, Hero, About, Skills, Projects, Experience, Contact, modals...
```

Deploy `dist/` to Netlify (build command `npm run build`, publish dir `dist`).
