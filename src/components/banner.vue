<template>
<div class="banner">
  <div class="container">
    <div class="blocks">

      <div class="left">
        <h1>New Year Offer
        </h1>
        <h1>
          <span style="color:#fc5155">82% OFF</span>
          Web Hosting
        </h1>


        <div class="countdown">
        <div class="arrow left"></div>

        <div class="col">
          <div class="item">
            <div class="value" v-if="days <= '0'">0</div>
            <div class="value" v-else>{{ Math.trunc(days)}} </div>
            <div class="unit">DAYS</div>
          </div>
          <div class="item">
            <div class="value" v-if="hours <= '0'">0</div>
            <div class="value" v-else>{{ Math.trunc(hours)}} </div>
            <div class="unit">HOURS</div>
          </div>
        </div>

        <div class="col">
          <div class="item">
            <div class="value" v-if="minutes <= '0'">0</div>
            <div class="value" v-else>{{ Math.trunc(minutes)}} </div>
            <div class="unit">MINUTES</div>
          </div>
          <div class="item">
            <div class="value" v-if="seconds <= '0'">0</div>
            <div class="value" v-else>{{ Math.trunc(seconds)}} </div>
            <div class="unit">SECONDS</div>
          </div>
        </div>
          <div class="arrow right"></div>

        </div>

        <a href="#">Get Started NOW</a>

      </div>

      <div class="right">
        <div class="priceBlock">
          <div class="tooltip">
            <span>
              Save 82%
            </span>
            <div class="triangle"></div>
          </div>
          <div class="price">
            <span class="currency">$</span>
            <span class="bigNo">1</span>
            <div class="">
              <span class="cents">45</span>
              <span class="unit">/mo</span>
            </div>
          </div>


        </div>
      </div>
    </div>

    <div class="features">
      <ul>
        <li>Guaranteed 99.9% Uptime
        </li>
        <li>Superior Speed Performance
        </li>
        <li>24/7 Support Chat
        </li>
        <li>30-Day Money-Back Guarantee
        </li>
      </ul>
    </div>
  </div>
</div>
</template>



<script>

export default {
  name: 'vBanner',
  props: {
    date: {
      type: String
    }
  },

  data() {
    return {
      now: 0,
      count: 0
    }
  },

  methods: {
    timer_loop() {
      this.count++
      this.now = Math.trunc(new Date().getTime() / 1000)
      this.count < 200 && setTimeout(this.timer_loop, 1000)
    }
  },

  mounted() {
    this.timer_loop()
  },

  computed: {
    seconds() {
      return (this.modifiedDate - this.now) % 60
    },
    minutes() {
      return ((this.modifiedDate - this.now) / 60) % 60
    },
    hours() {
      return ((this.modifiedDate - this.now) / 60 / 60) % 24
    },
    days() {
      return ((this.modifiedDate - this.now) / 60 / 60 / 24)
    },
    modifiedDate: function() {
      return Math.trunc(Date.parse(this.date) / 1000)
    }
  }
}

</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1{
  font-size:2.7em;
  margin:10px 0;
}

.background {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  z-index: -5;
}

.background img {
  object-fit: contain;
  width: 100%;
  transform: scaleX(-1);
}

.banner {
  background-size: cover !important;
  background-repeat: no-repeat;
  background: url(../assets/bg.jpg) center;
  padding: 150px 0;
  color: #fff;
  width:100%;
}

.banner>.container {
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
}

.banner .blocks {
  display: flex;
}

.blocks > .left,
.blocks > .right {
  width: 50%;
}
.blocks > .left{
padding-top:10px;
}

.banner .left a {
  background: #fc5155;
  padding: 0.9em 2.7em;
  border-radius: 5px;
  font-size: 1.4em;
  font-weight: 600;
}

.features {
  position: relative;
  top: 130px;
  width:100%;
}

.features ul {
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  font-size: 1.15em;
}

.features li {
  display: inline-block;
  text-align: center;
  padding-right: 10px;
  margin-bottom:10px;
}

.features li:last-child {
  padding-right: 0;
}

.features li::before {
  content: "\F00C";
  font-family:  "Font Awesome 5 Free";
  color: #7cc576;
  margin-right: 10px;
  font-weight:900;
}

.priceBlock {
  font-size: 80px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.price {
  display: flex;
}

.price>div {
  display: flex;
  flex-direction: column;
}

.currency {
  margin-top: .2em;
  font-size: 1.8em;
}

.bigNo {
  font-size: 5em;
  line-height: 0.8em;
}

.cents {
  font-size: 1.45em;
}

.unit {
  font-weight: 600;
  font-size: 0.9em;
}

.tooltip {
  margin: 0 auto;
  font-size: 20px;
  line-height: 20px;
  position: relative;
}

.tooltip span {
  text-transform: uppercase;
  padding: 10px 30px;
  background: #fd9c9e;
  display: inline-block;
  color: #fff;
  position: relative;
}

.banner .triangle {
  width: 20px;
  height: 20px;
  background: #fd9c9e;
  position: absolute;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  bottom: -10px;
}





.countdown {
  display:flex;
  margin-bottom: 50px;
  align-items:center;
}
.countdown .col{
  display:flex;
}
.countdown .item{
  margin:0 10px;
  padding:10px;
  text-align:center;
}
.countdown .value{
  font-size:28px;
  font-weight:700;
}
.countdown .unit{
  font-size:12px;
  font-weight:700;
}


.arrow.left{
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-left: 15px solid #fc5155;
  border-bottom: 10px solid transparent;
  margin-right: 10px;
}

.arrow.right{
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-right: 15px solid #fc5155;
  border-bottom: 10px solid transparent;
  margin-left: 10px;
}

</style>
