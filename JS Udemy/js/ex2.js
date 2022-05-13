// Q1
function fahrenheit(c){
    f = (9 * c / 5) + 32
    return f;
}
f1 = fahrenheit(38)
f2 = fahrenheit(24)
f3 = fahrenheit(1)

document.getElementById("fahr_1").innerHTML = f1;
document.getElementById("fahr_2").innerHTML = f2;
document.getElementById("fahr_3").innerHTML = f3;

// Q2
var classification = [ "John Hill" , "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green" ]; 
slicing = classification.slice(-3,)
console.log(slicing)
document.getElementById("best_students").innerHTML = slicing;

//Q3


var course = {
    'title': "Learn to Code in Python 3",
    'categories': ['programming', 'technology', 'python'],
    '5_stars_reviews': 420,
    '4_stars_reviews': 80,
    '3_stars_reviews': 33,
    '2_stars_reviews': 20,
    '1_stars_reviews': 4
}


    
a = course.title;
b = course.categories[0];

function percentage(r1,r2,r3,r4,r5){
    sum = r1+r2+r3+r4+r5;
    p = (r5/sum)*100;
    return parseInt(p);
    
}
r1 = course["1_stars_reviews"]
r2 = course["2_stars_reviews"]
r3 = course["3_stars_reviews"]
r4 = course["4_stars_reviews"]
r5 = course["5_stars_reviews"]

c = percentage(r1,r2,r3,r4,r5);

document.getElementById("course_title").innerHTML = a;
document.getElementById("main_category").innerHTML = b;
document.getElementById("reviews_5_stars").innerHTML = c;

//Q4


var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"]; 

x1 = shoppingList.pop(-1);
shoppingList.unshift(x1);
shoppingList.unshift(shoppingList.pop())//Better way
shoppingList.push("Cheese","Eggs");
console.log(shoppingList)