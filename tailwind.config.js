module.exports = {
	darkMode: "media",
	mode: "jit",
	purge: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				background: {
					DEFAULT: "white",
					dark: "black",
				},
				foreground: {
					DEFAULT: "black",
					dark: "#EDEDED",
				},
			},
		},
	},
};
