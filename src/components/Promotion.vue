<template>
  <div class="promotion-container">
    <div class="promo-text">New year offer</div>
    <div class="promo-text">
      <span class="strong-text">82% off</span>
      Web hosting
    </div>
    <Timer />
    <div>
      <button class="btn">Get started now</button>
    </div>
  </div>
</template>

<script>
import Timer from './Timer';

export default {
  name: "Promotion",
  components: {
    Timer
  }
}
</script>

<style lang="sass">
$white: #ffff
$red: #fc5155
$dark-red: #ff4546

.promotion-container
  display: flex
  flex-direction: column
  font-weight: 700
  color: white // for some reason needed in edge

.promo-text
  text-transform: capitalize
  margin: 0.8rem 0
  font-size: 2rem
  color: $white

.strong-text
  color: $red
  text-transform: uppercase

.btn
  text-transform: uppercase
  padding: 1rem 3.7rem
  margin: 0.8rem 0
  background-color: $red
  border: 1px solid $red
  border-radius: 0.7rem
  font-size: 1.2rem
  color: $white
  cursor: pointer
  color: white // for some reason needed in edge

.btn:hover
  background-color: $dark-red

@media only screen and (max-width: 961px)
  .promo-text
    font-size: 1.5rem
  
  .btn
    font-size: 0.9rem

  .promotion-container
    align-items: center

</style>
