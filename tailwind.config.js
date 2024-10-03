/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(10, 79%, 65%)",
        highlight: "hsl(186, 34%, 60%)",
        secondary: "hsl(25, 47%, 15%)",
        secondaryLight: "hsl(28, 10%, 53%)",
        cream: "hsl(27, 66%, 92%)",
        primaryLight: "hsl(33, 100%, 98%)",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
