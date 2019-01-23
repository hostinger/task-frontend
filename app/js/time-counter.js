// JS-time counter
const countDownDate = new Date("Jan 30, 2019 21:37:25").getTime();

// Update the count down every 1 second
const x = setInterval(() => {

  // Get todays date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.querySelector(".counter__time-days").innerHTML = days.toLocaleString(undefined, {
    minimumIntegerDigits: 2
  });
  document.querySelector(".counter__time-hours").innerHTML = hours.toLocaleString(undefined, {
    minimumIntegerDigits: 2
  });
  document.querySelector(".counter__time-min").innerHTML = minutes.toLocaleString(undefined, {
    minimumIntegerDigits: 2
  });
  document.querySelector(".counter__time-sec").innerHTML = seconds.toLocaleString(undefined, {
    minimumIntegerDigits: 2
  });

}, 1000);