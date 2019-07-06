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
  @include flex(row, space-between);
  @include center(70vw, 10px);
  color: $white;
  font-size: 1.3rem;
  font-weight: 500;
  @media (max-width: 900px) {
    @include flex(column, space-between);
  }
}
.footer-item {
  @include flex(row, center);
  padding: 0.5em 0;
}
.check {
  margin-right: 1rem;
  min-width: 1rem;
  min-height: 1rem;
}
</style>
