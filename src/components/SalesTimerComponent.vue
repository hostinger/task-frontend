<template>
  <div class="timer-container vertical-center">
    <div class="column-even">
      <b>New Year Offer</b>
      <b><span class="offPercent">82% OFF</span> Web Hosting</b>
      <div class="timer">
        <countDownTimer />
      </div>
      <button class="fancy-button">GET STARTED NOW</button>
    </div>
  </div>
</template>

<script>
import countDownTimer from "./countDownTimer";
export default {
  components: {
    countDownTimer
  }
};
</script>

<style lang="scss" scoped>
.timer-container {
  font-size: 40px;
}
b {
  padding-top: 10px;
}
.timer {
  padding-top: 20px;
  padding-bottom: 20px;
}
.offPercent {
  color: #fc5055;
}
.vertical-center {
  display: flex;
  justify-items: unset;
  display: -ms-flexbox;
  -ms-flex-align: center;
  -webkit-box-align: center;
  align-items: center;
}
.fancy-button {
  background: #fc5055;
  border: 0px;
  color: white;
  border-radius: 5px;
  height: 48px;
  width: 70%;
  font-weight: bold;
  font-size: 15px;
}
</style>
