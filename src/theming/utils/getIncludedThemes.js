import { validateTheme } from "./validateTheme";

export const getIncludedThemes = (
	themes,
	allThemes,
	fallbackTheme = "light",
) => {
	let includedThemes = [];

	if (themes === true) {
		// Include all themes
		includedThemes = Object.keys(allThemes);
	} else if (Array.isArray(themes)) {
		// Include only specified themes
		includedThemes = themes.filter((theme) => validateTheme(theme, allThemes));
	} else {
		includedThemes = [fallbackTheme];
	}

	// Ensure fallback theme is included
	if (!includedThemes.includes(fallbackTheme)) {
		includedThemes.unshift(fallbackTheme);
	}

	return includedThemes;
};
