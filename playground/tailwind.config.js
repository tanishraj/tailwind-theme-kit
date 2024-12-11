import myPlugin from "../src/index.js";

module.exports = {
	content: ["./index.html"],
	myPlugin: {
		theme: true,
		prefix: "tk-",
	},
	plugins: [myPlugin],
};
