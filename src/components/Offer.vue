<template>
  <div class="offer">
    <slot name="offer"></slot><br />
    <span class="discount"><slot name="discount"></slot>% OFF </span>
    <slot name="item"></slot>
  </div>
</template>

<script>
export default {
  name: 'Offer'
}
</script>

<style lang="scss">
.offer {
  font-family: $mainFont;
  color: $white;
  font-weight: 700;
  font-size: 3rem;
  line-height: 4rem;
}
.discount {
  color: $primary;
}
</style>
