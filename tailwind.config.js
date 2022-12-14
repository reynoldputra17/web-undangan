/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'elmessiri' : ['El Messiri Regular', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'] 
      }
    },
  },
  plugins: [],
}