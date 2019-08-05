<template>
  <div id="app" class="container">
    <Navbar />
    <div class="main-content-container">
      <Promotion class="flex-item"/>
      <PriceTag class="flex-item" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Promotion from "./components/Promotion";
import PriceTag from './components/PriceTag';
import Footer from './components/Footer';

export default {
  name: "app",
  components: {
    Navbar,
    Promotion,
    PriceTag,
    Footer
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

html
  background: url(assets/background.jpg) repeat center center fixed
  -webkit-background-size: cover
  -moz-background-size: cover
  -o-background-size: cover
  background-size: cover

/* Tablet Styles */
@media only screen and (max-width: 1101px)
  .container
    height: 100%
    width: 70%
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
@media only screen and (min-width: 1100px)  
  .container
    height: 100%
    width: 60%
    margin: 0 auto

  .main-content-container
    margin: 8rem 0
    display: flex
    justify-content: space-between

</style>

