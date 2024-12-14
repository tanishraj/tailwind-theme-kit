import myPlugin from "../src/index.js";

module.exports = {
	content: ["./index.html"],
	theme: {
		extend: {
			myPlugin: {
				customTheme: {
					default: "#ff0000",
					primary: "#ff0000",
					secondary: "#0000ff",
					accent: "#00ff00",
					info: "#ff00ff",
					success: "#00ffff",
					warning: "#ffff00",
					error: "#ff0000",
					neutral: "#000000",
				},
			},
		},
	},
	myPlugin: {
		themes: ["light", "aqua"],
		prefix: "",
		darkTheme: "dark",
		customVariables: {
			"--color-primary": "red",
		},
	},
	plugins: [myPlugin],
};
