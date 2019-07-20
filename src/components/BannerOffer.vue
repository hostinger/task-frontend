<template>

    <div class="offer">
        <div class="offer-text">
            New Year Offer <br><em>82% Off</em> Web Hosting
        </div>
        <banner-timer/>
        <button class="offer-button">Get Started Now</button>
    </div>
</template>

<script>
    import BannerTimer from './BannerTimer'
    export default {
        name: "BannerOffer",
        components: {BannerTimer}
    }
</script>

<style scoped lang="scss">
    @import "../assets/styles/components/bannerOffer";
</style>