<template>
  <v-layout>
    <v-icon color="accent" size="30px" class="perks-block__icon"
      >fas fa-caret-right</v-icon
    >
    <div class="time-block__item">
      <span class="time-block__item-value">{{ days }}</span>
      <span class="time-block__item-label">Days</span>
    </div>
    <div class="time-block__item">
      <span class="time-block__item-value">{{ hours }}</span>
      <span class="time-block__item-label">Hours</span>
    </div>
    <div class="time-block__item">
      <span class="time-block__item-value">{{ minutes }}</span>
      <span class="time-block__item-label">Minutes</span>
    </div>
    <div class="time-block__item">
      <span class="time-block__item-value">{{ seconds }}</span>
      <span class="time-block__item-label">Seconds</span>
    </div>
    <v-icon color="accent" size="30px" class="perks-block__icon"
      >fas fa-caret-left</v-icon
    >
  </v-layout>
</template>

<script>
export default {
  name: 'Countdown',
  props: ['endtime'],
  data: function() {
    return {
      end: '',
      interval: '',
      days: '',
      minutes: '',
      hours: '',
      seconds: ''
    };
  },
  mounted() {
    this.end = new Date(this.endtime).getTime();
    // Update the count down every 1 second
    this.timerCount(this.end);
    this.interval = setInterval(() => {
      this.timerCount(this.end);
    }, 1000);
  },
  methods: {
    timerCount: function(end) {
      // Get todays date and time
      const now = new Date().getTime();
      // Find the distance between now an the count down date
      const passTime = end - now;
      this.calcTime(passTime);
    },
    calcTime: function(dist) {
      // Time calculations for days, hours, minutes and seconds
      this.days = Math.floor(dist / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((dist % (1000 * 60)) / 1000);
    }
  }
};
</script>

<style lang="scss">
.time-block__item {
  flex: 1;
  font-weight: 700;
  text-align: center;

  .time-block__item-value {
    font-size: 30px;
    display: block;
  }
  .time-block__item-label {
    font-size: 12px;
    display: block;
    text-transform: uppercase;
  }
}
</style>
