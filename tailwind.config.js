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
          950: '#051329',
          900: '#0B1F3B',
          800: '#122B4F',
          700: '#1E3A8A',
        },
        electric: {
          400: '#3898FF',
          500: '#0D5BEF',
          600: '#1D4ED8',
          700: '#1E40AF',
        },
        slateText: '#64748B',
        brandBg: '#F8FAFC',
        darkText: '#051329',
      },
      fontFamily: {
        sans: ['DM Sans', 'Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
};
