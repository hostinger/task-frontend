<template>
  <div :id="name">
    <img id="logo" src="../../assets/logo.png">
    <div id="buttons" v-responsive.lg.xl>
      <button class="navbar-button" v-for="button in buttons" :key="button.id">
        <div class="sale" v-if="button.sale">on sale</div>
        {{button.name}}
      </button>
    </div>
    <div id="buttons-phone" v-responsive.xs.sm.md>
      <button id="phone-menu" @click="openMenu">≡</button>
    </div>
    <div id="buttons-phone-open" v-if="menuOpen">
      <button class="navbar-button-phone" v-for="button in buttons" :key="button.id">{{button.name}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    name: String
  },
  data() {
    return {
      buttons: [
        { id: 1, name: "web hosting", sale: false },
        { id: 2, name: "cloud hosting", sale: true },
        { id: 3, name: "vps hosting", sale: false },
        { id: 4, name: "domain checker", sale: false },
        { id: 5, name: "website builder", sale: false }
      ],
      menuOpen: false
    };
  },
  methods: {
    openMenu() {
      this.menuOpen = !this.menuOpen;
    }
  }
};
</script>

<style lang="scss" scoped>
$flex: flex;
$flex-direction: row;
$alignCenter: center;
$textUppercase: uppercase;
$buttonText: white;

#navbar {
  width: 70vw;
  display: $flex;
  flex-direction: $flex-direction;
  justify-content: space-around;
  align-items: $alignCenter;
  padding: 2vh 0;
}
#buttons{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
}
.navbar-button {
  text-transform: $textUppercase;
  background: none;
  border: none;
  color: $buttonText;
  font-size: 2vh;
  text-align: left;
}
.navbar-button:hover {
  cursor: pointer;
}
.sale {
  color: yellow;
  font-size: 1vh;
}
#buttons-phone {
  display: $flex;
  flex-direction: $flex-direction;
  align-items: flex-end;
}
#phone-menu {
  font-size: 10vh;
  background: none;
  border: none;
  font-weight: bold;
  color: $buttonText;
}
#navbar-phone {
  display: $flex;
  flex-direction: $flex-direction;
  width: inherit;
  justify-content: space-between;
  align-items: $alignCenter;
  flex-wrap: wrap;
}
#buttons-phone-open {
  position: sticky;
  display: $flex;
  flex-direction: $flex-direction;
  justify-content: center;
  align-items: $alignCenter;
  flex-wrap: wrap;
}
.navbar-button-phone {
  background: none;
  border: none;
  color: $buttonText;
  font-weight: bold;
  text-transform: uppercase;
}
</style>


