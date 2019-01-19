<template>
  <div class="offer">
    <h2>New Year Offer<br> <span>82% OFF</span> Web Hosting</h2>
    <div class="offer__counter">
      <div class="offer__time-item">
        <span>
          00
        </span>
        <p>DAYS</p>
      </div>
      <div class="offer__time-item">
        <span>
          16
        </span>
        <p>HOURS</p>
      </div>
      <div class="offer__time-item">
        <span>
          18
        </span>
        <p>MINUTES</p>
      </div>
      <div class="offer__time-item">
        <span>
          29
        </span>
        <p>SECONDS</p>
      </div>
    </div>
    <button class="offer__btn">Get Started Now</button>
  </div>
</template>

<script>

export default {
  name: 'HeaderMenu',
  props: {
    msg: String
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
