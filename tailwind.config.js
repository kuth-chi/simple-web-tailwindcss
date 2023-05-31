/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "sans" : ["Poppins", "sans-serif"],
        "khmeros" : ["Battambang", "cursive"],
        "khmertext" : ['Odor Mean Chey', 'serif'],
        "khmerh" : ["Moul", "cursive"],
      },
    },
  },
  plugins: [],
}

