/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // This tells Tailwind to look for class names in all JS/JSX/TS/TSX files in the 'src' folder
    "./public/index.html",  // Optionally, include any HTML files you want Tailwind to scan
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
