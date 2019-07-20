<template>
  <div id="app">
    <header-bar/>
    <router-view/>
    <footer-bar/>
  </div>
</template>

<script>
  import HeaderBar from './components/HeaderBar'
  import FooterBar from './components/FooterBar'
  export default {
    components: {HeaderBar, FooterBar}
  }
</script>

<style lang="scss">
@import "assets/styles/components/app";
</style>
