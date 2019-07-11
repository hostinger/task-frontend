<template>
  <div id="app">
     
      <!-- <div class="dark-overlay"></div> -->
      <div class="bg-img">
        <div class="img-overlay"></div>
      </div>
      <div class="container">
        <Navigation v-bind:nav="nav" />
        <Sale />
      </div>
      <Footer />      
  </div>
</template>

<script>
import Navigation from './components/Navigation';
import Sale from './components/Sale';
import Footer from './components/Footer';

export default {
  name: 'app',
  data () {
    return {
            nav: [
                {
                    id:1,
                    title: "Web Hosting",
                    onSale: false,
                },
                {
                    id:2,
                    title: "Cloud Hosting",
                    onSale: true,
                },
                {
                    id:3,
                    title: "Vps Hosting",
                    onSale: false,
                },
                {
                    id:4,
                    title: "Domain Checker",
                    onSale: false,
                },
                {
                    id:5,
                    title: "Website Builder",
                    onSale: false,
                },
            ]
        }
  },
  components: {
    Navigation,
    Sale,
    Footer
  }
}
</script>

<style lang="scss">
#app {
  font-family: "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
  height: 100vh;
}
.bg-img {
  background: url("/src/assets/background.jpg");
  background-size: cover;
  background-position: 50%;
  min-height: 100vh;
  position: absolute;
  display: block;
  margin: 0 auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: scaleX(-1);
}
.img-overlay {
  background: rgba(0,0,0,0.4);
  height: 100%;
  width: auto;
}
.padding {
        margin-top: 50px;
    }
</style>
