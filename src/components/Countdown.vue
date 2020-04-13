<template>
  <v-layout>
    <v-icon color="accent" size="30px" class="pr-3">fas fa-caret-right</v-icon>
    <div class="countdown-item">
      <span class="countdown-item__value">{{ days }}</span>
      <span class="countdown-item__label">Days</span>
    </div>
    <div class="countdown-item">
      <span class="countdown-item__value">{{ hours }}</span>
      <span class="countdown-item__label">Hours</span>
    </div>
    <div class="countdown-item">
      <span class="countdown-item__value">{{ minutes }}</span>
      <span class="countdown-item__label">Minutes</span>
    </div>
    <div class="countdown-item">
      <span class="countdown-item__value">{{ seconds }}</span>
      <span class="countdown-item__label">Seconds</span>
    </div>
    <v-icon color="accent" size="30px" class="pl-3">fas fa-caret-left</v-icon>
  </v-layout>
</template>

<script>
export default {
  name: 'Countdown',
  props: ['endtime'],
  data() {
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
      const now = new Date().getTime();
      const passTime = end - now;
      passTime > 0 ? this.calcTime(passTime) : this.setZero();
    },
    calcTime: function(dist) {
      this.days = Math.floor(dist / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((dist % (1000 * 60)) / 1000);
    },
    setZero: function() {
      this.seconds = this.minutes = this.hours = this.days = '00';
      clearInterval(this.interval);
    }
  }
};
</script>

<style lang="scss">
.countdown-item {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  font-weight: 700;
  text-align: center;

  &__value {
    font-size: 32px;
    display: block;
  }

  &__label {
    font-size: 12px;
    display: block;
    text-transform: uppercase;
  }
}
</style>
