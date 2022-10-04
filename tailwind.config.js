/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "op-yellow":"#9c8344",
        "op-green":"#004d40",
        "op-light-blue":"#9dddce",
        "op-light-mint":"#c3f2d4",
        "op-clay":"#e8faec"
      }
    },
  },
  plugins: [],
}
