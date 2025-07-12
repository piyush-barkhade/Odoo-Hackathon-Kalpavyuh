/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2f4156",
        pale: "#c8d9e6",
        cream: "#f5efeb",
      },
    },
  },
  plugins: [],
};
