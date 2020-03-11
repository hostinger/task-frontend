<template>
    <v-container
        fluid
        fill-width
        fill-height
        absolute
        class="home-hero"
        :style="{ backgroundImage: `url(${heroImg})` }"
    >
        <v-layout justify-center align-center>
            <v-row align="center" justify="center">
                <v-col sm="6">
                    <div
                        class="display-2 font-weight-black white--text text-xs-center"
                    >New Year Offer</div>
                    <div
                        class="display-2 font-weight-black white--text text-xs-center mb-3"
                    >82% OFF Web Hosting</div>
                    <div
                        class="display-1 font-weight-bold white--text text-xs-center"
                    >days hours minutes seconds</div>
                    <v-btn class="mt-5 red">
                        <v-icon large color="white">Get Started Now</v-icon>
                    </v-btn>
                </v-col>
                <v-col sm="6">
                    <div class="display-4 font-weight-black white--text text-xs-center">$ 1 45</div>
                </v-col>
            </v-row>
        </v-layout>
    </v-container>
</template>

<script>
import heroImg from '@/assets/background.jpg';
export default {
    name: 'HomeHero',
    data() {
        return {
            heroImg
        };
    }
};
</script>

<style lang="scss">
.home-hero {
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>