/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-circle': 'radial-gradient(circle, rgba(63, 0, 113, 1) 19%, rgba(251, 37, 118, 1) 39%, rgba(51, 47, 208, 1) 68%, rgba(0, 2, 161, 1) 87%);'
			},
			colors: {
				'color-gradient-circle': 'radial-gradient(circle, rgba(63, 0, 113, 1) 19%, rgba(251, 37, 118, 1) 39%, rgba(51, 47, 208, 1) 68%, rgba(0, 2, 161, 1) 87%);',
				'primary': 'rgb(51, 47, 208)',
				'secondary': 'rgb(251, 37, 118)',
				'custom-purple': 'rgb(63, 0, 113)'
			},
			// animation: {
			// 	'moving-background': 'moving-background 5s ease-in-out'
			// },
			// keyframes: {
			// 	'moving-background': {
			// 		'0%': {
			// 			transform: 'translateY(0)',
			// 			opacity: 0
			// 		},
			// 		'66%': {
			// 			opacity: 0.4
			// 		},
			// 		'100%': {
			// 			transform: 'translateY(-150px)',
			// 			opacity: 0
			// 		}
			// 	}
			// },
		},
	},
	plugins: [],
}
