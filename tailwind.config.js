const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // eslint-disable-next-line prettier/prettier
    extend: {
      colors: {
        "light-blue": colors.lightBlue,
        cyan: colors.cyan
      }
    }
  },
  variants: {},
  plugins: []
};
