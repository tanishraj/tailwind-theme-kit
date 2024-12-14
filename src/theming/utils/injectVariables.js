import { generateFgColor } from "../../utils/generateFgColor";

export const injectVariables = (
	addBase,
	includedThemes,
	allThemes,
	customVariables,
) => {
	const themeStyles = {};

	for (const [themeName, colors] of Object.entries(allThemes)) {
		console.log({ themeName });
		const selector = `:root.theme-${themeName}`;
		themeStyles[selector] = Object.entries(colors).reduce(
			(vars, [key, value]) => {
				vars[`--color-${key}`] = value;
				vars[`--color-fg-${key}`] = generateFgColor(value);
				return vars;
			},
			{},
		);
		themeStyles[selector] = { ...themeStyles[selector], ...customVariables };
	}

	console.log(
		`${includedThemes.length} theme included [${includedThemes.toString()}]`,
	);

	addBase(themeStyles);
};
