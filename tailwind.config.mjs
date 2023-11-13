/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			keyframes: {
				songMove1: {
					"0%, 100%": { height: "4px" },
					"25%": { height: "7px" },
					"50%": { height: "14px" },
					"75%": { height: "9px" },
				},
				songMove2: {
					"0%, 100%": { height: "5px" },
					"25%": { height: "6px" },
					"50%": { height: "2px" },
					"75%": { height: "15px" },
				},
				bgAnimate: {
					"0%": {
						scale: "100%",
					},
					"100%": {
						scale: "110%",
					},
				},
			},
			animation: {
				playSong1: "songMove1 1s infinite linear",
				playSong2: "songMove2 1s infinite linear",
				playBgAnimate: "bgAnimate 1s forwards",
			},
		},
	},
	plugins: [],
};
