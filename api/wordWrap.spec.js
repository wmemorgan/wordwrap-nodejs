const wordWrap = require("./wordWrap");

/* TESTS */
let desc = "First line test";
let inputString = "Hello, George. How are you today?"; 
let lineWidth = 10;
let actual = wordWrap(inputString, lineWidth).split("\n")[0];
let expected = inputString.substring(0, lineWidth);
assertEqual(actual, expected, desc);

desc = "Last line of text";
actual = wordWrap(inputString, lineWidth).split("\n")[wordWrap(inputString, lineWidth).split("\n").length - 2];
expected = "ay?";
assertEqual(actual, expected, desc);

desc = "String length is less than column length";
inputString = "Hello there!";
lineWidth = 20;
actual = wordWrap(inputString, lineWidth);
expected = "Hello there!";
assertEqual(actual, expected, desc);

desc = "Empty string";
inputString = "";
actual = wordWrap(inputString, lineWidth);
expected = "";
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
	if (a === b) {
		console.log(`${desc}...PASS`);
	} else {
		console.log(`${desc}...FAIL: ${a} != ${b}`);
	}
}