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
console.log(typeof temperature); // The console will show object - which could be misleading


// V15- Functions


/* Functions are blocks of code designed to perform a specific task.
 Functions can help organize the code, avoid repetition and reduce the complexity of the code.
    We use the function keyword to create a function.
    Then we name the function following the same rules as for naming variables.
    Inside parenthesis we'll add the arguments (or parameters) of the function. Even if the function has no arguments, like above, we need to open and close parenthesis when creating and when invoking it.
    Inside the curly braces '{ }' we'll write the block of code we want to be executed every time the function is invoked.
    Semicolons are not needed at the end of function the declarations

Function arguments
    The arguments of the function are like variables that can be used inside the functions  
*/



function sumNumbers() { //Executing a function
    var num1 = 5;
    var num2 = 2;
    sum = num1+num2;
    console.log(sum);
}

sumNumbers();
/* 
The return statement
    Our function is now dynamic but it's performing only one task: sending the result to the console.
    This can be useful for testing purposes but not more than that.
    It would be good if our function could return the value so we could do anything we want with it.
*/
function sumArgs(num1,num2){
    // console.log(num1+num2);
    return num1+num2;
}

console.log(sumArgs(23,45));

// Quiz
// document.getElementById("sum_result").innerHTML = sumArgs(-27,55);



// L16 Data Types - Arrays
/* 
Arrays are ordered sequences of values.
Those values can be of any data type and are separated by comma. 
Arrays have to be declared inside braces.
Like strings, arrays also have length and their elements have their own indexes.
Array elements can also be arrays(Multi Dimensional Arrays) and objects.
*/

var primeNumbers = [ 2, 3, 5, 7, 11, 13 ];

console.log(typeof(primeNumbers))
console.log(primeNumbers[3])
 

/* 
Array operations
    Push - Add elements to the end of an array
    Pop - Remove the last element of an array
    Shift - Remove the first element of an array
    Unshift - Add elements to the beginning of an array
*/


var courses = [ "HTML", "Python", "PHP" ];

courses.push("Javascript");

console.log(courses);  // The console will show [ "HTML", "Python", "PHP", "Javascript" ]

courses.unshift("Bootstrap");

console.log(courses);  // The console will show [ "Bootstrap", "HTML", "Python", "PHP", "Javascript" ]

courses.pop();

console.log(courses);  // The console will show [ "Bootstrap", "HTML", "Python", "PHP" ]

courses.shift();

console.log(courses);  // The console will show [ "HTML", "Python", "PHP" ]


// It's also possible to redefine elements using the index notation

var ingredients = [ "bread", "cheese", "ham" ];

ingredients[0] = "whole bread";

console.log(ingredients);  // The console will show [ "whole bread", "cheese", "ham" ]

// Slicing

var students = [ "Peter" , "Joana", "Andrew", "Julio", "Kate", "Marie" ];
console.log( students.slice(0,3) ); // The console will show [ "Peter" , "Joana", "Andrew" ]
// 0th index will be included and it goes upto 3rd index (3 not included). If the end numberis not included, then the slicing occurs till the last index.

// We can also use negative numbers to start counting backwards from the end of an array.
//  To get the last three elements of an array we do:
console.log( students.slice(-3,) );

// Slice method can be applied to string as well.


// V17 Data Types - Objects

/* 
They are a key value pair - Just like dictionary in python
Objects, like arrays, are lists of elements. 
But unlike arrays, objects are not ordered. Instead of identifying elements by index, we identify them by key.
So an object is a list of key / value pairs separated by colon (:).
Objects have to be declared inside curly braces { }.
*/

var student = {
    'name': 'Abhinav Vashisth',
    'yearOfBirth': 2002,
    'ID': 'SBJ0001',
    'role': 'IT Enthusiast'
};

// Objects keys are also called properties. To access the properties we can use braces or the dot notation:
nameOfTheStudent1 = student['name']
nameOfTheStudent2 = student.name
console.log(nameOfTheStudent1)
console.log(nameOfTheStudent2)

//Important: the dot notation only works with properties that follow the variables naming rules.
var test = {
    'property1': 'Some value',
    '2a': 'Some other value',
    09335: 'Another value',
    'hello-world': 'Last value'
}; 

// 'property1' can be retrieved using the dot notation:

console.log( test.property1 );  // The console will show 'Some value'

// The other ones can't because they don't follow the naming rules. They can only be retrieved with braces.

console.log( test['hello-world'] ); // The console will show 'Last value'

student.role = 'IT Manager';  // alter a value
student.passport = 'KV09888';  // add a new property

console.log(student); 

/* 
{name: 'Abhinav Vashisth', 
yearOfBirth: 2002, 
ID: 'SBJ0001', 
role: 'IT Manager', 
passport: 'KV09888'}
*/



var courses = [
    {
        'title': 'Learn code in Python 3',
        'reviews': 6802,
        'students': 130129,
        'categories': ['programming', 'technology']
    },

    {
        'title': 'Learn PHP -  Beginner to Advanced',
        'reviews': 1204,
        'students': 30521,
        'categories': ['web development', 'programming']
    },

    {
        'title': 'Learn Microsoft Excel 2020',
        'reviews': 4209,
        'students': 18560,
        'categories': ['productivity', 'business']
    }
    
];

/* 
Therefore we can conclude the following:
    The courses variable is an array containing 3 elements.
    The elements of courses array are objects.
    Each of these objects has 4 elements
    The objects have values of different data types. Strings ('title'), numbers ('reviews' and 'students') and arrays ('categories')
*/

// To access web development from Learn PHP in the courses

try1 = courses[1].categories[0];
console.log(try1)
// To alter a value
try2 = courses[2].title = "Learn Microsoft Excel 2022";
console.log(courses)

/*
Some other aspects worth remembering:
    Arrays are identified by braces [ ].
    Arrays are ordered lists of values separated by comma.
    Objects are identified by curly braces { }.
    Objects elements are key / value pairs separated by colon.
    Objects elements are separated by comma.
*/


// **************************************************************************
// SECTION - 2;
// **************************************************************************

// Lesson-16 Events

// document.getElementById("click-me").onclick = function() {
//     // onclick executes this code when it is clicked.
//     alert("You clicked the button")
// }

document.getElementById("hover-me").onmouseover = function() {
    // onmouseover executes this code when it is hovered.
    alert("You moved the cursor over me.")
}
document.getElementById("leave-me").onmouseout = function() {
    // onmouseout executes this code when we move the pointer from the button.
    alert("You moved the cursor out of me.")
}

{/* <button id="click-me">Click here</button>
    <button id="hover-me">Move the cursor over here</button>
    <button id="leave-me">Move the cursor out of here</button> 
*/}

// onkeydown
// The onkeydown event can be applied to a specific element like a form field, or to the document object.

document.onkeydown = function(event) {
    // alert('You pressed a key');
    // console.log(event);
    console.log(event.keyCode);

    if(event.keyCode == 65){
        alert("You just pressed the A key.")
    }else{
        console.log("You just pressed another key.")
    }
};

// Another way of adding event in the webpage is:
//      First add onclick() in the HTML. --> <button onclick="show_alert()" id="click-me">Click here</button>
//      Then add the code for it in the js
show_alert(){
    alert("You clicked the button.")
}
