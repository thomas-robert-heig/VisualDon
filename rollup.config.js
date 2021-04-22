import json from "@rollup/plugin-json";

export default {
	input: "20210312/index.js",
	output: {
		format: "cjs",
		file: "dist/index.js",
	},
	plugins: [json()],
};
