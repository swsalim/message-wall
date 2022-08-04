module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './helpers/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: [
        'Wotfard',
        'Inter',
        'Segoe\\ UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Open\\ Sans',
        'Helvetica\\ Neue',
        'sans-serif',
      ],
    },
    aspectRatio: {
      auto: 'auto',
      square: '1 / 1',
      video: '16 / 9',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
      14: '14',
      15: '15',
      16: '16',
    },
    extend: {
      width: {
        72: '18rem',
        84: '21rem',
        96: '24rem',
        108: '28rem',
      },
      maxWidth: {
        '2xl': '42rem',
        '7xl': '80rem',
        '8xl': '90rem',
      },
    },
  },
  variants: {
    extend: {
      sepia: ['hover', 'focus', 'group-hover', 'group-focus'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
