<template>
  <div class="container">
    <header>
      <Toolbar />
    </header>
    <main class="main-content">
      <SalesTimerComponent id="timer" />
      <Price id="price" />
    </main>
    <footer>
      <Footer />
    </footer>
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

* {
  box-sizing: border-box;
  max-width: 100%;
}
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
  font-family: "Open Sans", sans-serif;
  @include for-phone-only {
    background: url("./assets/compressed-images/bg-600.jpg");
    background-size: cover;
  }
  @include for-tablet-portrait-up {
    background: url("./assets/compressed-images/bg-900.jpg");
    background-size: cover;
  }
  @include for-tablet-landscape-up {
    background: url("./assets/compressed-images/bg-1200.jpg");
    background-size: cover;
  }
  @include for-desktop-up {
    background: url("./assets/compressed-images/bg-1800.jpg");
    background-size: cover;
  }
}
header,
footer {
  position: sticky;
  top: 0;
  display: flex;
  width: 100vw;
  height: 50px;
  font-size: 1.1em;
  width: 90vw;
  @include for-phone-only {
    width: 99vw;
  }
  margin: 0 auto;
}
header {
  @include for-tablet-portrait-up {
    height: 50px;
  }
}
footer {
  position: static;
  bottom: 0;
  @include for-phone-only {
    height: 50px;
  }
}
main {
  flex: 1 0 0;
  width: 90vw;
  margin: 0 auto;
}

header *,
footer * {
  flex: 0 1 auto;
  padding-right: 10px;
  overflow: hidden;
}
.container {
  display: contents;
}
.main-content {
  display: flex;
  @include for-tablet-portrait-up {
    flex-direction: column-reverse;
    justify-content: center;
  }
  @include for-phone-only {
    flex-direction: column-reverse;
    justify-content: center;
  }
}
#timer,
#price {
  width: 50%;
  @include for-tablet-portrait-up {
    width: 100%;
  }
  @include for-phone-only {
    width: 100%;
  }
}
</style>
