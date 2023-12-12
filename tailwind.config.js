/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        alata: ['Alata', 'sans-serif'],
        'josefin-sans': ['Josefin Sans', 'sans-serif']
      },
      colors: {
        white: 'hsl(0, 0%, 100%)',
        black: 'hsl(0, 0%, 0%)',
        'dark-gray': 'hsl(0, 0%, 55%)',
        'very-dark-gray': 'hsl(0, 0%, 41%)'
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '3rem',
        lg: '8rem',
        xl: '9rem',
        '2xl': '12rem'
      }
    }
  },
  plugins: []
}
