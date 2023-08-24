/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-purple": "#6A4C93",
        "primary-blue": "#1982C4",
      },
    },
  },
  plugins: [],
};
