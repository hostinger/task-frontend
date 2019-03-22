<template>
  <div class="app">
    <mobile-menu v-show="isMobile || size < 769"></mobile-menu>
    <div class="app__container">
      <host-header v-show="!isMobile && size > 770"></host-header>
      <host-body></host-body>
      <host-footer :data="footerInfo"></host-footer>
    </div>
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import MobMenu from './components/mobile-menu/MobMenu';

export default {
  components: {
    'host-header': Header,
    'host-footer': Footer,
    'host-body': Body,
    'mobile-menu': MobMenu,
  },
  data() {
    return {
      footerInfo: [
        'Guaranteed 99.9% uptime',
        'Superiror speed performance',
        '24/7 support chat',
        '30-day money-back guarantee'
      ],
      size: 0,
      isMobile: false
    }
  },
  methods: {
    windowSize(evt) {
      this.size = evt.target.innerWidth;
      console.log(this.size)
    }
  },
  created() {
    this.size = window.innerWidth;
    this.isMobile = (typeof window.orientation !== "undefined") ||
      (navigator.userAgent.indexOf('IEMobile') !== -1);
  },
  beforeMount() {
    console.log(this.size)
    window.addEventListener('resize', this.windowSize);
  },
  destroyed() {
    window.removeEventListener('resize', this.windowSize);
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
  @import './scss/helper';
  * {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
  }
  body {
    box-sizing: border-box;
  }
  .app {
    height: 100vh;
    background: linear-gradient(rgba($color-black, 0.3), rgba($color-black, 0.3)), url('./assets/background.jpg');
    background-size: cover;
    background-position: center;
    @include flipX;
    &__container {
      width: 1110px;
      margin: auto;
      display: grid;
      grid-template-rows: auto 1fr auto;
      height: 100vh;
      @include flipX;
      @include responsive(mobile) {
        overflow-y: scroll;
        height: calc(100vh - 50px);
        width: 90%;
        grid-template-rows: 1fr auto;
      };
      @include responsive(tablet-port) {
        overflow-y: scroll;
        height: calc(100vh - 50px);
        width: 90%;
        grid-template-rows: 1fr auto;
      };
      @include responsive(tablet-land) { width: $tablet-port; };
      @include responsive(small-desktop) { width: $tablet-land; };
    }
  }
</style>
