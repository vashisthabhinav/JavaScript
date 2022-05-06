// Q1
console.log("This is ex1.js")

// Q2
document.getElementById("student_message").innerHTML = "Hi, my name is Abhinav Vashisth, I'm 19 years old and I'm learning JavaScript. ";

// Q3
document.getElementById("result").innerHTML = (101/7).toFixed(2);
// var num1 = parseInt(document.getElementById("num_1").innerHTML);
// var num2 = parseInt(document.getElementById("num_2").innerHTML);
// var avg = (num1+num2)/2;
// avg = avg.toFixed(2);
// document.getElementById("result").innerHTML = avg;

// Q4

var phone1 = "988866552";
if(phone1.length==9){
    console.log("The number is valid")
}else{
    console.log("The number is not valid")
}
var phone2 = "99087612366";
if(phone2.length==9){
    console.log("The number is valid")
}else{
    console.log("The number is not valid")
}
var phone3 = 876543123;//Converting the number first to a string to apply the length function of the string.
var p3 =phone3.toString();
console.log(p3);
console.log(typeof(p3));
if(p3.length===9){
    console.log("The number is valid")
}else{
    console.log("The number is not valid")
}

// Q5

console.log(Math.pow(32,6));
console.log(32**6);

// Q6
var NAME;
var $num1;
// var typeof;keyword used
// var first-name; '-' not allowed
var attempt_2;
// var 2ndAttempt; number not allowed in the beginning
// var full name; whitespace not allowed

// Q7

var quantity = "25";
var number = 6;
var pressure;
var temperature = null;

console.log(quantity += quantity); //2525
console.log( (7+5) / number + 2 ); //4
console.log(pressure); //undefined
console.log(temperature); //null
console.log(typeof pressure); //undefined
console.log(typeof temperature); //object

// Q8
var https = "https://";
var url1 = "www.udemy.com";
console.log(url1.replace("www",https+"www"));
var url2 = "https://www.google.com";
console.log(url2.replace(https,""));