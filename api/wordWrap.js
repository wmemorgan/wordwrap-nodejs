/**
 * Format string based on specified line width
 * @param {string} str - String input
 * @param {integer} lineWidth - maximum line width
 */
function wordWrap(str, lineWidth) {
	// Exception handling
	if (!str || str.length == 0 || str.length < lineWidth) return str;
	else if (!Number.isInteger(lineWidth)) throw new Error("Invalid data type for line width");
	else if (lineWidth <= 0) throw new Error("Invalid value for line width");

	const formattedStr = splitString(str, lineWidth);
	return formattedStr;
}

/**
 * Inserts line breaks into string based on line width
 * @param {string} str - String input
 * @param {integer} lineWidth - maximum line width
 * @param {string} updatedStr - stores formatted string
 */
function splitString(str, lineWidth, updatedStr="") {
	// Base case
	if (str.length === 0) return updatedStr;

	// Slice string
	let endIndex = str.length < lineWidth ? str.length : lineWidth;
	updatedStr += str.substring(0, endIndex) + "\n";
	let remainingStr = str.substring(endIndex);
	if (remainingStr) {
		str = remainingStr[0].replace(" ", "") + remainingStr.substring(1);
	} else {
		str = "";
	}

	return splitString(str, lineWidth, updatedStr);
}

module.exports = wordWrap;