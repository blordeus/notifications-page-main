/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./index.html",],
  theme: {
    fontFamily: {sans:'Plus Jakarta Sans'},
    colors: {
      'primary': '#4D5AE5',
      'secondary': '#434455',
      'tertiary': '#FFFFFF',
      'quaternary': '#F4F4FD',
      
    }
    extend: {},
  },
  plugins: [],
}