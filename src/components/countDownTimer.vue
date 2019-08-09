<template>
  <div id="countdown">
    <div class="countdown">
      <div class="triangle-symbols">&#9654;</div>
      <div class="counter">
        <span>{{ days }}</span>
        <span class="counter-label">DAYS</span>
      </div>
      <div class="counter">
        <span>{{ hours }}</span>
        <span class="counter-label">HOURS</span>
      </div>
      <div class="counter">
        <span>{{ minutes }}</span>
        <span class="counter-label">MINUTES</span>
      </div>
      <div class="counter">
        <span>{{ seconds }}</span>
        <span class="counter-label">SECONDS</span>
      </div>
      <div class="triangle-symbols">&#9668;</div>
    </div>
  </div>
</template>

<script>
  
export default {
  data() {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      countDownDate: new Date("2019-08-18 23:37:00").getTime(),
      distance: 0
    }
  },
  methods: {
    zeroFill(i) {
      return (i < 10 ? '0' : '') + i
    },
    setDiff() {
      const now = new Date().getTime();
      this.distance = this.countDownDate - now;
      this.days = this.zeroFill(Math.floor(this.distance / (1000 * 60 * 60 * 24)));
      this.hours = this.zeroFill(Math.floor((this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      this.minutes = this.zeroFill(Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60)));
      this.seconds = this.zeroFill(Math.floor((this.distance % (1000 * 60)) / 1000));
    }
  },
  mounted() {
    this.setDiff();
    setInterval(() => {
      this.setDiff();
      if (this.distance < 0) {
        this.days = '00';
        this.hours = '00';
        this.minutes = '00';
        this.seconds = '00';
      }
    }, 1000);
  }
};
</script>

<style lang="scss" scoped>
.countdown {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 25px;
}
.counter {
  display: grid;
  text-align: center;
  filter: drop-shadow( 3px 3px 5px rgba(0,0,0,1) );
}
.counter-label {
  font-size: 10px;
}
.triangle-symbols {
  color: #fc5055;
}
</style>
