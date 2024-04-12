/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/**/*.{vue,js,ts,jsx,tsx}",
    "./src/views/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        raisin: "#1A1B25"
      }
    },
  },
  plugins: [],
}

