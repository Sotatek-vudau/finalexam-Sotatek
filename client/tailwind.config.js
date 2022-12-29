/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'img_bg_login': "url('./assets/img/img_bg_login.png')",
      }
    },
  },
  plugins: [],
}
