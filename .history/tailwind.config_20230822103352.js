/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./index.html",],
  theme: {
    fontFamily: {sans:'Plus Jakarta Sans'},
    colors: {
      'primary-red': 'hsl(1, 90%, 64%)',
      'primary-blue':' hsl(219, 85%, 26%)',
      'white': 'hsl(0, 0%, 100%)',
      'black': 'hsl(0, 0%, 0%)',
      'dark-gray': 'hsl(0, 0%, 55%)',
    },
    extend: {},
  },
  plugins: [],
}