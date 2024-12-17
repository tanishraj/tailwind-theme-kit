import { generateFgColor } from "../../utils/generateFgColor";

export const injectVariables = (
	addBase,
	includedThemes,
	allThemes,
	customVariables,
	prefix,
) => {
	const themeStyles = {};

	for (const themeName of includedThemes) {
		const colors = allThemes[themeName];
		const selector = `:root.theme-${themeName}`;
		themeStyles[selector] = Object.entries(colors).reduce(
			(vars, [key, value]) => {
				vars[`--${prefix ? `${prefix}-` : ""}color-${key}`] = value;
				vars[`--${prefix ? `${prefix}-` : ""}color-fg-${key}`] =
					generateFgColor(value);
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
