/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#10b981',
        'dark-green': '#059669',
        'light-green': '#d1fae5',
      },
    },
  },
  plugins: [],
}

