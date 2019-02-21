var deadline = new Date("Mar 05, 2019 10:00:00").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();
    var t = deadline - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    document.getElementById("day").innerHTML =days ;
    document.getElementById("hour").innerHTML =hours;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("second").innerHTML =seconds;
    if (t < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "TIME UP";
        document.getElementById("day").innerHTML ='00';
        document.getElementById("hour").innerHTML ='00';
        document.getElementById("minute").innerHTML ='00' ;
        document.getElementById("second").innerHTML = '00'; }
}, 1000); 