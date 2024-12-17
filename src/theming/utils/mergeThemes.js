export const mergeThemes = (defaultThemes, consumerThemes) => {
	return {
		...defaultThemes,
		...consumerThemes,
	};
};
