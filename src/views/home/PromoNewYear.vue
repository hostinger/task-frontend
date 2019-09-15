<template>
    <landing-page-section theme="dark"
                          bg-overlay="dark"
                          class="offer-layout h-slip-under-page-header"
    >
        <div class="offer-layout__inner">
            <div class="offer-layout__columns">
                <flex-columns spacing="lg"
                              single-on="sm"
                >
                    <flex-col class="offer-layout__right">

                        <div class="offer-price">
                            <span class="offer-price__currency">$</span>
                            <span class="offer-price__amount">1</span>
                            <span class="offer-price__right-side">
                                <span class="offer-price__amount-decimals">45</span>
                                <span class="offer-price__periodicity">/mo</span>
                            </span>
                            <div class="offer-price__tag-save">Save 82%</div>
                        </div>

                    </flex-col>
                    <flex-col class="offer-layout__left">

                        <div>
                            <h1 class="h1 offer-title">
                                <span class="offer-title__label">New Year Offer</span>
                                <span class="offer-title__description">
                                    <em class="offer-title__emphasis">82% OFF</em>
                                    Web&nbsp;Hosting
                                </span>
                            </h1>

                            <count-down-timer end-date="10/31/2019 00:00:00 PM"
                                              class="offer-timer"
                            />

                            <base-button tag="router-link"
                                         to="/data-table"
                                         theme="primary"
                                         size="lg"
                            >
                                View Data Table Task
                            </base-button>
                        </div>

                    </flex-col>
                </flex-columns>
            </div>

            <ul class="offer-perks">
                <li class="offer-perks__item">
                    <svg class="offer-perks__icon">
                        <use xlink:href="#check" />
                    </svg>
                    Guaranteed 99.9% Uptime
                </li>
                <li class="offer-perks__item">
                    <svg class="offer-perks__icon">
                        <use xlink:href="#check" />
                    </svg>
                    Superior Speed Performance
                </li>
                <li class="offer-perks__item">
                    <svg class="offer-perks__icon">
                        <use xlink:href="#check" />
                    </svg>
                    24/7 Support Chat
                </li>
                <li class="offer-perks__item">
                    <svg class="offer-perks__icon">
                        <use xlink:href="#check" />
                    </svg>
                    30-Day Money-Back Guarantee
                </li>
            </ul>
        </div>
    </landing-page-section>
</template>

<script>
import LandingPageSection from "@/components/LandingPageSection";
import FlexColumns from "@/components/layout/FlexColumns";
import FlexCol from "@/components/layout/FlexCol";
import BaseButton from "@/components/base/BaseButton";
import CountDownTimer from "@/components/CountDownTimer";

export default {
    name: 'PromoNewYear',
    components: {
        CountDownTimer,
        BaseButton,
        FlexCol,
        FlexColumns,
        LandingPageSection,
    },
}
</script>

<style scoped lang="scss">
.offer-title {
    margin: 0;
    letter-spacing: .019em;

    &__emphasis {
        color: $color-highlight-red;
        font-style: normal;
        letter-spacing: -.019em;
    }

    &__label {
        display: block;
        word-spacing: 3px;
    }

    &__description {
        display: block;
    }

    @include respond-to($media-lg + 1, min) {
        font-size: $font-size-h0;
    }

    @include respond-to($media-xs + 1, min) {
        line-height: 1.5;
    }
}

.offer-timer {
    margin: 13px 0 40px;

    @include respond-to($media-sm, max) {
        margin: 13px auto 40px;
    }
}

.offer-price {
    $_tag-color: $color-highlight-red-light;
    $_tag-arrow-size: 15px;
    $_tag-arrow-size-sm: 10px;

    @include transition(font-size, .1s, ease-in-out);

    display: flex;
    position: relative;
    justify-content: center;
    padding: 28px 6px 0;
    font-size: 432px;
    font-weight: 700;
    line-height: 1;

    &__currency {
        font-size: 34%;
        line-height: 2.39;
    }

    &__amount {
        font-size: 100%;
        line-height: 100%;
    }

    &__amount-decimals {
        font-size: 27.4%;
        line-height: 2.27;
    }

    &__periodicity {
        font-size: 17.1%;
        font-weight: 600;
        text-indent: .25em;
    }

    &__right-side {
        display: flex;
        flex-direction: column;
        line-height: 1;
    }

    &__tag-save {
        position: absolute;
        top: 14px;
        left: 52%;
        padding: .5em 1.5em;
        transform: translateX(-50%);
        background: $_tag-color;
        font-size: 20px;
        font-weight: 600;
        line-height: 1.4;
        text-align: center;
        text-transform: uppercase;
        white-space: nowrap;

        &::after {
            @include triangle('top', $_tag-arrow-size, $_tag-arrow-size, $_tag-color);

            content: '';
            position: absolute;
            top: 100%;
            left: 50%;
            margin-left: -$_tag-arrow-size;
        }
    }

    @include respond-to($media-xl, max) {
        padding-right: .05em;
        font-size: 400px;
    }

    @include respond-to($media-lg, max) {
        font-size: 360px;
    }

    @include respond-to($media-md, max) {
        font-size: 240px;

        &__tag-save {
            top: 0;
            font-size: 16px;

            &::after {
                @include triangle('top', $_tag-arrow-size-sm, $_tag-arrow-size-sm, $_tag-color);

                margin-left: -$_tag-arrow-size-sm;
            }
        }
    }

    @include respond-to($media-sm, max) {
        margin: 30px 0 15px;
        font-size: 220px;
    }

    @include respond-to($media-xs, max) {
        font-size: 180px;
    }
}

.offer-perks {
    $_spacing: 8px;

    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 8px (-$_spacing);
    padding: 0;
    font-size: .97em;
    letter-spacing: .3px;
    line-height: 1.25;
    list-style: none;

    &__item {
        display: inline-flex;
        margin: .15em $_spacing;
    }

    &__icon {
        flex-shrink: 0;
        width: 1em;
        height: 1em;
        margin: 1px 6px 0 0;
        color: $color-success;
    }

    @include respond-to(1210px, max) {
        display: block;
        width: auto;
        text-align: center;
    }

    @include respond-to($media-lg, max) {
        font-size: 16px;
    }

    @include respond-to($media-md, max) {
        font-size: 14px;
    }

    @include respond-to($media-sm, max) {
        margin: 1em auto 1.5em;
    }
}

.offer-layout {
    height: 712px;
    padding: 0;
    background-image: url('../../assets/promo-new-year.jpg');
    background-position: 0 47%;

    &__left {
        display: flex;
        align-items: center;
        padding-left: 1px;
    }

    &__inner {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        padding-top: 54px;

        &::before {
            content: '';
            display: block;
        }
    }

    &__columns {
        padding: 45px 0;
    }

    @include respond-to($media-sm + 1, min) {
        &__left {
            order: 1;
        }

        &__right {
            order: 2;
        }
    }

    @include respond-to($media-lg, max) {
        height: auto;
    }

    @include respond-to($media-md, max) {
        &__columns {
            width: 100%;
            max-width: 720px;
            margin: 0 auto;
        }
    }

    @include respond-to($media-sm, max) {
        background-position: 20% center;

        &__left {
            justify-content: center;
        }

        &__columns {
            padding: 0 0 $page-padding-sides-md;
        }
    }

    @include respond-to($media-xs, max) {
        background-position: 35% center;
    }
}
</style>