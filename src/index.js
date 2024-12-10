import plugin from "tailwindcss/plugin";

export default plugin(({ addComponents }) => {
	addComponents({
		".btn": {
			padding: "0.5rem 1rem",
			borderRadius: "0.25rem",
			fontWeight: "600",
			display: "inline-flex",
			alignItems: "center",
			justifyContent: "center",
		},
		".btn-primary": {
			"@apply btn bg-blue-500 text-white hover:bg-blue-600": {},
		},
	});
});
