<template>
  <div class="countdown">
      <div class="triangle-left"></div>
      <div class="number">
        <span><slot name="days"></slot></span>
        <div class="number-text">Days</div>
      </div>
      <div class="number">
        <slot name="hours"></slot>
        <div class="number-text">Hours</div>
      </div>
      <div class="number">
        <slot name="minutes"></slot>
        <div class="number-text">Minutes</div>
      </div>
      <div class="number">
        <slot name="seconds"></slot>
        <div class="number-text">Seconds</div>
      </div>
      <div class="triangle-right"></div>
  </div>
</template>

<script>
export default {
  name: 'Countdown',
}
</script>

<style lang="scss">
%triangle {
	display: block;
	width: 0;
	height: 0;
	border-style: solid;
	border-width: 15.0px 0 15.0px 15.0px;
	border-color: transparent transparent transparent $primary;
}
.triangle-left {
  @extend %triangle;
}
.triangle-right {
  @extend %triangle;
  border-width: 15.0px 15.0px 15.0px 0;
	border-color: transparent $primary transparent transparent;
  margin-right: 30%;
  @media (max-width: 900px) {
    margin-right: 0;
  }
}
.countdown {
  @include flex(row, space-between);
  color: $white;
  font-weight: 700;
  align-items: center;
  padding: 2rem 0;
  min-width: 100%;
}
.number {
  @include flex(column, space-between);
  font-size: 2rem;
  text-align: center;
}
.number-text {
  font-size: 0.8rem;
  text-transform: uppercase;
}
</style>
