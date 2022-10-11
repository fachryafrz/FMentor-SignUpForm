/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "primary-red": "hsl(0, 100%, 74%)",
        "primary-green": "hsl(154, 59%, 51%)",
        "accent-blue": "hsl(248, 32%, 49%)",
        "neutral-dark-blue": "hsl(249, 10%, 26%)",
        "neutral-grayish-blue": "hsl(246, 25%, 77%)",
      },
      fontFamily: {
        poppins: ["'Poppins'", "sans-serif"],
      },
      boxShadow: {
        "custom-sm": "0px 4px 0px rgba(0, 0, 0, 0.15)",
        "custom-md": "0px 8px 0px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
