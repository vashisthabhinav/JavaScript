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

// *****************************
// L - 17 
// V23 - CSS Manipulation
// *****************************

/* 
With Javascript we can manipulate the CSS of any element of the page. 
For this, we just need to use the style property of the elements.
The style property is an object that has the CSS properties.
*/ 

document.getElementById("color_button").onclick = function() {
    document.getElementById("color_button").style['background-color'] = "yellow";// or style.backgroundColor
    document.getElementById("color_button").style.transform = "translateX(100px)";
}

// Another short methods of writing the code:


document.getElementById("color_button").onclick = function() {
    this.style['background-color'] = "yellow";// or style.backgroundColor
    this.style.transform = "translateX(100px)";
}

var button = document.getElementById("color-button");

button.onclick = function() {
    button.style['background-color'] = "yellow";// or style.backgroundColor
    button.style.transform = "translateX(100px)";
}

// *****************************
// L - 18 
// V24 - More getElement Methods
// *****************************

/* 
getElementsByClassName
    This method selects elements by class. 
    The difference now is that classes are not unique, we can have multiple elements sharing the same class. 
    Therefore, this method will always return an array containing the HTML elements that have that class.
*/

var element1 = document.getElementsByClassName("example");

console.log(element1);
element1[0].innerHTML = "Changing the first line of the code.";


/* 
getElementsByTagName
    This methods works just like the previous one, but this time we'll select element using the tag name (div, h1, p, img, etc).
*/

var paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

// The console will show an array: [ {...}, {...}, {...} ]


// *****************************
// L - 19 
// V25 - For and For/In Loops
// *****************************

/* 
Loops
    Loops are structures of repetition. 
    If we want to repeat a statement five times, we don't have to write it five times, we just need to run a loop.
    We can also use loops to run through the elements of an array. 
    No matter the size of the array, we just need to write the statements once.
*/

// For Loop

for (var a = 0; a < 5 ; a++) {
    console.log(a);
} 

var courses = [ "HTML", "Python", "PHP", "CSS", "JS","React", "JQuery", "Bootstrap"];

for (var i = 0; a < courses.length; a++){
    console.log(courses[a]);
}

/* 
For/In Loop
    The for/in loop comes handy when we need to run through objects, since this kind of data type doesn't have the length property.
*/

var car = {
    'Year': 2018,
    'Model': 'Evoke',
    'Manufacturer': 'Land Rover',
    'FuelType': 'Diesel'
}

for (var prop in car) {
    console.log( prop + ': ' + car[prop] );
}

// Loops and getElementsByMethod

var elements = document.getElementsByClassName("example");
for(var i = 0; i<elements.length;i++){
    elements[i].style.color = "orange";
    elements[i].style['font-weight'] = "bold";
}

// *****************************
// L - 20 
// V26 - While and dowhile loops
// *****************************


//While Loop
/*
The logic is the same but just the condition is written inside parenthesis.
The startinf variable (var count = 0) needs to be declared before writing the loop and the incremental operator should be written inside the loop.
*/
var count = 0;
while(count<5){
    console.log(count++);
}
/*
Do/while loop
The do/while loop works the same way, the only difference is that the condition is written at the end of the loop.
This means that this loop always runs at least once, before testing the condition.
*/
count = 20;
do{
    console.log(count++);
} while(count<5);


// *****************************
// L - 21 
// V27,28 - Conditionals
// *****************************

// Conditionals are used to determine if a block of code should or should not be executed depending on a given set of conditions.
var age = 17;

if (age < 18) {

    console.log('Underage');

} else {

    console.log('Overage');

}

// The console will show: 'Underage'


var age = 50;

if (age < 18) {

    console.log('Underage');

} else if (age >= 65) {

    console.log('Senior');

} else {

    console.log('Adult');

}

// The console will show: 'Senior'  

// Using Ternary if:
console.log(age<18?"Underage":age>=65?"Senior":"Adult")

/*
Testing multiple conditions at once with and / or
    && (and): when we use &&, all conditions need to be true so the the code is executed
    || (or): when we use ||, we just need one condition to be true to execute the code
*/

grade = 8;
absences = 4;

// Solving the problem with && (and): 

if (grade >= 7 && absences <= 5) {
    console.log( 'The student has been approved' );
} else {
    console.log( 'The student has failed' );
}

// Solving the problem with || (or):

if (grade < 7 || absences > 5) {
    console.log( 'The student has failed' );
} else {
    console.log( 'The student has been approved' );
}

// Both ways are correct

/*
Evaluating values as conditions
    In Javascript, just like Python, PHP etc., we can evaluate values as true or false without booleans. 
    Javascript considers to be false:
        false
        undefined
        null
        0
        NaN
        "" (empty string)
    All other values, numbers, strings, objects and arrays are considered to be true.
*/
var name = "";

// if (name) {
    
//     console.log("The name is " + name);

// } else {

//     console.log("The name has not been informed");

// }

// The console will show "The name has not been informed"

// Ternary if - another way of writing conditionals using the ternary notation.

console.log(name ? "The name is " + name:"The name has not been informed.");


// *****************************
// L - 22 
// V29 - Conditionals
// *****************************

/*
Nested loops and conditionals
    When we use loops inside loops or conditionals inside conditionals, this is called nesting. 
*/

var isMember = true;
    var age = 25;
if(isMember||age>65){
    console.log("The product is free");
}
else{
    if(age<18){
        console.log("The price of the product is $6")
    }else{
        console.log("The price of the product is $12")
    }
}

// Another method without the nesting
if(isMember||age>65){
    console.log("The product is free");
}else if (age>18){
    console.log("The price of the product is $6");
}else{
    console.log("The price of the product is $12")
}


var employees = [
        
    {
        'name': 'Charles Silva',
        'age': 45,
        'children': ['Andrew Silva', 'Maria Silva','Philipp Banks', 'Rose Banks', 'Tara Banks']
        
    },

    {
        'name': 'Elizabeth Green',
        'age': 32,
        'children': ['Peter Green']
        
    },

    {
        'name': 'George Banks',
        'age': 39,
        'children': ['Philipp Banks', 'Rose Banks', 'Tara Banks']
        
    }

];

document.getElementById("children").innerHTML = "";
for(var i=0;i<employees.length;i++){
    var childrenList = employees[i].children;
    for(var b=0; b<childrenList.length; b++){
        var child = childrenList[b];
        // console.log(child);
        document.getElementById("children").innerHTML += "<li>" + child + "</li>";// += sent to concatenate the string
    }
}


// *****************************
// L - 23 
// V30 - Global and Local Scope
// *****************************


/*
Variable scope defines the accessibility of a variable from different parts of the code. 
There are two main scopes in Javascript: Global and Local.
    Local scope
        Functions in Javascript have their own local scope. 
    This means that variables created inside functions cannot be accessed from outside the function.

    Global Scope
        Variables created outside functions belong to the global scope and can be accessed from anywhere in the code, including from inside functions.
    
    Variables created without the var keyword also belong to the global scope, even if they were created inside functions.
    This is something that should only be done intentionally as it can result in errors in your program that can be hard to spot.
*/

function create_name() {
    var personsName = 'Mary';// var keyword is the local variable
    // If var is not used, it will be in a global scope
    console.log(personsName);
}

create_name(); // The console will show 'Mary'

console.log(personsName); // The console will show an error because 
// we don't have access so the name variable.
// So, if we don't want any errors, we have to define a var called personsName outside of the function i.e., in the global scope.
// Functions are only accessible from the inside.

var personsName = "John";
if(true){
    var personsName = "Mary";
    console.log(personsName)
}
console.log(personsName)
//The if here will be able to replace the values of the personsName variable from teh inside of the loop
// This is because the conditionals have global scope.
// Any function created here is the part of the glocal scope.

for(var i = 0; i<3;i++){
    console.log("Parent loop: ", i)

    for(var i = 0; i<3;i++){
        // The naming of the variable in the parent and the child loop should be different because it can create problems here.
        // Like in this situation, when i is 0, the first parent console runs and then the child loops run till i turns 3 and only 0 is printed for the parent loop and both the loops exit. 
        console.log("Child loop: ", i)
    }
}

console.log("*******************");

// In order to deal with this problem, we use let keyword which always creates a local variable which can be used inside the any block of code that is inside curly braces.
for(let i = 0; i<3;i++){
    console.log("Parent loop: ", i)

    for(let i = 0; i<3;i++){
        // The naming of the variable in the parent and the child loop should be different because it can create problems here.
        // Like in this situation, when i is 0, the first parent console runs and then the child loops run till i turns 3 and only 0 is printed for the parent loop and both the loops exit. 
        console.log("Child loop: ", i)
    }
}

// const cannot be changed

const PI = 3.1415;
// PI = 0;//This will give an error

// *****************************
// L - 25 
// V35 - BOM - Browser Object Model
// *****************************

console.log( window.innerWidth );  
    /* This property returns the internal width of the browser's window  */

console.log( window.innerHeight );  
    /* This property returns the internal height of the browser's window  */

// The alert method and the console.log method are a part of the widow object. So intead of directly writing alert, we can say window.alert()
// window.alert("A")
window.console.log("Alert")


// All the global varaiables are also stored in the window object.
var myName = "Tom";
// This means that if you are creating a new variable called innerWidth, it is going to overwrite the original property from the window objects, so extra care should be taken while writing the variables.

//onmousemove
window.onmousemove = function(e){
    console.log(e.pageY);
    console.log(e.pageX);
    if(e.pageY<50){
        alert("Reached the top")
    }
}


// *****************************
// L - 26 
// V36 - Date and Time
// *****************************


// In Javascript we can easily work with Date & Time using the Date class. 
// To create an object of this type we use the new keyword.

// Creating a Date object
var dateObj = new Date();

console.log(dateObj)
//dateObj is just an object.
console.log(dateObj.getDate());
console.log(dateObj.getMonth());//Returns from 0-11
console.log(dateObj.getDay());
console.log(dateObj.getHours());
console.log(dateObj.getMilliseconds());
console.log(dateObj.getTime());//Returns the number of milliseconds since the Epoch(1st Jan, 1970)
// Epoch is used to set the starting point of counting time.
/*
Unix Epoch
    The Epoch is something present in most programming languages. 
    We can consider it the starting point of counting the time. 
    This is useful to do calculations with date and time.
    Javascript uses the Unix Epoch, which is: Jan 1st, 1970, 00:00:00, UTC.

1 second	        1000
1 minute	        60000
1 hour	            3600000
1 day	            86400000
1 year (365 days)	31536000000
*/

// How to calculate how many hours have passed since the Epoch?

var dateObj = new Date();

    dateObj = dateObj.getTime();

    var hours = dateObj / 3600000;

    console.log(Math.floor(hours));

/* 
How to create a specific date.
    One numeric argument: milliseconds since the epoch
    Two numeric arguments: year and month (** Don't forget months go from 0 to 11 **)
    Three numeric arguments: year, month and day
    Four numeric arguments: year, month, day and hours
    Five numeric arguments: year, month, days, hours, minutes
    Six numeric arguments: year, month, day, hours, minutes and seconds

We can also pass strings as arguments in three different formats:
    ISO date: "2020-03-18" (YYYY-MM-DD)
    Short Date: "03/18/2020" (MM/DD/YYYY)
    Long Date: "Mar 18 2020" or "18 Mar 2020"
*/

var dateObj = new Date("2020-03-18");
console.log( dateObj ); 
//Challenge: Calculating date intervals - If a product is ordered on March 26, 2020 and delivered on April, 02, 2020, how many days does it take to be delivered?

var orderDate = new Date(2020,2,26);
var deliveryDate = new Date(2020,3,2);
var noOfDays = (deliveryDate-orderDate)/86400000;
console.log(Math.floor(noOfDays))
document.getElementById("delivery_time").innerHTML = Math.floor(noOfDays)

// Now if we have given the number of days it takes to deliver and the delivery date, then finding the order date.

var deliveryDate1 = new Date(2020,3,2);
var noOfDays1 = 7;
var orderDate1 = deliveryDate - (noOfDays*86400000);
var dateObj1 = new Date(orderDate);
console.log(dateObj1)


// *****************************
// L - 27 
// V38 - Time Methods
// *****************************


/*
The window object has two methods that allow us to delay the execution of a block of code or execute it repetitively between an interval of time.
    setTimeout
        It accepts two arguments: the function that should be executed after the stipulated time and the stipulated time in milliseconds.
    setInterval
        It is similar to the setTimeout, the difference is that it keeps repeating the callback function forever, unless you stop it.
*/

console.log("Message 1");

// window.setTimeout(function(){},3000); It has two arguments inside the setTimeout function, one is the function(){} and other is 3000 i.e., 3 sec of time delay

window.setTimeout(function(){
    console.log("Message 2")
},3000);

// Now one example of Show

document.getElementById("show-loader").onclick = function(){
    document.getElementById("spinner-loader").style.display = "block";
    window.setTimeout(function(){
        document.getElementById("spinner-loader").style.display = "none";
    },3000);
}

// setInterval

var count = 0;

// window.setInterval(function(){
//     console.log(count);
//     count++;
// },1000);

// Interepting Time Methods

var timeInterval = window.setInterval(function(){
    console.log(count);
    count++;
    if(count>10){
        window.clearInterval(timeInterval);
    }
},1000);



// The Watch Challenge (V-39)

function formatTime(number){
    if(number<10){
        return "0" + number.toString();
    }else{
        return number.toString();
    }
}

window.setInterval(function(){
    var DateObj = new Date();
    // console.log(DateObj);
    var hours = DateObj.getHours(); 
    var minutes = DateObj.getMinutes();
    var seconds = DateObj.getSeconds();
    document.getElementById("hours").innerHTML = formatTime(hours);
    document.getElementById("minutes").innerHTML = formatTime(minutes);
    document.getElementById("seconds").innerHTML = formatTime(seconds);
},1000);



// *****************************
// L - 28 
// V40 - Break and Continue
// *****************************

/*
Break and Continue
    The break and continue statements are used mainly with loops and their purpose is either to interrupt the loop or just jump the current iteration.

    Break
        The break statement interrupts the loop execution or a switch statement.
    Continue
        The continue statement is used to jump the current iteration of a loop.
*/

var x = 0;
while(x<10){
    console.log(x)
    x++;
    if(x==5) {
        break;
    }
}

var num = 0;
    while (num < 20) {
        num++;
        if (num % 2 != 0) {
            continue;
        }
        console.log(num);
        //OR
        /*
        if(num%2 == 0){
            console.log(num)
        }
        */
    }
  
   
// *****************************
// L - 29 
// V41,42 - Forms
// *****************************
 
document.getElementById("show_option").onclick = function(){

    var selectField = document.getElementById("options");
    var selectedOption = selectField.options.selectedIndex;
    var selectedValue = selectField.options[selectedOption]
    console.log(selectedValue);
    console.log(selectedValue.innerHTML);
    document.getElementById("selected_option").innerHTML = selectedValue.innerHTML;

    // OR

    // var selectedOption = document.getElementById("options").value;
    // console.log(selectedOption);
    // We can get the value with less amount of code using this method.
    // However, the downside of this method is that we cannot use the innerHTML with this.
};

// Radio Buttons

document.getElementById("show_radio").onclick = function(){
    var radio = document.getElementsByName("gender");
    // console.log(radio)
    
    var radioSelected;

    for(var i = 0; i < radio.length; i++){
        if(radio[i].checked){
            //checked retturns true if that button is checked.
            radioSelected = radio[i];
            console.log(radioSelected);
            console.log(radioSelected.value);
            document.getElementById("selected_radio").innerHTML = radioSelected.value;
        }
    }
};

// CheckBoxes


document.getElementById("show_check").onclick = function(){
    var check = document.getElementsByName("interest");
    // console.log(check)

    document.getElementById("selected_check").innerHTML = "<ul>";

    for(var i = 0; i < check.length; i++){
        if(check[i].checked){
            //checked retturns true if that button is checked.
            document.getElementById("selected_check").innerHTML += "<li>" + check[i].value + "</li>";
        }
    }
    document.getElementById("selected_check").innerHTML += "</ul>";
};

