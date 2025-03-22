/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				// mellow: "#FFA500",
				// mellow: "#FFAD33",
				// darkYellow: "#DFA70C",
				// lightMellow: "#f4b67b",
				lightestMellow: "#fcead9",
				lighterMellow: "#f6c08e",
				lightMellow: "#f3ab68",
				mellow: "#ee8f34",
				darkMellow: "#e27712",
				darkerMellow: "#aa590e",
				darkestMellow: "#713b09",
				darkYellow: "#FF8B1B",
			},
		},
	},
	plugins: [],
};
