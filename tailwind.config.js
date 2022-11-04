/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./features/**"
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      blue: {
        deep: 'hsl(228,70%,14%,100%)',
        dark: 'hsl(228,70%,46%,90%)',
        light: 'hsl(228,70%,54%,90%)',
        dark34: 'hsl(228,70%,54%,90%)',
        dark26: 'hsl(228,70%,46%,90%)',
      },
      gray: {
        dark: 'hsl(228,16%,24%)',
        light: 'hsl(228,16%,92%)',
      },
      white: 'hsl(228,6%,97%)',
      black: 'hsl(228,6%,3%)',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
