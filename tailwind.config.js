module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1440px',
      '3xl': '1920px',
    },
    colors: {
      teal: '#00D1CD',
      dark: '#111827',
      black: '#000',
      white: '#fff',
      gray: {
        500: '#C2C2C2',
      },
      blue: '#D2ECFA',
    },
    extend: {},
  },
  plugins: [],
}
