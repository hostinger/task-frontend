<template>
  <div class="timer">
    <h2 class="timer__heading">New year offer<br />
      <span class="timer__heading timer__heading--red">82% off</span> web hosting</h2>
      <countdown :date="convertDate"/>
    <button class="timer__button">get started now</button>
  </div>
</template>

<script>
import Countdown from './countdown/Countdown';

export default {
  components: {
    'countdown': Countdown
  },
  data() {
    return {
      date: 'March 26, 2019'
    }
  },
  computed: {
    convertDate() {
      return Math.trunc(Date.parse(this.date) / 1000)
    }
  }
}
</script>

<style lang="scss">
  @import '../../scss/helper';
  .timer {
    align-self: center;
    height: auto;
    font-size: 32px;
    color: $color-white;
    @include responsive(mobile) {
      grid-area: 2;
      font-size: 26px;
      text-align: center;
      margin-bottom: 50px;
    }
    @include responsive(tablet-port) {
      grid-area: 2;
      font-size: 32px;
    }
    @include responsive(tablet-land) { font-size: 28px;}
    &__heading {
      text-transform: capitalize;
      font-weight: 700;
      &--red {
        color: $color-darkred;
      }
    }
    &__button {
      font-size: .8em;
      text-transform: uppercase;
      padding: 20px 60px;
      @include responsive(tablet-port) {padding: 20px 40px;}
      margin-top: 40px;
      border-radius: 10px;
      font-weight: 600;
      background-color: $color-red;
      border: none;
      color: $color-white;
    }
  }
</style>
