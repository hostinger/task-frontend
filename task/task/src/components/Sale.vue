<template>
    <div class="row padding sale">
        <Offer v-bind:offer="offer" />
        <Pricing v-bind:offer="offer" />
    </div>
</template>

<script>
import Offer from './Offer'
import Pricing from './Pricing'

export default {
 name: "Sale",
 components: {
     Offer,
     Pricing
 },
 data() {
     return {
        offer: {
            price: {
                discount: 69,
                dollars: 3,
                cents: 99
            },
            days: 20,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }
 }
}
</script>

<style scoped lang="scss">

</style>
