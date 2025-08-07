/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cursiveTitle: ['Great Vibes', 'cursive'],
        sansSubtitle: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

