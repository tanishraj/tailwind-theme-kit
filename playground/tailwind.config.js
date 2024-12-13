import myPlugin from "../src/index.js";

module.exports = {
	content: ["./index.html"],
	myPlugin: {
		theme: true,
		prefix: "",
	},
	plugins: [myPlugin],
};
