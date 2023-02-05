/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ["Ubuntu", "Helvetica", "Arial", "sans-serif"],
      mono: ["Ubuntu Mono", "monospace"],
    },
    extend: {},
  },
  plugins: [require("daisyui"), require('@tailwindcss/typography')],
};
