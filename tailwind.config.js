/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary:  ['Karla', 'system-ui'],
      },
      colors: {
        primary: {
          cyan: 'hsl(179, 62%, 43%)',
          cyann: 'hsl(179, 62%, 60%)',
          yellow: 'hsl(71, 73%, 54%)',
          gray: ' hsl(204, 43%, 93%)',
          blue: 'hsl(218, 22%, 67%)'
        }
      }
    },
  },
  plugins: [],
}

