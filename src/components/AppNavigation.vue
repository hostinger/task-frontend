<template>
  <div>
    <v-navigation-drawer app v-model="drawer" disable-resize-watcher light right>
      <v-list>
        <template v-for="(item, index) in items">
          <v-list-item :key="index">
            <v-list-item-content>{{ item.title }}</v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      class="px-8 px-lg-12 py-4 mx-auto"
      color="transparent"
      max-width="1250px"
      dark
      flat
    >
      <v-img :src="logo" :style="{maxWidth: '155px'}" class="logo" />
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="hidden-sm-and-down">
        <template v-for="(item, index) in items">
          <v-btn
            text
            :key="index"
            :style="$vuetify.breakpoint.md ? {fontSize: '12px' } : {fontSize: '13px' }"
          >{{ item.title }}</v-btn>
        </template>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
import logo from '@/assets/logo.png';
export default {
  name: 'AppNavigation',
  data() {
    return {
      logo: logo,
      drawer: false,
      items: [
        { title: 'Web Hosting' },
        { title: 'Cloud Hosting' },
        { title: 'VPS Hosting' },
        { title: 'Domain Checker' },
        { title: 'Website Builder' }
      ],
      windowWidth: window.innerWidth
    };
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth;
      this.isDesktop ? (this.drawer = false) : null;
    });
  },
  computed: {
    isDesktop() {
      return this.windowWidth >= 960;
    }
  }
};
</script>

<style lang="scss"></style>
