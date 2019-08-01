<template>
  <div class="timer-container">
      <i class="fas fa-caret-right fa-3x arrow"></i>
      <div class="timer-value-container">
        <span>{{ timeLeft.days }}</span>
        <div class="timer-value-subtitle">Days</div>
      </div>
      <div class="timer-value-container">
        <span>{{ timeLeft.hours }}</span>
        <div class="timer-value-subtitle">Hours</div>
      </div>
      <div class="timer-value-container">
        <span>{{ timeLeft.minutes}}</span>
        <div class="timer-value-subtitle">Minutes</div>
      </div>
      <div class="timer-value-container">
        <span>{{ timeLeft.seconds }}</span>
        <div class="timer-value-subtitle">Seconds</div>
      </div>
      <i class="fas fa-caret-left fa-3x arrow"></i>
  </div>
</template>

<script>
export default {
  name: "Timer",
  data() {
    return {
      deadline: this.getDeadline(),
      timeLeft: 0
    };
  },

  methods: {
      getDeadline() {
          let date = new Date();
          let currentYear = date.getFullYear();
          return `December 31 ${currentYear}`;
      },
      getTimeRemaining(endTime) {
          let t = Date.parse(endTime) - Date.parse(new Date()); // miliseconds
          let seconds = Math.floor((t / 1000) % 60);
          let minutes = Math.floor((t / 1000 / 60) % 60);
          let hours = Math.floor((t/(1000 * 60 * 60)) % 24);
          let days = Math.floor(t/(1000 * 60 * 60 * 24));
          return {
              "total": t,
              "days": days,
              "hours": hours,
              "minutes": minutes,
              "seconds": seconds
          };
      },
      initClock(endTime) {
          let interval = setInterval(() => {
              this.timeLeft = this.getTimeRemaining(endTime);
              if (this.timeLeft.total <= 0) {
                  clearInterval(interval);
              }
          }, 1000);
      }
  },

  created() {
      this.initClock(this.deadline);
  }
};
</script>

<style lang="sass">
$red: #fc5155
$white: #ffffff

.timer-container
    display: flex
    color: $white
    font-weight: 700
    align-items: center
    margin: 0.8rem 0

.arrow
    color: $red

.timer-value-container
    display: inline-block
    font-size: 1.8rem
    padding: 0 1rem
    text-align: center
    

.timer-value-subtitle
    text-transform: uppercase
    font-size: 1rem
    padding: 0.3rem 0

@media only screen and (max-width: 1451px)
  .timer-value-container
    font-size: 1rem

  .timer-value-subtitle
    font-size: 0.7rem
</style>
