/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        forge: {
          black: "#0a0a0a",
          surface: "#161616",
          surfaceBright: "#222222",
          accent: "#e2ff33",
          accentMuted: "rgba(226, 255, 51, 0.1)",
          text: "#efefef",
          textMuted: "#a1a1a1",
          border: "#2a2a2a",
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
