<template>
  <div :id="name">
    <div class="info" v-for="info in information" :key="info.id">{{info.info}}</div>
  </div>
</template>

<script>
export default {
  name: "Bonus",
  props: {
    name: {
      type: String
    }
  },
  data() {
    return {
      information: [
        { id: 1, info: "Guaranteed 99.9% Uptime" },
        { id: 2, info: "Superior Speed Performance" },
        { id: 3, info: "24/7 Support Chat" },
        { id: 4, info: "30-Day Money-Back Guarantee" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
$flex: flex;
$center: center;

.info {
    margin: 0 1vw;
}
#bonus {
    width: 70vw;
    display: $flex;
    flex-direction: row;
    justify-content: $center;
    align-content: $center;
    margin: 1vh;
}
#bonus-phone {
    display: $flex;
    flex-direction: column;
    justify-content: $center;
    align-items: $center;
    padding: 20px 0;
}
</style>

