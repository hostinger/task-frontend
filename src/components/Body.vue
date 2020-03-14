<template>
  <div class="body">
    <host-body-timer></host-body-timer>
    <host-body-offer></host-body-offer>
  </div>
</template>

<script>
import Timer from './body/Timer';
import Offer from './body/Offer';

export default {
  components: {
    'host-body-timer': Timer,
    'host-body-offer': Offer
  }
}
</script>

<style lang="scss">
  @import '../scss/helper';
  .body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 100px;
    align-self: center;
    justify-self: center;
    @include responsive(mobile) {
      align-self: center;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      grid-row-gap: 20px;
    }
    @include responsive(tablet-port) {
      align-self: center;
      grid-auto-flow: row;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      grid-row-gap: 30px;
    };
    @include responsive(tablet-land) {grid-column-gap: 50px;};
  }
</style>
