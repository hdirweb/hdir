module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        'number': 'Roboto, sans-serif',
      },
      fontSize: {
        '7xl': '5rem',
      },
      height: {
        '72': '18rem',
        '80': '20rem',
      },
      maxWidth: {
        '7xl': '82rem',
      },
      colors: {
        brown: {
          900: '#E48A57'
        },
        gray: {
          100: '#F5FAF9',
          200: '#EEF2F1',
          400: '#DCE0DF',
          600: '#696969'
        },
        green: {
          900: '#2E7D87'
        }
      },
      width: {
        '72': '18rem',
        '80': '20rem',
      }
    },
  },
  variants: {
    backgroundColor: ['hover'],
    visibility: ['group-hover'],
  },
  plugins: [],
}
