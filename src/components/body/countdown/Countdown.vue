<template>
  <div class="count">
    <div class="count__triangle count__triangle--right"></div>
    <div class="count__block">
        <p class="count__digit">{{ days }}</p>
        <p class="count__text">Days</p>
    </div>
    <div class="count__block">
        <p class="count__digit">{{ hours }}</p>
        <p class="count__text">Hours</p>
    </div>
    <div class="count__block">
        <p class="count__digit">{{ minutes }}</p>
        <p class="count__text">Minutes</p>
    </div>
    <div class="count__block">
        <p class="count__digit">{{ seconds }}</p>
        <p class="count__text">Seconds</p>
    </div>
    <div class="count__triangle count__triangle--left"></div>
  </div>
</template>

<script>
export default {
  props : {
    date : {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      now: Math.trunc((new Date()).getTime() / 1000),
    }
  },
  computed: {
    seconds() {
      var n = (this.date - this.now) % 60;
      if (Math.sign(n) === -1) {
        return '00';
      }
      return n > 9 ? "" + n: "0" + n;
    },
    minutes() {
      var n = Math.trunc((this.date - this.now) / 60) % 60;
      if (Math.sign(n) === -1) {
        return '00';
      }
      return n > 9 ? "" + n: "0" + n;
    },
    hours() {
      var n = Math.trunc((this.date - this.now) / 60 / 60) % 24;
      if (Math.sign(n) === -1) {
        return '00';
      }
      return n > 9 ? "" + n: "0" + n;
    },
    days() {
      var n = Math.trunc((this.date - this.now) / 60 / 60 / 24);
      if (Math.sign(n) === -1) {
        return '00';
      }
      return n > 9 ? "" + n: "0" + n;
    }
  },
  mounted() {
    setInterval(() => {
        this.now = Math.trunc((new Date()).getTime() / 1000);
    },1000);
  },
}
</script>

<style lang="scss">
  @import '../../../scss/helper';
  .count {
    display: grid;
    grid-template-columns: 1fr repeat(4, 2fr) 1fr;
    font-weight: 700;
    margin-top: 30px;
    &__block {
      text-align: center;
      justify-self: center;
      display: grid;
    }
    &__digit {
      font-size: 1.2em;
    }
    &__text {
      font-size: 0.5em;
      text-transform: uppercase;
      font-weight: 700;
    }
    &__triangle {
        width: .6em;
        height: .8em;
        background-color: $color-red;
        @include triangle;
        align-self: center;
        @include edgeSupport {display: none;}
      &--left {
        justify-self: end;
      }
      &--right {
        @include flipX;
        justify-self: start;
      }
    }
  }
</style>
