<template>
  <div id="app" class="container">
    <Navbar />
    <div class="main-content-container">Main content</div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "app",
  components: {
    Navbar
  }
};
</script>

<style lang="sass">
*
  margin: 0
  padding: 0
  box-sizing: border-box

body
  font-family: "H", "Trebuchet MS", Helvetica
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  background-color: gray

/* Tablet Styles */
@media only screen and (max-width: 961px)
  .container
      height: 100%
      width: 70%
      margin: 0 auto


/* Desktop Styles */
@media only screen and (min-width: 960px)  
  .container
    height: 100%
    width: 70%
    margin: 0 auto

  .main-content-container
    margin: 3rem 0

</style>

