<template>
    <v-app>
        <app-navigation></app-navigation>
        <v-content transition="slide-x-transition" class="pa-0">
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';

export default {
    name: 'App',
    components: {
        AppNavigation
    }
};
</script>

<style lang="scss">
</style>
