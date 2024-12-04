import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./comp/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "moody-blue":"#00aaff",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      maxWidth:{
        '192':'48rem'
      },
      minWidth:{
        '192':"48rem"
      }
    },
  },
  plugins: [],
} satisfies Config;
