<template>
  <ul class="list-menu">
    <li v-for="(item, index) in listItems" :key="index">{{ item }}</li>
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

.list-menu
  list-style-type: none
  li
    display: inline-block
    padding: 0.7rem
    text-transform: uppercase
    font-size: 0.9vw
    transition: 1s

  li:hover
    cursor: pointer
    color: $gray
</style>

