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
  name: 'OfferPrice',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .offer-price {
    position: relative;
    font-weight: 700;
  }

  .offer-price__discount {
    position: absolute;
    top: -20px;
    color: #fff;
    background: #FD9C9C;
    font-size: 20px;
    text-transform: uppercase;
    padding: 10px 0;
    width: 170px;

    
  }

  .offer-price__sign,
  .offer-price__occurance,
  .offer-price__number {
    display: inline-block;
  }

  .offer-price__sign {
    position: absolute;
    top: 110px;
    left: -40px;
    font-size: 0.3em;
  }

  .offer-price {
    color: #fff;
    font-size: 90px;
  }

  .offer-price__number {
    position: relative;
    font-size: 300px;
    font-weight: 700;

    .offer-price__cents {
      position: absolute;
      top: 85px;
      right: -75px;
      font-size: 0.35em;
    }
  }

  .offer-price__occurance {
    font-size: 0.6em;
    position: absolute;
    bottom: 130px;
  }
</style>
