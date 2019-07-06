<template>
  <div class="content">
    <div class="section">
      <Countdown>
        <template v-slot:days>{{sale.diff.days}}</template>
        <template v-slot:hours>{{sale.diff.hours}}</template>
        <template v-slot:minutes>{{sale.diff.minutes}}</template>
        <template v-slot:seconds>{{sale.diff.seconds}}</template>
      </Countdown>
    </div>
    <div class="section">
    </div>
  </div>
</template>

<script>
import Countdown from '../components/Countdown'

export default {
  name: 'Content',
  components: {
    Countdown
  },
  props: {
    sale: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.content {
  display: flex;
  flex-direction: row;
  max-width: 70vw;
  padding: 10px;
  margin: 0 auto;
  justify-content: space-between;
}
.section {
  width: 50%;
}
</style>
