////////////////////////
//////Countdown timer
////////////////////////
const countDownDate = new Date();
const daysToAdd = 3;
countDownDate.setDate(countDownDate.getDate() + daysToAdd);

const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const timer = setInterval(function() {
    // Get todays date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate.getTime() - now;

    // Time calculations for days, hours, minutes and seconds
    days.innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours.innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes.innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds.innerHTML = Math.floor((distance % (1000 * 60)) / 1000);
}, 1000);

///////////////////////////
//Mobile navigation interactivity
///////////////////////////
const mobileNav = document.querySelector('.header__mobile-nav-holder');
const mobileNavButton = document.querySelector('.header__burger-cont');
const mobileX = document.querySelector('.x-button');

mobileNavButton.addEventListener('click', () => {
    mobileNav.classList.toggle('visible');
    mobileNav.classList.toggle('is-animated');
});

mobileX.addEventListener('click', () => {
    mobileNav.classList.toggle('visible');
    mobileNav.classList.toggle('is-animated');
});
