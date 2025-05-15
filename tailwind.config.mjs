/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary': '#FF6B6B',
        'secondary': '#4ECDC4',
        'accent': '#FFE66D',
        'neutral': '#F7FFF7'
      },
      fontFamily: {
        'sans': ['Arial', 'sans-serif'],
        'serif': ['Times New Roman', 'serif']
      }
    },
  },
  plugins: [],
}