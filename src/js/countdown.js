var log = console.log;


function countdown(containerName, year, month, day, hours, minutes, seconds) {

  var endTime = new Date(year, month, day, hours, minutes, seconds).getTime();

  var miliPerDay = 1000 * 60 * 60 * 24;
  var miliPerHour = 1000 * 60 * 60;
  var miliPerMinute = 1000 * 60;
  var miliPerSecond = 1000;

  var countdownContainer = document.querySelector(containerName);
  var daysElement = countdownContainer.querySelector(".countdown-days-js");
  var hoursElement = countdownContainer.querySelector(".countdown-hours-js");
  var minutesElement = countdownContainer.querySelector(".countdown-minutes-js");
  var secondsElement = countdownContainer.querySelector(".countdown-seconds-js");

  var currentTime, timeDifference;

  function doubleDigit(value) {
    if (value < 10) {
      return "0" + value;
    } else {
      return value;
    }
  }

  function loop() {
    currentTime = new Date().getTime();
    timeDifference = endTime - currentTime;

    daysElement.innerHTML = doubleDigit( Math.floor( timeDifference / miliPerDay ) );
    hoursElement.innerHTML = doubleDigit( Math.floor( (timeDifference % miliPerDay) / miliPerHour ) );
    minutesElement.innerHTML = doubleDigit( Math.floor( (timeDifference % miliPerHour) / miliPerMinute ) );
    secondsElement.innerHTML = doubleDigit( Math.floor( (timeDifference % miliPerMinute) / miliPerSecond ) );
  }
  setInterval(loop, 1000);
}

setTimeout(function() {countdown(
    containerName = ".countdown-1-js",
    year = 2019,
    month = 3,
    day = 25,
    hours = 12,
    minutes = 30,
    seconds = 30
  );}, 0);
