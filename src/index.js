import plugin from "tailwindcss/plugin";
import { themes } from "./config/themes";
import { componentStyles } from "./components";
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
	const prefixedComponentStyles = prefixSelectors(
		componentStyles,
		pluginConfig.prefix,
	);
	console.log("OPTIONS ARE: ", prefixedComponentStyles);
	console.log("COMPONENT ARE: ", componentStyles);
	addComponents(prefixedComponentStyles);
});
