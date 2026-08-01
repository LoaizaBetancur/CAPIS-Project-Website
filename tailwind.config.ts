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
      },
      fontFamily: {
        display: ['"Source Serif 4"', "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
      },
      spacing: {
        xs: "4px",
        "2xl": "48px",
        "3xl": "64px",
        "4xl": "96px",
      },
      maxWidth: {
        "content": "1280px",
      },
      boxShadow: {
        raised: "0 1px 3px rgba(26,29,36,0.06)",
        overlay: "0 4px 16px rgba(26,29,36,0.10)",
      },
      transitionDuration: {
        "150": "150ms",
        "300": "300ms",
        "500": "500ms",
      },
    },
  },
  plugins: [],
};

export default config;