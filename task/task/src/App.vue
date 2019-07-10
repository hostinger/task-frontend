<template>
  <div id="app">
     <b-card
        overlay
        img-src="/src/assets/background.jpg"
        img-alt="Card Image"
        text-variant="white"
      >
        <div class="container">
          <Navigation v-bind:nav="nav" />
          <Sale />
        </div>
      </b-card>

  </div>
</template>

<script>
import Navigation from './components/Navigation';
import Sale from './components/Sale';

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
    Sale
  }
}
</script>

<style lang="scss">
#app {
  font-family: "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.bg-img {
  background: url('./assets/background.jpg');
  object-fit: cover;
}
.all {
  width: 100%;
  height: 100%;
}
</style>
