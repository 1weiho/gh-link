/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scrollDown: {
          "0%": { transform: "translate(0%, 0%)" },
          "50%": { transform: "translate(0%, -15%)" },
          "100%": { transform: "translate(0%, 0%)" },
        },
        clipboard: {
          "0%": { transform: "scale(1)", color: "rgb(100 116 139)" },
          "25%": { transform: "scale(0.8)" },
          "50%": { transform: "scale(1)" },
        },
      },
      animation: {
        scrollDown: "scrollDown 2s ease-in-out infinite",
        clipboard: "clipboard 0.4s ease-in-out forwards",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
