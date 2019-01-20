<template>
  <div class="offer">
    <h2>New Year Offer<br> <span>82% OFF</span> Web Hosting</h2>
    <div class="offer__counter">
      <div class="offer__time-item">
        <span>
          {{ timerDisplay.days }}
        </span>
        <p>DAYS</p>
      </div>
      <div class="offer__time-item">
        <span>
          {{ timerDisplay.hours }}
        </span>
        <p>HOURS</p>
      </div>
      <div class="offer__time-item">
        <span>
          {{ timerDisplay.minutes }}
        </span>
        <p>MINUTES</p>
      </div>
      <div class="offer__time-item">
        <span>
          {{ timerDisplay.seconds }}
        </span>
        <p>SECONDS</p>
      </div>
    </div>
    <button class="offer__btn">Get Started Now</button>
  </div>
</template>

<script>

export default {
  name: 'OfferDeal',
  data: function () {
    return {
      timeSet : {
        'days': 0,
        'hours': 16,
        'minutes': 18,
        'seconds': 29
      },
      milisec: 0,
      timerDisplay : {
        'seconds': 0,
        'minutes': 0,
        'hours': 0,
        'days': 0,
      }
    }
  },
  methods: {
    timer: function() {

      this.convertToMs();
      setInterval(function () {
        this.calcTime();
      }.bind(this), 1000);

    },
    calcTime: function() {

      if (this.milisec > 0) {
        this.milisec -= 1000;
        this.timerDisplay = this.msToTime(this.milisec);
      }

    },
    convertToMs() {

      var secondsMs = this.timeSet.seconds * 1000;
      var minutesMs = this.timeSet.minutes * (60 * 1000);
      var hoursMs = this.timeSet.hours * (60 * 60 * 1000);
      var daysMs = this.timeSet.days * (24 * 60 * 60 * 1000);

      this.milisec = daysMs + hoursMs + minutesMs + secondsMs;
    },
    msToTime: function(ms) {
      var time = {};

      time.seconds = ms / 1000;
      time.minutes = Math.floor(time.seconds / 60);
      time.hours = 0;
      time.days = 0;

      if (time.seconds > 59) {
        time.seconds = time.seconds % 60;
        if (time.minutes > 59) {
          time.hours = Math.floor(time.minutes / 60);
          time.minutes = time.minutes % 60;
          if (time.hours > 23) {
            time.days = Math.floor(time.hours / 24);
            time.hours = time.hours % 24;
          }
        } 
      
      }

      return time;
    }
  },
  mounted() {
    this.timer()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  $offer-main-red: #FD5058;

  .offer {
    h2 {
      text-align: left;
      font-weight: 700;
      font-size: 35px;
      color: #fff;

      span {
        color: $offer-main-red;
      }
    }
  }

  .offer__counter {
    position: relative;
    display: block;
    width: 335px;
    height: 50px;
    padding: 5px 25px;
    text-align: center;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 15px;
      width: 0; 
      height: 0; 
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent; 
      
      border-left:15px solid $offer-main-red; 
    }

    &::after {
      content: "";
      position: absolute;
      right: 0;
      top: 15px;
      width: 0; 
      height: 0; 
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent; 
      
      border-right:15px solid $offer-main-red; 
    }
  }

  .offer__time-item {
    display: inline-block;
    font-size: 28px;
    font-weight: 700;
    line-height: 0.9;
    color: #fff;
    margin-right: 20px;

    &:last-of-type {
      margin-right: 0;
    }

    p {
      font-size: 12px;
      margin: 3px 0 0;
    }
  }

  .offer__btn {
    display: block;
    background: $offer-main-red;
    border: 0;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    padding: 15px 0;
    margin-top: 20px;
    text-align: center;
    width: 280px;
    border-radius: 5px;
  }
</style>
