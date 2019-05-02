const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('may 5, 2019 00:00:00').getTime(),x = setInterval(function() {
	let now = new Date().getTime(), distance = countDown - now;
	document.getElementById('days').innerText = Math.floor(distance / (day)),
    document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
    document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
    document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
})

function myFunction() {
  var x = document.getElementById("navbar_right");
  if (x.className === "navbar_right") {
    x.className += " responsive";
	
  } 
  else {
    x.className = "navbar_right";
  }
  var y = document.getElementById("menu");
  if (y.className === "menu") {
    y.className += " change";
  } 
  else {
    y.className = "menu";
  }
}