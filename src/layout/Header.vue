<template>
  <div class="header">
    <Logo></Logo>
    <div class="menu">
      <template v-for="(item, index) in menuItems">
        <MenuItem
          :name="item.name"
          :onSale="item.onSale"
          :url="item.url"
          :key="index"
        ></MenuItem>
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
  data() {
    return {
      menuItems: [
        { name: 'Web hosting', onSale: false, url: '#' },
        { name: 'Cloud hosting', onSale: true, url: '#' },
        { name: 'VPS hosting', onSale: false, url: '#' },
        { name: 'Domain Checker', onSale: false, url: '#' },
        { name: 'Website builder', onSale: false, url: '#' },
      ]
    }
  }
}
</script>

<style lang="scss">
</style>
