var HW = "Hello World ";
var myName = "Abhinav Vashisth"
var a  = "My name is Abhinav Vashisth. "
var _a = "coding";
var a1 = `${myName} studies at NIT Hamirpur and he loves ${_a}`
console.log(HW+a + a1)
var len = myName.length;
console.log(`Length of myName is ${len}`)
console.log("Hello\n \tWor\\ld")
// Dynamically inserting text in the webpage from JavaScript
document.getElementById('contentThroughJS').innerHTML = '<h3> This is an h3 heading inserted in the webpage with the help of JavaScript. '


// String Functions

var str = " This is a string."
console.log(str)
var position = str.indexOf('is')// Gives the first occurence of the entered string 
console.log(position)
position = str.lastIndexOf('is')// Gives the last occurence of the entered string 
console.log(position)
// Substring of a string
var substr = str.slice(1,5)
console.log(substr)
substr = str.substring(1,5)
console.log(substr)

var replace = str.replace('string','STRING')
console.log(replace)

// uppercase and lowercase
var uppercase = str.toUpperCase(str)
console.log(uppercase)
var lowercase = str.toLowerCase(str)
console.log(lowercase)

// Concatenate
var newStr = 'newString'
var concatenate = str.concat(newStr)
console.log(concatenate)

// Removing white spaces
var strWithWhiteSpaces = "    This has      whitespaces "
console.log(strWithWhiteSpaces)
console.log(strWithWhiteSpaces.trim())//Removes whitespaces from the start and the beginning

// Checking the character at a given index
var char = str.charAt(2)
console.log(char)
var charCode = str.charCodeAt(2)//Char code
console.log(charCode)

// Slicing
console.log(str[1])
console.log(str[2])
console.log(str[3])
console.log(str[4])