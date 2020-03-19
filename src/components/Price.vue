<template>
  <v-col cols="12" sm="6" class="price-block order-sm-2 order-1">
    <v-row justify="center" justify-sm="end" class="ma-0">
      <div>
        <div class="price__save-holder">
          <div class="price__save-holder__rect">Save 82%</div>
          <div class="price__save-holder__arrow"></div>
        </div>
        <div class="price-block-wrapper">
          <div class="price-block__currency">$</div>
          <div class="price-block__bigno">1</div>
          <div class="price-block__right-holder">
            <div class="price-block-right-holder__cents">45</div>
            <div class="price-block-right-holder__unit">
              <div class="price-block-right-holder-unit__unit">/mo</div>
            </div>
          </div>
        </div>
      </div>
    </v-row>
  </v-col>
</template>

<script>
export default {
  name: 'Price'
};
</script>

<style lang="scss">
.price-block {
  font-size: 48px;

  .price__save-holder {
    display: flex;
    align-items: center;
    flex-direction: column;

    .price__save-holder__rect {
      background: #fb9d9e;
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
    justify-content: center;

    .price-block__currency {
      font-size: 1em;
      font-weight: 700;
      margin-top: 0.2em;
    }
    .price-block__bigno {
      font-size: 3em;
      font-weight: 700;
      line-height: 0.8em;
    }
    .price-block-right-holder__cents {
      font-size: 0.8em;
      font-weight: 700;
    }
    .price-block-right-holder__unit {
      display: flex;

      .price-block-right-holder-unit__unit {
        font-size: 0.5em;
        display: flex;
        -webkit-box-align: end;
        align-items: flex-end;
        margin: 12px;
      }
    }
  }
}

@media (min-width: $breakpoint-laptop + 1) {
  .price__save-holder__rect {
    font-size: 20px;
  }
  .price-block-wrapper {
    font-size: 2.6em;
  }
}

@media (max-width: $breakpoint-laptop) {
  .price__save-holder__rect {
    font-size: 14px;
  }
}

@media (min-width: $breakpoint-sm-tablet) and (max-width: $breakpoint-laptop) {
  .price-block-wrapper {
    font-size: 2.2em;
  }
}

@media (max-width: $breakpoint-sm-tablet - 1) {
  .price-block-wrapper {
    font-size: 1.3em;
  }
}
</style>
