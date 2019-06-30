<template>
  <div :id="name">
    <div id="description">
      <div id="description-text">
        New year offer
        <br>
        <span id="offer-text">82% off</span>
        web hosting
      </div>
      <Timer></Timer>
      <button v-responsive.lg.xl id="description-button">get started now</button>
      <button v-responsive.xs.sm.md id="description-button-phone">get started now</button>
    </div>
    <div id="price">
      <div id="offer-details-div">
        <p id="offer-details">save 82%</p>
      </div>
      <div v-responsive.lg.xl id="price-details">
        <span id="currency">$</span>
        <span id="dollars">1</span>
        <div id="minute-details">
          <span id="cents">45</span>
          <span id="month">/mo</span>
        </div>
      </div>
      <div v-responsive.xs.sm.md id="price-details">
        <span id="currency-phone">$</span>
        <span id="dollars-phone">1</span>
        <div id="minute-details-phone">
          <span id="cents">45</span>
          <span id="month">/mo</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Timer from "./Timer.vue";

export default {
  name: "Offer",
  props: {
    name: {
      type: String
    }
  },
  components: {
    Timer
  }
};
</script>

<style lang="scss" scoped>
$flex: flex;
$center: center;

#offer {
  position: static;
  font-size: 10vh;
  display: $flex;
  flex-direction: row;
  justify-content: $center;
  align-items: $center;
  flex-wrap: nowrap;
}
#offer-phone {
  position: static;
  font-size: 10vh;
  display: $flex;
  flex-direction: column;
  justify-content: $center;
  align-items: $center;
}
#price {
  display: $flex;
  flex-direction: column;
  justify-content: $center;
  align-items: $center;
  padding: 5vh 5vw;
}
#offer-details {
  font-size: 3vh;
  text-align: $center;
  text-transform: uppercase;
  background-color: #fa8072;
  position: relative;
  padding: 1vh 1vw;
  width: 100%;
}
#offer-details::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-top-color: #fa8072;
  border-bottom: 0;
  margin-left: -10px;
  margin-bottom: -10px;
}
#offer-details-div {
  display: $flex;
  flex-direction: row;
  justify-content: $center;
}
#price-details {
  display: $flex;
  flex-direction: row;
  justify-content: $center;
  align-items: $center;
}
#dollars-phone {
  font-size: 30vh;
  margin-top: -5vh;
}
#minute-details-phone {
  display: $flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: inherit;
  font-size: 7.5vh;
}
#currency-phone {
  font-size: 15vh;
}
#dollars {
  font-size: 60vh;
  margin-top: -5vh;
}
#minute-details {
  display: $flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: inherit;
  font-size: 20vh;
}
#currency {
  font-size: 20vh;
}
#description {
  text-transform: capitalize;
  font-size: 7.5vh;
  padding: 5vh 5vw;
}
#offer-text {
  color: red;
  text-transform: uppercase;
}
#description-button {
  background-color: red;
  border: 1px solid red;
  border-radius: 5px;
  height: 8vh;
  width: 15vw;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2vh;
}
#description-button-phone {
  background-color: red;
  border: 1px solid red;
  border-radius: 5px;
  height: 8vh;
  width: 50vw;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2vh;
}
#description-button:hover {
  cursor: pointer;
}
</style>

