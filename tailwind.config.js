/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#282c64',
        secondary: '#9064ac',
        'primary-light': '#363b7d',
        'secondary-light': '#a77bc0',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            h1: {
              color: '#282c64',
            },
            h2: {
              color: '#282c64',
            },
            h3: {
              color: '#282c64',
            },
            strong: {
              color: '#282c64',
            },
            a: {
              color: '#9064ac',
              '&:hover': {
                color: '#282c64',
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};