// Q-1

var shipments = 
        {
            'standard': {
                'leadTime': 7,
                'fee': 2
            },
            'express': {
                'leadTime': 3,
                'fee': 4.5
            }
        };

document.getElementById("shipments").onchange = function(){
    //First checking whether there is a change in the field using the onchange function.

    var selectedOption = document.getElementById("shipments").value;
    //Now, taking the value of the changed element in the var selectedOption.
    
    // console.log(selectedOption);

    //Now accessing the properties of the var that are required.

    // var leadTime = shipments.standard//Not a dynamic way as we are hardcoding the standard of the shipments.
    //So instead:

    var leadTime = shipments[selectedOption].leadTime;//Dynamic
    var fee = shipments[selectedOption].fee;//Dynamic

    // console.log(leadTime);
    // console.log(fee);

    //Now updating the information of orderDate and DeliveryDate 
    var orderDate = new Date();
    var numOfDays = (86400000)*leadTime;

    var deliveryDate = new Date( orderDate.getTime() + numOfDays );

    console.log(orderDate.toISOString());//To convert it into the ISO date format
    console.log(deliveryDate.toISOString());

    console.log(orderDate.toISOString().slice(0,10));//To slice it into the ISO date format
    console.log(deliveryDate.toISOString().slice(0,10));

    document.getElementById("order_date").innerHTML = orderDate.toISOString().slice(0,10);
    document.getElementById("delivery_date").innerHTML = deliveryDate.toISOString().slice(0,10);
    document.getElementById("delivery_fee").innerHTML = fee.toFixed(2);
}

// Q-2

var phones = 
        {
            'iphone_se_red': {
                'name': 'iPhone SE 64GB Red',
                'price': '450',
                'currency': 'US$',
                'imageUrl': "https://www.mhr.pt/232729-large_default/apple-iphone-se-64gb-red.jpg"
            },
            'iphone_11_black': {
                'name': 'iPhone 11 128GB Black',
                'price': '869',
                'currency': 'EUR',
                'imageUrl': "https://assets.swappie.com/iphon11musta1-300x300.jpg"
            },
            'iphone_8_plus_silver': {
                'name': 'iPhone 8 Plus 64GB Silver',
                'price': '519',
                'currency': 'US$',
                'imageUrl': "https://www.mhr.pt/196170/apple-iphone-8-plus-64gb-silver.jpg"
            }
        };


var radioItems = document.getElementsByName("product");

for(var a = 0; a < radioItems.length ; a++){

    radioItems[a].onchange = function() {
        //Recording the change in the radio buttons and executing thr code.
        // console.log("radio");

        //Now we know that there is a change. And everytime when there is a change, we need to check all the radio butttons regarding which button just changed.

        for(var b = 0; b < radioItems.length; b++){
            //If any of the elements has been checked, it means that we have found the changed element

            if(radioItems[b].checked){
                var selectedRadio = radioItems[b].value;
                // console.log(selectedRadio);

                document.getElementById("phone_name").innerHTML = phones[selectedRadio].name;              
                document.getElementById("phone_price").innerHTML = phones[selectedRadio].currency +" "+ phones[selectedRadio].price;
                document.getElementById("phone_image").innerHTML = phones[selectedRadio].imageUrl;     
            }
        }
    }
}

// Q-3

var isRunning = false;//When we load the page, the clock is not running. So, isRunning is false at that moment.
//We are going to use this vaariable to control if our button needs to start or stop the stopwatch.

var startTime,
    currentTime, 
    elapsedTime = 0,
    clockInterval,
    hours,
    minutes,
    seconds,
    milliseconds,
    remainder,
    formattedTime;

    function formatTime(number){
        if(number<10){
            return "0" + number.toString();
        }else{
            return number.toString();
        }
    }


document.getElementById("start_stop").onclick = function() {

    if(!isRunning){//First starting the stopwatch(isRunning is false)
        isRunning = true;

        if(elapsedTime==0){//If the clock has been started from beginning or has been reset.

            startTime = new Date().getTime();//will return in milliseconds
            //This will give us the current time
            // Now, we need to start the clock by updating it after every specific interval. So, using startInterval

        }else{//If the stopwatch was paused for a moment and then it has to restart from the same elapsed time

            startTime = new Date().getTime() - elapsedTime;
            // Instead of starting it now, we will pretend that we had already started it elapsedTime seconds ago
            // As elapsedTime = currentTime - startTime; and the startTime = new StartTime -elapsedTime
            //Then new elapsed time = currentTime - new startTime = currentTime - startTime + previousElapsedTime

        }

        clockInterval = window.setInterval(function(){

            currentTime = new Date().getTime();

            elapsedTime = currentTime - startTime;

            //Now sending the elapsed time to the stopwatch

            // 1 second	            1000
            // 1 minute	            60000
            // 1 hour	            3600000
            // 1 day	            86400000
            // 1 year (365 days)	31536000000

            hours     = Math.floor(elapsedTime / 3600000);//Rounding off if the milliseconds are less than the hour
            remainder = elapsedTime - (hours * 3600000);//Taking care of extra milliseconds that are left if ms is greater than the hour.All those seconds are added in the minutes.

            minutes   = Math.floor(remainder / 60000);//Now converting extra milliseconds into minutes and rounding them off as well
            remainder = remainder - (minutes * 60000);//These are the remaining milliseconds after we have added seconds and minutes

            seconds   = Math.floor(remainder / 1000);//Adding the remaining milliseconds into the seconds.
            remainder = remainder - (seconds * 1000);//Remaining milliseconds
            
            milliseconds = remainder;

            formattedTime = formatTime(hours) +":" + formatTime(minutes) +":" + formatTime(seconds) +":" + formatTime(milliseconds);

            // document.getElementById("stopwatch").innerHTML = elapsedTime;
            document.getElementById("stopwatch").innerHTML = formattedTime;

        },10);

    }else{//Then stopping the stopwatch.
        window.clearInterval(clockInterval);
        isRunning = false;
    }
}


document.getElementById("reset").onclick = function() {//Reset button

    startTime = new Date().getTime();//Setting the start time again to reset the clock
    //This will reset the start time and the stopwatch will start from beginning 

    //If the stopwatch is paused and is not running currently

    if(!isRunning){//stopwatch is paused
        elapsedTime = 0;// Making the elapsed time equal to zero 
        document.getElementById("stopwatch").innerHTML = "00:00:00:000";
    }
}
