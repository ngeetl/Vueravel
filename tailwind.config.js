/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'space': 'linear-gradient(to right, #000000, #0f0c29, #302b63, #24243e, #000000)',
      },
    },
  },
  plugins: [],
}