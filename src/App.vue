<template>
  <v-app>
    <app-navigation></app-navigation>
    <v-content class="pa-0">
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
@import '@/sass/variables.scss';
</style>
