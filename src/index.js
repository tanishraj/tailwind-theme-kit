import plugin from "tailwindcss/plugin";
import { themes } from "./config/themes";
import { componentStyles } from "./components";
import { generateThemeVars } from "./utils/generateThemeVars";
import { prefixSelectors } from "./utils/prefixSelector";

export default plugin((options) => {
	const {
		postcss,
		prefix,
		config,
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
	const pluginConfig = config().myPlugin;
	const consumerTheme = pluginConfig.theme || "light";
	const prefixedComponentStyles = prefixSelectors(
		componentStyles,
		pluginConfig.prefix,
	);
	console.log(generateThemeVars(themes));
	addBase(generateThemeVars(themes));
	addComponents(prefixedComponentStyles);
});
