<template>
  <div id="offer-content" class="row">
    <div id="offer-content-info" class="offer-container col-md-6 order-md-1 order-2 col-sm-12">
      <h1>
        New Year offer <br>
        <span class="discount">82% off</span> web hosting
      </h1>
      <OfferCounter :date="'2019-06-21T12:00:00'"/>
      <div>
        <button type="button" class="btn btn-danger" id="get-started-btn">Get started now</button>
      </div>
    </div>

    <OfferPrice />

  </div>
</template>

<script>
import OfferCounter from '@/components/offer/counter.vue'
import OfferPrice from '@/components/offer/price.vue'

export default {
  components: {
    OfferCounter,
    OfferPrice
  }
}
</script>

<style lang="scss" scoped>
#offer-content {
  padding-top: 144px;
  padding-bottom: 100px;
  @media (max-width: 768px) {
    padding-top: 70px;
    padding-bottom: 0px;
  }
}
#offer-content-info {
  text-align: left;
  margin: auto auto;

  @media (max-width: 768px) {
    text-align: center;
  }

  h1 {
    text-transform: capitalize;
    font-weight: 700;
    font-size: 38px;
    line-height: 1.6;
    .discount {
      color: $red-light;
      text-transform: uppercase;
    }
  }
  #get-started-btn {
    padding: 18px 54px;

    margin: 28px auto;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase !important;

    background-color: $red-light;
    transition: all .5s;
    &:hover {
      background-color: red;

    }
  }
}

</style>
