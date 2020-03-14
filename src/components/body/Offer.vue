<template>
  <div class="offer">
    <div class="tooltip">
      <p class="tooltip__text">
        save 82%
      </p>
    </div>
    <div class="info">
      <div class="info__curr">$</div>
      <div class="info__big-num">1</div>
      <div class="info__month-wrapper">
        <div class="info__cents">45</div>
        <div class="info__per-month">/mo</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  @import '../../scss/helper';
  .offer {
    justify-self: center;
    position: relative;
    width: 100%;
    display: grid;
    @include responsive(mobile) {
      grid-area: 1;
    }
    @include responsive(tablet-port) {
      grid-area: 1;
    }
    .tooltip {
      position: absolute;
      top: -25px;
      left: 50%;
      transform: translateX(-10%);
      background-color: $color-lightred;
      width: 150px;
      height: 50px;
      display: grid;
      font-size: 1.4em;
      @include responsive(mobile) {
        transform: translateX(-30%);
        top: 40px;
        width: 120px;
        height: 40px;
        font-size: 1.1em;
      }
      @include responsive(tablet-port) {
        transform: translateX(-15%);
        top: -20px;
      }
      @include responsive(tablet-land) {transform: translateX(-20%);}
      @include responsive(small-desktop) {transform: translateX(-20%);}
      &::after {
        content: " ";
        @include tooltip-triangle-rotate;
        @include tooltip-triangle;
        top: 100%;
        left: 50%;
        width: 40px;
        height: 40px;
        background-color: $color-lightred;
        position: absolute;
        @include edgeSupport {display: none;}
      }
      &__text {
        text-transform: uppercase;
        font-weight: 600;
        color: $color-white;
        align-self: center;
        justify-self: center;
      }
    }
    .info {
      position: relative;
      color: $color-white;
      font-weight: 700;
      font-size: 100px;
      align-self: center;
      @include responsive(mobile) {font-size: 40px;}
      @include responsive(tablet-port) {font-size: 80px;}
      @include responsive(tablet-land) {font-size: 70px;}
      @include responsive(small-desktop) {font-size: 80px;}

      &__curr {
        position: absolute;
        font-size: 1.8em;
        font-weight: 700;
        left: 0;
        top: .5em;
        @include responsive(mobile) {left: 20%;}
        @include responsive(tablet-port) {left: 5%;}
        @include responsive(small-desktop) {left: 10%;}
      }
      &__big-num {
        font-size: 5em;
        line-height: 1em;
        text-align: center;
      }
      &__month-wrapper {
        position: absolute;
        top: .6em;
        left: 100%;
        line-height: 2em;
        transform: translateX(-60%);
        @include responsive(mobile) {left: 80%;}
        @include responsive(tablet-port) {transform: translateX(-85%);}
        @include responsive(tablet-land) {transform: translateX(-70%);}
        @include responsive(small-desktop) {transform: translateX(-90%);}
      }
      &__cents {
        font-weight: 700;
        font-size: 1.4em;
      }
      &__per-month {
        font-weight: 500;
      }
    }
  }
</style>

