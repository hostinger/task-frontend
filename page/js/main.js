const countdown = document.querySelector('.countdown');
const launchDate = new Date('Jan 24, 2019 13:00:00').getTime();

var intvl = setInterval(() => {
  const now = new Date().getTime();
  const distance = launchDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `
    <div>${days}<br><span>Days</span></div>
    <div>${hours}<br><span>Hours</span></div>
    <div>${mins}<br><span>Minutes</span></div>
    <div>${seconds}<br><span>Seconds</span></div>
  `;

  if (distance < 0) {
    clearInterval(intvl);
    countdown.style.color = '#f9525c';
    countdown.innerHTML = 'Launched!';
  }
}, 1000);
