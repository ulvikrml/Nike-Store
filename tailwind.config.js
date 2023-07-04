/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  plugins: [require('prettier-plugin-tailwindcss')],
  theme: {
    extend: {}
  },
}

