module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridAutoColumns: {
        '2fr': 'minmax(0, 2fr)',
      },
      container: {
        padding: '4rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
