<template>
  <v-layout class="hero-img">
    <div class="hero-overlay"></div>
    <div class="hero-contents white--text">
      <v-row align="end" align-content="center" class="ma-0 pt-12 pb-12">
        <v-col cols="12" sm="6" class="getstarted-block order-sm-1 order-2">
          <v-row justify="center" justify-sm="start" class="ma-0">
            <div>
              <h1 class="mb-3">
                New Year Offer
                <br />
                <span class="accent--text">82% OFF</span> Web Hosting
              </h1>
              <div class="time-block mb-8">
                <Countdown endtime="Jan 1, 2021"></Countdown>
              </div>
              <div>
                <v-btn x-large color="accent" class="getstarted__button">Get Started Now</v-btn>
              </div>
            </div>
          </v-row>
        </v-col>
        <Price></Price>
      </v-row>
      <v-row justify="center" class="perks-block pt-4 pb-5">
        <ul class="perks-block-wrapper pa-0">
          <li class="perks-block__item">
            <v-icon color="green" size="16px" class="perks-block__icon">fas fa-check</v-icon>
            <span class="perks-block__text">Guaranteed 99.9% Uptime</span>
          </li>
          <li class="perks-block__item">
            <v-icon color="green" size="16px" class="perks-block__icon">fas fa-check</v-icon>
            <span class="perks-block__text">Superior Speed Performance</span>
          </li>
          <li class="perks-block__item">
            <v-icon color="green" size="16px" class="perks-block__icon">fas fa-check</v-icon>
            <span class="perks-block__text">24/7 Support Chat</span>
          </li>
          <li class="perks-block__item">
            <v-icon color="green" size="16px" class="perks-block__icon">fas fa-check</v-icon>
            <span class="perks-block__text">30-Day Money-Back Guarantee</span>
          </li>
        </ul>
      </v-row>
    </div>
  </v-layout>
</template>

<script>
import Price from '@/components/Price';
import Countdown from '@/components/Countdown';

export default {
  name: 'HomeHero',
  components: {
    Price,
    Countdown
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
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px 72px 0 66px;
  margin-right: auto;
  margin-left: auto;
  max-width: 1200px;

  .getstarted__button {
    height: 55px;
    width: 260px;
  }

  .perks-block {
    max-height: fit-content;

    .perks-block-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      list-style-type: none;

      .perks-block__item {
        margin: 0 14px;
        .perks-block__icon {
          margin-right: 6px;
        }
        .perks-block__text {
          font-size: 15px;
        }
      }
    }
  }

  .time-block {
    max-width: 360px;
  }
}

@media (min-width: $breakpoint-laptop + 1) {
  .hero-contents {
    height: 700px;
  }
  .getstarted-block {
    h1 {
      font-size: 2.5rem;
    }
  }
}

@media (max-width: $breakpoint-laptop) {
  .getstarted-block {
    h1 {
      font-size: 1.8rem;
    }
  }
}

@media (max-width: $breakpoint-lg-tablet) {
  .hero-contents {
    padding-right: 30px;
    padding-left: 24px;
  }
}

@media (min-width: $breakpoint-sm-tablet) and (max-width: $breakpoint-laptop) {
  .hero-contents {
    height: 600px;
  }
}

@media (max-width: $breakpoint-sm-tablet - 1) {
  .getstarted-block {
    text-align: center;
  }
}
</style>
