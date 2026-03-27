/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        consciousness: {
          purple: '#a855f7',
          pink: '#ec4899',
          blue: '#3b82f6'
        }
      },
      animation: {
        'gradient-shift': 'gradientShift 15s ease infinite',
        'consciousness-pulse': 'consciousnessPulse 2s infinite',
        'shimmer': 'shimmer 3s infinite',
      }
    },
  },
  plugins: [],
}