/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        mainBlue: '#9EC2E5',
        mediaBlue: '#6E8EDB',
        strongBlue: '#010217',
        mainGray: '#1E1E1E',
        bodyColor: '#141416',
        content: '#CBCBCB'
      },
      fontFamily: {
        sans: 'var(--font-poppins)',
        alt: 'var(--font-quicksand)'
      },
      boxShadow: {
        main: '0px 4px 8px rgba(0, 0, 0, 0.6)'
      }
    }
  },
  plugins: []
};
