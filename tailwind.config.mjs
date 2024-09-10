/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			dropShadow: {
				white: '0 2px 8px rgb(255 255 255 / 0.25)',
			},
		},
	},
	plugins: [],
}
