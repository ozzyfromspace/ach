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
      mt: '624px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      blue: {
        deep: 'hsl(211,84%,30%)',
        dark: 'hsl(211,70%,34%,90%)',
        light: 'hsl(228,70%,54%,90%)',
        dark34: 'hsl(228,70%,54%,90%)',
        dark26: 'hsl(228,70%,46%,90%)',
      },
      gray: {
        dark: 'hsl(228,16%,24%)',
        link: 'hsl(228,21%,32%)',
        medium: 'hsl(228,21%,47%)',
        light: 'hsl(228,26%,96%)',
      },
      white: 'hsl(228,6%,97%)',
      black: 'hsl(228,6%,3%)',
      transparent: 'hsla(0,0%,0%,0%)',
    },
    fontFamily: {
      sans: ["Poppins", 'sans-serif'],
      // title: ['Kanit', 'sans-serif'],
      title: ['Dosis', 'sans-serif'],
      subtitle: ['Montserrat', 'san-serif'],
      exp1: ["Dosis", "sans-serif"],
      exp2: ["Fjalla One", "sans-serif"],
      exp3: ["Nanum Gothic", "sans-serif"],
      exp4: ["PT Sans Narrow", "sans-serif"],
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
