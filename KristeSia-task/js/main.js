// Hamburger
const mobileMenuButton = document.querySelector(".js-mobile-menu-button");
const headerNavigation = document.querySelector(".js-header-navigation");
const pageHeader = document.querySelector(".js-header");

document.addEventListener('click', (event) => {
  const isClickInsideMobileButton = mobileMenuButton.contains(event.target);
  if (isClickInsideMobileButton) {
    mobileMenuButton.classList.toggle('mobile-menu-button-active');
    headerNavigation.classList.toggle('header-navigation__list--active');
    pageHeader.classList.toggle('page-header-overlay');
  } else {
    mobileMenuButton.classList.remove('mobile-menu-button-active');
    headerNavigation.classList.remove('header-navigation__list--active');
    pageHeader.classList.remove('page-header-overlay');
  }
});



// Time counting
var countDownDate = new Date("Jan 23, 2019 15:37:25").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);


  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

}, 1000);
