<template>
  <div id="app" class="container">
    <Navbar />
    <div class="main-content-container">
      <Promotion class="flex-item"/>
      <PriceTag class="flex-item" />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Promotion from "./components/Promotion";
import PriceTag from './components/PriceTag';

export default {
  name: "app",
  components: {
    Navbar,
    Promotion,
    PriceTag
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
  background-color: gray

/* Tablet Styles */
@media only screen and (max-width: 961px)
  .container
    height: 100%
    width: 90%
    margin: 0 auto

  .main-content-container
    margin: 8rem 0
    display: flex
    flex-direction: column

  .flex-item:nth-child(1)
    order: 2

  .flex-item:nth-child(2)
    order: 0

/* Desktop Styles */
@media only screen and (min-width: 960px)  
  .container
    height: 100%
    width: 80%
    margin: 0 auto

  .main-content-container
    margin: 8rem 0
    display: flex
    justify-content: space-between

</style>

