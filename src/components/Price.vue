<template>
  <v-layout>
    <div class="price-block__currency">$</div>
    <div class="price-block__bigno">1</div>
    <div class="price-block__right-holder">
      <div class="price-block-right-holder__cents">45</div>
      <div class="price-block-right-holder__unit">
        <div class="price-block-right-holder-unit__unit">/mo</div>
      </div>
    </div>
  </v-layout>
</template>

<script>
export default {
  name: "Price"
};
</script>

<style lang="scss">
.price-block__currency {
  font-size: 1em;
  font-weight: 700;
  margin-top: 0.2em;
}
.price-block__bigno {
  font-size: 3em;
  font-weight: 700;
  line-height: 0.8em;
}
.price-block-right-holder__cents {
  font-size: 0.8em;
  font-weight: 700;
}
.price-block-right-holder__unit {
  display: flex;

  .price-block-right-holder-unit__unit {
    font-size: 0.5em;
    display: flex;
    -webkit-box-align: end;
    align-items: flex-end;
    margin: 12px;
  }
}
</style>
