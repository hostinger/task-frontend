<template>
  <div id="main-container" class="column-between">
    <div class="content">
      <Toolbar/>
      <div class="flex-between ">
        <SalesTimerComponent id="timer" />
        <Price id="price" />
      </div>
      <Footer  />
    </div>
  </div>
</template>

<script>
import Toolbar from "./components/Toolbar";
import SalesTimerComponent from "./components/SalesTimerComponent";
import Price from "./components/Price";
import Footer from "./components/Footer";

export default {
  components: {
    Toolbar,
    SalesTimerComponent,
    Price,
    Footer
  }
};
</script>

<style lang="scss">
@import "./styles/_mixins.scss";
.content {
  height: 98%;
  max-width: 1400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
body {
  margin: 0;
  height: 100vh;
}
#main-container {
  color: white;
  height: 100%;
  background: url("./assets/background.jpg");
  font-family: Arial, Helvetica, sans-serif;
  @include for-desktop-up {
      background-size: cover;
  }
}
.flex {
    display: flex;
}
.flex-between {
  display: flex;
  justify-content: space-around;
}
.flex-around {
  display: flex;
  justify-content: space-around;
}
.flex-end {
  display: flex;
  align-items: flex-end;
}
#timer, #price {
    width: 50%;
}
.column-even {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
</style>
