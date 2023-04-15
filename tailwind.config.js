/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{

        'myFont': ['Bebas Neue']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}