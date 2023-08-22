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
      'vl-gray-blue': 'hsl(210, 60%, 98%)',
      'light-gray-blue-1': 'hsl(211, 68%, 94%)',
      'light-gray-blue-2': 'hsl(205, 33%, 90%)',
      'normal-gray-blue': 'hsl(219, 14%, 63%)',
      'dark-gray-blue': 'hsl(219, 12%, 42%)',
      'dark-blue-': 'hsl(219, 12%, 28%)',
    },
    extend: {},
  },
  plugins: [],
}