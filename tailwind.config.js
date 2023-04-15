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
      },
      animation: {
        scrollDown: "scrollDown 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
