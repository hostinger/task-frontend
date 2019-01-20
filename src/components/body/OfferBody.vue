<template>
  <div class="container">
    <div class="row offer-row">
      <div class="col-md-6">
        <OfferDeal/>
      </div>
      <div class="col-md-6">
        <OfferPrice/>
      </div>
    </div>
  </div>
</template>

<script>
import OfferDeal from './OfferDeal.vue'
import OfferPrice from './OfferPrice.vue'

export default {
  name: 'OfferBody',
  components: {
    OfferDeal,
    OfferPrice
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .offer-row {
    margin-top: 120px;
  }
</style>
