<template>
  <v-container fluid class="hero-img">
    <div class="hero-overlay"></div>
    <v-container
      style="max-width: 1114px"
      class="mx-auto mt-10 px-8 px-lg-12 pt-4 white--text hero-contents"
    >
      <v-row
        align="center"
        justify="center"
        align-content="center"
        class="mt-6 mt-sm-12 mx-0 mb-sm-6 pt-12 px-0 pb-10 pb-sm-12"
      >
        <v-col cols="12" sm="6" class="px-1 order-sm-1 order-2">
          <v-container justify="center" justify-sm="start" class="ma-0 px-0">
            <div class="text-center text-sm-left">
              <h1
                :style="$vuetify.breakpoint.mdAndUp ? {fontSize: '2.4rem' } : {fontSize: '1.9rem' }"
              >
                New Year Offer
                <br />
                <span class="accent--text">82% OFF</span> Web Hosting
              </h1>
              <v-container style="min-width: 200px; max-width: 310px" class="mb-5 ml-sm-0 pl-sm-0">
                <Countdown endtime="Jan 1, 2021"></Countdown>
              </v-container>
              <v-btn x-large color="accent" width="240px">Get Started Now</v-btn>
            </div>
          </v-container>
        </v-col>
        <Price></Price>
      </v-row>
      <v-row justify="center">
        <ul class="mx-n3 perks-block">
          <template v-for="(perk, index) in perks">
            <li :key="index" class="mx-3">
              <v-icon color="green" size="16px" class="mr-1 mb-1">fas fa-check</v-icon>
              <span style="font-size: 0.9rem">{{ perk.text }}</span>
            </li>
          </template>
        </ul>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import Price from '@/components/Price';
import Countdown from '@/components/Countdown';

export default {
  name: 'HomeHero',
  components: {
    Price,
    Countdown
  },
  data() {
    return {
      perks: [
        { text: 'Guaranteed 99.9% Uptime' },
        { text: 'Superior Speed Performance' },
        { text: '24/7 Support Chat' },
        { text: '30-Day Money-Back Guarantee' }
      ]
    };
  }
};
</script>

<style lang="scss">
.hero-img {
  background-image: url('../assets/background.jpg');
  background-position: 0 50%;
  background-size: cover;
  position: relative;
}

.hero-overlay {
  opacity: 0.3;
  background-color: #000;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.hero-contents {
  position: relative;

  .perks-block {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    list-style-type: none;
  }
}
</style>
