import myPlugin from "../src/index.js";

module.exports = {
	content: ["./index.html"],
	theme: {
		// extend: {
		// 	backgroundColor: {
		// 		primary: "var(--color-primary)",
		// 		secondary: "var(--color-secondary)",
		// 		accent: "var(--color-accent)",
		// 		info: "var(--color-info)",
		// 		success: "var(--color-success)",
		// 		warning: "var(--color-warning)",
		// 		error: "var(--color-error)",
		// 		neutral: "var(--color-neutral)",
		// 	},
		// 	textColor: {
		// 		primary: "var(--color-fg-primary)",
		// 		secondary: "var(--color-fg-secondary)",
		// 		accent: "var(--color-fg-accent)",
		// 		info: "var(--color-fg-info)",
		// 		success: "var(--color-fg-success)",
		// 		warning: "var(--color-fg-warning)",
		// 		error: "var(--color-fg-error)",
		// 		neutral: "var(--color-fg-neutral)",
		// 	},
		// 	myPlugin: {
		// 		customTheme: {
		// 			default: "#ff0000",
		// 			primary: "#ff0000",
		// 			secondary: "#0000ff",
		// 			accent: "#00ff00",
		// 			info: "#ff00ff",
		// 			success: "#00ffff",
		// 			warning: "#ffff00",
		// 			error: "#ff0000",
		// 			neutral: "#000000",
		// 		},
		// 	},
		// },
	},
	// myPlugin: {
	// 	themes: ["light", "aqua", "customTheme"],
	// 	prefix: "",
	// 	darkTheme: "dark",
	// 	customVariables: {},
	// },
	plugins: [myPlugin],
};
