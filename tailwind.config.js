/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#050D1F',
        'background-secondary': '#0A1730',
        card: '#0D1E3B',
        border: 'rgba(147,197,253,0.16)',
        'text-primary': '#EAF2FF',
        'text-secondary': '#9FB3D1',
        'text-muted': '#64748B',
        accent: '#3B82F6',
        'accent-hover': '#2563EB',
        'accent-cyan': '#22D3EE',
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}