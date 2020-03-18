<template>
  <v-app>
    <app-navigation></app-navigation>
    <v-content transition="slide-x-transition" class="content-wrapper pa-0">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import '@/sass/variables.scss';
import AppNavigation from '@/components/AppNavigation';
export default {
  name: 'App',
  components: {
    AppNavigation
  }
};
</script>

<style lang="scss">
// .content-wrapper {
//   max-height: 500px;
// }
</style>
