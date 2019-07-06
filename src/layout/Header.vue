<template>
  <div class="header">
    <Logo></Logo>
    <div class="menu">
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
    saleItem: String
  }
}
</script>

<style lang="scss">
.header, .menu {
  display: flex;
  flex-direction: row;
}
.header {
  max-width: 70vw;
  padding: 10px;
  margin: 0 auto;
  justify-content: space-between;
}
</style>
