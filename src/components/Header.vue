<template>
  <div class="header">
    <div class="img-container">
      <img class="img-container__img" src="../assets/logo.svg" alt="Hostinger logo">
    </div>
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__item">Web hosting</li>
        <li class="nav__item">
          <span class="nav__badge">
            On sale
          </span>
          Cloud hosting</li>
        <li class="nav__item">VPS hosting</li>
        <li class="nav__item">Domain checker</li>
        <li class="nav__item">Website builder</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  @import '../scss/helper';
  .header {
    align-self: start;
    display: grid;
    grid-template-columns: auto 1fr;
    height: 80px;
    .img-container {
      justify-self: start;
      align-self: center;

      &__img {
        width: 140px;
        @include responsive(tablet-land) {width: 120px;}
      }
    }
    .nav {
      justify-self: end;
      align-self: center;
      font-size: 14px;
      @include responsive(mobile) {}
      @include responsive(tablet-land) {font-size: 12px;}
      @include responsive(small-desktop) {}
      &__list {
        list-style: none;
        display: grid;
        grid-template-columns: repeat(5, auto);
        grid-column-gap: 25px;
        @include responsive(tablet-port) {
          margin-left: 20px;
          grid-column-gap: 10px;
        }
        @include responsive(tablet-land) {grid-column-gap: 15px;}
      }
      &__item {
        position: relative;
        display: block;
        color: $color-white;
        text-transform: uppercase;
        font-weight: 700;
        letter-spacing: 1px;
        @include responsive(tablet-port) {text-align: center;}
        cursor: pointer;
        transition: all .5s;
        &:hover {
          opacity: .6;
        }
      }
      &__badge {
        color: $color-yellow;
        position: absolute;
        width: 100%;
        left: 0;
        top: -100%;
        font-weight: 400;
        transform: translateY(40%);
        font-size: 11px;
        @include responsive(tablet-port) {
          transform: translateY(-100%);
          top: 0;
        }
      }
    }
  }
</style>
