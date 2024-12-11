export function prefixSelectors(obj, prefix) {
	const newObj = {};

	for (const [selectors, value] of Object.entries(obj)) {
		// A single entry might have multiple selectors, like ".btn, .link"
		const prefixedSelectors = selectors
			.split(",")
			.map((selector) => {
				const trimmed = selector.trim();
				if (trimmed.startsWith(".")) {
					// Insert prefix after the dot
					return `.${prefix}${trimmed.slice(1)}`;
				}
				// If it's a tag, pseudo-element, or something else,
				// you can decide how to handle it. Usually prefix is for classes.
				return trimmed;
			})
			.join(", ");

		newObj[prefixedSelectors] = value;
	}

	return newObj;
}
