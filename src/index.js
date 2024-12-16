import plugin from "tailwindcss/plugin";
import { themes } from "./config/themes";
import { themes as defaultThemes } from "./theming/themes";
import { componentStyles } from "./components/themed";
import { generateThemeVars } from "./utils/generateThemeVars";
import { prefixSelectors } from "./utils/prefixSelector";
import { mergeThemes } from "./theming/utils/mergeThemes";
import { getIncludedThemes } from "./theming/utils/getIncludedThemes";
import { validateTheme } from "./theming/utils/validateTheme";
import { injectVariables } from "./theming/utils/injectVariables";
import { themedComponentStyles } from "./components/themed";
import { unThemedComponentStyles } from "./components/unthemed";

export default plugin((options) => {
	const {
		postcss,
		prefix,
		config,
		themes,
		theme,
		corePlugins,
		variants,
		addBase,
		addDefaults,
		addComponents,
		addUtilities,
		matchComponents,
		matchUtilities,
		addVariant,
		matchVariant,
	} = options;
	const pluginOptions = config().myPlugin;
	const {
		themes: pluginThemes = true,
		darkTheme: pluginDarkTheme = "dark",
		customVariables: pluginCustomVariables = {},
		prefix: pluginPrefix = "",
	} = pluginOptions;
	const consumerThemes = theme("myPlugin") || {};
	const allThemes = mergeThemes(defaultThemes, consumerThemes);
	const includedThemes = getIncludedThemes(pluginThemes, allThemes);

	if (pluginThemes === false) {
		addComponents(unThemedComponentStyles);
	} else {
		injectVariables(
			addBase,
			includedThemes,
			allThemes,
			pluginCustomVariables,
			pluginPrefix,
		);
		addComponents(themedComponentStyles);
	}

	// const consumerTheme = pluginConfig.theme || "light";
	// const prefixedComponentStyles = prefixSelectors(
	// 	componentStyles,
	// 	pluginConfig.prefix,
	// );
	// console.log(generateThemeVars(themes));
	// addBase(generateThemeVars(themes));
	// addComponents(prefixedComponentStyles);
});
