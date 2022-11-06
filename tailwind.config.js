/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "supa-gray": "#121212",
        "supa-green": "#46CF8E",
        "supa-white": "#F0F0F0",
      },
      blur: {
        "supa-extreme": "70px",
      },
      animation: {
        "supa-fade-in-top-bottom": "supa-fade-in-top-bottom 1.25s ease-out",
        "supa-fade-in-bottom-top": "supa-fade-in-bottom-top 1.25s ease-out",
        "supa-fade-in": "supa-fade-in 1.25s ease-in-out",
      },
      keyframes: {
        "supa-fade-in-top-bottom": {
          "0%": {
            opacity: 0,
            transform: "translateY(-30%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        "supa-fade-in-bottom-top": {
          "0%": {
            opacity: 0,
            transform: "translateY(50%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        "supa-fade-in": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
