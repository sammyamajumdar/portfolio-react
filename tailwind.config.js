const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        
        openSans: ['sans-serif'], 
        Roboto: ['Roboto']
      },
      screens: {
        'xs': '300px',
        ...defaultTheme.screens,
      }
    },
  },
  plugins: [],
}