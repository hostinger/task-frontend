<template>
    <div class="price-tag-container">
        <div class="dollar-sign">$</div>
        <div class="price">1
            <div>Save 82%<div class="triangle-down"></div></div>
        </div>
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
$peach: #FFC0CB

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
    position: relative
    div
        font-size: 1rem
        position: absolute
        top: -2.2rem
        left: 2.5rem
        width: 8rem
        background-color: $peach
        padding: 0.7rem 1.5rem
        text-transform: uppercase
        text-align: center
        .triangle-down
            position: absolute
            top: 1rem
            left: 2rem
            width: 2rem
            transform: rotate(45deg)
            z-index: -1

.price-cents
    font-size: 7.5rem
    align-self: flex-start
    z-index: 0

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

