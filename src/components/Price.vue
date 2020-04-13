<template>
  <v-col cols="12" sm="6" class="pt-0 pb-6 pb-sm-12 order-sm-2 order-1 price-block">
    <v-row justify="center" justify-sm="end" class="ma-0">
      <div>
        <div class="price-block__save-holder">
          <div class="price-block__save-holder__rect">Save 82%</div>
          <div class="price-block__save-holder__arrow"></div>
        </div>
        <v-row :style="$vuetify.breakpoint.mdAndUp ? {fontSize: '2.4em' } : {fontSize: '1.8em' }">
          <div class="price-block__currency">$</div>
          <div class="price-block__bigno">1</div>
          <div class="price-block__right-holder">
            <div class="price-block__right-holder__cents">45</div>
            <div class="price-block__right-holder__unit">/mo</div>
          </div>
        </v-row>
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

  &__save-holder {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;

    &__rect {
      background: #fb9d9e;
      padding: 10px 30px;
      font-size: 16px;
      font-weight: 600;
      text-transform: uppercase;
    }

    &__arrow {
      background: #fb9d9e;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
      width: 20px;
      height: 20px;
      margin-top: -10px;
    }
  }

  &__currency {
    font-size: 1em;
    font-weight: 700;
    margin-top: 0.2em;
  }

  &__bigno {
    font-size: 3em;
    font-weight: 700;
    line-height: 0.8em;
  }

  &__right-holder__cents {
    font-size: 0.8em;
    font-weight: 700;
  }

  &__right-holder__unit {
    font-size: 0.5em;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    margin: 12px;
  }
}
</style>
