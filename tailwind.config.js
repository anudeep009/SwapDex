/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00F0FF',
        secondary: '#7000FF',
        dark: {
          DEFAULT: '#0A0A1B',
          card: '#12122C',
          hover: '#1A1A3F',
        },
        accent: {
          blue: '#2F7DFF',
          purple: '#A855F7',
          cyan: '#00E5E5',
        },
      },
    },
  },
  plugins: [],
};