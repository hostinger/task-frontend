<template>
  <div>
    <div @click="toggleMenu" class="dropdown-title">
      menu
      <i class="fas fa-angle-down" v-bind:class="{'rotate-arrow': isActive}" />
    </div>
    <ul class="dropdown-menu" v-bind:class="{'is-active': isActive}">
      <li v-for="(item, index) in listItems" :key="index">{{ item }}</li>
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

.dropdown-menu
  display: none
  list-style-type: none
  position: absolute
  li
    text-transform: uppercase
    padding: 0.8rem 0
    transition: 1s
  li:hover
    cursor: pointer
    color: $gray
    
.dropdown-title
  text-transform: uppercase
  cursor: pointer

.is-active
  display: block

.rotate-arrow
  transform: rotate(180deg)
  transition: 0.5s
</style>

