<template>
    <div class="container main-container">
        <div class="row h-100">
            <div class="col-lg-6 col-12 order-2 order-lg-1" style="border: 1px solid red">

            </div>
            <div class="col-lg-6 col-12 order-1 order-lg-2" style="border: 1px solid red">
                <banner-price/>
            </div>
        </div>
    </div>
</template>

<script>

    import BannerPrice from '../components/BannerPrice'
    export default {
        name: "BannerPage",
        components: {BannerPrice}
    }
</script>

<style scoped lang="scss">
    @import "../assets/styles/components/bannerPage";
</style>