<template>
  <div class="menu-item">
    <a :href="url">{{ name }}</a>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    name: {
      type: String,
      required: true
    },
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
</style>
