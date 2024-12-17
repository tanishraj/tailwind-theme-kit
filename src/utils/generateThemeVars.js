import { generateFgColor } from "./generateFgColor";

export function generateThemeVars(themes) {
	const themeVars = {};
	for (const [themeName, colors] of Object.entries(themes)) {
		const selector = `:root.theme-${themeName}`;
		themeVars[selector] = Object.entries(colors).reduce(
			(vars, [key, value]) => {
				vars[`--color-${key}`] = value;
				vars[`--color-fg-${key}`] = generateFgColor(value);
				return vars;
			},
			{},
		);
	}

	return themeVars;
}
