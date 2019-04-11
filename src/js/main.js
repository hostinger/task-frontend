////////////////////////
//////Countdown timer
////////////////////////
// DOM elements
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
// Time
const now = new Date();
const timeToAdd = 590000;

// Print values to times DOM elements
function printCounterValues(distance) {
    // Time calculations for days, hours, minutes and seconds
    days.innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours.innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes.innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds.innerHTML = Math.floor((distance % (1000 * 60)) / 1000);
}

// Calculate time between visits
function getLastVisit() {
    let diff = now.getTime() - localStorage.getItem('lastVisitTime');
    diff = Math.round(diff / 1000 * 1000);

    return diff;
}

const timer = setInterval(function() {
    // Save last visit time to local storage
    localStorage.setItem('lastVisitTime', Math.round(now.getTime() / 1000 * 1000));

    if (localStorage.getItem('distance') > 0) {
        // Get time left from local storage
        const distance = localStorage.getItem('distance');
        // Get how long ago last visit was
        const diff = getLastVisit();

        if (diff > 1000) {
            // Run only if visitor was here later than 1s ago
            // Calculate new time
            const newTime = distance - diff;
            // Print values
            printCounterValues(newTime);
            // Save new time to local storage
            localStorage.setItem('distance', newTime);
        } else {
            // Print values
            printCounterValues(distance);
            // Calculate new time
            const newTime = distance - 1000;
            // Set new value for local storage
            localStorage.setItem('distance', newTime);
        }
    } else {
        // else if (localStorage.getItem('distance') == 0) {
        //     days.innerHTML = 'PA';
        //     hours.innerHTML = 'SI';
        //     minutes.innerHTML = 'BAI';
        //     seconds.innerHTML = 'GĖ';
        // }

        // Find the distance between now and the count down date
        const countDownDate = new Date();
        countDownDate.setTime(now.getTime() + timeToAdd);
        const distance = countDownDate.getTime() - now.getTime();

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
