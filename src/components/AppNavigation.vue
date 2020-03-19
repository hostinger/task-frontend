<template>
  <span>
    <v-navigation-drawer app v-model="drawer" disable-resize-watcher light right>
      <v-list>
        <template v-for="(item, index) in items">
          <v-list-item :key="index">
            <v-list-item-content>{{ item.title }}</v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app id="app-bar" color="transparent" dark flat>
      <v-img :src="appLogo" id="app-bar__logo" />
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="hidden-sm-and-down">
        <template v-for="(item, index) in items">
          <v-btn text id="app-bar__button" :key="index">{{ item.title }}</v-btn>
        </template>
      </div>
    </v-app-bar>
  </span>
</template>

<script>
import logo from '@/assets/logo.png';
export default {
  name: 'AppNavigation',
  data() {
    return {
      appLogo: logo,
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
  // Closes drawer on larger screens
  // vuetify prop disable-resize-watcher (and enable-resize-watcher) doesn't work properly
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

<style lang="scss">
#app-bar {
  padding: 12px 18px;
  margin-right: auto;
  margin-left: auto;
  max-width: 1200px;

  #app-bar__logo {
    max-width: 145px;
  }
}

@media (min-width: $breakpoint-laptop + 1) {
  #app-bar__button {
    padding: 0 16px;
    font-size: 0.85rem;
  }
}

@media (max-width: $breakpoint-laptop) {
  #app-bar__button {
    padding: 0 12px;
    font-size: 0.75rem;
  }
}

@media (min-width: $breakpoint-lg-tablet + 1) {
  #app-bar {
    padding: 12px 60px;
  }
}
</style>
