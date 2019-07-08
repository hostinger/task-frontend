<template>
    <div id="app">
        <app-header></app-header>
        <app-footer></app-footer>
    </div>
</template>

<script>
  import Header from './components/elements/Header'
  import Footer from './components/elements/Footer'

  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      appHeader: Header,
      appFooter: Footer
    }
  }
</script>

<style lang="scss">

</style>
