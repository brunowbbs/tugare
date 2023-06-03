/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#f7f7f7",
        light: "#ffffff",
        dark_orange: "#ED7421",
        light_orange: "#FFE6D9",
        dark_blue: "#13416B",
        light_blue: "#CFE0ED",
        dark_green: "#62C1C9",
        ligth_green: "#DCF6F8",
        dark_gray: "#707070",
        ligth_gray: "#F2F2F2",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
