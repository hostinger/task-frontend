<template>
    <div :class="{ 'is-nav-open' : isOpen }">
        <button v-click-outside="closeMobileNavigation"
                class="nav-toggle"
                @click.stop="toggleMobileNavigation"
        >
            <i class="nav-toggle__icon"
               title="Toggle Navigation"
            >
                <span class="nav-toggle__icon-bar" />
                <span class="nav-toggle__icon-bar" />
                <span class="nav-toggle__icon-bar" />
            </i>
        </button>

        <nav class="nav-primary">
            <a class="nav-primary__item" href="#"><span>Web Hosting</span></a>
            <a class="nav-primary__item" href="#"><span>Cloud Hosting <em class="nav-primary__item-tag">On sale</em></span></a>
            <a class="nav-primary__item" href="#"><span>VPS Hosting</span></a>
            <a class="nav-primary__item" href="#"><span>Domain Checker</span></a>
            <a class="nav-primary__item" href="#"><span>Website Builder</span></a>
        </nav>
    </div>
</template>

<script>
import ClickOutside from 'vue-click-outside';

export default {
    name: 'NavPrimary',
    data() {
        return {
            isOpen: false,
        }
    },
    directives: {
        ClickOutside,
    },
    methods: {
        closeMobileNavigation() {
            this.isOpen = false;
        },
        toggleMobileNavigation() {
            this.isOpen = !this.isOpen;
        },
    },
};
</script>

<style scoped lang="scss">
$mobile-nav-width: 220px;
$mobile-nav-bg-color: rgba(22, 28, 44, .5);
$mobile-nav-padding: 10px;
$mobile-nav-border-radius: 3px;
$mobile-nav-toggle-height: 21px;
$mobile-nav-toggle-padding: 12px;

.nav-toggle {
    $_this: &;

    display: none;

    @include respond-to($media-mobile-nav - 1, max) {
        display: block;
        position: relative;
        z-index: 1;
        margin-right: -5px;
        margin-left: auto;
        padding: $mobile-nav-toggle-padding;
        border: 0;
        border-radius: $mobile-nav-border-radius $mobile-nav-border-radius 0 0;
        background: none;

        &__icon {
            display: block;
            position: relative;
            width: 25px;
            height: $mobile-nav-toggle-height;
            margin-left: auto;
        }

        &__icon-bar {
            position: absolute;
            left: 0;
            width: 100%;
            height: 3px;
            transform-origin: center;
            transition-duration: .1s;
            transition-timing-function: ease-in-out;
            border-radius: $mobile-nav-border-radius;
            background-color: #fff;

            &:nth-child(1) {
                top: 0;
                transition-property: top, margin-top, transform;
            }

            &:nth-child(2) {
                top: 50%;
                margin-top: -2px;
                transition-property: opacity;
                opacity: 1;
            }

            &:nth-child(3) {
                top: 100%;
                margin-top: -3px;
                transition-property: top, margin-top, transform;
            }
        }

        .is-nav-open & {
            #{$_this}__icon-bar {
                &:nth-child(1) {
                    top: 50%;
                    margin-top: -2px;
                    transform: rotate(-45deg);
                }

                &:nth-child(2) {
                    opacity: 0;
                }

                &:nth-child(3) {
                    top: 50%;
                    margin-top: -2px;
                    transform: rotate(45deg);
                }
            }

            &:focus {
                outline: none;

                #{$_this}__icon-bar {
                    background-color: $color-button-secondary;
                }
            }
        }
    }
}

.nav-primary {
    $_spacing: 15px;

    margin: 0 (-$_spacing);

    &__item-tag {
        position: absolute;
        color: $color-highlight-yellow;
        font-size: $font-size-xs;
        font-style: normal;
        letter-spacing: .6px;
        text-transform: uppercase;
    }

    &__item {
        position: relative;
        color: #fff;
        font-size: 14px;
        letter-spacing: .8px;
        line-height: 1.4;
        text-decoration: none;
    }

    @include respond-to($media-mobile-nav, min) {
        &__item-tag {
            top: -4px;
            left: 0;
        }

        &__item {
            @include hover-decoration(3px, #fff);

            display: inline-block;
            margin: 0 $_spacing;
            padding: 8px 0;
            font-weight: 600;
            text-transform: uppercase;
        }
    }

    @include respond-to($media-mobile-nav - 1, max) {
        @include transition("max-height, opacity", .3s, ease-in-out);

        position: absolute;
        top: 15px;
        right: 10px;
        min-width: $mobile-nav-width;
        max-height: 0;
        padding: 0 $mobile-nav-padding; // Vertical padding on parent has to be 0 for smooth transition
        overflow: hidden;
        border-radius: 0 0 $mobile-nav-border-radius $mobile-nav-border-radius;
        opacity: 0;
        background: $mobile-nav-bg-color;

        &__item-tag {
            bottom: 100%;
            left: 0;
            margin-bottom: -2px;
        }

        &__item {
            @include hover-decoration(100%, $color-button-secondary-hover);

            display: block;
            margin: 0 0 1px;
            padding: 15px 20px;
            background-color: $color-button-secondary;
            font-weight: 600;

            > span {
                position: relative;
                z-index: 1;
            }

            &:first-child {
                margin-top: $mobile-nav-toggle-height + $mobile-nav-toggle-padding * 2;
            }

            &:last-child {
                margin-bottom: $mobile-nav-padding;
            }
        }

        .is-nav-open & {
            max-height: 400px;
            opacity: 1;
        }
    }
}
</style>