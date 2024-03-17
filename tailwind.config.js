/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js"],
  theme: {
    extend: {
      maxWidth: {
        50: '50%',
        60: '60%',
        70: '70%',
        80: '80%',
        90: '90%',
  },
    fontFamily: {
      'Cantora':['Cantora One', 'sans-serif']
  },
  keyframes: {
    'open-menu': {
      '0%': {transform: 'scaleY(0)'},
      '80%': {transform: 'scaleY(1.2)'},
      '100%': {transform: 'scaleY(1)'},
    },
  },
  animation: {
    'open-menu': 'open-menu 0.5s ease-in-out forwards',
  }
},
  plugins: [],
},

}
