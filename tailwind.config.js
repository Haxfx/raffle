module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  darkMode: false, // or 'media' or 'class'
  purge: {
    enabled: false,
    content: [
      // Uncomment when pushing to production
      './components/**/*.tsx',
      './components/**/**/*.tsx',
      './pages/*.tsx',
    ],
  },
  theme: {
    pseudo: {
      // defaults to {'before': 'before', 'after': 'after'}
      before: 'before',
      after: 'after',
      'not-first': 'not(:first-child)',
    },
    fontFamily: {
      Poppins: ['Poppins', 'sans-serif'],
      AvenirNextCyrRegular: ['AvenirNextCyr', 'Arial', 'sans-serif'],
      Oswald: ['Oswald'],
    },
    extend: {
      keyframes: {
        reverse: {
          to: { transform: 'rotate(360deg)' },
        },
        spin: {
          to: { transform: 'rotate(-360deg)' },
        },
      },
      colors: {
        white: '#e8e9f1',
        blue: {
          primary: '#008dff',
          background: '#0e0d30',
          backgroundLight: '#191b3d',
        },
        green: {
          primary: '#3ed7c7',
        },
        black: {
          light: '#262626',
          faded: '#00000059',
        },
        purple: {
          light: '#808191',
          medium: '#353340',
          primary: '#6345ed',
          dark: '#0a0927',
        },
        gray: {
          base: '#616161',
          background: '#fafafa',
          primary: '#dbdbdb',
        },
        red: {
          primary: '#ea5f5f',
        },
        orange: {
          primary: '#f09757',
          light: '#fb9e2d',
        },
      },
      gridTemplateColumns: {
        // Simple 2 column grid
        2: '1fr 4fr',
        // Complex site-specific column configuration
        footer: '1fr 3fr 1fr',
      },
      gridTemplateRows: {
        // Simple 5 row grid
        5: '1fr 6fr',
        8: 'repeat(8, 1fr)',
        9: 'repeat(9, minmax(0, 1fr))',
        10: 'repeat(10, minmax(0, 1fr))',
        20: 'repeat(20, minmax(0, 0.5fr))',
      },
      gridColumn: {
        'span-9-1': 'span 1 / span 9',
        'span-9-2': 'span 2 / span 9',
        'span-9-3': 'span 3 / span 9',
        'span-9-4': 'span 4 / span 9',
        'span-9-5': 'span 5 / span 9',
        'span-9-6': 'span 6 / span 9',
        'span-9-7': 'span 7 / span 9',
        'span-9-8': 'span 8 / span 9',
        'span-9-9': 'span 9 / span 9',
      },
      gridRow: {
        'span-7': 'span 7 / span 7',
        'span-8': 'span 8 / span 8',
        'span-9': 'span 9 / span 9',
        'span-10': 'span 10 / span 10',
      },
      gridRowEnd: {
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13',
      },
      width: {
        smallMedium: '50%',
        medium: '65%',
        large: '80%',
      },
      height: {
        smallMedium: '50%',
        medium: '65%',
        large: '80%',
      },
      fontSize: {
        xxs: '.60rem',
        xxxs: '.50rem',
      },
      maxHeight: {
        100: '28rem',
        104: '30rem',
      },
      borderRadius: {
        half: '50%',
      },
      animation: {
        'custom-spin': 'a1 2s linear infinite',
        'reverse-spin': 'a2 2s linear infinite',
      },
    },
  },
};
