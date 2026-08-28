/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        jaivik: {
          green: '#2f5d2f',     /* Official Brand Green */
          dark: '#1c381c',
          soil: '#181e18',
          sand: '#f5f2eb',
          lightSand: '#faf8f5',
          accent: '#d4b483',
          card: '#244724'
        }
      },
      fontFamily: {
        title: ['Syne', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif']
      }
    }
  },
  plugins: []
}
