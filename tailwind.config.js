/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.vue"],
  theme: {
    fontFamily: {
      sans: ["Daydream", "sans-serif"],
      serif: ["Daydream", "serif"],
    },
    colors: {
      transparent: "transparent",

      background: "#112D4E",
      card: "#3F72AF",

      primary: "#3F72AF",
      secondary: "#DBE2EF",

      white: {
        DEFAULT: "#F9F7F7",
        300: "#F9F7F7",
        500: "#DBE2EF",
      },
      link: "#3F72AF",
    },
  },
  plugins: [],
};
