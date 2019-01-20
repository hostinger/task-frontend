<template>
  <div id="app">
    <HeaderMenu/>
    <OfferBody/>
    <Footer/>
  </div>
</template>

<script>
import HeaderMenu from './components/HeaderMenu.vue'
import OfferBody from './components/body/OfferBody.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    HeaderMenu,
    OfferBody,
    Footer
  }
}
</script>

<style>
#app {
  padding-top: 56px;
}
</style>
