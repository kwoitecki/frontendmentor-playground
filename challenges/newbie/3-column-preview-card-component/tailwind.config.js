/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html'],
  theme: {
    extend: {
      fontSize: {
        base: '30px',
      },

      colors: {
        'custom-orange': 'hsl(31, 77%, 52%)',
        'custom-cyan': 'hsl(184, 100%, 22%)',
        'custom-dark-cyan': 'hsl(179, 100%, 13%)',
        'custom-light-gray': 'hsl(0, 0%, 95%)',
        'custom-transparent-white': 'hsla(0, 0%, 100%, 0.75)',
      },
    },
  },
  plugins: [],
};
