export default {
	buildOptions: {
		site: "https://muncomputersciencesociety.github.io/website-w2021/",
		sitemap: true,
	},
	devOptions: {
		tailwindConfig: "tailwind.config.js",
	},
	renderers: ["@astrojs/renderer-react"],
};
