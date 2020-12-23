/**
 * Format string based on specified line width
 * @param {string} str - String input
 * @param {integer} lineWidth - maximum line width
 */
function wordWrap(str, lineWidth) {
    if (!str || str.length == 0 || str.length < lineWidth) return str

    const formattedStr = splitString(str, lineWidth)
    return formattedStr
}

/**
 * Inserts line breaks into string based on line width
 * @param {string} str - String input
 * @param {integer} lineWidth - maximum line width
 * @param {string} updatedStr - stores formatted string
 */
function splitString(str, lineWidth, updatedStr="") {
    // Base case
    if (str.length === 0) return updatedStr

    // Slice string
    let endIndex = str.length < lineWidth ? str.length : lineWidth
    updatedStr += str.substring(0, endIndex) + "\n"
    remainingStr = !str.substring(endIndex) ? "" : str.substring(endIndex)
    if (remainingStr) {
        str = remainingStr[0].replace(" ", "") + remainingStr.substring(1)
    } else {
        str = ""
    }

    return splitString(str, lineWidth, updatedStr)
}

myStr = "Heeeellllllooooo, George. How are you feeling today?"
lineWidth = 20

console.log(wordWrap(myStr, lineWidth))

/* TESTS */
let desc = "First line test"
let inputString = "Hello, George. How are you today?" 
let inputColumnLength = 10
let actual = wordWrap(inputString, inputColumnLength).split("\n")[0]
let expected = inputString.substring(0, inputColumnLength)
assertEqual(actual, expected, desc)

desc = "Last line of text"
actual = wordWrap(inputString, inputColumnLength).split("\n")[wordWrap(inputString, inputColumnLength).split("\n").length - 2]
expected = "ay?"
assertEqual(actual, expected, desc)

desc = "String length is less than column length"
inputString = "Hello there!"
lineWidth = 20
actual = wordWrap(inputString, lineWidth)
expected = "Hello there!"
assertEqual(actual, expected, desc)

desc = "Empty string"
inputString = ""
actual = wordWrap(inputString, inputColumnLength)
expected = ""
assertEqual(actual, expected, desc)

function assertEqual(a, b, desc) {
    if (a === b) {
        console.log(`${desc}...PASS`)
    } else {
        console.log(`${desc}...FAIL: ${a} != ${b}`)
    }
}