<template>
  <div class="price">
    <div class="price-discount">
      Save <slot name="discount"></slot>%
    </div>
    <div class="price-container">
      <span class="dollar-sign">$</span>
      <span class="dollars">
        <slot name="dollars"></slot>
      </span>
      <div class="cents-container">
      <span>
        <slot name="cents"></slot>
      </span>
      <span class="rate">/mo</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Price'
}
</script>

<style lang="scss">
.price {
  display: flex;
  flex-direction: column;
  align-content: center;
  font-family: $mainFont;
  color: $white;
  font-weight: 700;
  font-size: 3rem;
}
.price-container {
  display: flex;
  flex-direction: row;
}
.price-discount {
  background: $pink;
  position: relative;
  padding: 1rem 2rem;
  text-align: center;
  font-size: 1.5rem;
  text-transform: uppercase;
  max-width: 30%;
  margin: 0 auto;
}
.price-discount:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 0;
  border: 0.563em solid transparent;
  border-top-color: $pink;
  border-bottom: 0;
  margin-left: -0.562em;
  margin-bottom: -0.562em;
}
.dollar-sign {
  font-size: 10rem;
  line-height: 20rem;
}
.dollars {
  font-size: 35rem;
  line-height: 30rem;
}
.cents-container {
  display: flex;
  flex-direction: column;
  font-size: 10rem;
  justify-content: space-between;
  padding: 2rem;
}
.rate {
  font-weight: 600;
  font-size: 6rem;
}
</style>
