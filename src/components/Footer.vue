<template>
  <div class="footer">
    <ul class="list">
      <li class="list__item" v-for="item in data">
        <font-awesome-icon icon="check" class="list__icon"/>{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
  @import '../scss/helper';
  .footer {
    align-self: end;
    height: 40px;
    display: grid;
    @include responsive(mobile) {
      height: 120px;
      text-align: center;
    };
    @include responsive(tablet-port) {
      height: 80px;
      text-align: center;
    };
    @include responsive(tablet-land) {
      height: 80px;
      text-align: center;
    };
    .list {
      align-self: center;
      display: grid;
      grid-auto-flow: column;
      font-size: 18px;
      font-weight: 400;
      @include responsive(mobile) { grid-auto-flow: row; }
      @include responsive(tablet-port) {font-size: 16px;}
      @include responsive(small-desktop) {font-size: 16px;}
      &__item {
        display: block;
        text-transform: capitalize;
        color: $color-white;

        &:not(:first-child) {
          justify-self: center;
        }
        &:last-child {
          justify-self: end;
          @include responsive(mobile) { justify-self: center; }
        }
      }
      &__icon {
        color: $color-green;
        margin-right: 10px;
      }
    }
  }
</style>
