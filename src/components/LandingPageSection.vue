<template>
    <section class="section"
             :class="{[`section--theme-${theme}`] : theme !== ''}"
    >
        <div class="section__bg-overlay"
             :class="{[`section__bg-overlay--${bgOverlay}`] : bgOverlay !== ''}"
        />

        <page-width class="section__inner">

            <slot />

        </page-width>
    </section>
</template>

<script>
import PageWidth from "@/components/pageLayout/PageWidth";

export default {
    name: 'LandingPageSection',
    components: {
        PageWidth,
    },
    props: {
        bgOverlay: {
            type: String,
            default: '',
            validator: value => ['','light','dark'].includes(value),
        },
        theme: {
            type: String,
            default: 'white',
            validator: value => ['','white','light','dark'].includes(value),
        }
    },
}
</script>

<style scoped lang="scss">
.section {
    position: relative;
    padding: 30px 0 50px;
    background: no-repeat scroll center top;
    background-size: cover;
    font-size: 18px;

    &__inner {
        position: relative;
        height: 100%;
    }

    &__bg-overlay {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        &--light {
            opacity: .2;
            background-color: #fff;
        }

        &--dark {
            opacity: .3;
            background-color: #000;
        }
    }

    &--theme-white { // default
        background-color: #fff;
        color: $color-text-body;
    }

    &--theme-light {
        background-color: $color-bg-light;
        color: $color-text-body;
    }

    &--theme-dark {
        background-color: $color-bg-dark;
        color: $color-text-body-on-bg;
    }

    @include respond-to($media-md, max) {
        padding: 25px 0 40px;
    }

    @include respond-to($media-sm, max) {
        padding: 10px 0 20px;
    }
}
</style>