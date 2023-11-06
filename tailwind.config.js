/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        xs: '1.25rem',
        sm: '1.5rem',
        base: '1.875rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#000',
        white: '#fff',
        fade: 'rgba(0, 0, 0, 0.8)',
        gray: {
          100: '#f7fafc',
          200: '#ACACAC',
          300: '#C4C4C4',
          400: '#E4E4E4',
        },
        red: {
          100: '#BC1F27',
        },
        orange: {
          100: '#fffaf0',
        },
        yellow: {
          100: '#fffff0',
        },
        green: {
          100: '#f0fff4',
        },
        teal: {
          100: '#e6fffa',
        },
        blue: {
          100: '#2885CA',
        },
      },
      borderRadius: {
        none: '0',
        xs: '0px, 10px, 0px, 0px',
        sm: '0.125rem',
        xl: '10px, 0px, 0px, 0px',
        default: '0.25rem',
        md: '0.3125rem',
        lg: '0.5rem',
      },

      boxShadow: {
        sm: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        md: '20px 20px 15px 0px #00000040',
        outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      },
      backgroundImage: {
        'hero-pattern': "url('../src/assets/svgs/heroimage.svg')",
      },
    },
    plugins: [],
  },
};
