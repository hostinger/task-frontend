<template>
  <ul class="list-menu">
    <li v-for="(item, index) in listItems" :key="index">
      <span v-if="item.onSale">
        On Sale
        <br />
      </span>
      {{ item.title }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "ListMenu",
  props: {
    listItems: Array
  }
};
</script>

<style lang="sass">
$white: #ffffff
$gray: #d1d1d1
$yellow: #f0f030

.list-menu
  list-style-type: none
  li
    display: inline-block
    padding: 0.7rem
    text-transform: uppercase
    font-size: 1rem
    transition: 1s
    position: relative

  li:hover
    cursor: pointer
    color: $gray

  span
    font-size: 0.7rem
    color: $yellow
    position: absolute
    top: 0
</style>

