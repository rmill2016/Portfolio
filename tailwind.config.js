/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1440px',
      '2xl': '1920px',
    },
    extend: {
      height: {
        full: '100%',
        vh: 'var(--vh)',
      },
      minHeight: {
        full: '100%',
        vh: 'var(--vh)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(10px)' },
          '50%': { transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateX(-200vw)' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        slideLeft: 'slideLeft 12s linear infinite',
      },
    },
  },
  daisyui: {
    themes: [
      {
        theme: {
          primary: '#DEE2E6',
          secondary: '#2E2E2E',
          accent: '#1D6086',
          background: '#121212',
        },
      },
    ],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
