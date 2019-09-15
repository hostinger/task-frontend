<template>
    <div class="layout">

        <page-header :theme="pageHeaderTheme" />

        <slot />

    </div>
</template>

<script>
import PageHeader from "@/components/pageLayout/PageHeader";

export default {
    name: 'LayoutPrimary',
    components: {
        PageHeader,
    },
    props: {
        pageHeaderTheme: {
            type: String,
            default: '',
        },
    }
}
</script>
