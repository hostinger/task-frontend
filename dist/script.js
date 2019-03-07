var start = function () {
  let seconds = 58709; // Equals 16 hours, 8 minn and 29 sec as per design file.

  let countdown;
  const daysDisplay = document.querySelector('.days');
  const hoursDisplay = document.querySelector('.hours');
  const minutesDisplay = document.querySelector('.minutes');
  const secondsDisplay = document.querySelector('.seconds');

  function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);

      if (secondsLeft < 0) {
        clearInterval(countdown);
        return;
      }

      displayTimeLeft(secondsLeft);
    }, 1000);
  }

  function displayTimeLeft(seconds) {
    const days = Math.floor(seconds / (60 * 60 * 24));
    const hours = Math.floor(seconds % (60 * 60 * 24) / (60 * 60));
    const minutes = Math.floor(seconds % (60 * 60) / 60);
    const remainderSeconds = seconds % 60;
    daysDisplay.textContent = `${days < 10 ? '0' : ''}${days}`;
    hoursDisplay.textContent = `${hours < 10 ? '0' : ''}${hours}`;
    minutesDisplay.textContent = `${minutes < 10 ? '0' : ''}${minutes}`;
    ;
    secondsDisplay.textContent = `${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    ;
  }

  timer(seconds);
}();

var mobile = function () {
  const bars = document.querySelector('.bars');
  const nav = document.querySelector('header .container nav');
  const body = document.querySelector('body');
  const exit = document.querySelector('.exit');
  bars.addEventListener('click', () => {
    nav.classList.toggle('active-mobile-menu');
    body.classList.toggle('no-scroll');
  });
  exit.addEventListener('click', () => {
    nav.classList.toggle('active-mobile-menu');
  });
}();