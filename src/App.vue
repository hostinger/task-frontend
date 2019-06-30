<template>
  <div id="app">
    <img v-responsive.lg.xl id="background" src="../assets/background.jpg">
    <img v-responsive.xs.sm.md id="background-phone" src="../assets/background.jpg">
    <div v-responsive.lg.xl id="body-area">
      <Navbar name="navbar"></Navbar>
      <Offer name="offer"></Offer>
      <Bonus name="bonus"></Bonus>
    </div>
    <div v-responsive.xs.sm.md id="body-area-phone">
      <Navbar name="navbar-phone"></Navbar>
      <Offer name="offer-phone"></Offer>
      <Bonus name="bonus-phone"></Bonus>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Bonus from "./components/BonusInfo.vue";
import Offer from "./components/Offer.vue";

export default {
  name: "app",
  components: {
    Navbar,
    Bonus,
    Offer
  }
};
</script>

<style scoped lang="scss">
#app {
  width: 100vw;
  height: 100vh;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  font-weight: bold;
}
#background {
  left: 0;
  position: fixed;
  width: inherit;
  height: inherit;
  transform: scaleX(-1);
}
#background-phone {
  left: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  transform: scaleX(-1);
}
#body-area {
  position: fixed;
  width: inherit;
  max-width: 70vw;
  height: inherit;
  max-height: 96vh;
  padding: 2vh 15vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
#body-area-phone {
  position: relative;
  max-width: 96vw;
  width: inherit;
  height: inherit;
  max-height: 96vh;
  padding: 2vh 2vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
</style>
