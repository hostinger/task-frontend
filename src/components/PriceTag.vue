<template>
    <div class="price-tag-container">
        <div class="dollar-sign">$</div>
        <div class="price">1</div>
        <div class="price-cents">
            <div>45</div>
            <div>/mo</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PriceTag"
}
</script>

<style lang="sass">
.price-tag-container
    display: flex
    color: white

.dollar-sign
    font-size: 10rem
    font-weight: 700
    align-self: center

.price
    font-size: 20rem
    font-weight: 700
    align-self: flex-start

.price-cents
    font-size: 7.5rem
    align-self: flex-start

@media only screen and (max-width: 1451px)
    .dollar-sign
        font-size: 7.5rem
    
    .price
        font-size: 13rem

    .price-cents
        font-size: 4.5rem

    .price-tag-container
        justify-content: center
</style>

