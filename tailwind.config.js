/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Times New Roman', 'serif'],
      'mono': ['Monaco', 'serif']
      // ... other font types (serif, mono) if you need them
    },
  },
  plugins: [require("@tailwindcss/typography")]
}