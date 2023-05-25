/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        windowsImgXl: "url(../src/assets/3280.jpg)",
        windowsImgLg: "url(../src/assets/1125.jpg)",
        windowsImgSm: "url(../src/assets/520.jpg)",
      },
    },
  },
  plugins: [],
};
