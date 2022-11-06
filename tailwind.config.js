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
        deep: 'hsl(228,70%,24%,100%)',
        dark: 'hsl(228,70%,44%,90%)',
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
    },
    fontFamily: {
      sans: ["Poppins", 'sans-serif'],
      title: ['Kanit', 'sans-serif'],
      subtitle: ['Montserrat', 'san-serif'],
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
