// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enable class-based dark mode
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Extend the theme to include custom styles for dark mode
      colors: {
        dark: {
          bg: "#1a202c",
          card: "#2d3748",
          text: "#e2e8f0",
          primary: "#4a5568",
        },
        light: {
          bg: "#f7fafc",
          card: "#fff",
          text: "#1a202c",
          primary: "#4a5568",
        },
      },
    },
  },
  plugins: [],
};
