/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        grey: '#D9D9D9',
        gray4: '#F7F7F7',
        mob: '#F8FAFF',
        gray2: '#E3E3E3',
        grey3: '#3F3F3F',
        blade: '#232323',
        blue: '#2885CA',
        lemon: {
          100: '#A1ECB1',
          200: '#1FC000',
        },
      },
    },
  },
  plugins: [],
};
