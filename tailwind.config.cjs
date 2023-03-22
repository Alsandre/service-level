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
        'main': 'rgba(243, 247, 255, 1)',
        'rowSelect': 'rgba(121, 73, 243, 1)',
        'cyan': 'rgba(71, 220, 201, 1)',
      }
    },
  },
  plugins: [],
}
