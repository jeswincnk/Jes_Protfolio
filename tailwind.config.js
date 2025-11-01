/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#2D2D2D',
        'dark-card': '#3A3A3A',
        'gold': '#FFD700',
        'gold-hover': '#FFC700',
        'text-primary': '#E5E5E5',
        'text-secondary': '#B0B0B0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

