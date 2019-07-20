<template>

    <div class="offer">
        <div class="offer-text">
            New Year Offer <br><em>82% Off</em> Web Hosting
        </div>
        <div class="offer-timer">
            <span class="arrow-right"></span>
            <div class="timer">
                <div class="time">
                    <div class="count">00<br><span>Days</span></div>
                </div>
                <div class="time">
                    <div class="count">00<br><span>Hours</span></div>
                </div>
                <div class="time">
                    <div class="count">00<br><span>Minutes</span></div>
                </div>
                <div class="time">
                    <div class="count">00<br><span>Seconds</span></div>
                </div>
            </div>
            <span class="arrow-left"></span>
        </div>
        <button class="offer-button">Get Started Now</button>
    </div>
</template>

<script>
    export default {
        name: "BannerOffer"
    }
</script>

<style scoped lang="scss">
    @import "../assets/styles/components/bannerOffer";
</style>