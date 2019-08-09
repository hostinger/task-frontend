<template>
  <div id="main-container" class="column-between">
    <div class="content">
      <Toolbar />
      <div class="flex-between">
        <SalesTimerComponent id="timer" />
        <Price id="price" />
      </div>
      <Footer />
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
body {
  margin: 0;
  height: 100vh;
}

#main-container {
  color: white;
  height: 100%;
  font-family: Arial, Helvetica, sans-serif;
  @include for-big-desktop-up {
    background: url("./assets/compressed-images/bg-1800.jpg");
    background-size: cover;
  }
  @include for-desktop-up {
    background: url("./assets/compressed-images/bg-1190.jpg");
    background-size: cover;
  }
  @include for-tablet-portrait-up {
    background: url("./assets/compressed-images/bg-880.jpg");
    background-size: cover;
  }
  @include for-phone-only {
    background: url("./assets/compressed-images/bg-590.jpg");
    background-size: cover;
  }
}
.content {
  height: 98%;
  max-width: 1400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.flex {
  display: flex;
}
.flex-between {
  display: flex;
  justify-content: space-around;
  @include for-phone-only {
    flex-direction: column-reverse;
    align-items: center;
  }
}
.flex-around {
  display: flex;
  justify-content: space-around;
}
.flex-end {
  display: flex;
  align-items: flex-end;
}
#timer,
#price {
  width: 50%;
  @include for-phone-only {
    width: 90%;
    margin: auto;
  }
}
.column-even {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
</style>
