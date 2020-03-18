<template>
  <v-layout fluid fill-width fill-height align-center justify-center absolute>
    <div :style="{ backgroundImage: `url(${heroImg})` }" class="hero-img"></div>
    <div id="hero-contents" class="white--text">
      <v-row align="center" justify="center" class="ma-0">
        <v-col
          cols="12"
          sm="6"
          class="getstarted-block d-flex order-sm-1 order-2"
        >
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
              <v-btn x-large color="accent" height="55" width="260"
                >Get Started Now</v-btn
              >
            </div>
          </div>
        </v-col>
        <v-spacer></v-spacer>

        <v-col cols="12" sm="6" class="price-block d-flex order-sm-2 order-1">
          <div>
            <div class="price__save-holder">
              <div class="price__save-holder__rect">Save 82%</div>
              <div class="price__save-holder__arrow"></div>
            </div>
            <div class="price-block-wrapper">
              <Price></Price>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row align="center" justify="center" class="ma-0 perks-block">
        <ul class="perks-block-wrapper">
          <li class="perks-block__item">
            <v-icon color="green" size="16px" class="perks-block__icon"
              >fas fa-check</v-icon
            >Guaranteed 99.9% Uptime
          </li>
          <li class="perks-block__item">
            <v-icon color="green" size="16px" class="perks-block__icon"
              >fas fa-check</v-icon
            >Superior Speed Performance
          </li>
          <li class="perks-block__item">
            <v-icon color="green" size="16px" class="perks-block__icon"
              >fas fa-check</v-icon
            >24/7 Support Chat
          </li>
          <li class="perks-block__item">
            <v-icon color="green" size="16px" class="perks-block__icon"
              >fas fa-check</v-icon
            >30-Day Money-Back Guarantee
          </li>
        </ul>
      </v-row>
    </div>
  </v-layout>
</template>

<script>
import Price from '@/components/Price';
import Countdown from '@/components/Countdown';
import heroImg from '@/assets/background.jpg';

export default {
  name: 'HomeHero',
  components: {
    Price,
    Countdown
  },
  data() {
    return {
      heroImg
    };
  }
};
</script>

<style lang="scss">
.hero-img {
  background-size: cover;
  transform: rotateY(180deg);
  filter: brightness(0.65);
  width: 100%;
  height: 100%;
  position: relative;
}

#hero-contents {
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-right: 30px;
  padding-left: 24px;
  margin-right: auto;
  margin-left: auto;
  max-width: 1000px;

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
    padding-bottom: 24px;

    .perks-block-wrapper {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      .perks-block__item {
        display: inline-block;
        display: flex;
        flex-direction: row;
        margin: 0 18px;
        .perks-block__icon {
          margin-right: 6px;
        }
      }
    }
  }

  .time-block {
    max-width: 360px;
  }
}

@media (min-width: 1201px) {
  #hero-contents {
    max-width: 1300px;
    .getstarted-block {
      h1 {
        font-size: 2.6rem;
      }
    }
    .price-block-wrapper {
      font-size: 2.9em;
    }
  }
}

@media (max-width: 1200px) {
  #hero-contents {
    max-width: 1180px;
  }
}

@media (min-width: 1051px) and (max-width: 1200px) {
  .getstarted-block {
    h1 {
      font-size: 2.5rem;
    }
  }
  .price-block-wrapper {
    font-size: 2.6em;
  }
}

@media (min-width: 901px) and (max-width: 1050px) {
  .getstarted-block {
    h1 {
      font-size: 2.2rem;
    }
  }
  .price-block-wrapper {
    font-size: 2.1em;
  }
}

@media (min-width: 901px) {
  .price__save-holder__rect {
    font-size: 20px;
  }
}

@media (max-width: 900px) {
  .getstarted-block {
    h1 {
      font-size: 1.9rem;
    }
  }
  .price-block-wrapper {
    font-size: 1.5em;
  }
  .price__save-holder__rect {
    font-size: 14px;
  }
}

@media (min-width: 767px) {
  .getstarted-block {
    justify-content: flex-start;
    padding-bottom: 0;
  }

  .price-block {
    justify-content: flex-end;
    padding-top: 0;
  }
}

@media (max-width: 766px) {
  .getstarted-block {
    justify-content: center;
    text-align: center;
  }

  .price-block {
    justify-content: center;
    padding-top: 100px;
    text-align: center;
  }
}
</style>
