module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'roboto-regular': ['Roboto'],
        'rajdhani': ['Rajdhani'],
        'readex-pro': ['Readex Pro'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
