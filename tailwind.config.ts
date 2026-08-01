import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        text: {
          DEFAULT: "var(--color-text)",
          muted: "var(--color-muted)",
        },
        border: "var(--color-border)",
        accent: {
          DEFAULT: "var(--color-accent)",
          soft: "var(--color-accent-soft)",
        },
        success: "var(--color-success)",
        warm: {
          DEFAULT: "var(--color-warm)",
          soft: "var(--color-warm-soft)",
        },
      },
      fontFamily: {
        display: ['"Source Serif 4"', "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      maxWidth: {
        content: "1280px",
        prose: "70ch",
      },
      boxShadow: {
        raised: "0 1px 3px rgba(26,29,36,0.06)",
        overlay: "0 4px 16px rgba(26,29,36,0.10)",
        soft: "0 2px 8px rgba(43,108,176,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
