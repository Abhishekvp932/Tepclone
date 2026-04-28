module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./service/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "primary-dark": "var(--primary-dark)",
        "primary-glow": "var(--primary-glow)",
        dark: "var(--dark)",
        "dark-card": "var(--dark-card)",
        "dark-border": "var(--dark-border)",
        "dark-surface": "var(--dark-surface)",
      },
      fontFamily: {
        display: ["Rajdhani", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
