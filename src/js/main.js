////////////////////////
//////Countdown timer
////////////////////////
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

function printCounterValues(distance) {
    // Time calculations for days, hours, minutes and seconds
    days.innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours.innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes.innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds.innerHTML = Math.floor((distance % (1000 * 60)) / 1000);
}

const timer = setInterval(function() {
    if (localStorage.getItem('distance') > 0) {
        const distance = localStorage.getItem('distance');

        // Print values
        printCounterValues(distance);

        // Find the distance between now and the count down date
        const newTime = distance - 1000;

        // Set new value for local storage
        localStorage.setItem('distance', newTime);
    } else {
        // else if (localStorage.getItem('distance') == 0) {
        //     days.innerHTML = 'PA';
        //     hours.innerHTML = 'SI';
        //     minutes.innerHTML = 'BAI';
        //     seconds.innerHTML = 'GĖ';
        // }
        const countDownDate = new Date();
        const daysToAdd = 3;
        countDownDate.setDate(countDownDate.getDate() + daysToAdd);

        // Get todays date and time
        const now = new Date().getTime();

        // Find the distance between now and the count down date
        const distance = countDownDate.getTime() - now;

        // Print values
        printCounterValues(distance);

        // Set initial value for local storage
        localStorage.setItem('distance', distance);
    }
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
