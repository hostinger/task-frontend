<template>
  <header class="header-container">
    <img src="../assets/logo.svg" alt="Hostinger" />
    <ListMenu v-bind:listItems="listItems" v-if="windowWidth > 1450" />
    <DropDownMenu v-bind:listItems="listItems" v-if="windowWidth < 1450" />
  </header>
</template>

<script>
import ListMenu from "./ListMenu";
import DropDownMenu from "./DropDownMenu";

export default {
  name: "Navbar",
  components: {
    ListMenu,
    DropDownMenu
  },

  data() {
    return {
      listItems: [
        { title: "Web hosting", onSale: false },
        { title: "Cloud hosting", onSale: true },
        { title: "Vps hosting", onSale: false },
        { title: "Domain checker", onSale: false },
        { title: "Website builder", onSale: false }
      ],
      windowWidth: 0
    };
  },

  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },

  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },

  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    }
  }
};
</script>

<style lang="sass">
$white: #ffffff

.header-container
  display: flex
  padding: 0.8rem 0.5rem
  justify-content: space-between
  align-items: center
  color: $white
  font-weight: 700

</style>
