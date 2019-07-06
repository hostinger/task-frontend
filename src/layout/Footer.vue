<template>
  <div class="footer">
      <template v-for="(item, index) in footer">
        <div class="footer-item" :key="index">
          <img class="check" :src="require('../assets/check.svg')"/>
          <span>{{item}}</span>
        </div>
      </template>
  </div>
</template>

<script>

export default {
  name: 'Footer',
  props: {
    footer: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
.footer {
  display: flex;
  flex-direction: row;
  max-width: 70vw;
  padding: 10px;
  margin: 0 auto;
  justify-content: space-between;
  width: 100%;
  font-family: $mainFont;
  color: $white;
  font-size: 1.3rem;
  font-weight: 500;
}
.footer-item {
  display: flex;
  flex-direction: row;
}
.check {
  margin-right: 1rem;
  min-width: 1rem;
  min-height: 1rem;
}
</style>
