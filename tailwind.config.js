/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        custom: {
          primary: 'rgb(19, 0, 90)',
          'primary-light': 'rgb(0, 51, 124)',
          tosca: 'rgb(28, 130, 173)',
          green: 'rgb(3, 201, 136)',
        },
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '2.7rem',
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
