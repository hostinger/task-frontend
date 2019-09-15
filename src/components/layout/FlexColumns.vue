<template>
    <div class="flex-columns"
         :class="{
             'flex-columns--equal-width' : equalWidth,
             [`flex-columns--spacing-${spacing}`] : spacing !== '',
             [`flex-columns--single-on-${singleOn}`] : singleOn !== '',
         }"
    >
        <slot />
    </div>
</template>

<script>
export default {
    name: 'FlexColumns',
    props: {
        equalWidth: {
            type: Boolean,
            default: false,
        },
        spacing: {
            type: String,
            default: 'md',
            validator: value => ['', 'md', 'lg'].includes(value),
        },
        singleOn: {
            type: String,
            default: 'xs',
            validator: value => ['', 'xs', 'sm', 'md', 'lg'].includes(value),
        },
    }
}
</script>

<style scoped lang="scss">
$column-class: '.flex-col'; // Update this if class name changes in FlexCol.vue

@mixin make-spacing($spacing) {
    margin: 0 (-$spacing);

    ::v-deep #{$column-class} {
        margin: 0 $spacing;
    }
}

@mixin switch-to-single-column() {
    @include make-spacing(0);

    display: block;
    text-align: center;
}

.flex-columns {
    $_spacing-xs: 15px;
    $_spacing-sm: 20px;
    $_spacing-md: 30px;
    $_spacing-lg: 50px;

    display: flex;
    justify-content: space-between;

    &--equal-width {
        ::v-deep #{$column-class} {
            flex: 1;
        }
    }

    &--spacing-md {
        @include make-spacing($_spacing-md);
    }

    &--spacing-lg {
        @include make-spacing($_spacing-lg);
    }

    @include respond-to($media-md, max) {
        &--spacing-md {
            @include make-spacing($_spacing-sm);
        }

        &--spacing-lg {
            @include make-spacing($_spacing-sm);
        }

        &--single-on-md {
            @include switch-to-single-column;
        }
    }

    @include respond-to($media-sm, max) {
        &--spacing-lg {
            @include make-spacing($_spacing-sm);
        }

        &--single-on-sm {
            @include switch-to-single-column;
        }
    }

    @include respond-to($media-xs, max) {
        &--single-on-xs {
            @include switch-to-single-column;
        }
    }
}
</style>