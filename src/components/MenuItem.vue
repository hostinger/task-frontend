<template>
  <div class="menu-item">
    <div class="sale" v-if="onSale">On sale</div>
    <a class="link" :href="url">
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    onSale: {
      type: Boolean,
      default: false
    },
    url: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.menu-item {
  padding: 0 1vw;
  min-height: 56px;
  font-size: 100%;
  @media (max-width: 1500px) {
    padding: 0 0.5vw;
  }
  @media (max-width: 900px) {
    min-height: 2rem;
  }
}
%menu-text {
  text-transform: uppercase;
  color: $white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 1000;
  letter-spacing: .1em;
  line-height: 56px;
}
.link {
  @extend %menu-text;
  @media (max-width: 900px) {
    line-height: 2rem;
  }
}
.sale {
  @extend %menu-text;
  color: $yellow;
  position: absolute;
  margin-top: 0.5rem;
  font-size: 0.7rem;
  line-height: 0.7rem;
  @media (max-width: 900px) {
    position: relative;
  }
}
</style>
