<template>
    <component :is="tag"
               v-bind="$attrs"
               :type="(tag === 'button') ? ($attrs.type || 'button') : undefined"
               class="button"
               :class="{
                   [`button--${theme}`] : theme !== '',
                   [`button--${size}`] : size !== '',
               }"
               v-on="$listeners"
    >
        <span class="button__inner">
            <slot />
        </span>
    </component>
</template>

<script>
export default {
    name: 'BaseButton',
    props: {
        tag: {
            type: String,
            default: 'button',
            validator: value => ['button', 'a', 'router-link'].includes(value),
        },
        theme: {
            type: String,
            default: 'primary',
            validator: value => ['', 'primary', 'secondary'].includes(value),
        },
        size: {
            type: String,
            default: 'md',
            validator: value => ['', 'sm', 'md', 'lg'].includes(value),
        },
    },
};
</script>

<style scoped lang="scss">
.button {
    $_this: &;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: 0;
    border-radius: 5px;
    background-color: transparent;
    font-family: $font-family-base;
    text-decoration: none;
    text-transform: uppercase;

    &__inner {
        position: relative;
        z-index: 1;
    }

    &--primary {
        $_color: $color-button-primary;

        border-color: $_color;
        background-color: $_color;
        color: #fff;

        &:disabled {
            @include disabled-decoration($_color);
        }

        &:not(:disabled) {
            @include hover-decoration(100%, $color-button-primary-hover);

            &:focus {
                @include focus-decoration($color-button-primary-hover);
            }
        }
    }

    &--secondary {
        $_color: $color-button-secondary;

        border-color: $_color;
        background-color: $_color;
        color: #fff;

        &:disabled {
            @include disabled-decoration($_color);
        }

        &:not(:disabled) {
            @include hover-decoration(100%, $color-button-secondary-hover);

            &:focus {
                @include focus-decoration($color-button-secondary-hover);
            }
        }
    }

    &--sm {
        padding: .5em 1em;
        font-size: 16px;
        font-weight: 600;
        line-height: 1.4em;
    }

    &--md {
        padding: .5em 1.5em;
        font-size: 18px;
        font-weight: 600;
        line-height: 1.4em;
    }

    &--lg {
        padding: .9em 2.74em;
        font-size: 22px;
        font-weight: 600;
        line-height: 1.4em;
    }

    @include respond-to($media-md, max) {
        &--lg {
            font-size: 17px;
        }
    }
}
</style>
