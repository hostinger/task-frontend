<template>
  <div id="app">
    <Banner/>
  </div>
</template>

<script>

import Banner from './components/Banner.vue'

export default {
  name: 'app',
  components: {
    Banner
  }
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: $font;
  color: #fff;
}



</style>
