/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html'],
  theme: {
    extend: {
      spacing: {
        'special-large': '88px',
        'special-medium': '35px',
        'special-small': '25px',
      },
      colors: {
        'custom-orange': 'hsl(31, 77%, 52%)',
        'custom-cyan': 'hsl(184, 100%, 22%)',
        'custom-dark-cyan': 'hsl(179, 100%, 13%)',
        'custom-light-gray': 'hsl(0, 0%, 95%)',
        'custom-transparent-white': 'hsla(0, 0%, 100%, 0.75)',
      },
      fontFamily: {
        'custom-heading': ['Big Shoulders Display', 'sans-serif'],
        'custom-paragraph': ['Lexend Deca', 'sans-serif'],
      },
      fontSize: {
        base: '15px',
        h2: '40px',
      },
      borderRadius: {
        'custom-large': '25px',
        'custom-small': '8px',
      },
      width: {
        btn: '146px',
      },
      height: {
        btn: '48px',
      },
      lineHeight: {
        custom: '25px',
      },
      maxWidth: {
        custom: '307px',
      },
      maxHeight: {
        custom: '500px',
      },
    },
  },
  plugins: [],
};
