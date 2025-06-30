/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#000000",
        gray: {
          DEFAULT: "#737373",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#262626",
        },
        zinc: "#000000",
      },
    },
  },
  plugins: [],
};