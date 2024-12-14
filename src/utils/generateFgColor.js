import { parse, wcagContrast } from "culori";

export function generateFgColor(bgColor) {
	const bgParsed = parse(bgColor);
	const whiteContrast = wcagContrast(bgParsed, "#ffffff");
	const blackContrast = wcagContrast(bgParsed, "#000000");

	// Return white or black depending on the contrast ratio
	return whiteContrast > blackContrast ? "#ffffff" : "#000000";
}
