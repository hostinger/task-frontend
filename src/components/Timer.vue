<template>
  <div id="timer">
    <div id="arrow-right"></div>
    <div id="time">
      <div class="time-measurement">
        {{daysLeft}}
        <span>days</span>
      </div>
      <div class="time-measurement">{{hoursLeft}}<span>hours</span></div>
      <div class="time-measurement">{{minutesLeft}}<span>minutes</span></div>
      <div class="time-measurement">{{secondsLeft}}<span>seconds</span></div>
    </div>
    <div id="arrow-left"></div>
  </div>
</template>

<script>
import { setInterval } from "timers";
export default {
  name: "Timer",
  data() {
    return {
      daysLeft: "00",
      hoursLeft: "00",
      minutesLeft: "00",
      secondsLeft: "00"
    };
  },
  mounted() {
    this.initializeTimer();
  },
  methods: {
    initializeTimer() {
      const endDate = new Date("December 17, 2019 03:24:00");

      let timer = setInterval(() => this.timer(endDate), 1000);
    },
    timer(endDate) {
      const now = Date.now();

      const dif = (endDate - now) / 1000;

      const daysDif = Math.floor(dif / (60 * 60 * 24));

      if (daysDif > 9) this.daysLeft = `${daysDif}`;
      else this.daysLeft = `0${daysDif}`;

      const hoursDif = Math.floor((dif / (60 * 60)) % 24);

      if (hoursDif > 9) this.hoursLeft = `${hoursDif}`;
      else this.hoursLeft = `0${hoursDif}`;

      const minutesDif = Math.floor((dif / 60) % 60);

      if (minutesDif > 9) this.minutesLeft = `${minutesDif}`;
      else this.minutesLeft = `0${minutesDif}`;

      const secondsDif = Math.floor(dif % 60);

      if (secondsDif > 9) this.secondsLeft = `${secondsDif}`;
      else this.secondsLeft = `0${secondsDif}`;
    }
  }
};
</script>

<style lang="scss" scoped>
$flex: flex;
$center: center;

#arrow-right {
  width: 0;
  height: 0;
  border-top: 2vh solid transparent;
  border-bottom: 2vh solid transparent;

  border-left: 2vh solid red;
}
#arrow-left {
  width: 0;
  height: 0;
  border-top: 2vh solid transparent;
  border-bottom: 2vh solid transparent;
  border-right: 2vh solid red;
}
#timer {
  display: $flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: $center;
  margin: 3vh 0;
}
#time {
  margin: 0 1vw;
  font-size: 2vh;
  display: $flex;
  flex-direction: row;
  justify-content: $center;
  align-items: $center;
}
.time-measurement {
  margin: 0 1vw;
  text-transform: uppercase;
  display: $flex;
  flex-direction: column;
  justify-content: $center;
  align-items: $center;
}
</style>


