/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.vue",
  ],
  theme: {
    fontFamily: {
      sans: ['Daydream', 'sans-serif'],
      serif: ['Daydream', 'serif'],
    },
    colors: {
      transparent: 'transparent',
      
      'background': '#351F39',
      'card': "#726A95",
      
      'primary': "#719FB0",
      'secondary': "#A0C1B8",

      'text': "#DEE9ED",
      'paragraph': "#A6A5B1",
      'link': "#719FB0"
    },
  },
  plugins: [],
}

