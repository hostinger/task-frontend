<template>
  <div id="offer-counter">
    <div id="offer-counter-row" class="d-flex flex-row">
      <div class="arrow-right"></div>
      <div class="countdown-block ">
        <p class="countdown-number">{{ days | keep_zeros }}</p>
        <p class="countdown-unit">Days</p>
      </div>
      <div class="countdown-block ">
        <p class="countdown-number">{{ hours | keep_zeros }}</p>
        <p class="countdown-unit">Hours</p>
      </div>
      <div class="countdown-block ">
        <p class="countdown-number">{{ minutes | keep_zeros }}</p>
        <p class="countdown-unit">Minutes</p>
      </div>
      <div class="countdown-block ">
        <p class="countdown-number">{{ seconds | keep_zeros }}</p>
        <p class="countdown-unit">Seconds</p>
      </div>
      <div class="arrow-left"></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    window.setInterval(() => {
      this.now = Math.trunc((new Date()).getTime() / 1000)
    }, 1000)
  },
  props: {
    date: {
      type: String,
      default: '1970-01-01 00:00:01'
    }
  },
  data () {
    return {
      now: Math.trunc((new Date()).getTime() / 1000)
    }
  },
  computed: {
    dateInMilliseconds () {
      return Math.trunc(Date.parse(this.date) / 1000)
    },
    difference () {
      return this.dateInMilliseconds - this.now
    },
    seconds () {
      return (this.difference) % 60
    },
    minutes () {
      return Math.trunc(this.difference / 60) % 60
    },
    hours () {
      return Math.trunc(this.difference / 60 / 60) % 24
    },
    days () {
      return Math.trunc(this.difference / 60 / 60 / 24)
    }
  }
}
</script>

<style lang="scss" scoped>
#offer-counter {
  text-align: center;
  line-height: 1;

  #offer-counter-row {
    justify-content: start;
    @media (max-width: 768px) {
      justify-content: center;
    }
    @media (max-width: 576px) {
      justify-content: space-evenly !important;
    }
  }

  .arrow-right, .arrow-left {
    width: 0;
    height: 0;
    margin: auto 0;
  }
  .arrow-right {
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 14px solid $red-light;
    margin-right: 10px;
  }

  .arrow-left {
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 14px solid $red-light;
    margin-left: 10px;
  }

  .countdown-block {
    font-weight: 700;

    min-width: 48px;
    margin: 0 18px;
    @media (max-width: 576px) {
      margin: 0 0;
    }
    p {
      margin-bottom: 8px;
    }
    .countdown-number {
      font-size: 24px;
    }
    .countdown-unit {
      font-size: 12px;
      text-transform: uppercase;
    }
  }
}
</style>
