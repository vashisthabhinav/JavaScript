// One line comment

// alert("Alert message");

/*
    Multi line comment  
*/

console.log("Just checking console.1");
console.log("Just checking console.2");
/* If we want an output (anything writen) in the console section, console.log is used for this purpose.
But, if we are in the console itself then there is no need for this code as the outputs are seen directly.
*/


// DOM - Document Object Model
/* 
The Document Object Model is an object created by the web browser as soon as the page is loaded. 
This object contains all the nodes of our HTML page, which are the HTML elements.
With the DOM we'll be able to:
    Add, change and remove HTML elements
    Change attributes of HTML elements (like the 'class' or the 'src' of an image.)
    Change the CSS
    React upon page events (click, scroll, form input, hover, etc)
*/


// L5. Working With the DOM

// document.getElementById("blue_box").innerHTML = "<h1>changing</h1>"


// L6. Variables

var user_name = "Abhinav Vashisth";

console.log(user_name);

// document.getElementById("user_greeting_message").innerHTML = "Hello " + user_name + "!";

/* 
Variable names can contain:
    Letters
    Numbers
    Underscores (_)
    Dollar signs ($)
 */



// L7. Data Types String

var firstName = "Abhinav";  // we can use double quotation marks
    
var lastName = 'Vashisth'; // or single quotation marks

console.log(typeof(firstName)); // 'string'

var fullName = firstName + " " + lastName;

console.log(fullName);

firstName.length
firstName[4]

// String Replace
var url = "https://www.udemy.com";

console.log(url.replace("https://",""));


// L8. Number Data Types

var birthYear = 1982; 
var price = 16.99;  // decimal places must be separated by a dot.
var temperature = -5;

var bigNumber = 2e45; 
/* large numbers in Javascript can be represented by the exponential notation. 
// This example means 2 x 1045 */

// clear()--> Used to clear the console.
/* 
The Math Object
We can do more advanced operations using the built-in Math object and its methods.
  */                   

    var power = Math.pow(2,4);  /*  This does 24, which is 16. */

    var roundedNumber = Math.round(2.7); // Rounds to the nearest integer. Result: 3

    var roundUp = Math.ceil(4.3) // Rounds to the next integer. Result: 5
    
    var roundDown = Math.floor(4.6) // Rounds to the current integer. Result: 4

    var squareRoot = Math.sqrt(36) // Square root. Result: 6

    var randomNumber = Math.random() // The result is a random number between 0 and 1

    var randomNumber = Math.random()*100 // The result is a random number between 0 and 100

    // Methods of the number object
    var myNumber = 3.78633;
    // toFixed() rounds it to a fixed number of decimal places
    console.log( myNumber.toFixed(2) ); // will show 3.79
    console.log( myNumber.toFixed() ); // will show 3
    console.log( myNumber.toFixed(4) ); // will show 3.7863


// L9. Number Data Types-2

// Incremental operators


var myNumber = 20;
myNumber = myNumber + 5;
console.log(myNumber); // The result will be 25


myNumber = 1;
myNumber += 5;
console.log(myNumber); // The result will be 6

// We can also use *=, /= e -= for incremental multiplication, division and subtraction


// Type conversions
var firstNumber = "21"; 
var secondNumber = "4";
console.log(firstNumber + secondNumber);
// The result will be 214 because the plus sign does concatenation on strings.


var firstNumber = "21"; 
var secondNumber = "48";

console.log(  parseInt(firstNumber) +  parseInt(secondNumber) );//parseInt--> String to integer
//The result will be 25

// To do the opposite we can use the toString method.

var yearOfBirth = 2002;

console.log(yearOfBirth.toString() +  " is the year I was born.");//toString()--> integer to string


// L10. Booleans

/* 

>	Greater than
>=	Greater than or equal to
<	Less than
<=	Less than or equal to
==	Equal to
===	Identical (same type and value)
!=	Not equal to
!==	Not equal value or not equal type

*/

20 > 2; // true

2 >= 2; // true

5 < 5; // false

5 <= 10; // true

20 == 20; // true

'kritika' == 'ritika' // false

'a' == 'A' // false

20 != 10; // true

10 != 10; // false

"10" !== 10; // true - type is different --> Equal to operator

20 === "20"; // false - same value but different types --> Identical operator


/* 
Be careful when using greater than and less than operators with different data types. 
That can lead to unexpected results 
*/

// Booleans by conditionals

var orderValue = 1200;
if(orderValue>=1000){
    console.log("You are eligible to finance your order.");
}
else{
    console.log("You are not eligible to finance your order.");
}

// L11. Null and Undefined

var noValue;
console.log(noValue); // undefined
console.log(typeof noValue); // undefined

var name = "JavaScript";
console.log(name[0]); // Console will show "J"
console.log(name[4]); // Console will show "S"
console.log(name[10]); // Console will show undefined

var temperature = 35;
console.log(temperature);

// Null- not exactly a datatype but an object.
temperature = null;
console.log(temperature); // The console will show null
console.log(typeof temperature); // The console will show object - which could be misleadin