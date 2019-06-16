<template>
  <div id="offer-content-price" class="offer-container col-md-6 order-md-2 order-1 col-sm-12">
    <div>
      <div class="price-container container">
        <div class="d-flex flex-row">
          <div class="flex-grow-1 d-none d-md-block"></div>
          <div id="price-data" class="d-flex flex-row justify-content-end">
            <div class="price-info">
              <div class="price-tooltip">Save 82%</div>
            </div>
            <div class="pcol price-currency">$</div>
            <div class="pcol price-unit">1</div>
            <div class="pcol price-left">
              <div class="price-cents">45</div>
              <div class="price-period">/mo</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#offer-content-price {
  .price-container {
    font-size: 48px;
    @media (min-width: 768px) and (max-width: 991px) {
      font-size:32px;
    }
    @media (max-width: 576px) {
      font-size:32px;
    }

    font-weight: 700;
    line-height: 0.95;
    margin-top: 26px;
    &>.d-flex {
      justify-content: end;
      @media (max-width: 768px) {
        justify-content: center;
      }
    }
    #price-data {
      position: relative;
      .price-info {
        position: absolute;
        width: 100%;
        top: -35px;
        font-size:initial;
        .price-tooltip {
          font-size: 18px;
          font-weight: 700;
          text-transform: uppercase;
          background-color: $pink-light;

          padding: 12px 30px;
          margin: auto;
          display: inline-block;
          position: relative;
          &::after {
            content: "";
            position: absolute;
            left: 38%;
            top: 98%;
            width: 0;
            height: 0;
            border-left: 16px solid transparent;
            border-right: 16px solid transparent;
            border-top: 16px solid $pink-light;
            clear: both;
          }
        }
      }

      .price-currency {
        font-size: 2.3em;
        /*margin-top: 0.8em;*/
        line-height: 2.7em;
        margin-right: -0.3em;
      }
      .price-unit {
        font-size: 8.3em;
      }
      .price-left {
        margin-left: -0.5em;
        padding-right: 10px;
        .price-cents {
          font-size: 2.2em;
          margin-top: 0.6em;
        }
        .price-period {
          font-size: 1.3em;
          margin-top: 1.15em;
          margin-left: 0.5em;
        }
      }
    }
  }
}
</style>
