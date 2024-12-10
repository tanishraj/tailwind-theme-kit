import plugin from "tailwindcss/plugin";

export default plugin(({ addComponents }) => {
	addComponents(
		{
			".btn": {
				padding: "0.5rem 1rem",
				borderRadius: "0.25rem",
				fontWeight: "600",
				display: "inline-flex",
				alignItems: "center",
				justifyContent: "center",
			},
			".btn-primary": {
				padding: "0.5rem 1rem",
				borderRadius: "0.25rem",
				fontWeight: "600",
				display: "inline-flex",
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: "#3b82f6",
				color: "#ffffff",
				"&:hover": {
					backgroundColor: "#2563eb",
				},
			},
		},
		
	);
});
