var countDownDate = new Date("sep 30, 2022 00:00:00").getTime();
var x = setInterval(function(){
    var now =new Date().getTime();
    var distance = countDownDate - now;


    var yearS = Math.floor(distance / (1000*60*60*24*365));
    var dayS = Math.floor((distance % (1000*60*60*24*365))/(1000*60*60*24));
    var hourS = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
    var minuteS = Math.floor((distance % (1000*60*60))/(1000*60));
    var secondS = Math.floor((distance % (1000*60))/1000);


    document.getElementById("years").innerHTML=yearS;
    document.getElementById("days").innerHTML=dayS;
    document.getElementById("hours").innerHTML=hourS;
    document.getElementById("minutes").innerHTML=minuteS;
    document.getElementById("seconds").innerHTML=secondS;

    if(distance<0){
        clearInterval(x);
        document.getElementById("years").innerHTML="00";
        document.getElementById("days").innerHTML="00";
        document.getElementById("hours").innerHTML="00";
        document.getElementById("minutes").innerHTML="00";
        document.getElementById("seconds").innerHTML="00";

    }
},1000);