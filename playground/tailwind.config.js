import myPlugin from "../src/index.js";

module.exports = {
	content: ["./index.html"],
	theme: {
		extend: {
			backgroundColor: {
				primary: "var(--color-primary)",
				neutral: "var(--color-neutral)",
				accent: "var(--color-accent)",
			},
			textColor: {
				default: "var(--color-fg-default)",
				primary: "var(--color-fg-primary)",
				neutral: "var(--color-fg-neutral)",
			},
		},
	},
	myPlugin: {
		theme: "light",
		prefix: "",
	},
	plugins: [myPlugin],
};
