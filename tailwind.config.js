/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hotRose: '#bc2076',
        midnightViolet: '#32021f',
        frostedBlue: '#e4e8f7',
        cerulean: '#1282a2',
        pitchBlack: '#131301',
        softWhite: '#f6f6f6',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        anton: ['Syne', 'sans-serif'],  // Anton now uses Syne as fallback
        dmSans: ['DM Sans', 'sans-serif'],
        libre: ['Libre Baskerville', 'serif'],
      },
      borderRadius: {
        '20px': '20px',
      },
    },
  },
  plugins: [],
}
