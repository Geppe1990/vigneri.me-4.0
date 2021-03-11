const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      heading: ["Anton", "sans-serif"],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      // black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue,
      black: {
        DEFAULT: '#1d1d1d'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
