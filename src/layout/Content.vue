<template>
  <div class="content">
    <div class="section">
      <Offer>
        <template v-slot:offer>{{sale.offer}}</template>
        <template v-slot:discount>{{sale.discount}}</template>
        <template v-slot:item>{{sale.item}}</template>
      </Offer>
      <Countdown>
        <template v-slot:days>{{sale.diff.days}}</template>
        <template v-slot:hours>{{sale.diff.hours}}</template>
        <template v-slot:minutes>{{sale.diff.minutes}}</template>
        <template v-slot:seconds>{{sale.diff.seconds}}</template>
      </Countdown>
      <Button>
        {{sale.cta}}
      </Button>
    </div>
    <div class="section">
      <Price>
        <template v-slot:discount>{{sale.discount}}</template>
        <template v-slot:dollars>{{dollars}}</template>
        <template v-slot:cents>{{cents}}</template>
      </Price>
    </div>
  </div>
</template>

<script>
import Offer from '../components/Offer';
import Countdown from '../components/Countdown';
import Button from '../components/Button';
import Price from '../components/Price';

export default {
  name: 'Content',
  components: {
    Offer,
    Countdown,
    Button,
    Price
  },
  props: {
    sale: {
      type: Object,
      required: true
    }
  },
  computed: {
    dollars() {
      return this.sale.salePrice.toString().split('.')[0]
    },
    cents() {
      const priceArray = this.sale.salePrice.toString().split('.');
      return priceArray.length === 2 ?
        priceArray[1].length === 2 ?  priceArray[1] : priceArray[1] + 0
        : "00";
    }
  }
}
</script>

<style lang="scss">
.content {
  display: flex;
  flex-direction: row;
  max-width: 70vw;
  width: 100%;
  padding: 10vh 0;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
}
.section {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 50%;
  height: 100%;
}
</style>
