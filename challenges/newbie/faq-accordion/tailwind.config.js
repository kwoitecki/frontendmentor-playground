/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'c-white': 'hsl(0, 0%, 100%)',
        'c-light-pink': 'hsl(275, 100%, 97%)',
        'c-grayish-purple': 'hsl(292, 16%, 49%)',
        'c-dark-purple': 'hsl(292, 42%, 14%)',
      },
      fontFamily: {
        'c-font-family': ['Work Sans', 'sans-serif'],
      },
      fontWeight: {
        'c-light': '400',
        'c-normal': '600',
        'c-bold': '700',
      },
      fontSize: {
        'c-h1': '2rem',
        'c-h1-lg': '3rem',
        'c-p': '0.875rem',
        'c-p-desktop': '1rem',
      },
      borderRadius: {
        'custom-small': '8px',
        'custom-large': '16px',
      },
    },
  },
  plugins: [],
};
