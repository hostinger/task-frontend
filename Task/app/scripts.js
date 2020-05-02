var menu = document.getElementById('menu');
var nav = document.getElementById('nav');
var exit = document.getElementById('exit');

menu.addEventListener('click', function(e) {
	nav.classList.toggle('hide-mobile');
	e.preventDefault();
});

exit.addEventListener('click', function(e) {
	nav.classList.add('hide-mobile');
	e.preventDefault();
});


// Set the date we're counting down to
var countDownDate = new Date("Feb 21, 2019 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

// Get todays date and time
var now = new Date().getTime();

// Find the distance between now and the count down date
var distance = countDownDate - now;

// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	days = ("00" + days).substr(-2);            
	hours = ("00" + hours).substr(-2);            
	minutes = ("00" + minutes).substr(-2);            
	seconds = ("00" + seconds).substr(-2);

// Display the result in the element with id
document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;




// If the count down is finished, write some text 
if (distance < 0) {
	clearInterval(x);
	document.getElementById("counter").innerHTML = "EXPIRED";
	}
}, 1000);