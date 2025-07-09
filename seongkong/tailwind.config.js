/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // src 내부만 체크
  ],
  theme: {
    extend: {
      fontFamily: {
        kbo: ['"KBO Dia Gothic"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};