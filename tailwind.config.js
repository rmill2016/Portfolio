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
    fontFamily: {
      montserrat: ['Montserrat, san-serif'],
      hind: ['Hind Madurai, san-serif'],
      lora: ['Lora, san-serif'],
    },
    extend: {
      colors: {
        teal: '#00D1CD',
        dark: '#111827',
        gray: {
          50: '#C2C2C2',
        },
        blue: {
          50: '#D2ECFA',
        },
      },
    },
  },
  plugins: [],
}
