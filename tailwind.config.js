/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        custom: {
          primary: 'rgb(0,0,0)',
        },
      },
      fontFamily: {
        josefin: [
          'Josefin Sans',
          'Segoe UI',
          'Tahoma',
          'Geneva',
          'Verdana',
          'sans-serif',
        ],
        poppins: ['Poppins', 'Courier New', 'Courier', 'monospace'],
      },
    },
  },
  plugins: [],
};
