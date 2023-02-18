/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ["Source Sans Pro", "Helvetica", "Arial", "sans-serif"],
      mono: ["Ubuntu Mono", "monospace"],
      serif: ["Playfair Display", "serif"],
    },
    extend: {},
  },
  plugins: [require("daisyui"), require('@tailwindcss/typography'), require('tailwind-nord')],
};
