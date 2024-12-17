export const validateTheme = (themeName, themes) => {
	return Object.prototype.hasOwnProperty.call(themes, themeName);
};
