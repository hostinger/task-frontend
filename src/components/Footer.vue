<template>
  <footer>
    <div class="footer-list">
      <div v-for="(item, index) in listItems" :key=index>
        <i class="fas fa-check checkmark" />
        {{ item }}
      </div>
    </div>
  </footer>
</template>

<script>
export default {
    name: "Footer",
    data() {
      return {
        listItems: [
          "Guaranteed 99.9% uptime",
          "Superior speed performance",
          "24/7 Support chat",
          "30-Day money back guarantee"
        ]
      }
    }
}
</script>

<style lang="sass">
$green: #27ab18

.footer-list
  display: flex
  justify-content: space-between
  list-style-type: none
  color: white
  div
    display: inline-block
    text-transform: capitalize
    padding: 1rem

  .checkmark
    color: $green

@media only screen and (max-width: 1100px)
  .footer-list
    display: flex
    flex-direction: column
    align-items: center

</style>

