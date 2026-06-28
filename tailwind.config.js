/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#111827',
        primarySoft: '#1f2937',
        accent: '#b45309',
        canvas: '#f8fafc',
        paper: '#ffffff',
        steel: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a'
        }
      },
      boxShadow: {
        soft: '0 16px 48px rgba(15, 23, 42, 0.08)',
        lift: '0 24px 60px rgba(15, 23, 42, 0.18)'
      },
      borderRadius: {
        xl2: '1.25rem'
      }
    }
  },
  plugins: []
};