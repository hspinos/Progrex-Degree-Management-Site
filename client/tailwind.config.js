module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			animation: {
				wiggle: "wiggle 1.5s ease-in-out infinite",
			},
			keyframes: {
				wiggle: {
					"0%, 100%": { transform: "rotate(-3deg)" },
					"50%": { transform: "rotate(3deg)" },
				},
			},
		},
		inset: {
			5: "5px",
			8: "8px",
		},
	},
	plugins: [],
};
