import "./scss/style.scss"
// front page countdown
let eventEndDate = new Date("2019, 03, 30 23:59:59");

function countdown() {
  var now = new Date().getTime();
  var timeLeft = eventEndDate - now;

  var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  updateCountdown(days, hours, minutes, seconds)

  if (timeLeft < 0) {
    updateCountdown(0, 0, 0, 0);
  }
  setTimeout(countdown, 1000);
}

function updateCountdown(days, hours, minutes, seconds) {
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

countdown();

document.getElementById("menu-img").addEventListener("click", dropMenu);

function dropMenu() {
  document.getElementById("menu-list").classList.toggle("active");
}