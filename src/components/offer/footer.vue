<template>
  <div id="offer-footer">
    <div class="d-flex flex-column flex-sm-row justify-content-between mb-3">
      <div v-for="(feature, index) in features" :key="index" class="offer-feature py-2">
        <font-awesome-icon icon="check"/> {{feature}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      features: [
        'Guaranteed 99.9% uptime',
        'Superior speed performance',
        '24/7 support chat',
        '30-Day Money-Back guarantee'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#offer-footer {
  @media (min-width: 991px) {
      margin: 0 -15px !important;
    }
  .offer-feature {
    font-size: 18px;
    text-transform: capitalize;

    @media (min-width: 991px) {
      padding: 0 15px !important;
    }
    @media (max-width: 576px) {
      padding: 0 0 !important;
    }
    svg {
      font-size: 15px;
      margin-right: 4px;
      color: $green-light;
    }
  }
}
</style>
