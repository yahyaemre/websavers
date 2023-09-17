/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      dbxl: ["DBXLNightfever", "sans-serif"],
      nabla: ["Nabla", "sans-serif"],
    },
    plugins: [],
  }
}