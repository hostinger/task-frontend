<template>
  <v-layout>
    <v-icon color="accent" size="30px" class="perks-block__icon">fas fa-caret-right</v-icon>
    <div class="time-block__item">
      <span class="time-block__item-value">00</span>
      <span class="time-block__item-label">Days</span>
    </div>
    <div class="time-block__item">
      <span class="time-block__item-value">16</span>
      <span class="time-block__item-label">Hours</span>
    </div>
    <div class="time-block__item">
      <span class="time-block__item-value">18</span>
      <span class="time-block__item-label">Minutes</span>
    </div>
    <div class="time-block__item">
      <span class="time-block__item-value">29</span>
      <span class="time-block__item-label">Seconds</span>
    </div>
    <v-icon color="accent" size="30px" class="perks-block__icon">fas fa-caret-left</v-icon>
  </v-layout>
</template>

<script>
export default {
  name: "Timer"
};
</script>

<style lang="scss">
.time-block__item {
  flex: 1;
  font-weight: 700;
  text-align: center;

  .time-block__item-value {
    font-size: 30px;
    display: block;
  }
  .time-block__item-label {
    font-size: 12px;
    display: block;
    text-transform: uppercase;
  }
}
</style>
