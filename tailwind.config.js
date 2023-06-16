/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'top-bottom': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 -4px 6px -2px rgba(0, 0, 0, 0.05)'
      },
      colors: {
        'gray-20': '#E9E9E9',
        'gray-50': '#C9CCD1',
        'gray-100': '#B1B1B1',
        'gray-200': '#585757',
        'gray-20-trans': '#43413d17',
        'gray-100-trans': '#43413d4a',
        'gray-300-trans': '#43413df2',
        'gray-500-trans': '#1f1e1ef5',
        'gray-500': '#474554',
        'primary-100': '#F6F1E6',
        'primary-300': '#B8AA87',
        'primary-500': '#34322f',
        'secondary-400': '#E0D4B7',
        'secondary-500': '#3C3830',
        // 'red-100': '#ed7a7a',
        // 'red-100': '#b7003d',
        // 'red-100': '#be3838',
        // 'red-100': '#c7332f',
        'red-100': '#c74037',
      },
      backgroundImage: (theme) => ({
        'gradient-yellowred': 'linear-gradient(90deg, #FF616A 0%, #FFC837 100%)',
        'mobile-home': 'url("./assets/HomePageGraphic.png")'
      }),
      fontFamily: {
        dmsans: ['DM Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },
      // ! ChatGPT said to put it with "backgroundImage" -wait for the end.
      content: {
        ecolvetest: 'url("./assets/EvolveText.png")',
        abstractwaves: 'url("./assets/AbstractWaves.png")',
        sparkles: 'url("./assets/Sparkles.png")',
        circles: 'url("./assets/Circles.png")',
      },
      animation: {
        'slide-in-left': 'slide-in-left 0.3s forwards',
        'slide-out-right': 'slide-out-right 0.3s forwards',
      },
      keyframes: {
        'slide-in-left': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-out-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
    // * Media queries
    screens: {
      xs: '480px',
      sm: '768px',
      md: '1060px',
    }
  },
  plugins: [],
}
