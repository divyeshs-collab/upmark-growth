/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#071527',
          900: '#0B1F3B', // Primary Navy
          800: '#122B4F',
          700: '#1E3A8A',
        },
        electric: {
          400: '#3B82F6',
          500: '#2563EB', // Electric Blue
          600: '#1D4ED8',
          700: '#1E40AF',
        },
        lightblue: {
          50: '#F0F7FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA', // Light Blue
        },
        slateText: '#94A3B8', // Slate Grey
        brandBg: '#F3F6FB', // Background
        darkText: '#0F172A', // Dark text
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(11, 31, 59, 0.05)',
        'premium': '0 10px 30px -4px rgba(11, 31, 59, 0.08), 0 4px 12px -2px rgba(11, 31, 59, 0.04)',
        'card-hover': '0 20px 40px -10px rgba(37, 99, 235, 0.12), 0 8px 16px -4px rgba(11, 31, 59, 0.06)',
        'glow': '0 0 25px rgba(37, 99, 235, 0.25)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      }
    },
  },
  plugins: [],
}
