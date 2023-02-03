/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			"sans": ["Ubuntu", "sans-serif"],
			"mono": ["Ubuntu Mono", "monospace"],
		},
		extend: { },

	},
	plugins: [
		require('daisyui'),
	],
}
