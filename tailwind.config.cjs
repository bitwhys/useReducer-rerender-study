const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'src/**/*.{ts,tsx,js,jsx,html}'],
  theme: {
    extend: {
      colors: {
        trello: {
          canvas: '#0079BF',
          'on-accent': '#0067A3',
        },
      },
      fontFamily: {
        sans: ['LexendVariable', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
