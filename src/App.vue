<template>
  <div id="app">
    <Header :menu="menu" :saleItem="sale.item"></Header>
  </div>
</template>

<script>
import Header from './layout/Header';

export default {
  name: 'app',
  components: {
    Header
  },
  data() {
    return {
      menu: [
        { name: 'Web Hosting', url: '#' },
        { name: 'Cloud Hosting', url: '#' },
        { name: 'VPS Hosting', url: '#' },
        { name: 'Domain Checker', url: '#' },
        { name: 'Website Builder', url: '#' },
      ],
      sale: {
        item: 'Web Hosting',
        originalPrice: 8,
        salePrice: 1.45,
        endDate: 1563047530532
      }
    }
  },
  computed: {
    saleComputed() {
      const discount = Math.round(
        100 - (this.sale.salePrice / this.sale.originalPrice * 100)
      );
      return {
        discount,
        ...this.sale
      }
    }
  }
}
</script>

<style lang="scss">
body {
  height: 100vh;
  margin: 0px;
}
#app {
  background-color: $white;
  background-image: url('assets/background.jpg');
  background-size: cover;
  height: 100vh;
}
</style>
