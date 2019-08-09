var countDownDate = new Date('Apr 25, 2019 15:37:25').getTime();

var x = setInterval(function () {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector('.days').innerHTML = days + '</br>' + '<p class="offer__text">DAYS</p>';
  document.querySelector('.hours').innerHTML = hours + '</br>' + '<p class="offer__text">HOURS</p>';
  document.querySelector('.minutes').innerHTML = minutes + '</br>' + '<p class="offer__text">MINUTES</p>';
  document.querySelector('.seconds').innerHTML = seconds + '</br>' + '<p class="offer__text">SECONDS</p>';

  if (distance < 0) {
    clearInterval(x);
    document.querySelector('.offer__countdown').innerHTML = 'This offer has expired';
  }
}, 1000);
