<template>
  <div class="header">
    <Logo></Logo>
    <div class="menu" v-if="!isMobile || menuOpen">
      <template v-for="(item, index) in menu">
        <MenuItem
          :onSale="item.name === saleItem"
          :url="item.url"
          :key="index"
        >
          {{item.name}}
        </MenuItem>
      </template>
    </div>
    <div class="menu-mobile"
      v-if="isMobile"
      @click="menuOpen = !menuOpen"
    >
      <div class="hamburger"></div>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo';
import MenuItem from '@/components/MenuItem';

export default {
  name: 'Header',
  components: {
    Logo,
    MenuItem
  },
  props: {
    menu: {
      type: Array,
      required: true
    },
    saleItem: String,
    isMobile: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      menuOpen: false
    }
  }
}
</script>

<style lang="scss">
.header, .menu, .menu-mobile {
  @include flex(row, space-between);
}
.header {
  @include center(70vw, 10px);
}

.menu {
  @media (max-width: 900px) {
    @include flex(column, space-between);
    position: absolute;
    right: 5rem;
    background-color: $transparentViolet;
    border-radius: 0.5rem;
    padding: 0.5rem;
  }
}

.hamburger {
    margin-top: 20px;
    position: relative;
    width: 1.5em;
    height: 0.8em;
    border-top: 0.2em solid $white;
    border-bottom: 0.2em solid $white;
}

.hamburger:before {
    content: "";
    position: absolute;
    top: 0.3em;
    left: 0px;
    width: 100%;
    border-top: 0.2em solid $white;
}

</style>
