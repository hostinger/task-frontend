<template>
  <div id="app">
    <Header></Header>
  </div>
</template>

<script>
import Header from './layout/Header';

export default {
  name: 'app',
  components: {
    Header
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
