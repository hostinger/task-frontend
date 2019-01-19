<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <AppOffer/>
      </div>
      <div class="col-md-6">
        <AppPrice/>
      </div>
    </div>
  </div>
</template>

<script>
import AppOffer from './AppOffer.vue'
import AppPrice from './AppPrice.vue'

export default {
  name: 'HeaderMenu',
  props: {
    msg: String
  },
  components: {
    AppOffer,
    AppPrice
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  
</style>
