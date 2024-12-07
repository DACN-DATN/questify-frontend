/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bruno-ace': ['Bruno Ace', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

