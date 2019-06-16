<template>
  <div id="app">
    <Navbar/>
    <Main/>
  </div>
</template>

<script>
import Navbar from './components/header.vue'
import Main from './components/Main.vue'

export default {
  name: 'app',
  components: {
    Main,
    Navbar
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
