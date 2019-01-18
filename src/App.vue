<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <HeaderMenu/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HeaderMenu from './components/HeaderMenu.vue'

export default {
  name: 'app',
  components: {
    HeaderMenu,
    HelloWorld
  }
}
</script>

<style>
body  {
  background: red;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 56px;
}
</style>
