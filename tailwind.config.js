/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
				NTR: ["NTR", "sans-serif"],
			},
			backgroundImage: {
				hero: "url('../src/images/hero.jpg')",
			},
			textColor: { main: "#1D0029" },
			colors: { primary: "#12001A" },
			animation: {
				blink: "blink 1s steps(1, end) infinite",
			},
			keyframes: {
				blink: {
					"0%, 100%": { opacity: 1 },
					"50%": { opacity: 0 },
				},
			},
		},
	},
	plugins: [],
	darkMode:"class"
};
