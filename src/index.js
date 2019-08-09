import './styles/main.scss';

  ///////////////
// Countdown timer //
  ////////////////

// Setting the date we're counting down to
const countDownDate = new Date("AUG 05, 2020 00:00").getTime();
// Update the count down every 1 second
const x = setInterval(function () {
    // Get todays date and time
    let now = new Date().getTime();
    // Find the distance between now and the count down date
    let distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    //Inserting values into spans in HTML and displaying result
    document.getElementById("timer-days").innerHTML = days;
    document.getElementById("timer-hours").innerHTML = hours;
    document.getElementById("timer-minutes").innerHTML = minutes;
    document.getElementById("timer-seconds").innerHTML = seconds;
    //Handling countdown when time runs-out
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown-timer").style.display = "none";
        document.getElementById("countdown-end").innerHTML = "OFFER HAS EXPIRED!";
    }
}, 1000);

  //////////////////
// Responsive NAV //
  //////////////////

const navBtn = document.getElementById("nav-toggle-button");

function toggleNavDisplay(e) {
  // Prevent hyperlink
  e.preventDefault();

  // Get NAV
  const responsiveNav = document.getElementById("responsive-nav");

  // Toggle reponsive NAV on fa-bars click
  responsiveNav.classList.toggle("openup");
}

navBtn.addEventListener("click", toggleNavDisplay);