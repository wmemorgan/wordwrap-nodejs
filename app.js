function wordWrap(str, columnLength) {
    if (!str || str.length == 0 || str.length < columnLength) return str

    const updatedStr = splitString(str, columnLength)
    return updatedStr
}

function splitString(str, n, newStr = "") {
    // Base case
    if (str.length == 0) return newStr

    let endIndex = str.length > n ? n : str.length
    newStr += str.substring(0, endIndex) + "\n"
    nextStr = str.substring(endIndex)
    
    if (nextStr) {
        str = nextStr[0].replace(" ", "") + nextStr.substring(1)
    } else {
        str = nextStr
    }

    return splitString(str, n, newStr)
}

myStr = "Heeeellllllooooo, George. How are you feeling today?"
columnLength = 20

// console.log(splitString(myStr, columnLength))
console.log(wordWrap(myStr, columnLength))
// // wordWrap(myStr, columnLength)

/* TESTS */
let desc = "First line test"
let inputString = "Hello, George. How are you today?" 
let inputColumnLength = 10
let actual = wordWrap(inputString, inputColumnLength).split("\n")[0]
let expected = inputString.substring(0, inputColumnLength)
assertEqual(actual, expected, desc)

// desc = "Last line test"
// actual = wordWrap(inputString, inputColumnLength).split("\n")[wordWrap(inputString, inputColumnLength).split("\n").length - 1]
// console.log(wordWrap(inputString, inputColumnLength).split("\n"))
// expected = "you today? "
// assertEqual(actual, expected, desc)

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