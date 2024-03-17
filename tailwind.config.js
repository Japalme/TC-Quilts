/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
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
},
  plugins: [],
},

}
