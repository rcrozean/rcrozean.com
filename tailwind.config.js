const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'wintergreen-dream': '#6b9080',
        'cambridge-blue': '#a4c3b2',
        'light-cyan': '#cce3de',
        'lav-cream': '#eaf4f4',
        'mint-cream': '#f6fff8',
        'space-cadet': '#21295c',
        'dark-cornflower-blue': '#1b3b6f',
        'blue-sapphire': '#065a82',
        'cg-blue': '#1c7293',
        'cadet-grey': '#9eb3c2',
      }
    },
  },
  plugins: [],
}
