
// JavaScript

//
// JS Countdown clock for offer
//

// Setting the date we're counting down to
var countDownDate = new Date("FEB 28, 2019 00:00").getTime();
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
  //Inserting values into spans in HTML and displaying result
  document.getElementById("days-to-offer-end").innerHTML = days;
  document.getElementById("hours-to-offer-end").innerHTML = hours;
  document.getElementById("minutes-to-offer-end").innerHTML = minutes;
  document.getElementById("seconds-to-offer-end").innerHTML = seconds;
  //Handling countdown when time runs-out
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("left-container-countdown").style.display = "none";
    document.getElementById("count-down-to-offer-end").innerHTML = "OFFER HAS ENDED!";
  }
}, 1000);

//
// Mobile menu togle
//

var navButton = document.getElementById("nav-toggle-button");

function toggleNavDisplay(event) {
    // prevent hyperlink from running
    event.preventDefault();

    // get the resonsive-nav container
    var responsiveNav = document.getElementById("responsive-nav");

    // toggle the showNav CSS on the responsive nav container
    responsiveNav.classList.toggle("unfold");
}

navButton.addEventListener("click", toggleNavDisplay);
