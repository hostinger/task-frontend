<template>
    <v-layout fluid fill-width fill-height align-center absolute>
        <div :style="{ backgroundImage: `url(${heroImg})` }" class="home-hero"></div>
        <v-layout class="contents">
            <v-row align="center" justify="center">
                <v-col sm="12" class="hidden-lg-and-up mobile">
                    <v-row class="price font-weight-black white--text">
                        <v-col class="first-word pl-0 pr-0">$</v-col>
                        <v-col class="second-word pl-0 pr-0">1</v-col>
                        <v-col class="column pl-0 pr-0">
                            <v-col class="third-word pl-0 pr-0">45</v-col>
                            <v-col class="fourth-word pl-0 pr-0">/mo</v-col>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col md="6" class="column">
                    <div
                        class="display-2 font-weight-black white--text text-xs-center mb-4"
                    >New Year Offer</div>
                    <div class="display-2 font-weight-black white--text text-xs-center mb-6">
                        <span class="error--text">82% OFF</span> Web Hosting
                    </div>
                    <div
                        class="display-1 font-weight-bold white--text text-xs-center mb-8"
                    >days hours minutes seconds</div>
                    <div>
                        <v-btn x-large color="error" height="55" width="260">Get Started Now</v-btn>
                    </div>
                </v-col>
                <v-spacer></v-spacer>
                <v-col md="5" class="hidden-md-and-down">
                    <v-row class="price font-weight-black white--text">
                        <v-col class="first-word pl-0 pr-0">$</v-col>
                        <v-col class="second-word pl-0 pr-0">1</v-col>
                        <v-col class="column pl-0 pr-0">
                            <v-col class="third-word pl-0 pr-0">45</v-col>
                            <v-col class="fourth-word pl-0 pr-0">/mo</v-col>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-layout>
    </v-layout>
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
    filter: brightness(0.6);
    width: 100%;
    height: 100%;
    position: relative;
}
.contents {
    padding: 0 8%;
    width: fill-available;
    position: absolute;
    .price {
        min-width: fit-content;
        max-width: fit-content;

        .first-word {
            font-size: 6em;
            padding-top: 190px;
        }
        .second-word {
            font-size: 24em;
        }
        .column {
            padding-top: 170px;
            .third-word {
                font-size: 5em;
            }
            .fourth-word {
                font-size: 4em;
                font-weight: 400;
            }
        }
    }
}
.mobile {
    transform: scale(0.8);
    max-height: 460px;
}
</style>