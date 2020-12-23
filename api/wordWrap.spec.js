const wordWrap = require("./wordWrap");

describe("WordWrap test suite", () => {
	it("Test first line test", () => {
		let inputString = "Hello, George. How are you today?"; 
		let lineWidth = 10;
		let actual = wordWrap(inputString, lineWidth).split("\n")[0];
		let expected = inputString.substring(0, lineWidth);

		expect(actual).toBe(expected);
	});
	it("Test last line of text", () => {
		let inputString = "Hello, George. How are you today?"; 
		let lineWidth = 10;
		let actual = wordWrap(inputString, lineWidth).split("\n")[wordWrap(inputString, lineWidth).split("\n").length - 2];
		let expected = "ay?";

		expect(actual).toBe(expected);
	});

	it("Test string length is less than line width", () => {
		let inputString = "Hello there!";
		let lineWidth = 20;
		let actual = wordWrap(inputString, lineWidth)
		let expected = "Hello there!";

		expect(actual).toBe(expected);
	});

	it("Test empty string", () => {
		let inputString = ""; 
		let lineWidth = 10;
		let actual = wordWrap(inputString, lineWidth)
		let expected = "";

		expect(actual).toBe(expected);
	});

	it("Test invalid data type for line width", () => {
		let inputString = "Hello, George. How are you today?";
		let lineWidth = "Hello";
		expect(() => {
			wordWrap(inputString, lineWidth);
		}).toThrowError("Invalid data type for line width");
	});


	it("Test invalid data value for line width", () => {
		let inputString = "Hello, George. How are you today?";
		let lineWidth = -23;
		expect(() => {
			wordWrap(inputString, lineWidth);
		}).toThrowError("Invalid value for line width");
	});

});

