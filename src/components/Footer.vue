<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-3 footer__item">
          <font-awesome-icon icon="check" :style="{ color: '#8CC27C' }"/> Guaranteed 99.9% Uptime
        </div>
        <div class="col-md-3 footer__item">
          <font-awesome-icon icon="check" :style="{ color: '#8CC27C' }"/> Superior Speed Performance
        </div>
        <div class="col-md-3 footer__item">
          <font-awesome-icon icon="check" :style="{ color: '#8CC27C' }"/> 24/7 Support Chat
        </div>
        <div class="col-md-3 footer__item">
          <font-awesome-icon icon="check" :style="{ color: '#8CC27C' }"/> 30-Day Money-Back Guarantee
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  footer {
    margin-top: 70px;
    padding-bottom: 10px;
  }

  .footer__item {
    text-align: center;
  }

  @media(max-width: 767.98px) {
    footer {
      margin-top: 20px;
    }
  }
</style>
