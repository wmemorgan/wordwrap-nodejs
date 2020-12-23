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