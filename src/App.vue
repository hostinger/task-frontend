<template>
  <div class="wrapper">

    <vHeader/>
    <vBanner date="January 31,2019"/>

  </div>
</template>

<script>
import vHeader from './components/header.vue'
import vBanner from './components/banner.vue'

export default {
  name: 'app',
  components: {
    vHeader,
    vBanner,
  }
}
</script>

<style>
@import './static/css/media.css';

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  color: #fff;
}

div {
  display: block;
}

a {
  text-decoration: none;
  color: #fff;
}
</style>
