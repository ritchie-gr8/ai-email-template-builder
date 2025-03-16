import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          background: "#FFFFFF",
          foreground: "#333333",
          border: "#E6B4B4",
          hover: {
            background: "#FFC0C0",
            border: "#FF8C8C",
          },
        },
        popover: {
          DEFAULT: "#FFFFE0",
          foreground: "#333333",
        },
        primary: {
          DEFAULT: "#FFC0C0",
          foreground: "#5A1E1E",
        },
        secondary: {
          DEFAULT: "#FF8C8C",
          foreground: "#5A1E1E",
        },
        muted: {
          DEFAULT: "#E6B4B4",
          foreground: "#4A2A2A",
        },
        accent: {
          DEFAULT: "#C0E0FF",
          foreground: "#1F3A57",
        },
        destructive: {
          DEFAULT: "#FF4C4C",
          foreground: "#FFFFFF",
        },
        border: "#20185B",
        input: "#20185B",
        ring: "#20185B",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
