function wordWrap(str, columnLength) {
    if (!str || str.length == 0 || str.length < columnLength) return str

    const words = str.split(" ").reverse()
    // console.log(`WORDS: `, words)
    const lines = []
    while (words.length > 0) {
        let lineLength = columnLength
        let currentLine = ""
        while (lineLength > 0) {
            let currentWord = words.pop()
            currentLine += currentWord + " "
            lineLength -= currentLine.length
        }
        lines.push(currentLine)
    }
    // console.log(`LINES: `, lines)
    return lines.join("\n")
}


myStr = "Hello, George. How are you today?"
columnLength = 10

// console.log(wordWrap(myStr, columnLength))
// // wordWrap(myStr, columnLength)

/* TESTS */
let desc = "First line test"
let inputString = "Hello, George. How are you today?" 
let inputColumnLength = 10
let actual = wordWrap(inputString, inputColumnLength).split("\n")[0]
let expected = "Hello, George. "
assertEqual(actual, expected, desc)

desc = "Last line test"
actual = wordWrap(inputString, inputColumnLength).split("\n")[2]
expected = "you today? "
assertEqual(actual, expected, desc)

desc = "String length is less than column length"
inputString = "Hello there!"
columnLength = 20
actual = wordWrap(inputString, columnLength)
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