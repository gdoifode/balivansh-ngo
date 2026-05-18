import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        earth: {
          50: "#fdf8f0", 100: "#f5ead6", 200: "#ebdbb2", 300: "#d4b896",
          400: "#b8936e", 500: "#9c6f47", 600: "#7a5533", 700: "#5c3f26",
          800: "#3e2a1a", 900: "#201510",
        },
        field: {
          50: "#f0f9e8", 100: "#d9f0c4", 200: "#b5e08c", 300: "#8ecc54",
          400: "#6db834", 500: "#4a8f1e", 600: "#3a7118", 700: "#2b5412",
          800: "#1c380c", 900: "#0e1c06",
        },
        saffron: {
          50: "#fff8ed", 100: "#ffefd4", 200: "#ffdca8", 300: "#ffc170",
          400: "#ff9d38", 500: "#ff8011", 600: "#f06407", 700: "#c74a08",
          800: "#9e3a0f", 900: "#7f3110",
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        body: ['"Source Sans 3"', "sans-serif"],
        marathi: ['"Noto Sans Devanagari"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
