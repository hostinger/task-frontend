<template>
  <v-layout class="hero-img" fluid align-center justify-center>
    <div class="hero-overlay"></div>
    <div class="hero-contents white--text">
      <v-row align="end" align-content="center" justify="center" class="ma-0 pt-12 pb-12">
        <v-col cols="12" sm="6" class="getstarted-block order-sm-1 order-2">
          <v-row justify="center" justify-sm="start" class="ma-0">
            <div>
              <h1 class="mb-4">
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

        <v-col cols="12" sm="6" class="price-block order-sm-2 order-1">
          <v-row justify="center" justify-sm="end" class="ma-0">
            <div>
              <div class="price__save-holder">
                <div class="price__save-holder__rect">Save 82%</div>
                <div class="price__save-holder__arrow"></div>
              </div>
              <div class="price-block-wrapper">
                <Price></Price>
              </div>
            </div>
          </v-row>
        </v-col>
      </v-row>
      <v-row align="center" justify="center" class="perks-block ma-0 pt-4 pb-4">
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
  background-position: 0 47%;
  background-size: cover;
  position: relative;
  color: #fff;
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
  height: 100%;
  padding-top: 50px;
  padding-right: 72px;
  padding-left: 66px;
  margin-right: auto;
  margin-left: auto;
  max-width: 1200px;

  .getstarted__button {
    height: 55px;
    width: 260px;
  }

  .price-block {
    font-size: 48px;

    .price__save-holder {
      display: flex;
      align-items: center;
      flex-direction: column;

      .price__save-holder__rect {
        background: #fb9d9e;
        font-size: auto;
        padding: 10px 30px;
        font-weight: 600;
        text-transform: uppercase;
      }

      .price__save-holder__arrow {
        background: #fb9d9e;
        transform: rotate(45deg);
        width: 20px;
        height: 20px;
        margin-top: -10px;
      }
    }

    .price-block-wrapper {
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
    }
  }

  .perks-block {
    max-height: fit-content;

    .perks-block-wrapper {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      .perks-block__item {
        display: inline-block;
        display: flex;
        flex-direction: row;
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

@media (min-width: 1061px) {
  .hero-contents {
    height: 700px;
  }
  .getstarted-block {
    h1 {
      font-size: 2.5rem;
    }
  }
  .price-block-wrapper {
    font-size: 2.6em;
  }
}

@media (max-width: 960px) {
  .hero-contents {
    padding-right: 30px;
    padding-left: 24px;
  }
}

@media (min-width: 767px) and (max-width: 1060px) {
  .getstarted-block {
    h1 {
      font-size: 1.8rem;
    }
  }
  .price-block-wrapper {
    font-size: 2.2em;
  }
}

@media (min-width: 767px) {
  .price__save-holder__rect {
    font-size: 20px;
  }
}

@media (max-width: 766px) {
  .getstarted-block,
  .price-block {
    text-align: center;
  }
  .getstarted-block {
    h1 {
      font-size: 1.8rem;
    }
  }
  .price-block-wrapper {
    font-size: 1.3em;
  }
  .price__save-holder__rect {
    font-size: 14px;
  }
}
</style>
