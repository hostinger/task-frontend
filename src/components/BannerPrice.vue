<template>
    <div>
        <div class="save-pointer">
            <div class="save-text">Save 82%</div>
            <div class="save-arrow">
                <span class="arrow-down"></span>
            </div>
        </div>
        <div class="price-block">
            <div class="currency-block">$</div>
            <div class="big-price">1</div>
            <div class="price-details">
                <div class="price-cents">45</div>
                <div class="price-period">/mo</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BannerPrice"
    }
</script>

<style scoped lang="scss">
    @import "../assets/styles/components/bannerPrice";
</style>