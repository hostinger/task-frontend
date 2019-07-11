<template>
    <div class="row sale">
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
                discount: 82,
                dollars: 8,
                cents: 6
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
    @media only screen and(max-width: 991px) {
        .sale {
            display: flex;
            flex-flow: column-reverse;
            align-items: center;
        }
    }
</style>
