/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm-500': '500px',  // Add custom breakpoint at 500px
      },
    },
  },
  plugins: [],
}