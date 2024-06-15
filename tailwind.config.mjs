/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js',
		'./node_modules/preline/preline.js',
	],
	theme: {
		extend: {},
		fontFamily: {
			'sans': ['ui-sans-serif', 'system-ui'],
			'serif': ['DM Serif Display', 'serif'],
			'display': ['Jost', 'sans-serif'],
			'mono': ['ui-monospace', 'SFMono-Regular'],
		}
	},
	plugins: [
		require('flowbite/plugin'),
		require('preline/plugin')
	],
}