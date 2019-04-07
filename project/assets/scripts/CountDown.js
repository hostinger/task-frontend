
/**
 * Counts down between current and future times
 */
export class CountDown {

  /**
   * @param {Date in the future to countdown to, format, e.g.: 2019-05-01T15:00:00.000Z}futureDate
   * @param {Date countdown container selector, e.g.: .banner-ny__offer-timer} selector
   */
  constructor(futureDate, selector) {
    this.selector = selector;

    if (!document.querySelector(this.selector)) {
      console.error("Invalid container selector");
      return;
    }

    // Convert date to UTC
    if (!futureDate.includes("Z")) {
      futureDate += "Z";
    }

    this.futureDate = new Date(futureDate);

    this.startCountDown();
  }

  /**
   * Starts the countdown
   */
  startCountDown() {
    const daysContainer = document.querySelector(`${this.selector} .countDown-days`);
    const hoursContainer = document.querySelector(`${this.selector} .countDown-hours`);
    const minutesContainer = document.querySelector(`${this.selector} .countDown-minutes`);
    const secondsContainer = document.querySelector(`${this.selector} .countDown-seconds`);

    const startCountDown = () => {
      const currentDate = new Date();

      const distance = this.futureDate - currentDate;

      if (distance < 0) {
        return;
      }

      const countSecond = 1000;
      const countMinute = countSecond * 60;
      const countHour = countMinute * 60;
      const countDay = countHour * 24;

      const daysLeft =    Math.floor(distance / countDay);
      const hoursLeft =   Math.floor((distance % countDay) / countHour);
      const minutesLeft = Math.floor((distance % countHour) / countMinute);
      const secondsLeft = Math.floor((distance % countMinute) / countSecond);


      daysContainer.textContent = daysLeft;
      hoursContainer.textContent = hoursLeft;
      minutesContainer.textContent = minutesLeft;
      secondsContainer.textContent = secondsLeft;

      setTimeout(startCountDown, 1000);
    }

    setTimeout(startCountDown, 1000);
  }
}
