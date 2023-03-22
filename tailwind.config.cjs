/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'marlin': 'rgba(33, 21, 67, 1)',
        'main': 'rgba(243, 247, 255, 1)'
      }
    },
  },
  plugins: [],
}
