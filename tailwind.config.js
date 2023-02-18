/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        me: 'url(./assets/me.png)',
      },
      backgroundSize: {
        '50%': '50%',
        '66%': '66%',
        '85%': '85%',
        '95%': '95%',
        '100%': '100%',
      },
      colors: {
        custom: {
          primary: 'rgb(3, 201, 136)',
          'primary-hover': 'rgb(3, 240, 180)',
          'primary-inverse': 'rgb(255,255,255)',
          'bg-primary': 'rgb(19, 0, 90)',
          'primary-light': 'rgb(0, 51, 124)',
          tosca: 'rgb(28, 130, 173)',
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
      spacing: {
        '30px': '30px',
        '50px': '50px',
        '100px': '100px',
        '150px': '150px',
        '175px': '175px',
        '200px': '200px',
        '250px': '250px',
        '300px': '300px',
        '350px': '350px',
        '400px': '400px',
      },
    },
  },
  plugins: [],
};
