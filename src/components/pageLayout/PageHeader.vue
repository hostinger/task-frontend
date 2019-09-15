<template>
    <header class="page-header"
            :class="{[`page-header--${theme}`] : theme !== ''}"
    >
        <page-width>
            <div class="page-header__inner">
                <router-link to="/"
                             class="logo">
                    <svg>
                        <use xlink:href="#logo" />
                    </svg>
                </router-link>

                <nav-primary />
            </div>
        </page-width>
    </header>
</template>

<script>
import '@/assets/logo.svg';
import PageWidth from "@/components/pageLayout/PageWidth";
import NavPrimary from "@/components/pageLayout/NavPrimary";

export default {
    name: 'PageHeader',
    components: {
        NavPrimary,
        PageWidth,
    },
    props: {
        theme: {
            type: String,
            default: '',
            validator: value => ['', 'transparent'].includes(value),
        },
    },
}
</script>

<style scoped lang="scss">
.logo {
    @include transition('color');

    margin-top: -1px;
    padding: 5px 0;
    color: #fff;
    text-decoration: none;

    svg {
        display: block;
        width: $logo-width / 2;
        height: $logo-height / 2;
    }
}

.page-header {
    position: relative;
    z-index: z-index('page-header');
    background-color: $color-bg-dark;

    &__inner {
        display: flex;
        position: relative;
        align-items: center;
        justify-content: space-between;
        height: $page-header-height;
    }

    &--transparent {
        background-color: transparent;
    }
}
</style>