<template>
  <div class="offer-price">
    <div class="offer-price__number">
      <div class="offer-price__discount">
        Save 82%
      </div>
      <div class="offer-price__sign">
        $
      </div>
      1
      <span class="offer-price__cents">45</span>
    </div>
    <div class="offer-price__occurance">
      /mo
    </div>
  </div>
</template>

<script>

export default {
  name: 'offerPrice'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  $discount-color: #FD9C9C;

  .offer-price {
    position: relative;
    display: inline-block;
    font-weight: 700;
  }

  .offer-price__discount {
    position: absolute;
    top: -65px;
    left: 53px;
    color: #fff;
    background: $discount-color;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    padding: 15px 0;
    width: 140px;

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      margin-left: -10px;
      display: inline-block;
      width: 20px;
      height: 20px;
      background: $discount-color;
      transform: rotate(45deg);
    }
  }

  .offer-price__sign,
  .offer-price__occurance,
  .offer-price__number {
    display: inline-block;
  }

  .offer-price__sign {
    position: absolute;
    top: 35px;
    left: -59px;
    font-size: 0.4em;
  }

  .offer-price {
    color: #fff;
    font-size: 90px;
  }

  .offer-price__number {
    position: relative;
    font-size: 300px;
    font-weight: 700;
    line-height: 0.7;

    .offer-price__cents {
      position: absolute;
      top: 20px;
      right: -90px;
      font-size: 0.30em;
    }
  }

  .offer-price__occurance {
    font-size: 0.6em;
    position: absolute;
    bottom: 35px;
  }

  @media(max-width: 767.98px) {
    .offer-price__discount {
      left: 0;
    }

    .offer-price__number {
      font-size: 200px;
    }

    .offer-price__cents {
      right: -70px;
    }

    .offer-price__occurance {
      font-size: 0.5em;
    }
  }
</style>
