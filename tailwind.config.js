const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      orange: colors.orange,
      white: colors.white
    },
    extend: {  
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
