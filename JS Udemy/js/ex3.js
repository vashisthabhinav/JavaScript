// Q-1
function fahrenheit(c){
    f = (9 * c / 5) + 32
    return f;
}

document.getElementById("convert").onclick = function(){
    var  celcius = document.getElementById("temp_celsius").value; 
    if(celcius==""){
        alert("Please enter a temperature")
    }
    else{
        document.getElementById("temp_fahr").innerHTML = fahrenheit(celcius);
    }
}

// Q-2
var i = 2022;
document.getElementById("anos_copa").innerHTML = "";
while(i<=2050){
    // console.log(i);
    document.getElementById("anos_copa").innerHTML += "<li>" + i + "</li>";
    i = i+4;
}

// Q-3
document.getElementById("calculate").onclick = function(){

    var grade1 = parseFloat(document.getElementById("grade1").value);
    var grade2 = parseFloat(document.getElementById("grade2").value);
    var absences = parseFloat(document.getElementById("absences").value);
        var avg = (grade1+grade2)/2;
        console.log(grade1);
        console.log(grade2);
        console.log(avg);
        var present = 20-absences;
        var absencesPercentage = (present/20)*100;
        if(avg<6.5 && absencesPercentage <70){
            var absences = document.getElementById("result").innerHTML = "The student is fail due to insufficient grades and number of absences.";  
        }
        else if(avg<6.5){
            var absences = document.getElementById("result").innerHTML = "The student is fail due to insufficient grades.";  
        }
        else if(absencesPercentage <70){
            var absences = document.getElementById("result").innerHTML = "The student is fail due to number of absences.";  
        }
        else{
            var absences = document.getElementById("result").innerHTML = avg;  
        }
}

// Q-4

var sales = [

    {
        'student': 'Jason Gomes',
        'date': '10/06/2018',
        'amount': 34.99,
        'refundRequested': null
        
    },

    {
        'student': 'Carlos Blue',
        'date': '10/06/2018',
        'amount': 29.99,
        'refundRequested': null
        
    },

    {
        'student': 'Martin Heyes',
        'date': '11/06/2018',
        'amount': 39.99,
        'refundRequested': '13/06/2018'
        
    },

    {
        'student': 'Isabella Hopkins',
        'date': '11/06/2018',
        'amount': 29.99,
        'refundRequested': null
        
    },

    {
        'student': 'Andrew Walt',
        'date': '12/06/2018',
        'amount': 34.99,
        'refundRequested': null
        
    },
];
document.getElementById("course_sales").innerHTML = "<tr>"+"</tr>"
// document.getElementById("course_sales").innerHTML += "<tr>" +"<td>" + "q"+"</td>"+"<td>" + "q"+"</td>"+"<td>" + "q"+"</td>"+"</tr>";
// document.getElementById("course_sales").innerHTML += "<td>" + "q"+"</td>";
// document.getElementById("course_sales").innerHTML += "<td>" + "w"+"</td>";
// document.getElementById("course_sales").innerHTML += "<td>" + "e"+"</td>";
var totalSold = 0;
var totalAmount = 0;
for(var i = 0;i<sales.length;i++){
    if(sales[i].refundRequested==null){
        var student =sales[i].student;
        var date =sales[i].date;
        var amount = parseFloat(sales[i].amount);
        console.log(student)
        console.log(date)
        console.log(amount)
        document.getElementById("course_sales").innerHTML += "<tr>" +"<td>" + student +"</td>"+"<td>" + date +"</td>"+"<td>" + amount +"</td>"+"</tr>";

        totalSold++;
        totalAmount = totalAmount+amount;
    }
}
document.getElementById("total_sold").innerHTML = totalAmount;

