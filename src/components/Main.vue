<template>
  <div class="main">
    <div class="container">
      <OfferContent/>
      <OfferFooter/>
    </div>
  </div>
</template>

<script>
import OfferContent from '@/components/offer/content.vue'
import OfferFooter from '@/components/offer/footer.vue'

export default {
  name: 'Main program',
  components: {
    OfferContent,
    OfferFooter
  },
  data: function () {
    return {
      image_src: require('@/assets/logo.png')
    }
  }
}
</script>

<style lang="scss" scoped>

.main {
  color:white;
  background: linear-gradient(
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0.3)
        ), url('~@/assets/background.jpg');
  background-size: cover;
  background-position: center;
  transform: scaleX(-1);
  .container {
    transform: scaleX(-1);
  }
}

</style>
