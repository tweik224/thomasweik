/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif']
      },
      colors: {
        ink: '#1f2937',
        body: '#5c6b85',
        card: 'rgba(255, 255, 255, 0.74)',
        line: 'rgba(255, 255, 255, 0.6)',
        sky: {
          50: '#f0f7ff',
          100: '#e1effe',
          200: '#bfddfe',
          300: '#93c5fd',
          500: '#4f9be8',
          700: '#2c73bc'
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(15, 23, 42, 0.08)',
        lift: '0 14px 35px rgba(15, 23, 42, 0.14)'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  },
  plugins: []
}
