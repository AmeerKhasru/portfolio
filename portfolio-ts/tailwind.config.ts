import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      colors: {
        obsidian: "#0B1120",
        slateDark: "#111827",
        cardDark: "#1E293B",
        tealAccent: "#38B2AC",
        cyanGlow: "#06B6D4",
      },
    },
  },
  plugins: [],
};

export default config;
