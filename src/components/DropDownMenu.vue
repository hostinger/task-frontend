<template>
  <div style="position: relative">
    <div @click="toggleMenu" class="dropdown-title">
      <span>menu </span>
      <i class="fas fa-angle-down" v-bind:class="{'rotate-arrow': isActive}" />
    </div>
    <ul class="dropdown-menu" v-bind:class="{'is-active': isActive}">
      <li v-for="(item, index) in listItems" :key="index">
        <span v-if="item.onSale">
          On Sale
          <br />
        </span>
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DropDownMenu",
  props: {
    listItems: Array
  },

  data() {
    return {
      isActive: false
    };
  },

  methods: {
    toggleMenu() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style lang="sass">
$gray: #d1d1d1
$yellow: #f0f030
$soft-black: rgba(0, 0, 0, 0.5)

.dropdown-menu
  display: none
  list-style-type: none
  z-index: 1
  position: absolute
  background-color: $soft-black
  padding: 0.5rem
  border-radius: 1rem
  top: 1.5rem
  right: -2rem
  li
    text-transform: uppercase
    padding: 0.8rem 1rem
    margin: 0.4rem 0
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
    
.dropdown-title
  text-transform: uppercase
  cursor: pointer

.is-active
  display: block

.rotate-arrow
  transform: rotate(180deg)
  transition: 0.5s
</style>

