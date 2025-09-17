/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // enable dark mode using a class
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inconsolata"', "sans-serif"], // global default
      },

      colors: {
        dark: {
          DEFAULT: "#0a0a0a", // main dark background
          light: "#1a1a1a", // slightly lighter sections
        },
      },
    },
  },
  plugins: [],
};
