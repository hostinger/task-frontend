<template>
    <div class="container main-container">
        <div class="row h-100">
            <div class="col-lg-6 col-12 order-2 order-lg-1">
                <banner-offer/>
            </div>
            <div class="col-lg-6 col-12 order-1 order-lg-2">
                <banner-price/>
            </div>
        </div>
    </div>
</template>

<script>

    import BannerPrice from '../components/BannerPrice'
    import BannerOffer from '../components/BannerOffer'
    export default {
        name: "BannerPage",
        components: {BannerPrice, BannerOffer}
    }
</script>